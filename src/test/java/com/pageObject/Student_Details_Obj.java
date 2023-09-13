package com.pageObject;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.JavascriptExecutor;
import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Log;


public class Student_Details_Obj extends BaseClass{
	
	@FindBy (xpath="//*[@id='post-2646']//select") private WebElement StudentNmDropDwn;
	@FindBy (xpath="//*[@id='post-2545']//select") private WebElement BatchIdDropDwn;	
	@FindBy (xpath="//button//span[text()=' close']") private WebElement CloseStudentDetails;
	@FindBy (xpath="//div[@class='Attendance']/p[9]") private WebElement stud_Button_Nav;
	@FindBy (xpath="//div[@class='StudentDetails") private WebElement StudDetailHeading;
	@FindBy (xpath="//*[@class='dropdownxpath']") private WebElement Studfrom ;
	@FindBy(xpath="//*[@id='searchDropDown']//p") private  WebElement searchStdName;
	@FindBy(xpath="//*[@id='searchDropDown']//p[2]") private  WebElement searchBatchId;
	@FindBy (xpath="//*[@id='post-2646']//select//p[5]") private WebElement StudentNm;
	@FindBy (xpath="//*[@id='post-2545']//select") private WebElement BatchId;	
	@FindBy (xpath="//*[@text()='select student name']") private WebElement selectTxtStudentName ;
	@FindBy (xpath="//*[@text()='select batch id']") private WebElement selectTxtBatchId ;
	@FindBy(xpath="//div[@class='alert alert-primary']") WebElement Messagebox;
	
	Controller cn = new Controller();
	//Constructor
	public Student_Details_Obj() {

		PageFactory.initElements(driver, this);
	}
	
	public void StudentBtn_onNav() {
		cn.click(driver, stud_Button_Nav);
	}
	
	public String VerifyTitle() {
		String title = cn.getTitle(driver);
		return title;
	}
	public String alignmentStudentDetails(){
		
		String alignmentposition = StudDetailHeading.getAttribute("align");
		return alignmentposition ;
	}
	public int DropDownNumbers() {
		Select select = new Select(Studfrom);
		List<WebElement> dropdownvalues = select.getOptions();
		int count = dropdownvalues.size() ;
		return count;
		
	}
	public boolean searchboxStudName() {
		return cn.isDisplayed(driver, searchStdName);
	}
	
	public boolean searchboxBatchID() {
		return cn.isDisplayed(driver, searchBatchId);
	}
	
	public String SelectStudentText() {
		Select x= new Select(StudentNmDropDwn);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	
	public String SelectBatchIdText() {
		Select x= new Select(BatchIdDropDwn);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	
	public boolean dropdownvalues() {
		
		String expectedOptions[] = { "Select batch Id", "3456", "5678", "7890" };
		Select s = new Select(BatchIdDropDwn);
		List<WebElement> options= s.getOptions();
		boolean flag  = false;
		for (int i=1; i<options.size(); i++) {
			System.out.println(options.get(i).getText()+" == "+ expectedOptions[i]);
			if(options.get(i).getText().equals(expectedOptions[i])) {
				flag = true;
			}
		}
		return flag;	
		}
	
	public String StudentTextColor() {
	
		String StudentText = StudentNmDropDwn.getCssValue("color");
		return StudentText;
		
	}
	
	public String BatchIdTextColor() {
		
		String StudentText = BatchIdDropDwn.getCssValue("color");
		return StudentText;
		
	}
	
	public String CheckTextfirstDropdown() {
		Select x= new Select(StudentNmDropDwn);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	
	public String CheckTextsecondDropdown() {
		Select x= new Select(BatchIdDropDwn);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	
	public void SnameDropDownScroll() {
		
        // Create instance of Javascript executor
        JavascriptExecutor je = (JavascriptExecutor) driver;
        je.executeScript("arguments[0].scrollIntoView(true);",StudentNm);
	
	}
	
	public void BatchIdDropDownScroll() {
		
      // Create instance of Javascript executor
      JavascriptExecutor je = (JavascriptExecutor) driver;
      je.executeScript("arguments[0].scrollIntoView(true);",BatchId);

	}
	
	public void Select_Student_Name() {
		StudentNmDropDwn.click();
		Select s = new Select(StudentNmDropDwn);
	      // select an option by value method
	      s.selectByValue("Robert");
	      
	}
	
	public boolean NameTextVisibility() {
		StudentNmDropDwn.click();
		return selectTxtStudentName.isDisplayed();
	}
	
	public boolean IDTextVisibility() {
		BatchIdDropDwn.click();
		return selectTxtBatchId.isDisplayed();
	}
	
	public void enterStudentNameX() {
		StudentNmDropDwn.click();
		searchStdName.sendKeys("X");
		
	}
	public void listNameStartsX() {
		Select s = new Select(StudentNmDropDwn);
		List<WebElement> options= s.getOptions();
		for (int i=0; i<options.size(); i++) {
			System.out.println((options.get(i).getText().startsWith("X"))+" == "+ (options.get(i).getText()));
			Log.logInfo("Student Name starts with X in the list -"+options.get(i).getText());
		}
	}
	
	public void enterBatchIdX() {
		BatchIdDropDwn.click();
		searchBatchId.sendKeys("X");
		
	}
	public void listBatchIdStartsX() {
		Select s = new Select(BatchIdDropDwn);
		List<WebElement> options= s.getOptions();
		for (int i=0; i<options.size(); i++) {
			System.out.println((options.get(i).getText().startsWith("X"))+" == "+ (options.get(i).getText()));
			Log.logInfo("Batch Id starts with X in the list -"+options.get(i).getText());
		}
	}
	
	
	public void StudentNmDropDwn() {

		StudentNmDropDwn.click();
		cn.type(searchStdName, "Robert");
	
	}

    public void BatchIdDropDwn() {

    	BatchIdDropDwn.click();
		cn.type(searchBatchId, "8978");
	}
	
    public boolean DisplayDetails() {
    	
    	return cn.isDisplayed(driver, Messagebox);
    }
    
    public void selectNameAndBatch() {
    	StudentNmDropDwn.click();
		cn.type(searchStdName, "Robert");
		BatchIdDropDwn.click();
		cn.type(searchBatchId, "8978");
    	
    }
	public void CloseStudentDetails() {

		cn.click(driver, CloseStudentDetails);
	}
	public  void verifyBrokenLink() {
		//Boolean flag = false;
		String url = cn.getCurrentURL(driver);
		try {		
			
			URL link = new URL(url);
			HttpURLConnection httpURLConnection = (HttpURLConnection) link.openConnection();
			httpURLConnection.setConnectTimeout(3000); // Set connection timeout to 3 seconds
			httpURLConnection.connect();
			if (httpURLConnection.getResponseCode()> 400) {
			System.out.println(url + " - " + httpURLConnection.getResponseMessage()+ " - " + "is a broken link");
			//flag = true;
			} else {
			System.out.println(url + " - " + httpURLConnection.getResponseMessage() );
			//flag = false;
		}
		} catch (Exception e) {
			System.out.println(url + " - " + "is a broken link");
			
		}
		//return flag;	
	}
	


}
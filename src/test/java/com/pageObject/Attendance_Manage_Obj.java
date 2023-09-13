package com.pageObject;


import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Readconfig;

public class Attendance_Manage_Obj extends BaseClass {
	
	@FindBy (id="id_searchtxt") private WebElement attendnc_searchbox;
	@FindBy (xpath="//div[@class='add_newAttendnc']") private WebElement attendnc_addNew;
	@FindBy (xpath="//div[@class='edit_attendance']") private WebElement attendnc_SingleEdit;
	@FindBy (xpath="//div[@class='delete_iconS']") private WebElement attendnc_SingleDelete;
	@FindBy (xpath="//div[@class='delete_iconM']") private WebElement attendnc_MultiplDelete;
	@FindBy (xpath="//*[@class='checkbox']/p[1]") private List<WebElement> attendnc_multipl_checkbox;
	@FindBy (xpath="//*[@class='checkbox-single']/") private WebElement attendnc_single_checkbx;
	@FindBy (xpath="//table/tbody/tr[2]/td[2]/table/tbody/tr/td[2]") private WebElement attendnc_datatable_data;
	@FindBy (xpath="//*[@class='ManageAttendanceHeader") private WebElement manageAttHeader;
	@FindBy (xpath="//*[@class='Nav_Attendance") private WebElement AttendanceButon_header;
	@FindBy (xpath="//div[@class='Attendance']/p[9]") private WebElement attendnc_Button_Nav;
	@FindBy (xpath="//a[text()='Student Id']") private WebElement att_studID;
	@FindBy (xpath="//a[text()='class Id']") private WebElement att_classID;
	@FindBy (xpath="//a[text()='Preasent']") private WebElement att_PreasentValue;
	@FindBy (xpath="//*[@id='DataTable']/div/table/tbody/tr/td/a") private List<WebElement> att_DatatTable_data;
	@FindBy (xpath="//a[text()='Footer Text']") private WebElement att_FooterText;
	@FindBy (xpath="//a[text()='Pagination']") private WebElement pagination;
	@FindBy (xpath="//*[@class='sortClass']") private WebElement sortClass_btn;
	@FindBy (xpath="//*[@class='sortstud']") private WebElement sortStud_btn;
	@FindBy (xpath="//*[@class='sortpresent']") private WebElement sortAttendance_btn;
	@FindBy (xpath="//table[@id='users_table']/tbody/tr") private WebElement ClassColum;
	
	static Readconfig rc = new Readconfig();
	Controller cn = new Controller();

	
	public Attendance_Manage_Obj() {
		PageFactory.initElements(driver,this);
	}
	public String getTitle() {
		String title = cn.getTitle(driver);
		return title;
	}
	public void searchbox_text(String text) {
		cn.type(attendnc_searchbox,text);	
	}
	public void addNewAttendance() {
		cn.click(driver, attendnc_addNew);
	}
	public void editIconAttendance() {
		cn.click(driver, attendnc_SingleEdit);
	}
	public void deleteIconAttendance() {
		cn.click(driver, attendnc_SingleDelete);
	}
	public void deleteMultiplAttendnc_Btn() {
		cn.click(driver, attendnc_MultiplDelete);
	}
	public String GetTextManageAttendanceHeader() {
		String headerText = cn.getText(manageAttHeader);
		return headerText;
	}
	public void AttendncBtn_onNav() {
		cn.click(driver, attendnc_Button_Nav);
	}
	public void SelectMultiCheckBoxAtt() {

		for ( WebElement checkBox : attendnc_multipl_checkbox ) {
			if ( !cn.isSelected(driver, checkBox) ) {
				cn.click(driver, checkBox);
			}
		}
	}
	public void SelectSingleCheckBoxAtt() {
		cn.click(driver, attendnc_single_checkbx);
	}
	
	public Boolean VerifyTickMark() {
		return cn.isSelected(driver, attendnc_single_checkbx);
	}

	public void DataTableDataValidation() {	
		//attendnc_datatable_data
	}
	public String alignmentManageHeader() {
		/*Boolean flag;
		Point point = manageAttHeader.getLocation();
		int xcord = point.getX();
		int eleWidth = manageAttHeader.getSize().getWidth();
		int winWidth = driver.manage().window().getSize().getWidth();
		if ((xcord + eleWidth) <= (winWidth/2)){
			System.out.println("Manage attendance header is in left side of the page");
			flag = true;
		}else {
			System.out.println("Manage attendance header is not in left side of the page");
			flag = false;
		}*/
		
		String alignmentposition = manageAttHeader.getAttribute("align");
		return alignmentposition;
		
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
	
	public Boolean visibity_sort() {
		Boolean flag =false;
		if(cn.isDisplayed(driver, sortClass_btn)&&
			cn.isDisplayed(driver, sortStud_btn)&&
			cn.isDisplayed(driver, sortAttendance_btn)) 
		{
			flag = true;
		}
		return flag;
	}
	public boolean M_DeleteiconEnabled() {
		return cn.isEnabled(driver, attendnc_MultiplDelete);
	}
	public boolean searchBarVisibility() {
		return cn.isDisplayed(driver, attendnc_searchbox);
	}
	public boolean CheckaddNewSymbolDisplayed() {
		return cn.isDisplayed(driver, attendnc_addNew);
	}
		    
	public boolean commonCheckboxSymbolDisplayed() {
		return cn.isDisplayed(driver, attendnc_addNew);
	}
	public boolean singleCheckboxDisplayed() {
		return cn.isDisplayed(driver, attendnc_single_checkbx);
	}
	public boolean CheckStudentIDDisplayed() {
		return cn.isDisplayed(driver, att_studID);
	}
	public boolean CheckClassIDDisplayed() {
		return cn.isDisplayed(driver, att_classID);
	}
	public boolean CheckPreasentDisplayed() {
		return cn.isDisplayed(driver, att_PreasentValue);
	}
	
	public boolean CheckEditTextDisplayed() {
		return cn.isDisplayed(driver, attendnc_addNew);
	}
	public boolean CheckDeleteTextDisplayed() {
		return cn.isDisplayed(driver, attendnc_addNew);
	}
	public boolean SingleEditIconDisplayed() {
		return cn.isDisplayed(driver, attendnc_SingleEdit);
	}
	public boolean SingleDeleteIconDisplayed() {
		return cn.isDisplayed(driver, attendnc_SingleDelete);
	}
	
	public boolean checkdataTableHasData() {
		boolean flag = false ;
		List<WebElement> data = att_DatatTable_data;
        for(int i=0; i<data.size(); i++) {
            WebElement current = data.get(i);
            if(cn.getText(current)!= null) {
                System.out.println("Data Table has data");
                flag = true;
            }  else {
                System.out.println("Data Table has no data");
                flag = false;
            }
        }
        return flag;
	}
	/*public List<String> getDataTableHeaderList(){
		
	
	}*/
	public String footerTextValidation() {
		String footertext = cn.getText(att_FooterText);
		return footertext;
	}
	public boolean validatePagination() {
		return cn.isDisplayed(driver, pagination);
	}
	public void spellCheckFunction() {
		Assert.assertEquals(manageAttHeader.getText(),"Manage Attendance");
		Assert.assertEquals(att_classID.getText(),"Class ID");
		Assert.assertEquals(att_studID.getText(),"Student ID");
		Assert.assertEquals(att_PreasentValue.getText(),"Present");
		
	}
	public int ClassesTotalCount() {
		
		List<WebElement> TotalColsList = ClassColum.findElements(By.tagName("td"));
		int TotalClasses = TotalColsList.size();
		return TotalClasses;
	}
	
	
	
}

package com.pageObject;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Log;
import java.util.ArrayList;

public class Attendance_Details_Obj extends BaseClass {
	
	@FindBy(xpath="//*[@class='dropdown-menu pgmName']/a[1]")private WebElement att_pgmName;
	@FindBy(xpath="//*[@class='dropdown-menu className']") private WebElement att_className;
	@FindBy(xpath="//div[@class='dropdown-menu studName']") private WebElement att_studName;
	@FindBy(xpath="//div[@class='dropdown-menu attendance']")private WebElement att_attendance;
	@FindBy(xpath="//span[@aria-controls='datetimepicker_dateview']")private WebElement dateBox;
	@FindBy(xpath="//*[@id='cancel']") private  WebElement att_cancel;
	@FindBy(xpath="//*[@id='save']") private  WebElement att_save;
	@FindBy(xpath="//*[@id='closeButton']") private  WebElement att_closeBtn;
	@FindBy(xpath="//*[@id='outputmessage']") private WebElement message;
	@FindBy(xpath="//input[@class='rightbutton']") private WebElement rightarrow_month;
	@FindBy(xpath="//input[@class='leftbutton']") private WebElement leftarrow_month;
	@FindBy(xpath="//div/select[@class='ui− datepicker−month']") private WebElement datepicker_month;
	@FindBy(xpath="//td[(@class,'ui−datepicker− month-day'))]/a[text()='day']") private WebElement datepicker_day;
	@FindBy(xpath="//*[@id='example_next']") private  WebElement nextBtn_dataTable;
	@FindBy(xpath="//input[@class='page_left']") private WebElement page_left;
	@FindBy(xpath="//input[@class='page_right']") private WebElement page_right;
	@FindBy(xpath = "//td[@data-handler='selectDay']") private List<WebElement> datepickeryears;
	@FindBy(xpath="//input[id='pageControls']") private WebElement pageControl;
	@FindBy(xpath="//*[@id=”leftcontainer”]/table/thead/tr/th [1]")private List<WebElement> PgmLstPgmModule;
	@FindBy(xpath="//*[@id=”pgmmdule”]/table/thead/tr/th [2]")private List<WebElement> PgmNameLst;
	@FindBy(xpath="//*[@id=”leftcontainer”]/table/thead/tr/th [1]")private List<WebElement> ClassLstPgmModule;
	@FindBy(xpath="//*[@id=”classmdul”]/table/thead/tr/th [2]")private List<WebElement> ClassNameLst;
	

	
	public Attendance_Details_Obj() {
		PageFactory.initElements(driver,this);
	}
	 Controller cn = new Controller();
	
	public String getTitle_AttDetails() {
		String title = cn.getTitle(driver);
		return title;
	}
	public void setpgmNameValue(String PgmName) {
		cn.selectByValue(att_pgmName, PgmName);
	}
	public void setClassNameValue(String ClassName) {
		cn.selectByValue(att_className, ClassName);
	}
	public void setStudNameValue(String StudName) {
		cn.selectByValue(att_studName, StudName);
	}
	public void setAttendanceValue(String attendance) {
		cn.selectByValue(att_attendance, attendance);
	}
	public void setAttndncDate(String AttendanceDate) {
		
		cn.type(dateBox, AttendanceDate);
	}
	public void clickAttndncDate() {
		cn.click(driver, dateBox);
	}
	public String getTextPgmName() {
		return att_pgmName.getText();	
	}
	public String getTextClassName() {
		return att_className.getText();	
	}
	public String getTextStudName() {
		return att_studName.getText();	
	}
	public String getTextAttendnc() {
		return att_attendance.getText();	
	}
	public String getTextAttendncDate() {
		return dateBox.getText();	
	}
	public boolean validateFieldsOnForm() {
		cn.isDisplayed(driver, att_pgmName);
		cn.isDisplayed(driver, att_className);
		cn.isDisplayed(driver, att_studName);
		cn.isDisplayed(driver, att_attendance);
		return true;
	}
	public boolean validateClosebutton() {
		return cn.isDisplayed(driver, att_closeBtn);
	}
	public String closeBtn_alignment() {
		return att_closeBtn.getAttribute("align");
	}
	public String CheckText_firstDropdown() {
		Select x= new Select(att_pgmName);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = cn.getText(first);
		return selectedoption;
	}
	public String CheckText_secondDropdown() {
		Select x= new Select(att_className);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		att_className.getText();
		String selectedoption = cn.getText(first);
		return selectedoption;
	}
	public String CheckText_thirdDropdown() {
		Select x= new Select(att_studName);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = cn.getText(first);
		return selectedoption;
	}
	public String CheckText_fourthDropdown() {
		Select x= new Select(att_attendance);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = cn.getText(first);
		return selectedoption;
	}
	public String PgmTextcolor() {
		String color = att_pgmName.getCssValue("color");
		return color;
	}
	public String ClassTextcolor() {
		String color = att_pgmName.getCssValue("color");
		return color;
	}
	public String StudTextcolor() {
		String color = att_pgmName.getCssValue("color");
		return color;
	}
	public String AssignmentTextcolor() {
		String color = att_pgmName.getCssValue("color");
		return color;
	}
	public boolean validateSavebutton() {
		return cn.isDisplayed(driver, att_save);
	}
	public boolean validateCancelbutton() {
		return cn.isDisplayed(driver, att_cancel);
	}
	public void clickPgmName() {
		cn.click(driver, att_pgmName);
	}
	public void clickclassName() {
		cn.click(driver, att_className);
	}
	public void clickstudName() {
		cn.click(driver, att_studName);
	}
	public void clickAttendance() {
		cn.click(driver, att_attendance);
	}
	public List<WebElement> ValidateAttendanceList() {
		Select dropdown = new Select(att_attendance);
		List<WebElement> droplist = dropdown.getOptions();
		return droplist;
	}
	public Attendance_Manage_Obj fillAttendncAddForm(String programName,String ClassName,String StudName,String attendance,String AttendDate,Attendance_Manage_Obj att_manager) {
		cn.selectByVisibleText(programName,att_pgmName);
		cn.selectByVisibleText(ClassName,att_className);
		cn.selectByVisibleText(StudName,att_studName);
		cn.selectByVisibleText(attendance,att_attendance);
		cn.type(dateBox, AttendDate);
		cn.click(driver, att_save);
		att_manager =  new Attendance_Manage_Obj();
		return att_manager;
	}
	public String displayMessage() {
		return message.getText();
	}
	public void ValidationAttendncfutureDate(String futuredate) {
		
		LocalDate F_date = LocalDate.parse(futuredate);
		LocalDate now = LocalDate.now();
		if(F_date.isAfter(now)) {
			Log.logInfo("Attendance date given is  future Date");
		}
	}
	public  boolean isValidDateFormat(String datevalue, String format) {
        Date date = null;
        try {
            SimpleDateFormat sdf = new SimpleDateFormat(format);
            date = sdf.parse(datevalue);
            if (!datevalue.equals(sdf.format(date))) {
                date = null;
            }
        } catch (Exception ex) {
		      ex.printStackTrace();
        }
        return date != null;
    }
	public void LeftArrowClick() {
		cn.click(driver, leftarrow_month);
	}
	public void RightArrowClick() {
		cn.click(driver, rightarrow_month);
	}
	public boolean IsNextMonthVisible() {
		return cn.isEnabled(driver, leftarrow_month);
	}
	public boolean IsPrevMonthVisible() {
		return cn.isEnabled(driver, rightarrow_month);
	}
	public void ClickDateInDateBox() {
		 Select s = new Select(datepicker_month); // choose month from dropdown
	      s.selectByVisibleText("Jan");
	      cn.click(driver, datepicker_day);
	}
	public boolean VisibilityInDateBox() {
		LocalDate currentdate = LocalDate.now();
		int currentDay = currentdate.getDayOfMonth();
		Month currentMonth = currentdate.getMonth();
		 Select s = new Select(datepicker_month); // choose month from dropdown
	      s.selectByVisibleText("Jan");
	      cn.click(driver, datepicker_day);
	     return  cn.isDisplayed(driver, datepicker_day);
	}
	public int CountPagesOnDataTable() {
		//String nextButtonClass = nextBtn_dataTable.getAttribute("class");
		int i =1;
		while (!cn.isEnabled(driver, nextBtn_dataTable)) {
			cn.click(driver, nextBtn_dataTable);
			i = i+1;
		}
		return i;
	}
	
	public void RightarrowVisiblity_pageOne(int pagecount) {
		
		for (int i =0;i<=pagecount;i++) {
			cn.isDisplayed(driver, page_right);
			cn.click(driver, page_right);
		}	
	}
	public boolean LeftarrowVisiblity_pageOne(int pagecount) {		
		int firstpage =1;
		boolean flag= true;
		if(firstpage<pagecount) {
			 flag = cn.isEnabled(driver, page_left);
		}
		return flag;
	}
	public boolean RightarrowVisiblity_pageTwo(int pagecount) {
		int pageNo = 2;
		boolean flag= false;
		if(pageNo<pagecount) {
			flag = cn.isEnabled(driver, page_right);
		}
		return flag;
	}
	public boolean LeftarrowVisiblity_pageTwo() {
		int start = 1;
		int pagecount =2;
		boolean flag= false;
		if(pagecount>start) {
			flag = cn.isEnabled(driver, page_left);
		}
		return flag;
	}
	public void selectFutureDate(String futureDate) {
	       
        for (WebElement day : datepickeryears) {
            if (day.getText().equals(futureDate)) {
                cn.click(driver, day);
                break;
            }
        }
    }
	public boolean VisiblePageControl() {
		return cn.isEnabled(driver, pageControl);
	}
	public boolean DisablePageControl() {	
		return cn.isEnabled(driver, pageControl);	
	}
	public List<String> pgmnameTxt() {
		List<String> PgmNames = new ArrayList<>();		
		for(WebElement list : PgmNameLst) {
			String name =list.getText();
			PgmNames.add(name);
		}
		return PgmNames;
	}
	public List<String> pgmnameTxtPgm() {
		List<String> PgmNames = new ArrayList<>();		
		for(WebElement list : PgmLstPgmModule) {
			String name =list.getText();
			PgmNames.add(name);
		}
		return PgmNames;
	}
	public List<String> ClassnameTxt() {
		List<String> PgmNames = new ArrayList<>();		
		for(WebElement list : ClassNameLst) {
			String name =list.getText();
			PgmNames.add(name);
		}
		return PgmNames;
	}
	public List<String> ClassnameTxtPgm() {
		List<String> PgmNames = new ArrayList<>();		
		for(WebElement list : ClassLstPgmModule) {
			String name =list.getText();
			PgmNames.add(name);
		}
		return PgmNames;
	}
}
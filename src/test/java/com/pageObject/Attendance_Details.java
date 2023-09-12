package com.pageObject;

import java.time.LocalDate;
import java.util.List;
import java.util.Locale;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import com.pageObject.Attendance_Manage;
import com.utility.Log;

import io.cucumber.java.it.Date;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Attendance_Details extends BaseClass {
	
	//@FindBy(xpath="//input[@class='pgmName']") private WebElement att_pgmName;
	@FindBy(xpath="//*[@class='dropdown-menu pgmName']/a[1]")@CacheLookup WebElement att_pgmName;
	@FindBy(xpath="//*[@class='dropdown-menu className']") private WebElement att_className;
	@FindBy(xpath="//div[@class='dropdown-menu studName']") private WebElement att_studName;
	@FindBy(xpath="//div[@class='dropdown-menu attendance']")private WebElement att_attendance;
	@FindBy(xpath="//span[@aria-controls='datetimepicker_dateview']")
			private WebElement att_selectDate;
	@FindBy(xpath="//*[@id='cancel']") private  WebElement att_cancel;
	@FindBy(xpath="//*[@id='save']") private  WebElement att_save;
	@FindBy(xpath="//*[@id='closeButton']") private  WebElement att_closeBtn;
	@FindBy(xpath="//*[@id='outputmessage']")  WebElement message;
	
	public Attendance_Details() {
		PageFactory.initElements(driver,this);
	}
	private Controller cn = new Controller();
	
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
		
		cn.selectByValue(att_selectDate, AttendanceDate);
	}
	public void clickAttndncDate() {
		cn.click(driver, att_selectDate);
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
		return att_selectDate.getText();	
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
		String selectedoption = first.getText();
		return selectedoption;
	}
	public String CheckText_secondDropdown() {
		Select x= new Select(att_className);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	public String CheckText_thirdDropdown() {
		Select x= new Select(att_studName);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
		return selectedoption;
	}
	public String CheckText_fourthDropdown() {
		Select x= new Select(att_attendance);
		x.selectByIndex(0);
		WebElement first = x.getFirstSelectedOption();
		String selectedoption = first.getText();
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
	public Attendance_Manage fillAttendncAddForm(String programName,String ClassName,String StudName,String attendance,String AttendDate,Attendance_Manage att_manager) {
		cn.selectByVisibleText(programName,att_pgmName);
		cn.selectByVisibleText(ClassName,att_className);
		cn.selectByVisibleText(StudName,att_studName);
		cn.selectByVisibleText(attendance,att_attendance);
		cn.selectByVisibleText(attendance,att_selectDate);
		cn.click(driver, att_save);
		att_manager =  new Attendance_Manage();
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
	public void CheckDateFormat(String inputdate) {
		
        SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy", Locale.ENGLISH);
        Date date = format.parse(inputdate);
        System.out.println(date);
	}
}
package com.pageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import java.util.ArrayList;
import java.util.List;


public class Assignment_Add_obj extends BaseClass{

	@FindBy(xpath="//*[@class='programName']")
	private WebElement programName;
	@FindBy(xpath="//table/tbody/tr/i")
	private WebElement clickSave;
	@FindBy (xpath="//button//span[text()=' Cancel']")
	private WebElement cancel_btn;
	@FindBy(xpath="//table/tbody/tr/i")
	private WebElement BatchNumber;
	@FindBy(xpath="//*[@class='AssignmentName']")
	private WebElement AssignmentName;
	@FindBy (xpath="//*[@aria-label='AssignmentDescription']//span")
	private WebElement AssignmentDescription;
	@FindBy(xpath="//*[@class='GradeBy']")
	private WebElement GradeBy;
	@FindBy (id="AssignmentDueDate")
	private WebElement AssignmentDueDate;
	@FindBy (xpath="//*[@aria-label='AssignmentFile1']//span")
	private WebElement AssignmentFile1_txtBx;
	@FindBy (xpath="//*[@aria-label='AssignmentFile2']//span")
	private WebElement AssignmentFile2_txtBx;
	@FindBy (xpath="//*[@aria-label='AssignmentFile3']//span")
	private WebElement AssignmentFile3_txtBx;
	@FindBy (xpath="//*[@id='post-2646']//select")
	private WebElement programNmDropDwn;
	@FindBy (xpath="//*[@id='post-2646']//select")
	private WebElement batchNumDropDwn;
	@FindBy(xpath="//*[contains(text(),'message')")
	private WebElement Message;
	@FindBy (id="calender")
	private WebElement calender;
	@FindBy(xpath = "//button[@class='next']")
	private WebElement nextMonthButton;
	@FindBy(id = "datePickerInput")
	private WebElement datePickerInput;
	@FindBy(xpath = "//button[@class='Last']")
	private WebElement LastMonthButton;
	@FindBy(xpath = "//button[@class='Current']")
	private WebElement CurrentMonthButton;
	@FindBy(xpath = "//div[@class='datepicker']//td[@data-handler='selectDay']")
	private WebElement datepickerDay;
	@FindBy(xpath = "//td[@data-handler='selectDay']")
	private List<WebElement> datepickerDays;


	Controller control = new Controller();


	//Constructor
	public Assignment_Add_obj() {

		PageFactory.initElements(driver, this);
	}

	public boolean validateFieldsOnForm() {
		control.isDisplayed(driver, programName);
		control.isDisplayed(driver, BatchNumber);
		control.isDisplayed(driver, AssignmentName);
		control.isDisplayed(driver, AssignmentDescription);
		control.isDisplayed(driver, GradeBy);
		control.isDisplayed(driver, AssignmentDueDate);
		control.isDisplayed(driver, AssignmentFile1_txtBx);
		control.isDisplayed(driver, AssignmentFile2_txtBx);
		control.isDisplayed(driver, AssignmentFile3_txtBx);
		control.isDisplayed(driver, programNmDropDwn);
		control.isDisplayed(driver, batchNumDropDwn);

		return true;
	}

	public Assignment_detailsPage_obj fillAssignmentDetailForm(String assignNm,String assignDescri,String gradeby,String assignDueDate,String field1,String field2,String field3,
			String programNm,String batchNum,Assignment_detailsPage_obj assignmentdetailObj) {
		control.selectByVisibleText(programNm,programNmDropDwn);
		control.selectByVisibleText(batchNum,batchNumDropDwn);
		control.type(AssignmentName, assignNm);
		control.type(AssignmentDescription,assignDescri);
		control.type(GradeBy, gradeby);
		control.type(AssignmentFile1_txtBx, field1);
		control.type(AssignmentFile2_txtBx, field2);
		control.type(AssignmentFile3_txtBx, field3);
		control.click(driver, clickSave);
		control.click(driver, cancel_btn);
		assignmentdetailObj =  new Assignment_detailsPage_obj();
		return assignmentdetailObj;
	}


	public String errorMessage() {
		return Message.getText();
	}


	public void openDatePicker() {
		datePickerInput.click();
	}

	public void selectDate(String date) {
		datepickerDay.findElement(By.xpath("//a[text()='" + date + "']")).click();
	}

	public WebElement getDatePickerInput() {
		return datePickerInput;

	}

	public void clickNextMonth() {
		control.click(driver, nextMonthButton);;
	}

	public boolean isNextMonthCalendarVisible() {
		return datepickerDay.isDisplayed();
	}
	public void clickLastMonth() {
		control.click(driver, LastMonthButton);;
	}

	public boolean isPreviousMonthCalendarVisible() {
		return datepickerDay.isDisplayed();
	}
	public void clickLCurrentMonth() {
		control.click(driver, CurrentMonthButton);
	}

	public boolean iscurrentMonthCalendarVisible() {
		return datepickerDay.isDisplayed();
	}

	public void selectFutureDate(String futureDate) {

		for (WebElement day : datepickerDays) {
			if (day.getText().equals(futureDate)) {
				day.click();
				break;
			}
		}
	}

	public boolean isFutureDateHighlighted(String futureDate) {
		// Check if the future date is highlighted
		for (WebElement day : datepickerDays) {
			if (day.getText().equals(futureDate) && day.getAttribute("class").contains("highlighted")) {
				return true;
			}
		}
		return false;
	}

	public void clickCancelButton() {
		control.click(driver, cancel_btn);
	}
}



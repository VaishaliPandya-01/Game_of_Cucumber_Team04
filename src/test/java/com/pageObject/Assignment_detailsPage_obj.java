package com.pageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import java.util.ArrayList;
import java.util.List;
public class Assignment_detailsPage_obj extends BaseClass{
	
	@FindBy (xpath="//button[text()='A New Assignment']") 
	private WebElement New_Assignment_btn;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[1]")
	private WebElement dropDownprogramname;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[2]")
	private WebElement dropDownbatchnumber;
	@FindBy (xpath="//a[text()='Assignment Name']")
	private WebElement Assignment_Name;
	@FindBy (xpath="//a[text()='Assignment Description']") 
	private WebElement Assignment_Description;
	@FindBy (xpath="//a[text()='Grade By']") 
	private WebElement GradeBy;
	@FindBy (xpath="//a[text()='Assignment File 1']")
	private WebElement Assignment_File_1;
	@FindBy (xpath="//a[text()='Assignment File 2']")
	private WebElement Assignment_File_2;
	@FindBy (xpath="//a[text()='Assignment File 3']")
	private WebElement Assignment_File_3;
	@FindBy (id="calender") 
	private WebElement calender;
	@FindBy (xpath="//input[@value='Save']")
	private WebElement SaveButton;
	@FindBy (xpath="//input[@value='Cancel']") 
	private WebElement CancelButton;
	@FindBy (xpath="//*[@span/tableHeader']") 
	private List<WebElement> listOfDetailsHeader;
	@FindBy(css = ".assignment-popup input[type='text']")
	private List<WebElement> textboxes;
	@FindBy (xpath="//input[@value='Close']")
	private WebElement CloseButton;
	
	Controller control = new Controller();


	//Constructor
	public Assignment_detailsPage_obj() {

		PageFactory.initElements(driver, this);
	}

	public List<String> getFieldList() {

		List<String> FieldHeader = new ArrayList<>();		
		for(WebElement list : listOfDetailsHeader) {
			String FieldList =list.getText();
			FieldHeader.add(FieldList);
		}
		return FieldHeader;
	}

	public List<WebElement> getTextboxes() {
		return textboxes;
	}

	public String getAssignmentDetailsTitle() {

		String pageTitle=control.getTitle(driver);
		return pageTitle;
	}
	public void isDropdownBatchDisplayed() {
		control.isDisplayed(driver,dropDownbatchnumber );
	}
	public void isDropDownProgramDisplayed() {
		control.isDisplayed(driver,dropDownprogramname );
	}
	public void isCalenderIconDisplayed() {
		control.isDisplayed(driver,calender );
	}
	public void isSaveDisplayed() {
		control.isDisplayed(driver,SaveButton);
	}
	public void isCancelDisplayed() {
		control.isDisplayed(driver,CancelButton);
	}
	public void isCloseDisplayed() {
		control.isDisplayed(driver,CloseButton);
	}

}

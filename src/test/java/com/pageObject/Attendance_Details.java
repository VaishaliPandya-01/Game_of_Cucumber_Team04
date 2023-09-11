package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

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
	@FindBy(xpath="//*[@id='cancel']") @CacheLookup  WebElement att_cancel;
	@FindBy(xpath="//*[@id='submit']") @CacheLookup  WebElement att_submit;
	
	public Attendance_Details() {
		PageFactory.initElements(driver,this);
	}
	Controller cn = new Controller();
	
	public String getTitle_AttDetails() {
		String title = cn.getTitle(driver);
		return title;
	}
	public void pgmNameDropdown() {
		cn.click(driver, att_pgmName);	
		
	}

}
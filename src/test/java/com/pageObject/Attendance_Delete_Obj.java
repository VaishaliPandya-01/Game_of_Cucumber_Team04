package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Log;

public class Attendance_Delete_Obj extends BaseClass{


	@FindBy(xpath="//*[@id='confirm_no']")
	private  WebElement att_confrim_n;
	@FindBy(xpath="//*[@id='confirm_yes']") 
	private  WebElement att_confrim_y;
	@FindBy(name = "closepop_up") 
	private WebElement close;
	@FindBy(xpath="//*[contains(text(),'Message')")
	private WebElement deleteMessage;
	@FindBy(xpath="//*[@id='outputmessage']")
	private WebElement message;

	Controller cn = new Controller();


	public Attendance_Delete_Obj() {
		PageFactory.initElements(driver,this);
	}

	public boolean alertBoxIsDisplayed() {
		return cn.switchToFrameByName(driver, "alert");
	}
	public boolean YesIsDisplayed() {
		return cn.isDisplayed(driver, att_confrim_y);
	}
	public boolean NoIsDisplayed() {
		return cn.isDisplayed(driver, att_confrim_n);
	}
	public void clickYes() {
		cn.click(driver, att_confrim_y);
	}
	public void clickNo() {
		cn.click(driver, att_confrim_n);
	}
	public String DisplayMessage() {
		String sucessmsg = cn.getText(message);
		Log.logInfo(sucessmsg);
		return sucessmsg;
	}




}

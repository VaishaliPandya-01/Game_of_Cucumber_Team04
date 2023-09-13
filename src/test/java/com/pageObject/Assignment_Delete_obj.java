package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Assignment_Delete_obj extends BaseClass {

	//Created object for controller class
	private	Controller act = new Controller();

	@FindBy (xpath="//button//span[text()=' yes']")
	private WebElement deleteYes_btn;
	@FindBy (xpath="//button//span[text()=' No']")
	private WebElement deleteNo_btn;
	@FindBy(xpath="//*[contains(text(),'Are you sure')]") 
	private WebElement deleteMessage;
	@FindBy(xpath="//*[contains(text(),'Success')]") 
	private WebElement successMessag;
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeArrow;		
	@FindBy (xpath="//button//span[text()='are you sure']")
	private WebElement deleteBoxText;

	//Constructor
	public Assignment_Delete_obj() {

		PageFactory.initElements(driver, this);
	}

	//methods
	public Assignment_Manage_obj deleteYesBtn() {
		act.click(driver, deleteYes_btn);
		act.switchToDefaultFrame(driver);
		return new Assignment_Manage_obj();
	}

	public Assignment_Manage_obj deleteNoBtn() {
		act.click(driver, deleteNo_btn);
		act.switchToDefaultFrame(driver);
		return new Assignment_Manage_obj();
	}

	public void closeArrow() {
		act.click(driver, closeArrow);
	}

	public boolean alertBoxIsDisplayed() {
		return act.switchToFrameByName(driver, "alert");
	}

	public String successMessage() {
		String successMessag=this.successMessag.getText();
		return successMessag;
	}

	public String deleteMessage() {
		String deleteMessage=this.deleteMessage.getText();
		return deleteMessage;
	}

	public String deleteBoxText() {
		String text = act.getText(deleteBoxText);
		return text;
	}

}


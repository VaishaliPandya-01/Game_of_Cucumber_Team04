package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class User_Delete_Obj extends BaseClass{

	//Created object for controller class
	private	Controller act = new Controller();

	@FindBy (xpath="//button//span[text()=' yes']")
	private WebElement deleteYes_btn;
	
	@FindBy (xpath="//button//span[text()=' No']")
	private WebElement deleteNo_btn;
	
	@FindBy(xpath="//*[contains(text(),'Are you sure')]") 
	private WebElement deleteMessage;
	
	@FindBy(xpath="//*[contains(text(),'Success')]") 
	private WebElement successMessage;
	
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeArrow;

	//Constructor
	public User_Delete_Obj() {
		PageFactory.initElements(driver, this);
	}

	//methods
	public User_Delete_Obj deleteYesBtn() {

		act.click(driver, deleteYes_btn);
		act.switchToDefaultFrame(driver);
		return new User_Delete_Obj();
	}

	public User_Delete_Obj deleteNoBtn() {

		act.click(driver, deleteNo_btn);
		act.switchToDefaultFrame(driver);
		return new User_Delete_Obj();
	}

	public void closeArrow() {

		act.click(driver, closeArrow);
	}

	public boolean alertBoxIsDisplayed() {
		return act.switchToFrameByName(driver, "alert");
	}

	public String successMessage() {
		String successMessage=this.successMessage.getText();
		return successMessage;
	}

	public String deleteMessage() {
		String deleteMessage=this.deleteMessage.getText();
		return deleteMessage;
	}
}
package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class User_Edit_Obj extends BaseClass{

	//Created object for controller class
	private	Controller act = new Controller();

	@FindBy (id="firstName") 
	private WebElement firstName;
	
	@FindBy (id="lastName") 
	private WebElement lastName;
	
	@FindBy (id="location") 
	private WebElement location;
	
	@FindBy (id="phoneNo") 
	private WebElement phoneNo;
	
	@FindBy (xpath="//button//span[text()=' Cancel']") 
	private WebElement cancel_btn;
	
	@FindBy (xpath="//button//span[text()=' save']") 
	private WebElement submit_btn;
	
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement userRoleDropDwn;
	
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement roleStatusDropDwn;
	
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement visaStatusDropDwn;
	
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeUserDetails;

	//Constructor
	public User_Edit_Obj() {
		PageFactory.initElements(driver, this);
	}

	//Methods
	public void firstName(String text) {

		act.type(firstName, text);
	}


	public void lastName(String text) {

		act.type(lastName, text);
	}


	public void location(String text) {

		act.type(location, text);
	}


	public void cancel_btn() {

		act.click(driver, cancel_btn);
	}


	public void submit_btn() {

		act.click(driver, submit_btn);
	}


	public void userRoleDropDwn() {

		act.selectByIndex(userRoleDropDwn, 1);
	}
	
	
	public void roleStatusDropDwn() {

		act.selectByIndex(userRoleDropDwn, 1);
	}
	
	
	public void visaStatusDropDwn() {

		act.selectByIndex(userRoleDropDwn, 1);
	}
	

	public void closeUserDetails() {

		act.click(driver, closeUserDetails);;
	}
	
	public String getUserDetailsTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}
}
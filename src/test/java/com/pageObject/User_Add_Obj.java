package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class User_Add_Obj extends BaseClass{
	

	//Created object for controller class
	private	Controller act = new Controller();
	
	
	//Element Object
	@FindBy (id="firstName") 
	private WebElement firstName;
	
	@FindBy (id="lastName") 
	private WebElement lastName;
	
	@FindBy (id="phoneNo") 
	private WebElement phoneNo;
	
	@FindBy (id="location") 
	private WebElement location;
	
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement userRoleDropDwn;
	
	@FindBy (xpath="//*[@id='post-2545']//select") 
	private WebElement roleStatusDropDwn;
	
	@FindBy (xpath="//*[@id='post-2545']//select") 
	private WebElement visaStatusDropDwn;
	
	@FindBy (xpath="//button//span[text()=' Cancel']") 
	private WebElement cancel_btn;
	
	@FindBy (xpath="//button//span[text()=' submit']") 
	private WebElement submit_btn;
	
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeUserDetails;
	
	@FindBy(xpath="//*[contains(text(),'message')]")
	private WebElement Message;
	
	
	//Constructor
		public User_Add_Obj() {
			PageFactory.initElements(driver, this);
		}

		//Methods
		
		public boolean validateFieldsOnForm() {
			act.isDisplayed(driver, firstName);
			act.isDisplayed(driver, lastName);
			act.isDisplayed(driver, location);
			act.isDisplayed(driver, phoneNo);
			act.isDisplayed(driver, userRoleDropDwn);
			act.isDisplayed(driver, roleStatusDropDwn);
			act.isDisplayed(driver, visaStatusDropDwn);                          
			return true;
			
		}
		
		public User_Manage_Obj fillUserDetailForm(String first,String last,String loctn,String phNo,String userRole,String roleStatus,String visaStatus, User_Manage_Obj addManageUser) {
			act.type(firstName, first);
			act.type(lastName, last);
			act.type(location, loctn);
			act.type(phoneNo, phNo);
			act.selectByVisibleText(userRole,userRoleDropDwn);
			act.selectByVisibleText(roleStatus,roleStatusDropDwn);
			act.selectByVisibleText(visaStatus,visaStatusDropDwn);
			act.click(driver, submit_btn);
			addManageUser =  new User_Manage_Obj();
			return addManageUser;
		}
		
		public void cancel_btn() {
			act.click(driver, cancel_btn);
		}

		public void closeUserDetails() {
			act.click(driver, closeUserDetails);;
		}

		public String getUserDetailsTitle() {
			String pageTitle=act.getTitle(driver);
			return pageTitle;
		}
		
		public String errorMessage() {
			return Message.getText();
		}
	}
		
		
		



package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class LoginPage extends BaseClass{

	@FindBy (id="id_username") 
	private WebElement userName_txt;
	@FindBy (id="id_password") 
	private WebElement password_txt;
	@FindBy (xpath="//input[@type='submit'] ")
	private WebElement login_btn;
	@FindBy (id="id_code") 
	private WebElement code_txt;
	@FindBy (xpath = "//*[@class='alert alert-primary']") 
	private WebElement Message;
	@FindBy (xpath = "//*[contains(text(),'Forgot Password')]") 
	private WebElement ForgotPwdBtn;



	//Constructor
	public LoginPage() {

		PageFactory.initElements(driver, this);
	}

	//Methods
	public void userNameTxt(String username) {

	}

}

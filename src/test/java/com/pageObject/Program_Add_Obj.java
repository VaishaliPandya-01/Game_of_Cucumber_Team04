package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Program_Add_Obj extends BaseClass{

	//Created object for controller class
	private	Controller act = new Controller();

	//Element Object
	@FindBy (id="programName") 
	private WebElement programName;
	@FindBy (id="programDescription") 
	private WebElement programDescription;
	@FindBy (xpath="id('mat-radio-40')//span") 
	private WebElement activeRadio_btn;
	@FindBy (xpath="id('mat-radio-40')//span") 
	private WebElement inActiveRadio_btn;
	@FindBy (xpath="//button//span[text()=' Cancel']") 
	private WebElement cancel_btn;
	@FindBy (xpath="//button//span[text()=' save']") 
	private WebElement save_btn;
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeProgramDetails;
	@FindBy(xpath="//*[contains(text(),'message')]")
	private WebElement Message;

	//Constructor
	public Program_Add_Obj() {
		PageFactory.initElements(driver, this);
	}

	//Methods

	public boolean validateFieldsOnForm() {
		act.isDisplayed(driver, programName);
		act.isDisplayed(driver, programDescription);
		act.isDisplayed(driver, activeRadio_btn);
		act.isDisplayed(driver, inActiveRadio_btn);
		return true;
	}

	public Program_Manage_Obj fillProgramDetailForm(String name,String desc,Program_Manage_Obj programManageObj) {
		act.type(programName, name);
		act.type(programDescription, desc);
		act.click(driver, activeRadio_btn);
		act.click(driver, save_btn);
		programManageObj =  new Program_Manage_Obj();
		return programManageObj;
	}

	public void activeRadio_btn() {
		act.click(driver, activeRadio_btn);
	}

	public void inActiveRadio_btn() {
		act.click(driver, inActiveRadio_btn);
	}

	public void cancel_btn() {
		if(act.isDisplayed(driver, cancel_btn)) {
		act.click(driver, cancel_btn);
		}
	}
	
	public void save_btn() {
		if(act.isDisplayed(driver, save_btn)) {
		act.click(driver, save_btn);
		}
	}

	public void closeProgramDetails() {
		if(act.isDisplayed(driver, closeProgramDetails)) {
		act.click(driver, closeProgramDetails);
		}
	}

	public String getProgramDetailsTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}

	public String validationMessage() {
		return act.getText(Message);
	}
}

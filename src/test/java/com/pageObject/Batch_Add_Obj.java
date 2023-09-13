package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Batch_Add_Obj extends BaseClass{

	//Created object for controller class
	private	Controller act = new Controller();
	
	//Element Object
	@FindBy (id="batchName") 
	private WebElement batchName;
	@FindBy (id="batchDescription") 
	private WebElement batchDescription;
	@FindBy (id="numOfClasses") 
	private WebElement numOfClasses;
	@FindBy (xpath="id('mat-radio-40')//span") 
	private WebElement activeRadio_btn;
	@FindBy (xpath="id('mat-radio-40')//span") 
	private WebElement inActiveRadio_btn;
	@FindBy (xpath="//button//span[text()=' Cancel']") 
	private WebElement cancel_btn;
	@FindBy (xpath="//button//span[text()=' save']") 
	private WebElement save_btn;
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement programNmDropDwn;
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeBatchDetails;	
	@FindBy(xpath="//*[contains(text(),'message')]")
	private WebElement Message;

	//Constructor
	public Batch_Add_Obj() {
		PageFactory.initElements(driver, this);
	}

	//Methods

	public boolean validateFieldsOnForm() {
		act.isDisplayed(driver, batchName);
		act.isDisplayed(driver, batchDescription);
		act.isDisplayed(driver, numOfClasses);
		act.isDisplayed(driver, activeRadio_btn);
		act.isDisplayed(driver, inActiveRadio_btn);
		act.isDisplayed(driver, programNmDropDwn);
		return true;
	}

	public Batch_Manage_Obj fillBatchDetailForm(String name,String desc,String noOfClasses,String programNm,Batch_Manage_Obj batchManageObj) {
		act.type(batchName, name);
		act.type(batchDescription, desc);
		act.type(numOfClasses, noOfClasses);
		act.click(driver, activeRadio_btn);
		act.selectByVisibleText(programNm,programNmDropDwn);
		act.click(driver, save_btn);
		batchManageObj =  new Batch_Manage_Obj();
		return batchManageObj;
	}

	public void activeRadio_btn() {
		act.click(driver, activeRadio_btn);
	}

	public void inActiveRadio_btn() {
		act.click(driver, inActiveRadio_btn);
	}

	public void cancel_btn() {
		act.click(driver, cancel_btn);
	}

	public void closeBatchDetails() {
		act.click(driver, closeBatchDetails);;
	}

	public String getBatchDetailsTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}
	
	public String errorMessage() {
		return Message.getText();
	}
}

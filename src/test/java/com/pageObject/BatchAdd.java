package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class BatchAdd extends BaseClass{


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




	Controller act = new Controller();


	//Constructor
	public BatchAdd() {

		PageFactory.initElements(driver, this);
	}

	//Methods
	public void batchName(String text) {

		act.type(batchName, text);
	}


	public void batchDescription(String text) {

		act.type(batchDescription, text);
	}


	public void numOfClasses(String text) {

		act.type(numOfClasses, text);
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


	public void save_btn() {

		act.click(driver, save_btn);
	}


	public void programNmDropDwn(int num) {

		act.selectByIndex(programNmDropDwn, num);
	}

	public void closeBatchDetails() {

		act.click(driver, closeBatchDetails);;
	}
}

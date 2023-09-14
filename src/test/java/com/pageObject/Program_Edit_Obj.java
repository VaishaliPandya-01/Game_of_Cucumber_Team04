package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Program_Edit_Obj extends BaseClass{
	
	//Created object for controller class
		private	Controller act = new Controller();

		@FindBy (id="programName") 
		private WebElement ProgramName;
		@FindBy (id="programDescription") 
		private WebElement ProgramDescription;
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

		//Constructor
		public Program_Edit_Obj() {
			PageFactory.initElements(driver, this);
		}

		//Methods
		public void ProgramName(String text) {

			act.type(ProgramName, text);
		}

		public void ProgramDescription(String text) {

			act.type(ProgramDescription, text);
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
		
		public void closeProgramDetails() {

			act.click(driver, closeProgramDetails);;
		}
		
		public String getProgramDetailsTitle() {
			String pageTitle=act.getTitle(driver);
			return pageTitle;
		}

}

package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class BatchDelete extends BaseClass{


	@FindBy (xpath="//button//span[text()=' yes']")
	private WebElement deleteYes_btn;

	@FindBy (xpath="//button//span[text()=' No']")
	private WebElement deleteNo_btn;
	
	@FindBy(xpath="//*[contains(text(),'Are you sure')") 
	private WebElement deleteMessage;
	
	@FindBy(xpath="//*[contains(text(),'Success')") 
	private WebElement successMessag;
	
	@FindBy (xpath="//button//span[text()=' close']") 
	private WebElement closeArrow;
	
	

	Controller act = new Controller();

	//Constructor
	public BatchDelete() {

		PageFactory.initElements(driver, this);
	}

	//methods
	public BatchManage deleteYesBtn() {

		act.click(driver, deleteYes_btn);		
		return new BatchManage();
	}

	public BatchManage deleteNoBtn() {

		act.click(driver, deleteNo_btn);
		return new BatchManage();
	}
	
	public void closeArrow() {

		act.click(driver, closeArrow);
	}
	
	public String successMessage() {
		String successMessag=this.successMessag.getText();
		return successMessag;
	}
	
	public String deleteMessage() {
		String deleteMessage=this.deleteMessage.getText();
		return deleteMessage;
	}
}

package com.pageObject;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.controller.Controller;
import com.baseClass.BaseClass;
import com.utility.Log;

public class Class_Edit_obj extends BaseClass {

	Controller control = new Controller();


	//Constructor
	public Class_Edit_obj() {

		PageFactory.initElements(driver, this);
	}


	boolean status;

	@FindBy(xpath = "//a[@id ='Edit class']")
	private WebElement editBtnclk;
	@FindBy(xpath = "//a[Text() ='class details']")
	private WebElement editpopupchk;
	@FindBy(xpath = "//a[@id ='batchid']")
	private WebElement Batchidval;
	@FindBy(xpath = "//a[@id ='noofclasses']")
	private WebElement noclassval;
	@FindBy(xpath = "//a[@id ='classdate']")
	private WebElement clasdtval;
	@FindBy(xpath = "//a[@id ='staffid']")
	private WebElement staffval;

	public void editbtnclkmehtod()
	{
		editBtnclk.click();
	}


	public void chkEditpopage()
	{
		try {
			status = editpopupchk.isDisplayed();
			assertTrue(status);

			Log.logInfo("edit page is displayed");

		} catch (AssertionError e) {
			Log.error("edit page is not displayed");
			System.out.println(e.getMessage());
		}


	}

	public void chkallrws()
	{

		Batchidval.getAttribute("value");
		noclassval.getText();
		clasdtval.getText();
		staffval.getText();

		try {
			status = editpopupchk.isDisplayed();
			assertTrue(status);

			Log.logInfo("edit page is displayed");

		} catch (AssertionError e) {
			Log.error("edit page is not displayed");
			System.out.println(e.getMessage());
		}
	}
}

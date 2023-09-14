package com.pageObject;

import static org.junit.Assert.assertTrue;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.controller.Controller;
import com.baseClass.BaseClass;
import com.utility.Log;




public class Class_AddNew_obj extends BaseClass {

	Controller control = new Controller();


	//Constructor
	public Class_AddNew_obj() {

		PageFactory.initElements(driver, this);
	}
	
	boolean status;
	
	@FindBy(xpath = "//a[@id ='batchid']")
	WebElement Batchidval;
	@FindBy(xpath = "//a[@id ='noofclasses']")
	WebElement noclassval;
	@FindBy(xpath = "//a[@id ='classdate']")
	WebElement clasdtval;
	@FindBy(xpath = "//a[@id ='staffid']")
	WebElement staffval;
	@FindBy(xpath = "//a[@id ='Save']")
	WebElement saveBtnclick;
	@FindBy(xpath = "//pre[@id='classdetail']")
	WebElement OutputclassdetailChk;
	@FindBy(xpath = "//a[@id ='date picker']")
	WebElement datepickerclick;
	@FindBy(xpath = "//a[@id ='Cancel']")
	WebElement cancelclick;
	@FindBy(xpath = "//a[@id ='msgcheck']")
	WebElement manageclassnoent;
	
	
	public void batchidDrpdwn()
	{
		Batchidval.click();
	}
	public void datepickerclickmeth()
	{
		datepickerclick.click();
	}
	
	

	
	public void cancelclkmeth()
	{
		cancelclick.click();
	}
	public void checkpopmsg()
	{
		try {
			status = OutputclassdetailChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("No button is displayed");

		} catch (AssertionError e) {
			Log.error("No button is not displayed");
			System.out.println(e.getMessage());
		}
		
	}
	public void checkbatchdrpmsg()
	{
		try {
			status = Batchidval.isDisplayed();
			assertTrue(status);

			Log.logInfo("batch id is displayed");

		} catch (AssertionError e) {
			Log.error("batch id is not displayed");
			System.out.println(e.getMessage());
		}
		
		
	}
	
	public void checknoclasspmsg()
	{
		try {
			status = noclassval.isDisplayed();
			assertTrue(status);

			Log.logInfo("no of classes is displayed");

		} catch (AssertionError e) {
			Log.error("no of classes  is not displayed");
			System.out.println(e.getMessage());
		}
		
		
	}
	public void checkclasdtmsg()
	{
		try {
			status = clasdtval.isDisplayed();
			assertTrue(status);

			Log.logInfo("class date is displayed");

		} catch (AssertionError e) {
			Log.error("class date is not displayed");
			System.out.println(e.getMessage());
		}
		
		
	}
	public void checkstaffidmsg()
	{
		try {
			status = staffval.isDisplayed();
			assertTrue(status);

			Log.logInfo("staff id is displayed");

		} catch (AssertionError e) {
			Log.error("staff id is not displayed");
			System.out.println(e.getMessage());
		}
		
		
	}

	public void checfieldsmsg()
	{
		try {
			status = saveBtnclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("No button is displayed");

		} catch (AssertionError e) {
			Log.error("No button is not displayed");
			System.out.println(e.getMessage());
		}
		
		
	}
	
	public void allfields()
	{
		Batchidval.getAttribute("value");
		noclassval.getText();
		clasdtval.getText();
		staffval.getText();
	}
	
	public void savebtnclickmth()
	{
		saveBtnclick.click();
	}
	
	
	public void alertmsg()
	{
		try {
			status = OutputclassdetailChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("class added is displayed");

		} catch (AssertionError e) {
			Log.error("class added is not displayed");
			System.out.println(e.getMessage());
		}
	}
	
	public void mangecalssnoentrychk()
	{
		try {
			status = manageclassnoent.isDisplayed();
			assertTrue(status);

			Log.logInfo("class added is displayed");

		} catch (AssertionError e) {
			Log.error("class added is not displayed");
			System.out.println(e.getMessage());
		}
	}
	
	
}


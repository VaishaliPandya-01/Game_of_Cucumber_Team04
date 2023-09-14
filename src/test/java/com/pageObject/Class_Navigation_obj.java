package com.pageObject;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.controller.Controller;
import com.baseClass.BaseClass;
import com.utility.Log;


public class Class_Navigation_obj extends BaseClass{

	Controller control = new Controller();


	//Constructor
	public Class_Navigation_obj() {

		PageFactory.initElements(driver, this);
	}
	boolean status;


	@FindBy(xpath = "//a[@id ='Student']")
	private WebElement StudntClick;
	@FindBy(xpath = "//a[@id ='Program']")
	private WebElement prgmclick;
	@FindBy(xpath = "//a[@id ='Batch']")
	private WebElement btchClick;
	@FindBy(xpath = "//a[@id ='User']")
	private WebElement usrClick;
	@FindBy(xpath = "//a[@id ='Assignment']")
	private WebElement assgnClick;
	@FindBy(xpath = "//a[@id ='Attendance']")
	private WebElement attdnClick;
	@FindBy(xpath = "//a[@id ='Logout']")
	private WebElement LogoutClick;
	@FindBy(xpath = "//a[@id ='Class']")
	private WebElement classClick;
	@FindBy(xpath = "//pre[@id='message']")
	private WebElement OutputChk;

	public void studntclickmethod()
	{
		StudntClick.click();
	}
	public void classclickmethod()
	{
		classClick.click();
	}
	public void prgmclickmethod()
	{
		prgmclick.click();
	}
	public void btchclickmethod()
	{
		btchClick.click();
	}
	public void usrclickmethod()
	{
		usrClick.click();
	}
	public void assgnclickmethod()
	{
		assgnClick.click();
	}
	public void attnclickmethod()
	{
		attdnClick.click();
	}
	public void logoutclickmethod()
	{
		LogoutClick.click();
	}

	public void msgchckstdnchk()
	{
		try {
			status = StudntClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Student is displayed");

		} catch (AssertionError e) {
			Log.error("Student is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void msgclasschk()
	{
		try {
			status = classClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("class is displayed");

		} catch (AssertionError e) {
			Log.error("class is not displayed");
			System.out.println(e.getMessage());
		}
	}
	public void msgchckprgmchk()
	{
		try {
			status = prgmclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Program is displayed");

		} catch (AssertionError e) {
			Log.error("Program not displayed");
			System.out.println(e.getMessage());
		}
	}


	public void msgchckbtchmchk()
	{
		try {
			status = btchClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Batch is displayed");

		} catch (AssertionError e) {
			Log.error("Batch is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void msgchcusrmchk()
	{
		try {
			status = usrClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("User is displayed");

		} catch (AssertionError e) {
			Log.error("User is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void msgchckassignmchk()
	{
		try {
			status = assgnClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Assignment is displayed");

		} catch (AssertionError e) {
			Log.error("Assignment is not displayed");
			System.out.println(e.getMessage());
		}
	}
	public void msgchckattdnmchk()
	{
		try {
			status = attdnClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Attendance is displayed");

		} catch (AssertionError e) {
			Log.error("Attendance is not displayed");
			System.out.println(e.getMessage());
		}
	}
	public void msgchlogoutchk()
	{
		try {
			status = LogoutClick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Logout is displayed");

		} catch (AssertionError e) {
			Log.error("Logout is not displayed");
			System.out.println(e.getMessage());
		}
	}
}


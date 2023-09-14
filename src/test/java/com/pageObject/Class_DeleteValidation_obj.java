package com.pageObject;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Log;


public class Class_DeleteValidation_obj extends BaseClass{

	Controller control = new Controller();


	//Constructor
	public Class_DeleteValidation_obj() {

		PageFactory.initElements(driver, this);
	}


	boolean status;

	@FindBy(xpath = "//a[@id ='manageclassmsg']")
	private WebElement manageclassmsg;
	@FindBy(xpath = "//a[@id ='DeleteButton']")
	private WebElement deleteBtnclick;
	@FindBy(xpath = "//pre[@id='message']")
	private WebElement OutputChk;
	@FindBy(xpath = "//pre[@id='yesmessage']")
	private WebElement YesbtnChk;
	@FindBy(xpath = "//pre[@id='nomessage']")
	private WebElement NobtnChk;
	@FindBy(xpath = "//a[@id ='hobbies-checkbox']")
	private WebElement ChkboxClk;
	@FindBy(xpath = "//input[@type='checkbox' and starts-with(@id,'ex1-check')]")
	private WebElement multichkbox;

	public void ManageclassLandingPage() {
		try {
			status = manageclassmsg.isDisplayed();
			assertTrue(status);

			Log.logInfo("manage class landing is displayed");

		} catch (AssertionError e) {
			Log.error("manage class landing is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void DelBtnclick() {

		deleteBtnclick.click();

	}

	public void alertmsgyes() {

		Alert alert = driver.switchTo().alert();
		String alertText = alert.getText();

		alert.accept();

	}

	public void alertmsgno() {
		Alert alert = driver.switchTo().alert();
		String alertText = alert.getText();
		alert.dismiss();
	}

	public void Messagedisplayed() {

		try {
			status = OutputChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}

	}

	public void YesMessagedisplayed() {

		try {
			status = YesbtnChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("Yes button is displayed");

		} catch (AssertionError e) {
			Log.error("Yes button is not displayed");

		}

	}

	public void NoMessagedisplayed() {

		try {
			status = NobtnChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("No button is displayed");

		} catch (AssertionError e) {
			Log.error("No button is not displayed");
			System.out.println(e.getMessage());
		}

	}

	public void deletebtnenabledchk() {
		try {
			status = deleteBtnclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Delete button is displayed");

		} catch (AssertionError e) {
			Log.error("Delete button is not displayed");
			System.out.println(e.getMessage());
		}

	}

	public void checkboxclickmethd() {
		ChkboxClk.click();
	}

	public void chkboxselectCheckmsg() {
		try {
			status = ChkboxClk.isSelected();
			assertTrue(status);

			Log.logInfo("Delete button is displayed");

		} catch (AssertionError e) {
			Log.error("Delete button is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void multichkboxclickmethod() {
		multichkbox.click();
	}

	public void multichkboxselectCheckmsg() {
		try {
			status = multichkbox.isSelected();
			assertTrue(status);

			Log.logInfo("Delete button is displayed");

		} catch (AssertionError e) {
			Log.error("Delete button is not displayed");
			System.out.println(e.getMessage());
		}
	}




}

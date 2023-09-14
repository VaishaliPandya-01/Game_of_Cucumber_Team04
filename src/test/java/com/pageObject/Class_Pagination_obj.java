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
import java.util.List;



public class Class_Pagination_obj extends BaseClass {

	int columnIndex = 0;

	Controller control = new Controller();


	//Constructor
	public Class_Pagination_obj() {

		PageFactory.initElements(driver, this);
	}
	boolean status;

	@FindBy(xpath = "//a[@id ='dashboardsmsg']")
	private WebElement dashboardlandmsg;

	List<WebElement> tableHeaders = (List<WebElement>) dashboardlandmsg;

	@FindBy(xpath = "//a[@id ='paginationbutton']")
	private WebElement Btnclick;
	@FindBy(xpath = "//pre[@id='datadisplay']")
	private WebElement OutputChk;

	@FindBy(xpath ="//td[value() ='1']") 
	private WebElement data1;


	@FindBy(xpath = "//a[title ='>']")
	private WebElement rigtclick;

	@FindBy(xpath = "//a[title='<']")
	private WebElement lftclick;

	@FindBy(xpath = "//a[title='>>']")
	private WebElement rigtdblclick;
	@FindBy(xpath = "//a[title='<<']")
	private WebElement lftdblclick;
	@FindBy(xpath = "//a[@id='isEnabled']")
	private WebElement arrwenabled;
	@FindBy(xpath = "//a[@id='isDisabled']")
	private WebElement arrwdisabled;

	public void paginationchk()
	{
		Object colName = null;
		List<WebElement> result = null;
		for (int i = 0; i < tableHeaders.size(); i++) {

			if (tableHeaders.get(i).getText().equals(colName)) {
				break;
			}
		}

		boolean goNext = false;
		do { 
			for (int i = 0; i < tableHeaders.size(); i++) {
				data1.getText();

			}
			boolean paginationNext = false;
			goNext = paginationNext;
			if (paginationNext) {
				data1.click();
			}
		} while (goNext);
		return ;
	}


	public void DashboardLandingPage() {
		try {
			status = dashboardlandmsg.isDisplayed();
			assertTrue(status);

			Log.logInfo("Dashboard page is displayed");

		} catch (AssertionError e) {
			Log.error("Dashboard page is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void ClassbtnclickMethod()
	{
		Btnclick.click();
	}

	public void dataMessagedisplayed() {

		try {
			status = OutputChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}

	}

	public void rightarrowchk()
	{
		try {
			status = rigtclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//rigtclick.click();
	}

	public void leftarrowchk()
	{
		try {
			status = lftclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//lftclick.click();
	}

	public void rightdblClick()
	{

		try {
			status = lftdblclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//rigtdblclick.click();
	}

	public void lftdblarr() {

		try {
			status = rigtdblclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//lftdblclick.click();
	}


	public void arrenabledmethd() {

		try {
			status = arrwenabled.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//lftdblclick.click();
	}
	public void arrdisbledmethd() {

		try {
			status = arrwdisabled.isDisplayed();
			assertTrue(status);

			Log.logInfo("Alert is displayed");

		} catch (AssertionError e) {
			Log.error("Alert is not displayed");

		}
		//lftdblclick.click();
	}
}

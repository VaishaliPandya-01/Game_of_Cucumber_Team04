package com.pageObject;

import java.net.HttpURLConnection;
import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

import dev.failsafe.internal.util.Assert;


public class Home_Obj extends BaseClass{

	@FindBy (xpath="//*[@class='login-button']") 
	private WebElement loginBtn;

	@FindBy (xpath="//img[@title='LMS logo']") 
	private WebElement logo;

	//object for controller class
	Controller act = new Controller();

	//constructor
	public Home_Obj() {

		PageFactory.initElements(driver, this);

	}

	//methods

	public void verifyHomePage() {
		driver.getTitle().contains("Learning Management System");
	}

	public void verifyLink(String url) {
		try {
			URL link = new URL(url);
			HttpURLConnection httpURLConnection = (HttpURLConnection) link.openConnection();
			httpURLConnection.setConnectTimeout(3000); // Set connection timeout to 3 seconds
			httpURLConnection.connect();


			if (httpURLConnection.getResponseCode() == 200) {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage());
			} else {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage() + " - " + "is a broken link");
			}
		} catch (Exception e) {
			System.out.println(url + " - " + "is a broken link");
		}
	}

	public void checkSpelling() {

	}
	public void verifyLogo() {

		boolean logoPresent = logo.isDisplayed();
		Assert.isTrue(logoPresent, "LMS");		
	}

	public void verifyLogoAllignment() {
		int id1X = driver.findElement(By.id("id1")).getLocation().x; 
		int id2X = driver.findElement(By.id("id2")).getLocation().x;
		org.junit.Assert.assertEquals(id1X, id2X);
	}

	public void verifyLoginBtn() {
		boolean loginBtnPresent = logo.isDisplayed();
		Assert.isTrue(loginBtnPresent, "Login");
	}

	public void clickOnLoginBtn() {
		act.click(driver, loginBtn);
	}


}

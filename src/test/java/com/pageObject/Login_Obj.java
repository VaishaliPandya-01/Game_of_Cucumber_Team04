package com.pageObject;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Login_Obj extends BaseClass{
	
	@FindBy (id="id_username") WebElement userName_txt;
	@FindBy (id="id_password") WebElement password_txt;
	@FindBy (xpath="//input[@type='submit'] ")WebElement login_btn;
	@FindBy (xpath = "//*[contains(text(),'forget username_Password')]") WebElement forgetUnamePwsd;
	@FindBy (xpath="//*[contains(text(),'Reset Password)]") WebElement ResetPassword;
	@FindBy (xpath = "//*[@class='alert alert-primary']") WebElement Message;
	
	//Constructor
		public Login_Obj() {

			PageFactory.initElements(driver, this);
		}
	
	//object for controller class
		Controller act = new Controller();
	
		
		//methods
		public void validateLoginPage() {

			String title = driver.getTitle();
			Assert.assertEquals("Please login to LMS application", title);
			System.out.println("Admin is on " + title + "page");
		}
		
		public String getLoginPageHeader() {
			String pageTitle=act.getTitle(driver);
			return pageTitle;
		}
		
		public void userNameText(String uNmae) {
			userName_txt.sendKeys(uNmae);
		}
		
		public void PswdText(String pwd) {
			password_txt.sendKeys(pwd);
		}
		
		public void clickLoginBtn() {
			act.click(driver, login_btn);
		}
		
		public void validateTextbox() {
			act.isEnabled(driver, userName_txt);
			act.isEnabled(driver, password_txt);
		}
		
		public void validatePositionOfFields() {
			int idx1 = userName_txt.getLocation().x;
			int idx2 = userName_txt.getLocation().y;
			Assert.assertEquals(idx1, idx2);
		}
		
		public void validatePositionOfLoginButton() {
			int idx1 = login_btn.getLocation().x;
			int idx2 = login_btn.getLocation().y;
			Assert.assertEquals(idx1, idx2);
		}
		
		public void validateForgetUnamePswd() {
			String txt = forgetUnamePwsd.getText();
			Assert.assertEquals("Forgot Username or Password", txt);
		}
		
		public void validateResetPswd() {
			String TxtResetPwd = ResetPassword.getText();
			Assert.assertEquals("Forgot Password", TxtResetPwd);
		}
		
		public void validateColorCode() {
			// Get value of Css property border-bottom-color which will be returned in RGB format.
			String colorCode= password_txt.getCssValue("password-box-color");
			
			System.out.println("Color code in RGB" + colorCode);
			
			String expectedColorCodeInRGB= "rgba(128, 128, 128, 1)";
			
			// Asserting actual and expected color codes
			Assert.assertEquals(colorCode, expectedColorCodeInRGB);
		}
		
		public void validateDashboardPage() {
			String dashboardTitle = driver.getTitle();
			Assert.assertEquals("DashBoard Page",dashboardTitle);
		}
		
		public String Message(String expectedmsg) {

			return Message.getText();

		}
		
//		public void enterClickKeyboard() throws AWTException {
//			 Robot robot = new Robot();
//			 robot.keyPress(KeyEvent.VK_ENTER);
//		}
		
		public void keyboardClick() {
			Actions builder = new Actions(driver);
			Action seriesOfActions = builder.click()
				.build();
				
			seriesOfActions.perform() ;
		}
		public void mouseClick() {
			
			Actions action = new Actions(driver);
			 /* perform a mouse click on the search button */
            action.click(login_btn).build().perform();
		}
}

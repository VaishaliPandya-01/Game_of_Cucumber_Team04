package com.pageObject;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.Color;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Login_Obj extends BaseClass{

	@FindBy (id="id_username")private WebElement userName_txt;
	@FindBy (id="id_password")private WebElement password_txt;
	@FindBy (xpath="//input[@type='submit'] ")private WebElement login_btn;
	@FindBy (xpath = "//*[contains(text(),'forget username_Password')]")private WebElement forgetUnamePwsd;
	@FindBy (xpath="//*[contains(text(),'Reset Password)]")private WebElement ResetPassword;
	@FindBy (xpath = "//*[@class='alert alert-primary']")private WebElement Message;
	@FindBy (xpath = "//*[contains(text(),'Forgot username Password')]")private WebElement forgotUnamePswdLinkBtn;
	@FindBy (tagName = "h1")private WebElement emailField;
	@FindBy (xpath = "//*[@class='btn btn-info']")private WebElement sendLink_btn;
	@FindBy (xpath = "//*[@class='submit btn-info']")private WebElement submit_btn;
	@FindBy (xpath = "//*[contains(text(),'Type Password)]")private WebElement typeNewPswd_txt;
	@FindBy (xpath = "//*[contains(text(),'ReType Password)]")private WebElement reTypeNewPswd_txt;
	@FindBy (xpath = "//*[contains(text(),' alert)]")private WebElement alertText;


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
		act.type(userName_txt, uNmae);
	}

	public void PswdText(String pwd) {
		act.type(password_txt, pwd);
	}

	public void clickLoginBtn() {
		act.click(driver, login_btn);
	}

	public void checkForAstrickInUsername() {
		String schar = "*";
		String tu = userName_txt.getText();
		if(tu.contains(schar)) {
			System.out.println(" contains special character");
		}else {
			System.out.println("does't contains special character");
		}
	}

	public void checkForAstrickInPswdField() {
		String spchar = "*";
		String tu = password_txt.getText();
		if(tu.contains(spchar)) {
			System.out.println(" contains special character");
		}else {
			System.out.println("does't contains special character");
		}
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

	public void clickOnForgotUsernamePasswordLink() {
		act.click(driver, forgotUnamePswdLinkBtn);
	}

	public void validateForgetUsernamePswdPage() {
		String pageTitle = driver.getTitle();
		Assert.assertEquals("Forgot Username or Password Page",pageTitle);
	}

	public void hhtpResponseCode() throws MalformedURLException, IOException {
		HttpURLConnection cn = (HttpURLConnection)new URL("https://www.forgotusernamePassword-lms.com/index.htm ").openConnection();
		// set HEADER request
		cn.setRequestMethod("HEAD");
		// connection initiate
		cn.connect();
		//get response code
		int res = cn.getResponseCode();
		System.out.println("Http response code: " + res);
	}

	public void validateTextColor() {
		//obtain color in rgba
		String s = emailField.getCssValue("grey");
		// convert rgba to hex
		String c = Color.fromString(s).asHex();
		System.out.println("Hex code for color:" + c);
	}

	public String emailFieldText(String textfield) {
		return emailField.getText();
	}

	public void validateSendLinkBtn() {
		act.isEnabled(driver, sendLink_btn);
	}

	public void validateSpecialChar() {
		String specailChar = "*";
		String t = emailField.getText();
		if(t.contains(specailChar)) {
			System.out.println(" contains special character");
		}
	}

	public  void verifyBrokenLink() {
		String url = act.getCurrentURL(driver);
		try {		

			URL link = new URL(url);
			HttpURLConnection httpURLConnection = (HttpURLConnection) link.openConnection();
			httpURLConnection.setConnectTimeout(3000); // Set connection timeout to 3 seconds
			httpURLConnection.connect();
			if (httpURLConnection.getResponseCode()> 400) {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage()+ " - " + "is a broken link");
			} else {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage() );
			}
		} catch (Exception e) {
			System.out.println(url + " - " + "is a broken link");

		}	
	}

	public void validateSendlinkLocation() {
		int idx1 = sendLink_btn.getLocation().x;
		int idx2 = sendLink_btn.getLocation().y;
		Assert.assertEquals(idx1, idx2);
	}

	public void clickResetPassword() {
		act.click(driver, ResetPassword);
	}

	public void validateResetPasswordPage() {
		String resetPageTitle = driver.getTitle();
		Assert.assertEquals("Reset Password Page",resetPageTitle);
	}

	public void validateSubmitBtnLocation() {
		int idx1 = submit_btn.getLocation().x;
		int idx2 = submit_btn.getLocation().y;
		Assert.assertEquals(idx1, idx2);
	}

	public void validatePswdTextBoxes() {
		act.isDisplayed(driver, typeNewPswd_txt);
		act.isDisplayed(driver, reTypeNewPswd_txt);
	}

	public String validateTextInTypeNewPswdField(String expectedMsg) {
		return typeNewPswd_txt.getText();
	}

	public String  validateTextInReTypeNewPswdField(String expectedMsg) {
		return reTypeNewPswd_txt.getText();
	}

	public void validateTextBoxIsDisabled() {
		boolean anytextfield = typeNewPswd_txt.isEnabled();
		Assert.assertEquals(anytextfield,false);
	}

	public void clicksTypeNewPassword() {
		act.click(driver, typeNewPswd_txt);
	}

	public void clicksReTypeNewPassword() {
		act.click(driver, reTypeNewPswd_txt);
	}

	public void validatePswdTextBoxEnabled() {
		act.isEnabled(driver, typeNewPswd_txt);
	}

	public void NewPasswordTxt(String newPswd) 
	{
		act.type(typeNewPswd_txt, newPswd);
	}


	public void RetypePasswordTxt(String newPswd) 
	{
		act.type(reTypeNewPswd_txt, newPswd);
	}

	public void clickSubmitButton() {
		act.click(driver, submit_btn);
	}

	public String validatePleaseClickToLoginField(String loginMSg)
	{
		act.Alert(driver);
		return alertText.getText();
	}

}


















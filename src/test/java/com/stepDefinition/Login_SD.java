package com.stepDefinition;

import java.awt.AWTException;
import java.io.IOException;
import java.net.MalformedURLException;

import org.junit.Assert;

import com.baseClass.BaseClass;
import com.pageObject.Home_Obj;
import com.pageObject.Login_Obj;
import com.utility.Log;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login_SD extends BaseClass{
	
	private Home_Obj homePage = new Home_Obj();;
	private Login_Obj loginPage = new Login_Obj();
	
	
	@Given("Admin is in home page")
	public void admin_is_in_home_page() {
		homePage.verifyHomePage();
	}

	@When("Admin clicks Login button")
	public void admin_clicks_Login_button() {
	    homePage.clickOnLoginBtn();
	}

	@Then("Admin should land on the login page")
	public void admin_should_land_on_the_login_page() {
	    loginPage.validateLoginPage();
	}

	@Then("Admin should see {string} in the header")
	public void admin_should_see_in_the_header(String pageTitle) {
	    String title = loginPage.getLoginPageHeader();
	    Assert.assertEquals(pageTitle,title);
	}

	@Then("Admin should see two text field")
	public void admin_should_see_two_text_field() {
		loginPage.validateTextbox();
	}

	@Then("Admin should {string} in the first text field")
	public void admin_should_in_the_first_text_field(String userName) {
		loginPage.userNameText(userName);
	}

	@Then("Admin should see * symbol next to user text")
	public void admin_should_see_symbol_next_to_user_text() {
		loginPage.checkForAstrickInUsername();
	}

	@Then("Admin should {string} in the second text field")
	public void admin_should_in_the_second_text_field(String password) {
		loginPage.PswdText(password);
	}

	@Then("Admin should see * symbol next to password text")
	public void admin_should_see_symbol_next_to_password_text() {
		loginPage.checkForAstrickInPswdField();
	}

	@Then("Admin should see input field on the centre of the page")
	public void admin_should_see_input_field_on_the_centre_of_the_page() {
		loginPage.validatePositionOfFields();
	}


	@Then("Admin should see login button on the centre of the page")
	public void admin_should_see_login_button_on_the_centre_of_the_page() {
		loginPage.validatePositionOfLoginButton();
	}


	@Then("Admin should see forgot username or password link")
	public void admin_should_see_forgot_username_or_password_link() {
		loginPage.validateForgetUnamePswd();
	}

	@Then("Admin should see reset password link")
	public void admin_should_see_reset_password_link() {
		loginPage.validateResetPswd();
	}

	@Then("Admin should see password in gray color")
	public void admin_should_see_password_in_gray_color() {
		loginPage.validateColorCode();
	}

	@Given("Admin is in login page")
	public void admin_is_in_login_page() {
		loginPage.validateLoginPage();
	}

	@When("Admin enter valid credentials  and clicks login button")
	public void admin_enter_valid_credentials_and_clicks_login_button() {
		loginPage.userNameText("user1");
		loginPage.PswdText("pswd1");
		loginPage.clickLoginBtn();
	}

	@Then("Admin should land on dashboard page")
	public void admin_should_land_on_dashboard_page() {
		loginPage.validateDashboardPage();
		driver.navigate().to(baseURL);
		loginPage.clickLoginBtn();
	}

	@When("Admin enter invalid credentials  and clicks login button")
	public void admin_enter_invalid_credentials_and_clicks_login_button() {
		loginPage.userNameText("***");
		loginPage.PswdText("/////");
		loginPage.clickLoginBtn();
	}

	@Then("Error message please check username\\/password")
	public void error_message_please_check_username_password() {
		String actualmsg =loginPage.Message("Please Check username/password");
		Assert.assertEquals("Please Check username/password" ,actualmsg);	
	}

	@When("Admin enter valid username  and clicks login button")
	public void admin_enter_valid_username_and_clicks_login_button() {
		loginPage.userNameText("uName");
		loginPage.clickLoginBtn();
	}

	@Then("Error message please check password")
	public void error_message_please_check_password() {
		String actualmsg =loginPage.Message("Please Check password");
		Assert.assertEquals("Please Check password",actualmsg);
	}

	@When("Admin enter valid  password  and clicks login button")
	public void admin_enter_valid_password_and_clicks_login_button() {
		loginPage.PswdText("pwd");
		loginPage.clickLoginBtn();
	}

	@Then("Error message please check username")
	public void error_message_please_check_username() {
		String actualmsg =loginPage.Message("Please Check username");
		Assert.assertEquals("Please Check username",actualmsg);
	}
	
	@When("Admin enter blank in username   and clicks login button")
	public void admin_enter_blank_in_username_and_clicks_login_button() {
		loginPage.userNameText("");
		loginPage.PswdText("pwd");
		loginPage.clickLoginBtn();
	}

	@When("Admin enter blank in password  and clicks login button")
	public void admin_enter_blank_in_password_and_clicks_login_button() {
		loginPage.userNameText("uName");
		loginPage.PswdText("");
		loginPage.clickLoginBtn();
	}

	@When("Admin clicks Login button with empty values in both columns")
	public void admin_clicks_Login_button_with_empty_values_in_both_columns() {
		loginPage.userNameText("");
		loginPage.PswdText("");
		loginPage.clickLoginBtn();
	}


	@When("Admin enter valid credentials  and clicks login button through keyboard")
	public void admin_enter_valid_credentials_and_clicks_login_button_through_keyboard() throws AWTException {
		loginPage.userNameText("uName");
		loginPage.PswdText("pwd");
		loginPage.keyboardClick();
	}

	@When("Admin enter valid credentials  and clicks login button through mouse")
	public void admin_enter_valid_credentials_and_clicks_login_button_through_mouse() {
		loginPage.userNameText("uName");
		loginPage.PswdText("pwd");
		loginPage.mouseClick();
	}

	@When("Admin clicks forgot username or password link")
	public void admin_clicks_forgot_username_or_password_link() {
		driver.navigate().back();
		loginPage.clickOnForgotUsernamePasswordLink();
	}

	@Then("Admin should land on forgot username or password page")
	public void admin_should_land_on_forgot_username_or_password_page() {
		loginPage.validateForgetUsernamePswdPage();
	}

	@Then("HTTP response >= {int}.")
	public void http_response(Integer int1) throws MalformedURLException, IOException {
		//loginPage.hhtpResponseCode(res);
		loginPage.verifyBrokenLink();
		Log.logInfo("Validate Broken Link");
	}

	@Then("Admin should see {string} text in gray color")
	public void admin_should_see_text_in_gray_color(String string) {
		loginPage.validateTextColor();
	}


	@Then("Admin should see {string} in text field")
	public void admin_should_see_in_text_field(String string) {
		String emailFieldMsg =loginPage.emailFieldText("Email");
		Assert.assertEquals("Email",emailFieldMsg);
	}


	@Then("Admin should see {string}  button")
	public void admin_should_see_button(String string) {
	    loginPage.validateSendLinkBtn();
	}


	@Then("Admin should see asterik symbol need Email")
	public void admin_should_see_asterik_symbol_need_Email() {
		loginPage.validateSpecialChar();
	}


	@Then("Admin should see send link button in center of the page")
	public void admin_should_see_send_link_button_in_center_of_the_page() {
		loginPage.validateSendlinkLocation();
		driver.navigate().back();
	}
	
	@When("Admin clicks reset password link")
	public void admin_clicks_reset_password_link() {
		loginPage.clickResetPassword();
	}

	@Then("Admin should land on reset password page")
	public void admin_should_land_on_reset_password_page() {
		loginPage.validateResetPasswordPage();
	}

	@Then("Admin should see submit button in center of the page")
	public void admin_should_see_submit_button_in_center_of_the_page() {
		loginPage.validateSubmitBtnLocation();
	}

	@Then("Admin should see two text box")
	public void admin_should_see_two_text_box() {
	    loginPage.validatePswdTextBoxes();
	}
	
	@Then("Admin should see {string} in the first label text")
	public void admin_should_see_in_the_first_label_text(String expectedmsg) {
		String actualmssg =loginPage.validateTextInTypeNewPswdField(expectedmsg);
		Assert.assertEquals(expectedmsg,actualmssg);
	}

	@Then("Admin should see {string} in the second label text")
	public void admin_should_see_in_the_second_label_text(String expectePswddmsg) {
		String actualPswdmssg =loginPage.validateTextInReTypeNewPswdField(expectePswddmsg);
		Assert.assertEquals(expectePswddmsg,actualPswdmssg);
	}

	@Then("Admin should see text box in disabled state")
	public void admin_should_see_text_box_in_disabled_state() {
		loginPage.validateTextBoxIsDisabled();
	}

	@Given("Admin reset password page")
	public void admin_reset_password_page() {
		loginPage.validateResetPasswordPage();
	}

	@When("Admin clicks on type in new password field")
	public void admin_clicks_on_type_in_new_password_field() {
		loginPage.clicksTypeNewPassword();
	}

	@Then("Admin should see text box is enabled state")
	public void admin_should_see_text_box_is_enabled_state() {
	    loginPage.validatePswdTextBoxEnabled();
	}
	
	@When("Admin clicks on retype password field")
	public void admin_clicks_on_retype_password_field() {
		loginPage.clicksReTypeNewPassword();
	}

	@When("Admin enters same password on both field and clicks submit button")
	public void admin_enters_same_password_on_both_field_and_clicks_submit_button() {
		loginPage.NewPasswordTxt("password");
		loginPage.RetypePasswordTxt("password");
		loginPage.clickSubmitButton();
	}

	@Then("Admin should recieve  : {string}. Please click here to login")
	public void admin_should_recieve_Please_click_here_to_login(String expecMsg) {
		String loginMsg = loginPage.validatePleaseClickToLoginField(expecMsg);
		Assert.assertEquals(expecMsg, loginMsg);
	}

	@When("Admin enters same password on both field with invalid details and clicks submit button")
	public void admin_enters_same_password_on_both_field_with_invalid_details_and_clicks_submit_button() {
		loginPage.NewPasswordTxt("password;;;");
		loginPage.RetypePasswordTxt("password;;;");
		loginPage.clickSubmitButton();
	}

	@Then("Error message {string}")
	public void error_message(String errorMSg) {
		String errorMsg = "Please try again";
		String actualmsg =loginPage.Message(errorMsg);
		Assert.assertEquals(errorMsg,actualmsg);
	}

	@When("Admin enters  empty details on both fieldand clicks submit button")
	public void admin_enters_empty_details_on_both_fieldand_clicks_submit_button() {
		loginPage.NewPasswordTxt("");
		loginPage.RetypePasswordTxt("");
		loginPage.clickSubmitButton();
	}

	@When("Admin enters  mismatch values and clicks submit button")
	public void admin_enters_mismatch_values_and_clicks_submit_button() {
		loginPage.NewPasswordTxt("password");
		loginPage.RetypePasswordTxt("pass");
		loginPage.clickSubmitButton();
	}



}

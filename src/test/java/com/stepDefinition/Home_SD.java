package com.stepDefinition;

import com.baseClass.BaseClass;
import com.pageObject.Home_Obj;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Home_SD extends BaseClass{

	private Home_Obj home= new Home_Obj();

	@Given("Admin launch the browser")
	public void admin_launch_the_browser() {

		String strUrl = driver.getCurrentUrl();

		if (strUrl.equals(baseURL)) {
			System.out.println("They're equal"); 
		}

		else 
			System.out.println("They're not equal"); 
	}

	@When("Admin gives the correct LMS portal URL")
	public void admin_gives_the_correct_LMS_portal_URL() {

		String strUrl = driver.getCurrentUrl();

		if (strUrl.equals(baseURL)) {
			System.out.println("They're equal"); 
		}

		else 
			System.out.println("They're not equal"); 
	}
	//		Assert.assertEquals(String baseURL, String strUrl);

	@Then("Admin should land on the home page")
	public void admin_should_land_on_the_home_page() {
		home.verifyHomePage();
	}

	@When("Admin gives the invalid LMS portal URL")
	public void admin_gives_the_invalid_LMS_portal_URL() {
		home.verifyLink(baseURL);
	}

	@Then("Admin should recive {int} page not fount error")
	public void admin_should_recive_page_not_fount_error(Integer int1) {
		home.verifyLink(baseURL);
	}

	@Then("HTTP response >= {int}")
	public void http_response(Integer int1) {
		home.verifyLink(baseURL);
	}

	@Then("the link is broken")
	public void the_link_is_broken() {
		home.verifyLink(baseURL);
	}

	@Then("Admin should see correct spellings in all fields")
	public void admin_should_see_correct_spellings_in_all_fields() {
		// Write code here that turns the phrase above into concrete actions
		throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see correct logo of the LMS")
	public void admin_should_see_correct_logo_of_the_LMS() {
		home.verifyLogo(); 
	}

	@Then("Admin should see logo is properly aligned")
	public void admin_should_see_logo_is_properly_aligned() {
		home.verifyLogoAllignment();
	}

	@Then("Admin should see login button")
	public void admin_should_see_login_button() {

		home.verifyLoginBtn();

	}

	@Then("Admin should able to click the Login button")
	public void admin_should_able_to_click_the_Login_button() {

		home.clickOnLoginBtn();

	}


}

package com.stepDefinition;

import com.baseClass.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Batch extends BaseClass{
	
	
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
	   Initialization();
	}

	@When("Admin clicks Batch from navigation bar")
	public void admin_clicks_Batch_from_navigation_bar() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see the {string} in the URL")
	public void admin_should_see_the_in_the_URL(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

}

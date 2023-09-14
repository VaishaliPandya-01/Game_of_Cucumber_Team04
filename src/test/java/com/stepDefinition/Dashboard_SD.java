package com.stepDefinition;

import org.junit.Assert;

import com.baseClass.BaseClass;
import com.pageObject.Dashboard_Obj;
import com.pageObject.Login_Obj;
import com.utility.Log;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Dashboard_SD extends BaseClass{

	private Dashboard_Obj dashboardPage = new Dashboard_Obj();
	private Login_Obj login = new Login_Obj();

	private long startTime;
	private long endTime;

	//validate manage program header
	@Then("Admin should see manage program as header")
	public void admin_should_see_manage_program_as_header(String expectedText) {
		String actualText=dashboardPage.validateDashboardHeaderText();
		Assert.assertEquals(expectedText, actualText);
		Log.logInfo("Validate Manage Program Title"+actualText);
	}

	@Then("Maximum navigation time in milliseconds, defaults to {int} seconds")
	public void maximum_navigation_time_in_milliseconds_defaults_to_seconds(Integer int1) {
		long responseTime = endTime - startTime;
		Log.logInfo("Response time:  "+ responseTime +" milliseconds");
		Log.logInfo("Validate ResponseTime");
	}

	//validate broken link
	@Then("HTTP response >= {int}. Then the link is broken")
	public void http_response_Then_the_link_is_broken(Integer int1) {
		dashboardPage.verifyBrokenLink();
		Log.logInfo("Validate Broken Link");
	}

	//Validate dashboard page Title
	@Then("Admin should see LMS -Learning management system  as title")
	public void admin_should_see_LMS_Learning_management_system_as_title(String expectedPageTitle) {
		String actualTitle=dashboardPage.verifyDashboardPageTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Manage Program Title"+actualTitle);
	}

	//validate allignment of title
	@Then("LMS title should be on the top left corner of page")
	public void lms_title_should_be_on_the_top_left_corner_of_page() {
		Assert.assertEquals("Left",dashboardPage.alignmentManageHeader());
		Log.logInfo("Validate Alignment of Header");
	}

	//check correct spellings
	@Then("Admin should see correct spelling in navigation bar text")
	public void admin_should_see_correct_spelling_in_navigation_bar_text() {
		dashboardPage.spellCheckFunction();
		Log.logInfo("Validate spellings");
	}

	//checkk Spellings
	@Then("Admin should see correct spelling and space in LMS title")
	public void admin_should_see_correct_spelling_and_space_in_LMS_title() {
		dashboardPage.spellCheckFunction();
		Log.logInfo("Validate spellings");
	}

	//validate navigation bar allignment
	@Then("Admin should see the navigation bar text on the top right side")
	public void admin_should_see_the_navigation_bar_text_on_the_top_right_side() {
		Assert.assertEquals("Right",dashboardPage.navigationBarAllignment());
		Log.logInfo("Validate Alignment of Header");
	}

	@Then("Admin should see student in the 1st place")
	public void admin_should_see_student_in_the_1st_place() {
		dashboardPage.validateStudentModule();
	}

	@Then("Admin should see program in the 2nd place")
	public void admin_should_see_program_in_the_2nd_place() {
		dashboardPage.validateProgramModule();
	}

	@Then("Admin should see batch in the 3rd place")
	public void admin_should_see_batch_in_the_3rd_place() {
		dashboardPage.validateBatchModule();
	}

	@Then("Admin should see class in the 4th place")
	public void admin_should_see_class_in_the_4th_place() {
		dashboardPage.validateClassModule();
	}

	@Then("Admin should see user in the  5th")
	public void admin_should_see_user_in_the_5th() {
		dashboardPage.validateUserModule();
	}

	@Then("Admin should see  assignment in the  6th")
	public void admin_should_see_assignment_in_the_6th() {
		dashboardPage.validateAssignmentModule();
	}

	@Then("Admin should see  attendance in the  7th")
	public void admin_should_see_attendance_in_the_7th() {
		dashboardPage.validateAttendanceModule();
	}

	@Then("Admin should see logout in the 8th")
	public void admin_should_see_logout_in_the_8th() {
		dashboardPage.validateLogoutModule();
	}

	//validate dashboard page
	@Given("Admin is in dashboard page")
	public void admin_is_in_dashboard_page() {
		dashboardPage.validateDashboardPage();
	}

	@When("Admin click Logout button on navigation bar")
	public void admin_click_Logout_button_on_navigation_bar() {
		dashboardPage.clickLogoutBtn();
	}

	@Then("Admin should land on login in page")
	public void admin_should_land_on_login_in_page() {
		login.validateLoginPage();
	}

}

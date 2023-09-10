package com.stepDefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import com.baseClass.BaseClass;
import org.junit.Assert;
import com.pageObject.Attendance_Manage;

public class Attendance_steps extends BaseClass{
	Attendance_Manage att_manager = new Attendance_Manage();
	
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
		Initialization();
		System.out.println("First Given");	
	}

	@When("Admin clicks {string} on the navigation bar")
	public void admin_clicks_on_the_navigation_bar(String string) {
		if (string.equals("Attendance")) {	
			att_manager.AttendanceButtonHeader();
		}
	}
	//Validate the header of the page
	@Then("Admin should see the {string} in header")
	public void admin_should_see_the_Manage_attendance_in_header(String Heading) {
		String ManageTitle = att_manager.getTitle();
		Assert.assertTrue(ManageTitle.contains(Heading));
	}
	//Validate response time
	@Then("Maximum navigation time in milliseconds, defaults to {int} seconds")
	public void maximum_navigation_time_in_milliseconds_defaults_to_seconds(Integer int1) {
	    
	    
	}
	//Validate the broken link
	@Then("HTTP response >= {int}. Then the link is broken")
	public void http_response_Then_the_link_is_broken(Integer int1) {
	    
	    
	}
	//Verify LMS title
	@Then("Admin should see {string}  as title")
	public void admin_should_see_LMS_Learning_management_system_as_title(String expectedtitle) {
		String ActualTitle = att_manager.getTitle();
		Assert.assertEquals(ActualTitle,expectedtitle);    
	}

	//Verify the alignment of the Manage Attendance header
	@Then("Manage attendance header should be in left side of the page")
	public void manage_attendance_header_should_be_in_left_side_of_the_page() {
	    
	    
	}


	@Then("Admin should see correct spelling for the all the fields in get all text from the portal page")
	public void admin_should_see_correct_spelling_for_the_all_the_fields() {
	    
	    
	}

	@Then("Admin should see disabled delete icon below the {string}")
	public void admin_should_see_disabled_delete_icon_below_the(String string) {
	    
	    
	}

	@Then("Admin should see search bar on the attendance page")
	public void admin_should_see_search_bar_on_the_attendance_page() {
	    
	    
	}

	@Then("Admin should see +Add New Attendance button on the attendance page")
	public void admin_should_see_Add_New_Attendance_button_on_the_attendance_page() {
	    
	    
	}

	@Then("Admin should see data table on the Manage Attendance Page With following column headers.")
	public void admin_should_see_data_table_on_the_Manage_Attendance_Page_With_following_column_headers_Check_box_symbol_Class_ID_Student_Id_Preasent_Edit_Delete() {
	    
	    
	}

	@Then("Edit Icon in each row of data table only  when entries are available")
	public void edit_Icon_in_each_row_of_data_table_only_when_entries_are_available() {
	    
	    
	}

	@Then("Edit Icon will not be present in data table")
	public void edit_Icon_will_not_be_present_in_data_table() {
	    
	    
	}

	@Then("Delete Icon in each row of data table only  when entries are available")
	public void delete_Icon_in_each_row_of_data_table_only_when_entries_are_available() {
	    
	    
	}

	@Then("Admin cant see delete  Icon in data table")
	public void admin_cant_see_delete_Icon_in_data_table() {
	    
	    
	}

	@Then("Admin should see sort icon near the column headers except for Edit and Delete")
	public void admin_should_see_sort_icon_near_the_column_headers_except_for_Edit_and_Delete() {
	    
	    
	}

	@Then("Admin should see check box in the all rows  of data table")
	public void admin_should_see_check_box_in_the_all_rows_of_data_table() {
	    
	    
	}

	@Then("Above the footer Admin should see the text as {string} below the table.")
	public void above_the_footer_Admin_should_see_the_text_as_below_the_table(String string) {
	    
	    
	}

	@Then("Admin should see the pagination controls under the data table")
	public void admin_should_see_the_pagination_controls_under_the_data_table() {
	    
	    
	}

	@Then("Admin should see the text with total number classes in the data table. \\( {string})")
	public void admin_should_see_the_text_with_total_number_classes_in_the_data_table(String string) {
	    
	    
	}




}

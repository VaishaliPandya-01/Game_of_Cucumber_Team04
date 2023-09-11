package com.stepDefinition;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import com.baseClass.BaseClass;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import com.pageObject.Attendance_Manage;
import com.pageObject.Attendance_Details;
import com.pageObject.Attendance_Delete;
import com.pageObject.Attendance_Ref;

public class Attendance_SD extends BaseClass{
	
	private Attendance_Manage att_manager = new Attendance_Manage();
	private Attendance_Details att_details = new Attendance_Details();
	private Attendance_Delete att_delete = new Attendance_Delete();
	private Attendance_Ref att_Ref = new Attendance_Ref();
	
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
		Initialization();
		System.out.println("First Given");	
	}

	@When("Admin clicks {string} on the navigation bar")
	public void admin_clicks_on_the_navigation_bar(String string) {
		if (string.equals("Attendance")) {	
			att_manager.AttendncBtn_onNav();
		}
	}
	//Validate the header of the page
	@Then("Admin should see the {string} in header")
	public void admin_should_see_the_Manage_attendance_in_header(String Heading) {
		String HeaderText = att_manager.GetTextManageAttendanceHeader();
		Assert.assertEquals(HeaderText,Heading);
	}
	//Validate response time
	@Then("Maximum navigation time in milliseconds, defaults to {int} seconds for Attendance Module")
	public void maximum_navigation_time_in_milliseconds_defaults_to_seconds(Integer int1) {
	    
	    
	}
	//Validate the broken link
	@Then("HTTP response >= {int}. Then the link is broken")
	public void http_response_Then_the_link_is_broken(Integer int1) {
		att_manager.verifyBrokenLink();
	    
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
	   
	    Assert.assertEquals("Left",att_manager.alignmentManageHeader());
	    
	}

	//Validate text spelling in manage attendancepage
	@Then("Admin should see correct spelling for the all the fields in get all text from the portal page")
	public void admin_should_see_correct_spelling_for_the_all_the_fields() {
	    
	    
	}

	@Then("Admin should see disabled delete icon below the {string}")
	public void admin_should_see_disabled_delete_icon_below_the(String string) {
	    Assert.assertFalse(att_manager.checkDeleteiconDisabled());
	    
	}

	@Then("Admin should see search bar on the attendance page")
	public void admin_should_see_search_bar_on_the_attendance_page() {
	    Assert.assertTrue(att_manager.searchBarVisibility());
	    
	}

	@Then("Admin should see +Add New Attendance button on the attendance page")
	public void admin_should_see_Add_New_Attendance_button_on_the_attendance_page() {
	    
	    Assert.assertTrue(att_manager.CheckaddNewSymbolDisplayed());
	}

	@Then("Admin should see data table on the Manage Attendance Page With following column headers.")
	public void admin_should_see_data_table_on_the_Manage_Attendance_Page_With_following_column_headers_Check_box_symbol_Class_ID_Student_Id_Preasent_Edit_Delete() {
	    Assert.assertTrue(att_manager.commonCheckboxSymbolDisplayed());
	    Assert.assertTrue(att_manager.CheckStudentIDDisplayed());
	    Assert.assertTrue(att_manager.CheckClassIDDisplayed());
	    Assert.assertTrue(att_manager.CheckPreasentDisplayed());
	    Assert.assertTrue(att_manager.CheckEditTextDisplayed());
	    Assert.assertTrue(att_manager.CheckDeleteTextDisplayed());
	    
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

	///////*******************Attendance Details Feature ****************************///////
	
	@Given("Admin is in manage attendance page")
	public void admin_is_in_manage_attendance_page() {
	    
	    
	}

	@When("Admin clicks + a new attendance button")
	public void admin_clicks_a_new_attendance_button() {
	    
	    
	}

	@Then("Admin should see correct spellings in the label for Attendance Module")
	public void admin_should_see_correct_spellings_in_the_label() {
	    
	    
	}

	@Then("Four dropdown should be present for Attendance Module")
	public void four_dropdown_should_be_present() {
	    
	    
	}

	@Then("Admin should see  close button on the attendance details popup window")
	public void admin_should_see_close_button_on_the_attendance_details_popup_window() {
	    
	    
	}

	@Then("Close button should on the top right corner for Attendance Module")
	public void close_button_should_on_the_top_right_corner() {
	    
	    
	}

    @Then("First dropdown box {string} text  should be present for Attendance Module")
	public void first_dropdown_box_text_should_be_present(String string) {
	    
	    
	}

	@Then("Second dropdown box {string} text  should be present for Attendance Module")
	public void second_dropdown_box_text_should_be_present(String string) {
	    
	    
	}

	@Then("Third dropdown box {string} text  should be present for Attendance Module")
	public void third_dropdown_box_text_should_be_present(String string) {
	    
	    
	}

	@Then("Fourth dropdown box {string} text  should be present for Attendance Module")
	public void fourth_dropdown_box_text_should_be_present(String string) {
	    
	    
	}

	@Then("Admin  should text in gray color for Attendance Module")
	public void admin_should_text_in_gray_color() {
	    
	    
	}

	@Then("Admin should see  save button in the class detail popup window for Attendance Module")
	public void admin_should_see_save_button_in_the_class_detail_popup_window() {
	    
	    
	}

	@Then("Admin should see  cancel button in the class detail popup window for Attendance Module")
	public void admin_should_see_cancel_button_in_the_class_detail_popup_window() {
	    
	    
	}

	@Then("Order of the label should be Program name, Class Name, Student Name, Attendance, Attendance Date.")
	public void order_of_the_label_should_be_Program_name_Class_Name_Student_Name_Attendance_Attendance_Date() {
	    
	    
	}
	@When("Admin clicks  program name dropdown for Attendance Module")
	public void admin_clicks_program_name_dropdown_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Program Name in the drop down  for Attendance Module should match with  program name in  manage program page table")
	public void program_Name_in_the_drop_down_for_Attendance_Module_should_match_with_program_name_in_manage_program_page_table() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks class name dropdown for Attendance Module")
	public void admin_clicks_class_name_dropdown_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Class Name in the drop down should match with  class name in  manage class page table")
	public void class_Name_in_the_drop_down_should_match_with_class_name_in_manage_class_page_table() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks attendance dropdown for Attendance Module")
	public void admin_clicks_attendance_dropdown_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Attendance field should have keywords such as - present, absent, late, excused")
	public void attendance_field_should_have_keywords_such_as_present_absent_late_excused() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}



	@Then("Admin should see correct spellings in dropdown text for Attendance Module")
	public void admin_should_see_correct_spellings_in_dropdown_text_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("selected date should be their in class date text box for Attendance Module")
	public void selected_date_should_be_their_in_class_date_text_box_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks date from date picker for Attendance Module")
	public void admin_clicks_date_from_date_picker_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("selected date should be in  mm\\/dd\\/yyyy format for Attendance Module")
	public void selected_date_should_be_in_mm_dd_yyyy_format_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks right arrow in the date picker near month for Attendance Module")
	public void admin_clicks_right_arrow_in_the_date_picker_near_month_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Next month calender should visible for Attendance Module")
	public void next_month_calender_should_visible_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks left arrow in the date picker near month for Attendance Module")
	public void admin_clicks_left_arrow_in_the_date_picker_near_month_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("previous month calender should visible for Attendance Module")
	public void previous_month_calender_should_visible_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks date picker button for Attendance Module")
	public void admin_clicks_date_picker_button_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see current date is highled in the date picker for Attendance Module")
	public void admin_should_see_current_date_is_highled_in_the_date_picker_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks date picker button and selects future date for Attendance Module")
	public void admin_clicks_date_picker_button_and_selects_future_date_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see selected date is highled in the date picker for Attendance Module")
	public void admin_should_see_selected_date_is_highled_in_the_date_picker_for_Attendance_Module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}



////////////******************** Add New Attendance Page ************//////////////////////
	
	
	@Then("Admin is in  attendance details popup window")
	public void admin_is_in_attendance_details_popup_window() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin fills all the values and click save for Attendance module")
	public void admin_fills_all_the_values_and_click_save_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see success message in popup window and sees new attendance details in manage attendance details DB")
	public void admin_should_see_success_message_in_popup_window_and_sees_new_attendance_details_in_manage_attendance_details_DB() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@When("Admin fills values missing {string} and click save for Attendance module")
	public void admin_fills_values_missing_and_click_save_for_Attendance_module(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Message displays {string} is missing  for Attendance module")
	public void message_displays_is_missing_for_Attendance_module(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@When("Admin fills values with future date  and click save for Attendance module")
	public void admin_fills_values_with_future_date_and_click_save_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Invalidate attendance date")
	public void invalidate_attendance_date() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	//////////////************ Edit Attendance***************//////////////////////////
	
	
	@When("Admin clicks edit icon button on Attendence Manage page")
	public void admin_clicks_edit_icon_button_on_Attendence_Manage_page() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}
	
	
	
/////////////********************* Single Delete Attendance ********///////////////////////////
	
	
	@When("Admin clicks delete button in data table row level for Attendance module")
	public void admin_clicks_delete_button_in_data_table_row_level_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Admin should see alert for Attendance module")
	public void admin_should_see_alert_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("Alert should have {string} button to accept for Attendance module")
	public void alert_should_have_button_to_accept_for_Attendance_module(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("Alert should have {string} button to reject for Attendance module")
	public void alert_should_have_button_to_reject_for_Attendance_module(String string) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@Then("Admin should see Delete alert for Attendance module")
	public void admin_should_see_Delete_alert_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@When("Admin clicks yes button for Attendance module")
	public void admin_clicks_yes_button_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Success message and selected attendance details are deleted from the data table")
	public void success_message_and_selected_attendance_details_are_deleted_from_the_data_table() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}


	@When("Admin clicks no button for Attendance module")
	public void admin_clicks_no_button_for_Attendance_module() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("Redirected attendance page and selected attendance details are not deleted from the data table")
	public void redirected_attendance_page_and_selected_attendance_details_are_not_deleted_from_the_data_table() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}






	
	



}

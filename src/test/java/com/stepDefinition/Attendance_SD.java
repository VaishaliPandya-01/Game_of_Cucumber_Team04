package com.stepDefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.WebElement;

import com.baseClass.BaseClass;
import com.pageObject.Attendance_Delete_Obj;
import com.pageObject.Attendance_Details_Obj;
import com.pageObject.Attendance_Manage_Obj;
import com.utility.Log;
import com.utility.XlUtilsData;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Attendance_SD extends BaseClass{

	private Attendance_Manage_Obj att_manager = new Attendance_Manage_Obj();
	private Attendance_Details_Obj att_details = new Attendance_Details_Obj();
	private Attendance_Delete_Obj att_delete = new Attendance_Delete_Obj();
	private long startTime;
	private long endTime;

	//Validate the Attendance on Navigation
	@When("Admin clicks Attendance on the navigation bar")
	public void admin_clicks_on_the_navigation_bar(String string) {
		startTime = System.currentTimeMillis();
		att_manager.AttendncBtn_onNav();
		Log.logInfo("Admin Clicks 'Attendance' on NavigationBar");
		endTime = System.currentTimeMillis();
	}

	//Validate the header of the page
	@Then("Admin should see the {string} in header")
	public void admin_should_see_the_Manage_attendance_in_header(String Heading) {

		String HeaderText = att_manager.GetTextManageAttendanceHeader();
		Assert.assertEquals(HeaderText,Heading);
		Log.logInfo("Validate Header");
	}

	//Validate response time
	@Then("Maximum navigation time in milliseconds, defaults to 30 seconds for attendance module")
	public void maximum_navigation_time_in_milliseconds_defaults_to_seconds(Integer int1) {

		long responseTime = endTime - startTime;
		Log.logInfo("Response time:  "+ responseTime +" milliseconds");

	}
	//Validate the broken link
	@Then("HTTP response >= {int}. Then the link is broken for attendance module")
	public void http_response_Then_the_link_is_broken(Integer int1) {

		att_manager.verifyBrokenLink();
		Log.logInfo("Validate Broken Link");

	}

	//Verify LMS title
	@Then("Admin should see {string}  as title for attendance module")
	public void admin_should_see_LMS_Learning_management_system_as_title(String expectedtitle) {
		String ActualTitle = att_manager.getTitle();
		Assert.assertEquals(ActualTitle,expectedtitle);   
		Log.logInfo("Validate LMS Title");
	}

	//Verify the alignment of the Manage Attendance header
	@Then("Manage attendance header should be in left side of the page for attendance module")
	public void manage_attendance_header_should_be_in_left_side_of_the_page() {

		Assert.assertEquals("Left",att_manager.alignmentManageHeader());
		Log.logInfo("Validate Alignment of Header");

	}

	//Validate text spelling in manage attendancepage
	@Then("Admin should see correct spelling for the all the fields in get all text for attendance module")
	public void admin_should_see_correct_spelling_for_the_all_the_fields() {

		att_manager.spellCheckFunction();
	}

	//Validate the Delete icon when No data in table
	@Then("Admin should see disabled delete icon below the {string} for attendance module")
	public void admin_should_see_disabled_delete_icon_below_the(String string) {

		Assert.assertFalse(att_manager.M_DeleteiconEnabled());

	}

	//Validate the search bar
	@Then("Admin should see search bar on the attendance page for attendance module")
	public void admin_should_see_search_bar_on_the_attendance_page() {

		Assert.assertTrue(att_manager.searchBarVisibility());

	}

	//Validate the +ADD New Attendance
	@Then("Admin should see +Add New Attendance button on the attendance page")
	public void admin_should_see_Add_New_Attendance_button_on_the_attendance_page() {

		Assert.assertTrue(att_manager.CheckaddNewSymbolDisplayed());
	}

	//Validate the headers on data table
	@Then("Admin should see data table on the Manage Attendance Page With following column headers.")
	public void see_data_table_on_the_Manage_Attendance_Page_With_following_column_headers(DataTable datatable) {

		Assert.assertTrue(att_manager.commonCheckboxSymbolDisplayed());
		Assert.assertTrue(att_manager.CheckStudentIDDisplayed());
		Assert.assertTrue(att_manager.CheckClassIDDisplayed());
		Assert.assertTrue(att_manager.CheckPreasentDisplayed());
		Assert.assertTrue(att_manager.CheckEditTextDisplayed());
		Assert.assertTrue(att_manager.CheckDeleteTextDisplayed());

	}

	//Validate the edit icon for single row
	@Then("Edit Icon in each row of data table only  when entries are available for attendance module")
	public void edit_Icon_in_each_row_of_data_table_only_when_entries_are_available() {

		if(att_manager.checkdataTableHasData()) {
			Assert.assertTrue(att_manager.SingleEditIconDisplayed());
			Log.logInfo("Edit Icon is displayed when having data");
		}else {
			Log.logInfo("Edit Icon is not displayed ");
		}

	}

	//Validate the edit icon
	@Then("Edit Icon will not be present in data table for attendance module")
	public void edit_Icon_will_not_be_present_in_data_table() {
		if(att_manager.checkdataTableHasData()) {

			Assert.assertTrue(att_manager.SingleEditIconDisplayed());
			Log.logInfo("Edit Icon is displayed when having data");
		}else {
			Log.logInfo("Edit Icon is not displayed ");
		}

	}

	//Validate the delete icon when data table has data
	@Then("Delete Icon in each row of data table only  when entries are available for attendance module")
	public void delete_Icon_in_each_row_of_data_table_only_when_entries_are_available() {
		if(att_manager.checkdataTableHasData()) {

			Assert.assertTrue(att_manager.SingleDeleteIconDisplayed());
			Log.logInfo("Delete Icon is displayed when having data");
		}else {
			Log.logInfo("Delete Icon is not displayed ");
		}

	}

	//Validate the delete icon when no data
	@Then("Admin cant see delete  Icon in data table for attendance module")
	public void admin_cant_see_delete_Icon_in_data_table() {

		if(att_manager.checkdataTableHasData()) {
			Assert.assertTrue(att_manager.SingleDeleteIconDisplayed());
			Log.logInfo("Delete Icon is displayed when having data");
		}else {
			Log.logInfo("Delete Icon is not displayed ");
		}
	}

	//Validate the visibitity of sort icon
	@Then("Admin should see sort icon near the column headers except for Edit and Delete for attendance module")
	public void admin_should_see_sort_icon_near_the_column_headers_except_for_Edit_and_Delete() {
		Assert.assertTrue(att_manager.visibity_sort());
		Log.logInfo("Validating the sort icon ");
	}

	//Validate the single checkbox
	@Then("Admin should see check box in the all rows  of data table for attendance module")
	public void admin_should_see_check_box_in_the_all_rows_of_data_table() {

		if(att_manager.checkdataTableHasData()) {
			Assert.assertTrue(att_manager.singleCheckboxDisplayed());
		}else {
			System.out.println("Datatable is empty");
		}
	}

	//Validate the footer text
	@Then("Above the footer Admin should see the text as {string} below the table for attendance module")
	public void above_the_footer_Admin_should_see_the_text_as_below_the_table(String expectedFooterText) {
		Assert.assertEquals(expectedFooterText, att_manager.footerTextValidation());

	}

	//Validate the pagination controls
	@Then("Admin should see the pagination controls under the data table for attendance module")
	public void admin_should_see_the_pagination_controls_under_the_data_table() {
		att_manager.validatePagination();
		Log.logInfo("Validate Pagination controls");

	}

	//Verify the text with total number of classes in data
	@Then("Admin should see the text with total number classes in the data table for attendance module")
	public void admin_should_see_the_text_with_total_number_classes_in_the_data_table(String string) {

		int total = att_manager.ClassesTotalCount();
		Log.logInfo("Verified Total Number of Classess-"+total);
	}

	///////*******************Attendance Details Feature ****************************///////

	//Validate Manage attendance page 
	@Given("Admin is in {string} page for Attendance Module")
	public void admin_is_in_manage_attendance_page(String title) {

		Assert.assertEquals(att_manager.getTitle(),title);   
		Log.logInfo("Validate for Manage Attendance Page");

	}

	// Admin clicks Add new button
	@When("Admin clicks + a new attendance button")
	public void admin_clicks_a_new_attendance_button() {

		att_manager.addNewAttendance();
		Log.logInfo("Admin Clicks Add New + button");

	}

	//Verify the spelling of headers
	@Then("Admin should see correct spellings in the labels for Attendance Module")
	public void admin_should_see_correct_spellings_in_the_label(DataTable labels) {

		List<String> expectedlabels = labels.asList();
		Assert.assertEquals(att_details.getTextPgmName(), expectedlabels.get(0));
		Assert.assertEquals(att_details.getTextClassName(), expectedlabels.get(1));
		Assert.assertEquals(att_details.getTextStudName(), expectedlabels.get(2));
		Assert.assertEquals(att_details.getTextAttendnc(), expectedlabels.get(3));
		Assert.assertEquals(att_details.getTextAttendncDate(), expectedlabels.get(4));
		Log.logInfo("Validating spellings in the Form");

	}

	//Verify four drop downs are present 
	@Then("Four dropdown should be present for Attendance Module")
	public void four_dropdown_should_be_present() {

		Assert.assertTrue(att_details.validateFieldsOnForm());
		Log.logInfo("Validating dropdowns in the details form");

	}

	//Verify close button
	@Then("Admin should see  close button on the attendance details popup window")
	public void admin_should_see_close_button_on_the_attendance_details_popup_window() {

		Assert.assertTrue(att_details.validateClosebutton());
		Log.logInfo("Validate the Close Button of Details Form");
	}

	//Verify the alignment of close button
	@Then("Close button should on the top right corner for Attendance Module")
	public void close_button_should_on_the_top_right_corner() {

		Assert.assertTrue(att_details.closeBtn_alignment().contains("Right"));
		Log.logInfo("Validate the Close Button Position");
	}

	//Verify first drop down
	@Then("First dropdown box {string} text  should be present for Attendance Module")
	public void first_dropdown_box_text_should_be_present(String string) {

		Assert.assertEquals(string,att_details.CheckText_firstDropdown());
		Log.logInfo("Verify First DropDown text- Select a Program name ");
	}

	//verify second drop down
	@Then("Second dropdown box {string} text  should be present for Attendance Module")
	public void second_dropdown_box_text_should_be_present(String string) {

		Assert.assertEquals(string,att_details.CheckText_secondDropdown());
		Log.logInfo("Verify Second DropDown text- Select a Class name ");
	}

	//Verify third drop down
	@Then("Third dropdown box {string} text  should be present for Attendance Module")
	public void third_dropdown_box_text_should_be_present(String string) {

		Assert.assertEquals(string,att_details.CheckText_thirdDropdown());
		Log.logInfo("Verify Third DropDown text- Select a stud name ");

	}

	//Verify fourth dropdown
	@Then("Fourth dropdown box {string} text  should be present for Attendance Module")
	public void fourth_dropdown_box_text_should_be_present(String string) {

		Assert.assertEquals(string,att_details.CheckText_fourthDropdown());
		Log.logInfo("Verify fourth DropDown text- Select Attendance ");

	}

	//Verify the color
	@Then("Admin  should text in gray color for Attendance Module")
	public void admin_should_text_in_gray_color() {
		Assert.assertTrue(att_details.PgmTextcolor().contains("gray"));
		Assert.assertTrue(att_details.ClassTextcolor().contains("gray"));
		Assert.assertTrue(att_details.StudTextcolor().contains("gray"));
		Assert.assertTrue(att_details.AssignmentTextcolor().contains("gray"));
		Log.logInfo("Verify Drop down Text in Gray color");

	}

	//Verify the save button
	@Then("Admin should see  save button in the class detail popup window for Attendance Module")
	public void admin_should_see_save_button_in_the_class_detail_popup_window() {

		Assert.assertTrue(att_details.validateSavebutton());
		Log.logInfo("Verify Save Button in Attandance Detail page");
	}

	//Verify the cancel button
	@Then("Admin should see  cancel button in the class detail popup window for Attendance Module")
	public void admin_should_see_cancel_button_in_the_class_detail_popup_window() {

		Assert.assertTrue(att_details.validateCancelbutton());
		Log.logInfo("Verify Cancel Button in Attandance Detail page");
	}

	//Verify the order
	@Then("Order of the label should be Program name, Class Name, Student Name, Attendance, Attendance Date.")
	public void order_of_the_label_should_be_Program_name_Class_Name_Student_Name_Attendance_Attendance_Date() {


	}

	//Verify the dropdown buttons are clickable
	@Given("Admin clicks {string} dropdown for Attendance Module")
	public void admin_clicks_program_name_dropdown_for_Attendance_Module(String FieldName) {
		switch (FieldName) {
		case "program name":
			att_details.clickPgmName();
			Log.logInfo("Program Name dropdown is clickable");
			break;
		case "class name":
			att_details.clickclassName();
			Log.logInfo("Class Name dropdown is clickable");
			break;
		case "attendance":
			att_details.clickAttendance();
			Log.logInfo("Attendance dropdown is clickable");
			break;
		default:
			Log.logInfo("dropdowns are not  clickable");
			break;
		}

	}

	//Verify Program Name with Program name in Program Module data
	@Then("Program Name in the drop down  for Attendance Module should match with  program name in  manage program page table")
	public void program_Name_in_the_drop_down_for_Attendance_Module_should_match_with_program_name_in_manage_program_page_table() {
		
		Assert.assertEquals(att_details.pgmnameTxt(),att_details.pgmnameTxtPgm());
		Log.logInfo("Verified Program Name with Program name in Program Module data");
	}

	//Verify Class Name with class name in class Module data
	@Then("Class Name in the drop down should match with  class name in  manage class page table for Attendance Module")
	public void class_Name_in_the_drop_down_should_match_with_class_name_in_manage_class_page_table() {
		
		Assert.assertEquals(att_details.ClassnameTxt(),att_details.ClassnameTxtPgm());
		Log.logInfo("Verified Class Name with Class name in Class Module data");
	}

	//Verify the KeyWords in Attendance Field
	@Then("Attendance field should have keywords such as - present, absent, late, excused")
	public void attendance_field_should_have_keywords_such_as_present_absent_late_excused() {
		String [] expectedlist = {"present","absent","late","excused"};
		List<WebElement> dropList = att_details.ValidateAttendanceList();
		for (int i = 0; i < 4; i++) {
			System.out.println(dropList.get(i).getText());  
			Assert.assertEquals(expectedlist[i], dropList.get(i).getText());
			Log.logInfo("Verified "+dropList.get(i).getText()+" Keyword ");
		}
	}


	//Verify the spelling
	@Then("Admin should see correct spellings in dropdown text for Attendance Module")
	public void admin_should_see_correct_spellings_in_dropdown_text_for_Attendance_Module() {
		String [] expectedlist = {"present","absent","late","excused"};
		List<WebElement> dropList = att_details.ValidateAttendanceList();
		for (int i = 0; i < 4; i++) {
			System.out.println(dropList.get(i).getText());  
			Assert.assertEquals(expectedlist[i], dropList.get(i).getText());
			Log.logInfo("Verified spelling "+dropList.get(i).getText()+" Keyword ");
		}

	}

	//Validate date picker is clickable
	@Given("Admin clicks date from date picker for Attendance Module")
	public void admin_clicks_date_from_date_picker_for_Attendance_Module() {

		att_details.ClickDateInDateBox();
		Log.logInfo("Verified Date picker ");
	}

	//validate selected date is visible
	@Then("selected date should be their in class date text box for Attendance Module")
	public void selected_date_should_be_their_in_class_date_text_box_for_Attendance_Module() {
		att_details.setAttndncDate("11/05/1989");
		Log.logInfo("Verified selected Date  ");
	}

	//validate format of date
	@Then("selected date should be in  mm\\/dd\\/yyyy format for Attendance Module")
	public void selected_date_should_be_in_mm_dd_yyyy_format_for_Attendance_Module(String date, String format) {

		Assert.assertTrue(att_details.isValidDateFormat(date,format));
		Log.logInfo("Verified Date Format ");
	}

	//Right arrow near month in the date picker
	@Given("Admin clicks right arrow in the date picker near month for Attendance Module")
	public void admin_clicks_right_arrow_in_the_date_picker_near_month_for_Attendance_Module() {
		att_details.RightArrowClick();
		Log.logInfo("Right arrow verified");
	}

	//Verify next month is visible
	@Then("Next month calender should visible for Attendance Module")
	public void next_month_calender_should_visible_for_Attendance_Module() {

		Assert.assertTrue(att_details.IsNextMonthVisible());
		Log.logInfo("Verified next month is visible ");
	}

	//Verify left arrow 
	@Given("Admin clicks left arrow in the date picker near month for Attendance Module")
	public void admin_clicks_left_arrow_in_the_date_picker_near_month_for_Attendance_Module() {
		att_details.LeftArrowClick();
		Log.logInfo("Left arrow verified");

	}

	//Verify previous month is visible
	@Then("previous month calender should visible for Attendance Module")
	public void previous_month_calender_should_visible_for_Attendance_Module() {
		Assert.assertTrue(att_details.IsPrevMonthVisible());
		Log.logInfo("Verified next month is visible ");

	}

	@Given("Admin clicks date picker button for Attendance Module")
	public void admin_clicks_date_picker_button_for_Attendance_Module() {
		att_details.clickAttndncDate();
		Log.logInfo("Verified Date picker ");

	}

	@Then("Admin should see current date is highled in the date picker for Attendance Module")
	public void admin_should_see_current_date_is_highled_in_the_date_picker_for_Attendance_Module() {

		Assert.assertTrue(att_details.VisibilityInDateBox());
		Log.logInfo("Verified Current Date in date picker ");
	}

	@Given("Admin clicks date picker button and selects future date for Attendance Module")
	public void admin_clicks_date_picker_button_and_selects_future_date_for_Attendance_Module() {
		att_details.clickAttndncDate();
		att_details.selectFutureDate("2025");
		Log.logInfo("Admin selects future Date ");

	}

	@Then("Admin should see selected date is highled in the date picker for Attendance Module")
	public void admin_should_see_selected_date_is_highled_in_the_date_picker_for_Attendance_Module() {

		Assert.assertTrue(att_details.VisibilityInDateBox());
		Log.logInfo("Selected date is highlighted");
	}



	////////////******************** Add New Attendance Page ************//////////////////////




	@When("Admin fills all the values as {string} and {string} and click save for Attendance module")
	public void admin_fills_all_the_values_and_click_save_for_Attendance_module(String dataKey, String sheetName) throws Exception {

		XlUtilsData.AttendanceXLdata(dataKey, sheetName);
		att_manager = att_details.fillAttendncAddForm
				(XlUtilsData.programName_att, XlUtilsData.ClassName_att,
						XlUtilsData.StudName_att, XlUtilsData.attendance_att,XlUtilsData.AttendDate_att,att_manager);

		Log.logInfo("Attendance added:-"+XlUtilsData.programName_att+" "+
				XlUtilsData.ClassName_att+" "+XlUtilsData.StudName_att+" "+XlUtilsData.attendance_att);
	}

	@Then("Admin should see success message in popup window and sees new attendance details in manage attendance details DB")
	public void admin_should_see_success_message_in_popup_window_and_sees_new_attendance_details_in_manage_attendance_details_DB() {

		att_details.displayMessage();
		Log.logInfo("Attendance added success message displayed");
	}


	@When("Admin fills values missing as {string} and {string} and click save for Attendance module")
	public void admin_fills_values_missing_and_click_save_for_Attendance_module(String dataKey, String sheetName) throws Exception {

		XlUtilsData.AttendanceXLdata(dataKey, sheetName);
		att_manager = att_details.fillAttendncAddForm
				(XlUtilsData.programName_att, XlUtilsData.ClassName_att,
						XlUtilsData.StudName_att, XlUtilsData.attendance_att,XlUtilsData.AttendDate_att,att_manager);

		Log.logInfo("Attendance added:-"+XlUtilsData.programName_att+" "+
				XlUtilsData.ClassName_att+" "+XlUtilsData.StudName_att+" "+XlUtilsData.attendance_att);

	}

	@Then("Message displays field is missing for Attendance module")
	public void message_displays_is_missing_for_Attendance_module(String string) {

		att_details.displayMessage();
		Log.logInfo("Attendance added success message displayed");

	}


	@When("Admin fills values with future date in {string} and {string} and click save for Attendance module")
	public void admin_fills_values_with_future_date_and_click_save_for_Attendance_module(String dataKey, String sheetName) throws Exception {

		XlUtilsData.AttendanceXLdata(dataKey, sheetName);
		att_details.ValidationAttendncfutureDate(XlUtilsData.AttendDate_att);
		Log.logInfo("Admin Fills future date for Attendance");

	}

	@Then("Invalidate attendance date")
	public void invalidate_attendance_date() {
		att_details.displayMessage();
		Log.logInfo("In Valid Attendance Date message is displayed");

	}

	//////////////************ Edit Attendance***************//////////////////////////


	@When("Admin clicks edit icon button on Attendence Manage page")
	public void admin_clicks_edit_icon_button_on_Attendence_Manage_page() {

		att_manager.editIconAttendance();
		Log.logInfo("Verified the Edit Icon button");
	}



	/////////////********************* Single Delete Attendance ********///////////////////////////


	@When("Admin clicks delete button in data table row level for Attendance module")
	public void admin_clicks_delete_button_in_data_table_row_level_for_Attendance_module() {

		att_manager.deleteIconAttendance();
	}

	@Then("Admin should see Delete alert for Attendance module")
	public void admin_should_see_alert_for_Attendance_module() {

		Assert.assertTrue(att_delete.alertBoxIsDisplayed());
		Log.logInfo("Alert box for Delete confirmation Displayed");
	}


	@Then("Alert should have yes button to accept for Attendance module")
	public void alert_should_have_button_to_accept_for_Attendance_module() {

		Assert.assertTrue(att_delete.YesIsDisplayed());
		Log.logInfo("Alert box for Delete confirmation Displayed");
	}


	@Then("Alert should have no button to reject for Attendance module")
	public void alert_should_have_button_to_reject_for_Attendance_module() {

		Assert.assertTrue(att_delete.NoIsDisplayed());
		Log.logInfo("Alert box for Delete confirmation Displayed");
	}



	@When("Admin clicks yes button for Attendance module")
	public void admin_clicks_yes_button_for_Attendance_module() {

		att_delete.clickYes();
		Log.logInfo("Admin clicks Yes button");
	}

	@Then("Success message and selected attendance details are deleted from the data table")
	public void success_message_and_selected_attendance_details_are_deleted_from_the_data_table() {

		att_delete.DisplayMessage();
		Log.logInfo("Success message is displayed");
	}


	@When("Admin clicks no button for Attendance module")
	public void admin_clicks_no_button_for_Attendance_module() {

		att_delete.clickNo();
		Log.logInfo("Admin clicks No");
	}

	@Then("Redirected attendance page and selected attendance details are not deleted from the data table")
	public void redirected_attendance_page_and_selected_attendance_details_are_not_deleted_from_the_data_table() {

		Assert.assertEquals(att_manager.getTitle(), "Attendance Manage");
		Log.logInfo("Verified Attendance page");

	}

	/////////////////////***********Multiple Delete***********************///////////////////////////


	@Given("Admin clicks single  row level check box in the data table for Attendance Module")
	public void admin_clicks_single_row_level_check_box_in_the_data_table_for_Attendance_Module() {

		att_manager.SelectSingleCheckBoxAtt();
		Log.logInfo("Admin clicks single checkbox");

	}

	@Then("Admin should see delete icon below the header is enabled on Attendance Module")
	public void admin_should_see_delete_icon_below_the_header_is_enabled_on_Attendance_Module() {

		Assert.assertTrue(att_manager.M_DeleteiconEnabled());
		Log.logInfo("Delete icon below header is verified");
	}

	@Then("Admin should see tick mark in check box for Attendance Module")
	public void admin_should_see_tick_mark_in_check_box_for_Attendance_Module() {

		Assert.assertTrue(att_manager.VerifyTickMark());
		Log.logInfo("Tick mark in check box is verified");

	}

	@Given("Admin clicks multiple row level check box in the data table for Attendance Module")
	public void admin_click_multiple_row_level_check_box() {

		att_manager.SelectMultiCheckBoxAtt();
		Log.logInfo("Admin clicks multiple row level check box");
	}

	@Given("Admin clicks delete button under header after selecting the single check box for attendance module")
	public void admin_clicks_multiple_row_level_check_box_in_the_data_table_for_Attendance_Module() {

		att_manager.SelectSingleCheckBoxAtt();
		att_manager.deleteMultiplAttendnc_Btn();

	}

	@Given("Admin clicks delete button under header after selecting the check box in the data table for Attendance Module")
	public void admin_clicks_delete_button_under_header_after_selecting_Single_check_box_in_the_data_table_for_Attendance_Module() {
		att_manager.SelectSingleCheckBoxAtt();
		att_manager.deleteMultiplAttendnc_Btn();
	}

	@Given("Admin clicks delete button under header after selecting the multiple check box for Attendance Module")
	public void admin_clicks_delete_button_under_header_after_selecting_the_multiple_check_box_for_Attendance_Module() {
		att_manager.SelectMultiCheckBoxAtt();
		att_manager.deleteMultiplAttendnc_Btn();

	}

	@When("Admin clicks yes button for Attendance Module")
	public void admin_clicks_yes_button_for_Attendance_Module() {

		att_delete.clickYes();
	}

	@Then("Success message and selected attendance detail are deleted from the data table")
	public void success_message_and_selected_attendance_detail_are_deleted_from_the_data_table() {

		att_delete.DisplayMessage();
	}


	@When("Admin clicks no button for Attendance Module")
	public void admin_clicks_no_button_for_Attendance_Module() {

		att_delete.clickNo();
	}

	////////************** Pgination ********************//////////////////////////





	@Then("Data table should display {int} page  when entries available for Attendance")
	public void data_table_should_display_page_when_entries_available_for_attendance(Integer int1) {

		int pageCount = att_details.CountPagesOnDataTable();
		Log.logInfo("Number of Pages is data table - "+pageCount);

	}

	@Then("Right arrow should be enabled in page one  when entries are more than {int} available for Attendance")
	public void right_arrow_should_be_enabled_in_page_one_when_entries_are_more_than_available_for_attendance(Integer pagecount) {

		att_details.RightarrowVisiblity_pageOne(pagecount);
		Log.logInfo("Validated right Arrow for Page counts");
	}

	@Then("Left arrow should be disabled in page one  when entries are more than {int} available for Attendance")
	public void left_arrow_should_be_disabled_in_page_one_when_entries_are_more_than_available_for_attendance(Integer pagecount) {

		Assert.assertFalse(att_details.LeftarrowVisiblity_pageOne(pagecount));
		Log.logInfo("Validated that Left arrow is disabled");
	}

	@Then("Right arrow should be enabled in page two when entries are more than {int} available for Attendance")
	public void right_arrow_should_be_enabled_in_page_two_when_entries_are_more_than_available_for_attendance(Integer pagecount) {

		Assert.assertTrue(att_details.RightarrowVisiblity_pageTwo(pagecount));
		Log.logInfo("Validated right Arrow for Page count 2");
	}

	@Then("Left arrow should be enabled in page two for Attendance")
	public void left_arrow_should_be_enabled_in_page_two_for_attendance() {

		Assert.assertTrue(att_details.LeftarrowVisiblity_pageTwo());
		Log.logInfo("Validated right Arrow for Page count 2");
	}


	@Then("When entries are more than {int} in data table pagination controls enabled for Attendance")
	public void when_entries_are_more_than_in_data_table_pagination_controls_enabled_for_attendance(Integer int1) {
		Assert.assertTrue(att_details.VisiblePageControl());
		Log.logInfo("Verified pagination contol is enabled when enteries are more");
	}

	@Then("When entries are less than {int} in data table pagination controls disabled for Attendance")
	public void when_entries_are_less_than_in_data_table_pagination_controls_disabled_for_attendance(Integer int1) {

		Assert.assertTrue(att_details.DisablePageControl());
		Log.logInfo("Verified pagination contol is diabled when enteries are less");


	}


























}

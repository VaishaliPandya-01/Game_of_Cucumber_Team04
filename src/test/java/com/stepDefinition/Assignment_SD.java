package com.stepDefinition;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

import org.junit.Assert;

import com.pageObject.Assignment_Add_obj;
import com.pageObject.Assignment_Delete_obj;
import com.pageObject.Assignment_Manage_obj;
import com.pageObject.Assignment_detailsPage_obj;
import com.pageObject.Dashboard_Obj;
import com.utility.Log;
import com.utility.XlUtilsData;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class Assignment_SD{

	private Assignment_detailsPage_obj assigndetails = new Assignment_detailsPage_obj();
	private Assignment_Manage_obj assign = new Assignment_Manage_obj();
	private Assignment_Add_obj addassign = new Assignment_Add_obj();
	private Assignment_Delete_obj deleteassign = new Assignment_Delete_obj();
	private Dashboard_Obj dashboardPage = new Dashboard_Obj();
	private long startTime;
	private long endTime;
	int numberOfAssignmentRows = assign.getNumberOfAssignmentRows();



	@When("Admin clicks {string} button on the navigation bar in manage assignment page")
	public void admin_clicks_button_on_the_navigation_bar(String string) {
		assign.Assignment_btn();
		Log.logInfo("Admin Clicks 'Assignment' on NavigationBar");
	}


	//	********************************************Assignment Manage*************************************

	@Then("Admin should see URL with {string} in manage assignment page")
	public void admin_should_see_URL_with(String PageURL) {

		String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains(PageURL));
		Log.logInfo("Admin see see URL with"+URL);
	}

	@When("the user clicks the 'assignment' button in manage assignment page")
	public void the_user_clicks_the_assignment_button() {
		startTime = System.currentTimeMillis();
		assign.Assignment_btn();
		endTime = System.currentTimeMillis();
		Log.logInfo("the user clicks the 'assignment' button in manage assignment page");
	}

	@Then("Get the response time for navigation from dashboard page to manage assignment page")
	public void get_the_response_time_for_navigation_from_dashboard_page_to_manage_assignment_page() {
		long responseTime = endTime - startTime;
		System.out.println("Response time: " + responseTime + " milliseconds");
		Log.logInfo("Response time: " + responseTime + " milliseconds");
	}


	@Then("Admin should see header with {string} in manage assignment page")
	public void admin_should_see_header_with(String pageTitle) {
		String title= assign.getManageAssignmentTitle();
		Assert.assertEquals(pageTitle, title);
		Log.logInfo("Admin should see header with"+title);

	}

	@When("Admin clicks {string} button on the navigation bar and get all text from the portal page in manage assignment page")
	public void admin_clicks_button_on_the_navigation_bar_and_get_all_text_from_the_portal_page(String portalText) {
		assign.Assignment_btn();;
		assign.GetTextAllFieldsOnForm();
		Log.logInfo("Admin clicks button on the navigation bar and get all text from the portal page in manage assignment page");
	}

	@Then("Admin should see correct spelling for the all the fields in manage assignment page")
	public void admin_should_see_correct_spelling_for_the_all_the_fields() {
		//		
	}
	@Then("the admin checks the spelling of all fields in manage assignment page")
	public void the_admin_checks_the_spelling_of_all_fields() {
		//        SpellCheckerUtilities speller = new SpellCheckerUtilities();
		//        String[] words = portalText.split("\\s+");
		//
		//        for (String word : words) {
		//            if (!speller.isSpellingValid(word)) {
		//                System.out.println("Spelling error: " + word);
		//            }
		//       
	}


	@Then("Admin should see disabled delete icon below the {string} in manage assignment page")
	public void admin_should_see_disabled_delete_icon_below_the(String String) {
		Assert.assertTrue(assign.isDeleteIconDisabled());
	}


	@Then("Admin should see search bar on the manage assignment page")
	public void admin_should_see_search_bar_on_the_manage_assignment_page() {
		Assert.assertTrue(assign.isSearchBarDisplayed());
	}


	@Then("Admin should see +Add New assignment button on the manage assignment page")
	public void admin_should_see_Add_New_assignment_button_on_the_manage_assignment_page() {
		Assert.assertTrue(assign.isANewAssignmentbtnDisplayed());
	}

	@Then("Admin should see data table on the manage assignment page With following column headers in manage assignment page.")
	public void admin_should_see_data_table_on_the_manage_assignment_page_With_following_column_headers_(DataTable HeaderList) {
		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = assign.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));
	}

	@Then("Edit Icon in each row of data table only  when entries are available in manage assignment page")
	public void edit_Icon_in_each_row_of_data_table_only_when_entries_are_available(DataTable HeaderList) {

		if(assign.checkdataTableHasData()) {
			Assert.assertTrue(assign.isEditIconDisabled());
		}else {
			System.out.println("Datatable is empty");
		}

	}


	@Then("Edit Icon will not be present in data table in manage assignment page")
	public void edit_Icon_will_not_be_present_in_data_table() {
		if(assign.checkdataTableHasData()) {
			Assert.assertTrue(assign.isEditIconDisabled());
		}else {
			System.out.println("Datatable is empty");
		}
	}

	@Then("Delete Icon in each row of data table only  when entries are available in manage assignment page")
	public void delete_Icon_in_each_row_of_data_table_only_when_entries_are_available() {
		if(assign.checkdataTableHasData()) {
			Assert.assertTrue(assign.isDeleteIconDisabled());
		}else {
			System.out.println("Datatable is empty");
		}
	}

	@Then("Delete Icon will not be present in data table in manage assignment page")
	public void delete_Icon_will_not_be_present_in_data_table() {
		if(assign.checkdataTableHasData()) {
			Assert.assertTrue(assign.isDeleteIconDisabled());
		}else {
			System.out.println("Datatable is empty");
		}
	}

	@Then("Admin should see sort icon near the column headers except for Edit and Delete in manage assignment page")
	public void admin_should_see_sort_icon_near_the_column_headers_except_for_Edit_and_Delete() {
		Assert.assertTrue(assign.sortingbtn());
	}

	@Then("Admin should see check box in the all rows  of data table when entries available in manage assignment page")
	public void admin_should_see_check_box_in_the_all_rows_of_data_table_when_entries_available() {
		if(assign.checkdataTableHasData()) {
			Assert.assertTrue(assign.Checkbox());
		}else {
			System.out.println("Datatable is empty");
		}
	}

	@Then("Above the footer Admin should see the text as {string} below the table in manage assignment page.")
	public void above_the_footer_Admin_should_see_the_text_as_below_the_table(String string) {
		Assert.assertTrue(assign.totalNumberOfAssignment());
	}

	@Then("Admin should see the pagination controls under the data table in manage assignment page")
	public void admin_should_see_the_pagination_controls_under_the_data_table() {
		Assert.assertTrue(assign.firstPageArrow());
		Assert.assertTrue(assign.nextPageArrow());
		Assert.assertTrue(assign.lastPageArrow());
		Assert.assertTrue(assign.prevPageArrow());

	}


	@Then("Admin should see the text with total number assignments in the data table")
	public void admin_should_see_the_text_with_total_number_assignments_in_the_data_table(String string) {
		Assert.assertTrue(assign.totalNumberOfAssignment());
	}


	@Then("Above the footer Admin should see the text as \"Showing x to y of z entries\" below the table in manage assignment page")
	public void above_the_footer_Admin_should_see_the_text_as(String footertext) {
		String actualmsg =assign.footerText(footertext);
		Assert.assertEquals(footertext,actualmsg);
	}


	@When("Admin enters assignment name into search box in manage assignment page")
	public void admin_enters_assignment_name_into_search_box() {
		assign.Search_Box_Assignment("LMS Assignment");
	}

	@Then("Displays entries with that assignment name")
	public void displays_entries_with_that_assignment_name() {
		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters assignment  name is not existing the table into search box")
	public void admin_enters_assignment_name_is_not_existing_the_table_into_search_box() {
		assign.Search_Box_Assignment("AI Assignment");
	}

	@Then("Displays empty details in the data table in manage assignment page")
	public void displays_empty_details_in_the_data_table_in_manage_assignment_page() {
		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters assignment description into search box")
	public void admin_enters_assignment_description_into_search_box() {
		assign.Search_Box_Assignment("AI Assignment");
	}

	@Then("Displays entries with that assignment description")
	public void displays_entries_with_that_assignment_description() {
		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters assignment description which is not existing the table into search box")
	public void admin_enters_assignment_description_which_is_not_existing_the_table_into_search_box() {
		assign.Search_Box_Assignment("Assignment");
	}

	@When("Admin enters assignment due date into search box")
	public void admin_enters_assignment_due_date_into_search_box() {
		assign.Search_Box_Assignment("24/7/2023");
	}

	@Then("Displays entries with that assignment due date")
	public void displays_entries_with_that_assignment_due_date() {
		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters assignment due date which is not existing the table into search box")
	public void admin_enters_assignment_due_date_which_is_not_existing_the_table_into_search_box() {
		assign.Search_Box_Assignment("24/7/2029");
	}









	//	****************************************02 Steps for Assignment Details*********************************************************** 




	@Then("Admin click +Add new assignment button in Assignment details popup window")
	public void admin_click_Add_new_assignment_button() {
		assign.Assignment_btn();
	}

	@Then("Admin should see a popup  with  heading {string} in manage assignment page")
	public void admin_should_see_a_popup_with_heading(String PageTitle) {
		String title= assigndetails.getAssignmentDetailsTitle();
		Assert.assertEquals(PageTitle, title);
	}

	@Then("Admin should see input fields Text in Assignment details popup window")
	public void admin_should_see_input_fields_Text() {
		assigndetails.getTextboxes();

	}

	@Then("Eight {int} textbox should be present in Assignment details popup window")
	public void eight_textbox_should_be_present_in_Assignment_details_popup_window(Integer int1) {
		Assert.assertEquals(8,assigndetails.getTextboxes().size());
	}
	@Then("Admin should see  dropdown option for Batch Number in Assignment details popup window")
	public void admin_should_see_dropdown_option_for_Batch_Number() {
		assigndetails.isDropdownBatchDisplayed();
	}
	@Then("Admin should see  dropdown option for Program name in Assignment details popup window")
	public void admin_should_see_dropdown_option_for_Program_name() {
		assigndetails.isDropDownProgramDisplayed();
	}

	@Then("Admin should see  calendar icon for assignment due date")
	public void admin_should_see_calendar_icon_for_assignment_due_date() {
		assigndetails.isCalenderIconDisplayed();
	}

	@Then("Admin should see  save button in the Assignment detail popup window")
	public void admin_should_see_save_button_in_the_Assignment_detail_popup_window() {
		assigndetails.isSaveDisplayed();
	}

	@Then("Admin should see  cancel button in the Assignment detail popup window")
	public void admin_should_see_cancel_button_in_the_Assignment_detail_popup_window() {
		assigndetails.isCancelDisplayed();
	}

	@Then("Admin should see  close button on the Assignment details popup window")
	public void admin_should_see_close_button_on_the_Assignment_details_popup_window() {
		assigndetails.isCloseDisplayed();
	}

	// *****************************03 ADD NEW ASSIGNMENT ***************************************************



	@When("Admin enters all mandatory field values with valid data and clicks save button in assignment details {string} and {string}")
	public void admin_enters_all_mandatory_field_values_with_valid_data_and_clicks_save_button_in_assignment_details_and(String dataKey , String sheetName) throws Exception {

		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 				 
				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);
	}

	@When("Admin enters all mandatory field values with invalid data and clicks save button in assignment details {string} and {string}")
	public void admin_enters_all_mandatory_field_values_with_invalid_data_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);
	}

	@Then("Error message should appear in alert  in assignment details")
	public void error_message_should_appear_in_alert_in_assignment_details() {
		String message = addassign.errorMessage();
		Log.logInfo("Error message:- " +message);

	}

	@When("Admin enters values in all fields with valid data and clicks save button in assignment details {string} and {string}")
	public void admin_enters_values_in_all_fields_with_valid_data_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@Then("Admin should see new assignment details is added in the data table")
	public void admin_should_see_new_assignment_details_is_added_in_the_data_table() {
		Assert.assertTrue(assign.checkdataTableHasData());

	}

	@When("Admin enters with invalid data in optional fields and clicks save button in assignment details {string} and {string}")
	public void admin_enters_with_invalid_data_in_optional_fields_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@When("Admin enters  data missing value in program name and clicks save button in assignment details {string} and {string}")
	public void admin_enters_data_missing_value_in_program_name_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@Then("Program Name is missing  in assignment details")
	public void program_Name_is_missing_in_assignment_details() {

		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters  data missing value in Batch number and clicks save button in assignment details {string} and {string}")
	public void admin_enters_data_missing_value_in_Batch_number_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);
	}

	@Then("Batch number is missing  in assignment details")
	public void batch_number_is_missing_in_assignment_details() {
		Assert.assertTrue(assign.checkdataTableHasData());

	}

	@When("Admin enters data missing value in Assignment name and clicks save button in assignment details {string} and {string}")
	public void admin_enters_data_missing_value_in_Assignment_name_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@Then("Assignment name is missing  in assignment details")
	public void assignment_name_is_missing_in_assignment_details() {

		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters data missing value in Assignment due date and clicks save button in assignment details {string} and {string}")
	public void admin_enters_data_missing_value_in_Assignment_due_date_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@Then("Assignment due date is missing  in assignment details")
	public void assignment_due_date_is_missing_in_assignment_details() {
		Assert.assertTrue(assign.checkdataTableHasData());

	}

	@When("Admin enters data missing value in grade by  and clicks save button in assignment details {string} and {string}")
	public void admin_enters_data_missing_value_in_grade_by_and_clicks_save_button_in_assignment_details_and(String dataKey, String SheetName) throws Exception {

		XlUtilsData.AssignmentXLdata(dataKey, SheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 

				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);
	}

	@Then("Grade by is missing  in assignment details")
	public void grade_by_is_missing_in_assignment_details() {

		Assert.assertTrue(assign.checkdataTableHasData());
	}

	@When("Admin enters passed date in the due date field and clicks save button in assignment details {string} and {string}")
	public void admin_enters_passed_date_in_the_due_date_field_and_clicks_save_button_in_assignment_details_and(String dataKey, String sheetName) throws Exception {
		XlUtilsData.AssignmentXLdata(dataKey, sheetName);

		assigndetails = 
				addassign.fillAssignmentDetailForm
				(XlUtilsData. programNm,XlUtilsData. batchNum,XlUtilsData.assignNm, XlUtilsData.assignDescri,
						XlUtilsData.gradeby, XlUtilsData. file1,XlUtilsData. file2,XlUtilsData. file3,XlUtilsData.assignDueDate,assigndetails);

		Log.logInfo("Assignment details added:-" +
				"programNm:-"+XlUtilsData.programNm+ 
				"batchNum:- " +XlUtilsData.batchNum+ 				 
				"gradeby:- " +XlUtilsData.assignNm+
				"assignDescri:- " +XlUtilsData.assignDescri+
				"file1:- " +XlUtilsData.file1+
				"file2:- " +XlUtilsData.file2+
				"file3:- " +XlUtilsData.file3+
				"assignDueDate:- " +XlUtilsData.assignDueDate);

	}

	@Then("Assignment cannot be created for the passed date  in assignment details")
	public void assignment_cannot_be_created_for_the_passed_date_in_assignment_details() {
		Assert.assertTrue(assign.checkdataTableHasData());

	}

	@Then("selected date should be their in Assignment due date text box assignment details window")
	public void selected_date_should_be_their_in_Assignment_due_date_text_box_assignment_details_window() {
		Assert.assertTrue(assign.checkdataTableHasData());

	}

	@When("Admin clicks date from date picker in assignment details window")
	public void admin_clicks_date_from_date_picker_in_assignment_details_window() {

		addassign.openDatePicker();


		SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
		String currentDate = dateFormat.format(new Date(endTime));

		// Select the current date from the date picker
		addassign.selectDate(currentDate);
	}

	@Then("selected date should be in  mm\\/dd\\/yyyy format in assignment details window")
	public void selected_date_should_be_in_mm_dd_yyyy_format_in_assignment_details_window() {

		String selectedDate = addassign.getDatePickerInput().getAttribute("value");
		Assert.assertEquals(true, selectedDate.matches("\\d{2}/\\d{2}/\\d{4}"));
	}

	@When("Admin clicks right arrow in the date picker near month in assignment details window")
	public void admin_clicks_right_arrow_in_the_date_picker_near_month_in_assignment_details_window() {
		addassign.openDatePicker();
		addassign.clickNextMonth();
	}

	@Then("Next month calender should visible in assignment details window")
	public void next_month_calender_should_visible_in_assignment_details_window() {

		Assert.assertTrue(addassign.isNextMonthCalendarVisible());
	}

	@When("Admin clicks left arrow in the date picker near month in assignment details window")
	public void admin_clicks_left_arrow_in_the_date_picker_near_month_in_assignment_details_window() {
		addassign.openDatePicker();
		addassign.clickLastMonth();
	}

	@Then("previous month calender should visible in assignment details window")
	public void previous_month_calender_should_visible_in_assignment_details_window() {
		Assert.assertTrue(addassign.isPreviousMonthCalendarVisible());

	}

	@When("Admin clicks date picker button in assignment details window")
	public void admin_clicks_date_picker_button_in_assignment_details_window() {

		addassign.openDatePicker();
		addassign.clickLCurrentMonth();
	}

	@Then("Admin should see current date is highled in the date picker in assignment details window")
	public void admin_should_see_current_date_is_highled_in_the_date_picker_in_assignment_details_window() {

		Assert.assertTrue(addassign.iscurrentMonthCalendarVisible());
	}

	@When("Admin clicks date picker button and selects future date in assignment details window")
	public void admin_clicks_date_picker_button_and_selects_future_date_in_assignment_details_window() {
		addassign.openDatePicker();
		addassign.selectFutureDate("07");
	}

	@Then("Admin should see selected date is highled in the date picker in assignment details window")
	public void admin_should_see_selected_date_is_highled_in_the_date_picker_in_assignment_details_window() {

		Assert.assertTrue(addassign.isFutureDateHighlighted("07"));
	}

	@When("Admin clicks Cancel button without entering values in the fields in assignment details window")
	public void admin_clicks_Cancel_button_without_entering_values_in_the_fields_in_assignment_details_window() {

		addassign.clickCancelButton();
	}

	@Then("Admin should land on manage assignment page")
	public void admin_should_land_on_manage_assignment_page() {

		String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains("Manage Assignment"));
	}

	@When("Admin clicks Cancel button entering values in the fields in assignment details window")
	public void admin_clicks_Cancel_button_entering_values_in_the_fields_in_assignment_details_window() {

		addassign.clickCancelButton();
	}

	@Then("Admin should land on manage assignment Page and validate new assignment is not created in the data table")
	public void admin_should_land_on_manage_assignment_Page_and_validate_new_assignment_is_not_created_in_the_data_table() {
		String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains("Manage Assignment"));

	}


	// 04 EDIT ASSIGNMENT FEATURE



	@When("Admin clicks assignment button on the navigation bar")
	public void admin_clicks_assignment_button_on_the_navigation_bar() {
		assign.Assignment_btn();
	}

	@When("Admin clicks Edit button in data table of class")
	public void admin_clicks_Edit_button_in_data_table_of_class() {
		assign.Edit_btn();
	}

	@Then("Edit popup window appears with heading Assignment Details")
	public void edit_popup_window_appears_with_heading_Assignment_Details() {
		String URL=assign.getAssignmentDetailTitle();
		Assert.assertTrue(URL.contains("Assignment detail"));

	}
	//**********************************************DELETE BY ROW**********************************************************

	//Click on delete Icon	
	@Then("Admin clicks on the delete icon on Assignment page if it is enabled")
	public void admin_clicks_on_the_delete_icon_on_Assignment_page_if_it_is_enabled() {
		assign.deleteSingleAssignmentBtn();
		Log.logInfo("Clicked on delete");
	}

	//Validate Pop up Window
	@Then("Alert appears with yes and No option to delete Assignment")
	public void alert_appears_with_yes_and_No_option_to_delete_Assignment() {
		deleteassign.alertBoxIsDisplayed();
		Log.logInfo("Delete alert box is present");
	}

	//Validate message in delete box
	@Then("Admin should see a message on manage assignment {string}")
	public void admin_should_see_a_message_on_manage_assignment(String expectedText) {
		String actualText= deleteassign.deleteBoxText();
		Assert.assertEquals(expectedText,actualText);
		Log.logInfo("Delete alert box text"+actualText);
	}

	//Click Yes to Delete
	@When("Admin click yes option to delete Assignment")
	public void admin_click_yes_option_to_delete_Assignment() {

		deleteassign.deleteYesBtn();
		Log.logInfo("Clicked yes to delete");
	}

	//Validate Deleted program
	@Then("Assignment deleted alert pops and Assignment is no more available in data table")
	public void Assignment_deleted_alert_pops_and_Assignment_is_no_more_available_in_data_table() {
		deleteassign.deleteMessage();
		Log.logInfo("Assignment is deleted");
	}

	//Click No to Delete
	@When("Admin click No option on delete Assignment")
	public void admin_click_No_option_on_delete_Assignment() {
		deleteassign.deleteNoBtn();
		Log.logInfo("Clicked No to delete");
	}

	//Click close to Delete
	@When("Admin click close option on delete Assignment")
	public void admin_click_close_option_on_delete_Assignment() {
		deleteassign.closeArrow();
		Log.logInfo("Clicked close to delete");
	}

	//Validate program is not deleted
	@Then("Assignment is still listed in data table")
	public void Assignment_is_still_listed_in_data_table() {
		deleteassign.successMessage();
		Log.logInfo("Program is not deleted");
	}

	/**
	 * Delete Multiple Assignment
	 *
	 */

	//None of the checkBox are selected
	@Given("None of the checkboxes in data table of Assignment are selected")
	public void none_of_the_checkboxes_in_data_table_of_Assignment_are_selected() {
		assign.VisibleCheckBox();
		Log.logInfo("Check Box are not selected");
	}

	//Delete Icon should be disabled
	@Then("The delete icon under the Manage Assignment header should be disabled")
	public void The_delete_icon_under_the_Manage_Assignment_header_should_be_disabled() {
		assign.VisibledeleteAssignmentBtn();
		Log.logInfo("Delete multiple Assignment button is disabled");
	}

	//one of the checkBox is selected
	@Given("One of the checkbox row is selected on Assignment page")
	public void one_of_the_checkbox_row_is_selected_on_Assignment_page() {
		assign.SelectSingleCheckBoxAssignment();
		Log.logInfo("Checkbox is selected");
	}

	//Multiple checkBox is selected
	@Given("Two or more checkboxes are selected on Assignment page")
	public void Two_or_more_checkboxes_are_selected_on_Assignment_page() {
		assign.SelectMultiCheckBoxAssignment();;
		Log.logInfo("Multiple Checkbox are selected");
	}

	//Click Delete Icon and yes button
	@When("Click delete icon below Manage Assignment header and click Yes")
	public void click_delete_icon_below_Manage_Assignment_header_and_click_Yes() {
		assign.deleteMutipleAssignmentBtn();
		deleteassign.deleteYesBtn();
		Log.logInfo("Clicked on delete yes button");
	}

	//Data should be deleted
	@Then("The respective row in the data table of Assignment is deleted")
	public void the_respective_row_in_the_data_table_of_Assignment_is_deleted() {

		String message = deleteassign.deleteMessage();
		String actualTitle=assign.getManageAssignmentTitle();

		Log.logInfo("Validate Manage Assignment Title"+actualTitle);		
		Log.logInfo("Assignment is deleted successfully"+message);
	}

	//Click Delete Icon and No button
	@When("Click delete icon below Manage Assignment header and click No")
	public void click_delete_icon_below_Manage_Assignment_header_and_click_No() {
		assign.deleteMutipleAssignmentBtn();
		deleteassign.deleteNoBtn();
		Log.logInfo("Clicked on delete No button");
	}

	//Data should be deleted
	@Then("The respective row in the data table of Assignment should not get delete")
	public void the_respective_row_in_the_data_table_of_Assignment_should_not_get_delete() {

		String message = deleteassign.deleteMessage();
		String actualTitle=assign.getManageAssignmentTitle();

		Log.logInfo("Validate Manage Assignment Title"+actualTitle);		
		Log.logInfo("Assignment is deleted successfully"+message);
	}

	//**********************************************07 SORT FUNCTION Assignment******************************************************
	@When("Admin click on assignment name column header to sort")
	public void admin_click_on_assignment_name_column_header_to_sort() {
		assign.ascNameSorting();;
		Log.logInfo("Admin clicks the sort icon of program name column");
	}

	@Then("Admin should see data table sorted in descending order in manage assignment page")
	public void admin_should_see_data_table_sorted_in_descending_order_in_manage_assignment_page() {
		String tableValue=assign.getTableValue();
		Log.logInfo("data get sorted on the table in ascending order"+tableValue);
	}

	@Then("Admin should see data table sorted in ascending  order in manage assignment page")
	public void admin_should_see_data_table_sorted_in_ascending_order_in_manage_assignment_page() {
		String tableValue=assign.getTableValue();
		Log.logInfo("data get sorted on the table in descending order"+tableValue);
	}

	//*************************************************Pagination Assignment *************************************************

	@When("Admin clicks Assignment button on the navigation bar in assignment page")
	public void admin_clicks_Assignment_button_on_the_navigation_bar_in_assignment_page(String string) {
		dashboardPage.clickAssignment();
	}

	@Then("Data table should display {int} page  when entries available in Manage Assignment Page")
	public void data_table_should_display_page_when_entries_available_in_Manage_Assignment_Page(Integer int1) {

		Assert.assertTrue("Expected more than 10 entries", numberOfAssignmentRows > 10);
		Assert.assertTrue("Expected only 1 page of entries", numberOfAssignmentRows <= 10);

	}

	@Then("Right arrow should be enabled in page one  when entries are more than {int} available in Manage Assignment Page")
	public void right_arrow_should_be_enabled_in_page_one_when_entries_are_more_than_available_in_Manage_Assignment_Page(Integer int1) {
		if (numberOfAssignmentRows > int1) {
			Assert.assertTrue("Expected right arrow to be enabled on page one", assign.nextPageArrow());
		} else {
			Assert.assertTrue("Expected right arrow to be disabled on page one", !assign.nextPageArrow());
		}
	}

	@Then("Left arrow should be disabled in page one  when entries are more than {int} available in Manage Assignment Page")
	public void left_arrow_should_be_disabled_in_page_one_when_entries_are_more_than_available_in_Manage_Assignment_Page(Integer int1) {
		if (numberOfAssignmentRows > int1) {
			Assert.assertTrue("Expected right arrow to be enabled on page one", assign.lastPageArrow());
		} else {
			Assert.assertTrue("Expected right arrow to be disabled on page one", !assign.lastPageArrow());
		}
	}

	@Then("Right arrow should be enabled in page two when entries are more than {int} available in Manage Assignment Page")
	public void right_arrow_should_be_enabled_in_page_two_when_entries_are_more_than_available_in_Manage_Assignment_Page(Integer int1) {
		if (numberOfAssignmentRows > int1) {
			Assert.assertTrue("Expected right arrow to be enabled on page one", assign.nextPageArrow());
		} else {
			Assert.assertTrue("Expected right arrow to be disabled on page one", !assign.nextPageArrow());
		}
	}
	@Then("Left arrow should be enabled in page two  in Manage Assignment Page")
	public void left_arrow_should_be_enabled_in_page_two_in_Manage_Assignment_Page() {

		Assert.assertTrue("Expected right arrow to be enabled on page one", assign.lastPageArrow());

		Assert.assertTrue("Expected right arrow to be disabled on page one", !assign.lastPageArrow());

	}

	@Then("entries are more than {int} in data table pagination controls enabled in Manage Assignment Page")
	public void entries_are_more_than_in_data_table_pagination_controls_enabled_in_Manage_Assignment_Page(Integer int1) {

		Assert.assertTrue("pagination enable", numberOfAssignmentRows > 5);

	}


	@Then("entries are less than {int} in data table pagination controls disabled in Manage Assignment Page")
	public void entries_are_less_than_in_data_table_pagination_controls_disabled_in_Manage_Assignment_Page(Integer int1) {
		Assert.assertTrue("Expected only 1 page of entries", numberOfAssignmentRows <= 5);
	}


	@Then("total class entries above {int} next page is enabled \\( On multiples of {int} new page will be enabled) in Manage Assignment Page")
	public void total_class_entries_above_next_page_is_enabled_On_multiples_of_new_page_will_be_enabled_in_Manage_Assignment_Page(Integer int1, Integer int2) {
		Assert.assertTrue("pagination enable", numberOfAssignmentRows > 10);
	}


	@Then("total class entries  {int} or below next page is disabled in Manage Assignment Page")
	public void total_class_entries_or_below_next_page_is_disabled_in_Manage_Assignment_Page(Integer int1) {
		Assert.assertTrue("Expected only 1 page of entries", numberOfAssignmentRows <= 5);
	}


}

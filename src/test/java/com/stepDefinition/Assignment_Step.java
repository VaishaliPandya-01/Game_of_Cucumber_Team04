package com.stepDefinition;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.WebDriver;
import com.baseClass.BaseClass;
import com.controller.Controller;
import com.pageObject.AssignmentPage;
import com.pageObject.AssignmentdetailsPage;
import com.pageObject.Add_new_Assignment;
import com.utility.Log;
import com.utility.XlUtilsData;

import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.datatable.DataTable;

import java.sql.Date;
import java.text.SimpleDateFormat;


public class Assignment_Step extends BaseClass {
	AssignmentdetailsPage assigndetails = new AssignmentdetailsPage();
	AssignmentPage assign = new AssignmentPage();
	Controller cn = new Controller();
	Add_new_Assignment addassign = new Add_new_Assignment();
	private long startTime;
	private long endTime;
	 private WebDriver driver;
	    
	
	
	
	
	@Given("Logged on the LMS portal as Admin")
	public void logged_on_the_LMS_portal_as_Admin() {
		driver = new ChromeDriver();
        driver.get("https://example.com/portal");
       
	    
	}
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
	  
	}
	
	@When("Admin clicks {string} button on the navigation bar in manage assignment page")
	public void admin_clicks_button_on_the_navigation_bar(String string) {
	    assign.Assignment_btn();
	}

	@Then("Admin should see URL with {string} in manage assignment page")
	public void admin_should_see_URL_with(String PageURL) {
	   
	   String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains(PageURL));
	}

	@When("the user clicks the 'assignment' button in manage assignment page")
    public void the_user_clicks_the_assignment_button() {
        startTime = System.currentTimeMillis();
        assign.Assignment_btn();
        endTime = System.currentTimeMillis();
	}
	
	@Then("Get the response time for navigation from dashboard page to manage assignment page")
	public void get_the_response_time_for_navigation_from_dashboard_page_to_manage_assignment_page() {
		long responseTime = endTime - startTime;
        System.out.println("Response time: " + responseTime + " milliseconds");
	}


	@Then("Admin should see header with {string} in manage assignment page")
	public void admin_should_see_header_with(String pageTitle) {
		String title= assign.getManageAssignmentTitle();
		Assert.assertEquals(pageTitle, title);
		
	}

	@When("Admin clicks {string} button on the navigation bar and get all text from the portal page in manage assignment page")
	public void admin_clicks_button_on_the_navigation_bar_and_get_all_text_from_the_portal_page(String portalText) {
		assign.Assignment_btn();;
		assign.GetTextAllFieldsOnForm();
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


	@Then("Admin should see the text with total number assignments in the data table . \\({string})")
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
	
	
	@Given("Admin is on manage assignment Page")
	public void admin_is_on_manage_assignment_Page(String pageTitle) {
		String title= assign.getManageAssignmentTitle();
		Assert.assertEquals(pageTitle, title);
	}

	@When("Admin click +Add new assignment button in Assignment details popup window")
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
	
	@Then("{int} textbox should be  present in Assignment details popup window in Assignment details popup window")
	public void textbox_should_be_present_in_Assignment_details_popup_window(Integer int1) {
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
	
	@Then("Admin should see  calendar icon for assignment due date in Assignment details popup window")
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
	
	@Given("Admin is in  assignment details popup window")
	public void admin_is_in_assignment_details_popup_window() {
	    
	}

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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
				"assignNm:- " +XlUtilsData.NoOfClass+ 
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
	
	@Given("Admin is in manage assignment page")
	public void admin_is_in_manage_assignment_page() {
		String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains("Manage Assignment"));
	}

	@When("Admin clicks assignment button on the navigation bar")
	public void admin_clicks_assignment_button_on_the_navigation_bar() {
		 assign.Assignment_btn();
	}

	@When("Admin clicks Edit button in data table")
	public void admin_clicks_Edit_button_in_data_table() {
	  assign.Edit_btn();
	}

	@Then("Edit popup window appears with heading Assignment Details")
	public void edit_popup_window_appears_with_heading_Assignment_Details() {
		String URL=assign.getAssignmentDetailTitle();
		Assert.assertTrue(URL.contains("Assignment detail"));
	}
	



}

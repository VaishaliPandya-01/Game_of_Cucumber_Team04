package com.stepDefinition;

import java.util.List;

import org.junit.Assert;

import com.pageObject.Dashboard_Obj;
import com.pageObject.Program_Add_Obj;
import com.pageObject.Program_Delete_Obj;
import com.pageObject.Program_Edit_Obj;
import com.pageObject.Program_Manage_Obj;
import com.utility.Log;
import com.utility.XlUtilsData;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Program_SD{

	private Program_Manage_Obj programManager = new Program_Manage_Obj();
	private Program_Add_Obj addProgram = new Program_Add_Obj();
	private Program_Edit_Obj editProgram = new Program_Edit_Obj();
	private Program_Delete_Obj deleteProgram = new Program_Delete_Obj();
	private Dashboard_Obj dashboardPage = new Dashboard_Obj();

	@When("Admin clicks Program from navigation bar")
	public void admin_clicks_Program_from_navigation_bar() {
		dashboardPage.clickProgram();
	}
	
	/**
	 * Validate Manage Program
	 *
	 */

	//Validate Manage Program URL
	@Then("Admin should see the {string} in the URL of manage program page")
	public void admin_should_see_the_in_the_URL_of_manage_program_page(String pageURL) {
		String URL=programManager.getManageProgramURL();
		Assert.assertTrue(URL.contains(pageURL));
		Log.logInfo("Validate Manage Program URL"+URL);
	}

	//Validate Manage Program Title
	@Then("Admin should see the {string} in the header of manage program page")
	public void admin_should_see_the_in_the_header_of_manage_program_page(String expectedPageTitle) {
		String actualTitle=programManager.getManageProgramTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Manage Program Title"+actualTitle);
	}

	//Validate Manage Program Pagination
	@Then("Admin should see the text as {string} along with Pagination icon below the table")
	public void admin_should_see_the_text_as_along_with_Pagination_icon_below_the_table(String expectedText) {
		String actualText=programManager.validatePagination();
		Assert.assertEquals(expectedText, actualText);
		Log.logInfo("Validate Manage Program Title"+actualText);
	}

	//Validate Manage Program Footer
	@Then("Admin should see the footer as {string}")
	public void admin_should_see_the_footer_as(String expectedText) {
		String actualText=programManager.validateFooterText();
		Assert.assertEquals(expectedText, actualText);
		Log.logInfo("Validate Manage Program Title"+actualText);
	}

	//Validate delete Icon
	@Then("Admin should be able to see the Delete icon button that is disabled on manage program")
	public void admin_should_be_able_to_see_the_Delete_icon_button_that_is_disabled_on_manage_program() {
		programManager.displayDeleteBtn();
		Log.logInfo("Validate delete Icon");
	}

	//Validate A New program button
	@Then("Admin should be able to see the + A New program button on manage program")
	public void admin_should_be_able_to_see_the_A_New_program_button_on_manage_batch() {
		programManager.addNewProgramBtnVisible();
		Log.logInfo("A New program button is displayed");
	}

	//Validate Number of Records In First page of Program table
	@Then("Admin should see the number of records displayed on the page are {int}")
	public void admin_should_see_the_number_of_records_displayed_on_the_page_are(Integer expectedValue) {
		Object actualValue=programManager.getRowSize();
		Assert.assertEquals(expectedValue, actualValue);
		Log.logInfo("Validate Manage Program Title"+actualValue);
	}

	//Validate program table header
	@Then("Admin Should see the data table on manage program")
	public void admin_Should_see_the_data_table_on_manage_program(DataTable HeaderList) {

		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = programManager.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));
		Log.logInfo("Validate table header"+actualdHeaderList);
	}

	//Validate Sort Arrow Icon
	@Then("Admin should see the sort arrow icon beside to each column header except Edit and Delete on program manage")
	public void admin_should_see_the_sort_arrow_icon_beside_to_each_column_header_except_Edit_and_Delete_on_program_manage() {
		programManager.ascDescSorting();
		programManager.ascNameSorting();
		programManager.descStatusSorting();
		Log.logInfo("sorting arrow is displayed");
	}

	//Validate check box in data table of manage program
	@Then("Data table should have a checkbox on manage program")
	public void data_table_should_have_a_checkbox_on_manage_program() {
		programManager.VisibleCheckBox();
		Log.logInfo("Validate check box in data table of manage program");
	}

	//Validate edit button in data table of manage program
	@Then("Data table should have a edit icon that is enabled on manage program")
	public void data_table_should_have_a_edit_icon_that_is_enabled_on_manage_program() {
		programManager.VisibleEditProgramBtn();
		Log.logInfo("Validate edit button in data table");
	}

	//Validate delete button in data table of manage program
	@Then("Data table should have a delete icon that is enabled on manage program")
	public void data_table_should_have_a_delete_icon_that_is_enabled_on_manage_program() {
		programManager.VisibledeleteProgramBtn();
		Log.logInfo("Validate delete button in data table");
	}

	//Validate Search bar
	@Then("Admin should see Search bar with text as {string}")
	public void admin_should_see_Search_bar_with_text_as(String expectedText) {
		String actualText= programManager.validateSearchBox();
		Assert.assertEquals(expectedText, actualText);
		Log.logInfo("Validate Manage Program Title"+actualText);
	}

	//Search Program by name
	@When("Admin enters Program name into search box {string} and {string}")
	public void admin_enters_Program_name_into_search_box_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);
		programManager.typeSearchBox(XlUtilsData.programName);
		Log.logInfo("Searched program name:-" +XlUtilsData.programName);
	}

	//Validate searched program name is displayed
	@Then("Admin should see the Programs displayed based on the Program Name")
	public void admin_should_see_the_Programs_displayed_based_on_the_Program_Name() {

		String tablevalue= programManager.getTableValue();
		Assert.assertTrue(tablevalue.contains(XlUtilsData.programName));
		Log.logInfo("Searched program name is present in data table:-" +tablevalue);
	}

	//Search Program by description
	@When("Admin enters Program description into search box {string} and {string}")
	public void admin_enters_Program_description_into_search_box_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);
		programManager.typeSearchBox(XlUtilsData.descriptionfrPrgrm);
		Log.logInfo("Searched program name:-" +XlUtilsData.descriptionfrPrgrm);
	}

	//Validate searched program description is displayed
	@Then("Admin should see the Programs displayed based on the Program description")
	public void admin_should_see_the_Programs_displayed_based_on_the_Program_description() {

		String tablevalue= programManager.getTableValue();
		Assert.assertTrue(tablevalue.contains(XlUtilsData.descriptionfrPrgrm));
		Log.logInfo("Searched program name is present in data table:-" +tablevalue);
	}

	//Search Program by status
	@When("Admin enters Program status into search box {string} and {string}")
	public void admin_enters_Program_status_into_search_box_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);
		programManager.typeSearchBox(XlUtilsData.prgrmStatus);
		Log.logInfo("Searched program name:-" +XlUtilsData.prgrmStatus);
	}

	//Validate searched program status is displayed
	@Then("Admin should see the Programs displayed based on the Program status")
	public void admin_should_see_the_Programs_displayed_based_on_the_Program_status() {

		String tablevalue= programManager.getTableValue();
		Assert.assertTrue(tablevalue.contains(XlUtilsData.prgrmStatus));
		Log.logInfo("Searched program name is present in data table:-" +tablevalue);
	}

	//Search Program by Invalid name
	@When("Admin enters invalid Program name into search box {string} and {string}")
	public void admin_enters_invalid_Program_name_into_search_box_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);
		programManager.typeSearchBox(XlUtilsData.programName);
		Log.logInfo("Searched program name:-" +XlUtilsData.programName);
	}

	//Validate searched program status is displayed
	@Then("Admin should see zero entries on the data table of manage program")
	public void Admin_should_see_zero_entries_on_the_data_table_of_manage_program() {

		String tablevalue= programManager.getTableValue();
		Assert.assertTrue(!tablevalue.contains(XlUtilsData.programName));
		Log.logInfo("Searched program name is present in data table:-" +tablevalue);
	}

	/**
	 * Add New program Details Form
	 *
	 */

	//Click on add new program
	@When("Admin clicks + A New Program button")
	public void admin_clicks_A_New_Program_button() {

		programManager.addNewProgramBtn();
		Log.logInfo("Click on add new program");
	}

	//Validate program details fields
	@Then("The pop up should include fields like Name Description Status on program detail")
	public void the_pop_up_should_include_fields_like_Name_Description_Status_on_program_detail() {
		addProgram.validateFieldsOnForm();
		Log.logInfo("Validate program details fields");
	}

	//Click on save without entering data
	@When("Admin clicks Save button on program details without entering any data")
	public void admin_clicks_Save_button_on_program_details_without_entering_any_data() {
		addProgram.save_btn();
		Log.logInfo("Admin clicks on save without entering program details");
	}

	//validate error message
	@Then("Admin gets a Error message alert for program fields")
	public void admin_gets_a_Error_message_alert_for_program_fields() {

		String errorMessage = addProgram.validationMessage();
		Log.logInfo("Validate message for empty fields of program" +errorMessage);
	}

	//Fill only program name
	@When("Admin clicks Save button after entering only program name {string} and {string}")
	public void Admin_clicks_Save_button_after_entering_only_program_name(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//Fill only program description
	@When("Admin clicks Save button after entering only program description {string} and {string}")
	public void Admin_clicks_Save_button_after_entering_only_program_description(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//Fill only program Status
	@When("Admin clicks Save button after entering only program status {string} and {string}")
	public void Admin_clicks_Save_button_after_entering_only_program_status(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//validate error message
	@Then("Admin gets a message alert for program mandatory field {string}")
	public void admin_gets_a_message_alert_for_program_mandatory_field(String expectedMessage) {

		String actualMessage = addProgram.validationMessage();
		Assert.assertEquals(expectedMessage,actualMessage);
		Log.logInfo("Validate message for mandatory field of program" +actualMessage);
	}

	//Fill Invalid details
	@When("Admin enters only numbers or special char in name and desc column on program details {string} and {string}")
	public void Admin_enters_only_numbers_or_special_char_in_name_and_desc_column_on_program_details(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//ClickOnClose
	@When("Admin clicks Close Icon on Program Details form")
	public void admin_clicks_Close_Icon_on_Program_Details_form() {
		addProgram.closeProgramDetails();
		Log.logInfo("Admin click on close button");
	}

	//ClickOnCancel
	@When("Admin clicks Cancel Icon on Program Details form")
	public void admin_clicks_Cancel_Icon_on_Program_Details_form() {
		addProgram.cancel_btn();;
		Log.logInfo("Admin click on cancel button");
	}

	@Then("Program Details popup window should be closed without saving")
	public void program_Details_popup_window_should_be_closed_without_saving() {
		String title=programManager.getManageProgramTitle();
		Log.logInfo("Validate Manage Program Title"+title);
	}

	//Fill All program details
	@When("Enter all the required fields with valid values and click Save button {string} and {string}")
	public void Enter_all_the_required_fields_with_valid_values_and_click_Save_button(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//validate message
	@Then("Admin gets a message {string} alert and able to see the new program added in the data table")
	public void Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(String expectedMessage) {

		String actualMessage = addProgram.validationMessage();
		Assert.assertEquals(expectedMessage,actualMessage);

		String actualTableData = programManager.getTableValue();
		Assert.assertTrue(actualTableData.contains(XlUtilsData.programName));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.descriptionfrPrgrm));

		String title=programManager.getManageProgramTitle();

		Log.logInfo("Validate Manage program Title"+title);
		Log.logInfo("Validate message after program added" +actualMessage);
	}

	/**
	 * Edit Program
	 *
	 */

	//Validate and click Edit Icon
	@Then("Admin clicks on the Edit icon on program page if it is enabled")
	public void admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled() {
		programManager.editProgramBtn();
		Log.logInfo("Click on edit program buton");
	}

	//Update by program name
	@When("Click save after updating the valid program name {string} and {string}")
	public void Click_save_after_updating_the_valid_program_name(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//Update by program description
	@When("Click save after updating the valid program description {string} and {string}")
	public void Click_save_after_updating_the_valid_program_description(String dataKey, String sheetName) throws Exception {

		XlUtilsData.programXLdata(dataKey, sheetName);

		programManager = 
				addProgram.fillProgramDetailForm
				(XlUtilsData.programName, XlUtilsData.descriptionfrPrgrm,programManager);

		Log.logInfo("Program details added:-" +
				"ProgramName:- "+ XlUtilsData.programName + 
				"Description:- " + XlUtilsData.descriptionfrPrgrm);
	}

	//Update by program Status
	@When("Click save after updating the valid program status")
	public void Click_save_after_updating_the_valid_program_status(){

		editProgram.inActiveRadio_btn();
		editProgram.save_btn();
		Log.logInfo("Status changed to inactive");
	}

	//validate message
	@Then("Admin gets a message for program update as {string}")
	public void Admin_gets_a_message_for_program_update_as(String expectedMessage) {

		String actualMessage = addProgram.validationMessage();
		Assert.assertEquals(expectedMessage,actualMessage);
		Log.logInfo("Validate message after program added" +actualMessage);
	}

	/**
	 * Delete Program at row level
	 *
	 */

	//Click on delete Icon	
	@Then("Admin clicks on the delete icon on program page if it is enabled")
	public void admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled() {
		programManager.deleteSingleProgramBtn();
		Log.logInfo("Clicked on delete");
	}

	//Validate Pop up Window
	@Then("Alert appears with yes and No option to delete program")
	public void alert_appears_with_yes_and_No_option_to_delete_program() {
		deleteProgram.alertBoxIsDisplayed();
		Log.logInfo("Delete alert box is present");
	}

	//Validate message in delete box
	@Then("Admin should see a message on manage program {string}")
	public void admin_should_see_a_message_on_manage_program(String expectedText) {
		String actualText= deleteProgram.deleteBoxText();
		Assert.assertEquals(expectedText,actualText);
		Log.logInfo("Delete alert box text"+actualText);
	}

	//Click Yes to Delete
	@When("Admin click yes option to delete program")
	public void admin_click_yes_option_to_delete_program() {

		deleteProgram.deleteYesBtn();
		Log.logInfo("Clicked yes to delete");
	}

	//Validate Deleted program
	@Then("Program deleted alert pops and program is no more available in data table")
	public void program_deleted_alert_pops_and_program_is_no_more_available_in_data_table() {
		deleteProgram.deleteMessage();
		Log.logInfo("Program is deleted");
	}

	//Click No to Delete
	@When("Admin click No option on delete program")
	public void admin_click_No_option_on_delete_program() {
		deleteProgram.deleteNoBtn();
		Log.logInfo("Clicked No to delete");
	}

	//Click close to Delete
	@When("Admin click close option on delete program")
	public void admin_click_close_option_on_delete_program() {
		deleteProgram.closeArrow();
		Log.logInfo("Clicked close to delete");
	}

	//Validate program is not deleted
	@Then("Program is still listed in data table")
	public void Program_is_still_listed_in_data_table() {
		deleteProgram.successMessage();
		Log.logInfo("Program is not deleted");
	}

	/**
	 * Delete Multiple Program
	 *
	 */

	//None of the checkBox are selected
	@Given("None of the checkboxes in data table of program are selected")
	public void none_of_the_checkboxes_in_data_table_of_program_are_selected() {
		programManager.VisibleCheckBox();
		Log.logInfo("Check Box are not selected");
	}

	//Delete Icon should be disabled
	@Then("The delete icon under the Manage program header should be disabled")
	public void The_delete_icon_under_the_Manage_program_header_should_be_disabled() {
		programManager.VisibledeleteProgramBtn();
		Log.logInfo("Delete multiple program button is disabled");
	}

	//one of the checkBox is selected
	@Given("One of the checkbox row is selected on program page")
	public void one_of_the_checkbox_row_is_selected_on_program_page() {
		programManager.SelectSingleCheckBoxProgram();
		Log.logInfo("Checkbox is selected");
	}

	//Multiple checkBox is selected
	@Given("Two or more checkboxes are selected on program page")
	public void Two_or_more_checkboxes_are_selected_on_program_page() {
		programManager.SelectMultiCheckBoxProgram();;
		Log.logInfo("Multiple Checkbox are selected");
	}

	//Click Delete Icon and yes button
	@When("Click delete icon below Manage program header and click Yes")
	public void click_delete_icon_below_Manage_program_header_and_click_Yes() {
		programManager.deleteMutipleProgramBtn();
		deleteProgram.deleteYesBtn();
		Log.logInfo("Clicked on delete yes button");
	}

	//Data should be deleted
	@Then("The respective row in the data table of program is deleted")
	public void the_respective_row_in_the_data_table_of_program_is_deleted() {

		String message = deleteProgram.deleteMessage();
		String actualTitle=programManager.getManageProgramTitle();

		Log.logInfo("Validate Manage Program Title"+actualTitle);		
		Log.logInfo("Program is deleted successfully"+message);
	}

	//Click Delete Icon and No button
	@When("Click delete icon below Manage program header and click No")
	public void click_delete_icon_below_Manage_program_header_and_click_No() {
		programManager.deleteMutipleProgramBtn();
		deleteProgram.deleteNoBtn();
		Log.logInfo("Clicked on delete No button");
	}

	//Data should be deleted
	@Then("The respective row in the data table of program should not get delete")
	public void the_respective_row_in_the_data_table_of_program_should_not_get_delete() {

		String message = deleteProgram.deleteMessage();
		String actualTitle=programManager.getManageProgramTitle();

		Log.logInfo("Validate Manage Program Title"+actualTitle);		
		Log.logInfo("Program is deleted successfully"+message);
	}
	/**
	 * Program Sorting Validation
	 *
	 */
	//Click on ascending sorting icon by name
	@When("Admin clicks the ascending sort icon of program name column")
	public void admin_clicks_the_ascending_sort_icon_of_program_name_column() {

		programManager.ascNameSorting();;
		Log.logInfo("Admin clicks the sort icon of program name column");
	}

	//Click on descending sorting icon by name
	@When("Admin clicks the descending sort icon of program name column")
	public void admin_clicks_the_descending_sort_icon_of_program_name_column() {

		programManager.descNameSorting();;
		Log.logInfo("Admin clicks the sort icon of program name column");
	}

	//Click on ascending sorting icon by description
	@When("Admin clicks the ascending sort icon of program description column")
	public void admin_clicks_the_ascending_sort_icon_of_program_description_column() {

		programManager.ascDescSorting();;
		Log.logInfo("Admin clicks the sort icon of program description column");
	}

	//Click on descending sorting icon by description
	@When("Admin clicks the descending sort icon of program description column")
	public void admin_clicks_the_descending_sort_icon_of_program_description_column() {

		programManager.descDescSorting();;
		Log.logInfo("Admin clicks the sort icon of program description column");
	}

	//Click on ascending sorting icon by Status
	@When("Admin clicks the ascending sort icon of program status column")
	public void admin_clicks_the_ascending_sort_icon_of_program_status_column() {

		programManager.ascStatusSorting();;
		Log.logInfo("Admin clicks the sort icon of program status column");
	}

	//Click on descending sorting icon by status
	@When("Admin clicks the descending sort icon of program status column")
	public void admin_clicks_the_descending_sort_icon_of_program_status_column() {

		programManager.descStatusSorting();;
		Log.logInfo("Admin clicks the sort icon of program status column");
	}

	//Data should get sorted in ascending by name
	@Then("The data get sorted on the table based on the program name column values in ascending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_ascending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in ascending order"+tableValue);
	}

	//Data should get sorted in descending by name
	@Then("The data get sorted on the table based on the program name column values in descending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_descending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in descending order"+tableValue);
	}

	//Data should get sorted in ascending by description
	@Then("The data get sorted on the table based on the program description column values in ascending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_decsription_column_values_in_ascending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in ascending order"+tableValue);
	}

	//Data should get sorted in descending by description
	@Then("The data get sorted on the table based on the program description column values in descending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_description_column_values_in_descending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in descending order"+tableValue);
	}

	//Data should get sorted in ascending by status
	@Then("The data get sorted on the table based on the program status column values in ascending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_ascending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in ascending order"+tableValue);
	}

	//Data should get sorted in descending by status
	@Then("The data get sorted on the table based on the program status column values in descending order")
	public void the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_descending_order() {

		String tableValue=programManager.getTableValue();
		Log.logInfo("data get sorted on the table in descending order"+tableValue);
	}
	/**
	 * Program Pagination
	 *
	 */
	//Next Page
	@When("Admin clicks Next page link on the program table")
	public void admin_clicks_Next_page_link_on_the_program_table() {
		programManager.nextPageArrow();
		Log.logInfo("Admin clicks Next page link on the program table");
	}

	//validate next page
	@Then("Admin should see the Pagination has Next link")
	public void admin_should_see_the_Pagination_has_link() {
		String footerText=programManager.validateFooterText();
		Log.logInfo("Admin is on Next page "+footerText);
	}

	//Last page
	@When("Admin clicks Last page link on the program table")
	public void admin_clicks_Last_page_link_on_the_program_table() {
		programManager.lastPageArrow();
		Log.logInfo("Admin clicks Next page link on the program table");
	}

	//Validate last page
	@Then("Admin should see the last page record on the table with Next page link are disabled")
	public void admin_should_see_the_last_page_record_on_the_table_with_Next_page_link_are_disabled() {
		programManager.disableNextPageArrow();
		String footerText=programManager.validateFooterText();
		Log.logInfo("Admin is on Next page "+footerText);
	}

	//First page
	@When("Admin clicks first page link on the program table")
	public void admin_clicks_first_page_link_on_the_program_table() {
		programManager.firstPageArrow();
		Log.logInfo("Admin clicks First page link on the program table");
	}

	//Validate first page
	@Then("Admin should see the previous page record on the table with pagination has previous page link")
	public void Admin_should_see_the_previous_page_record_on_the_table_with_pagination_has_previous_page_link() {
		String footerText=programManager.validateFooterText();
		Log.logInfo("Admin is on Next page "+footerText);
	}

	//Start page
	@When("Admin clicks start page link on the program table")
	public void admin_clicks_start_page_link_on_the_program_table() {
		programManager.disablePrePageArrow();
		programManager.firstPageArrow();
		Log.logInfo("Admin clicks First page link on the program table");
	}

	//Validate start page
	@Then("Admin should see the very first page record on the table with Previous page link are disabled")
	public void Admin_should_see_the_very_first_page_record_on_the_table_with_Previous_page_link_are_disabled() {
		String footerText=programManager.validateFooterText();
		Log.logInfo("Admin is on Next page "+footerText);
	}

}

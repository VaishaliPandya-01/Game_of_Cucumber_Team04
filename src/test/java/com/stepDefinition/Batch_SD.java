package com.stepDefinition;

import java.util.List;

import org.junit.Assert;

import com.pageObject.Batch_Add_Obj;
import com.pageObject.Batch_Delete_Obj;
import com.pageObject.Batch_Edit_Obj;
import com.pageObject.Batch_Manage_Obj;
import com.pageObject.Dashboard_Obj;
import com.pageObject.Login_Obj;
import com.utility.Log;
import com.utility.XlUtilsData;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Batch_SD{

	private Batch_Manage_Obj batchManager = new Batch_Manage_Obj();
	private Batch_Add_Obj addBatch = new Batch_Add_Obj();
	private Batch_Delete_Obj deleteBatch = new Batch_Delete_Obj();
	private Batch_Edit_Obj editBatch = new Batch_Edit_Obj();
	private Login_Obj loginPage = new Login_Obj();
	private Dashboard_Obj dashboardPage = new Dashboard_Obj();

	
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
		loginPage.userNameText("uName");
		loginPage.PswdText("pwd");
		loginPage.clickLoginBtn();
		dashboardPage.getDashboardTitle();
	}

	@When("Admin clicks Batch from navigation bar")
	public void admin_clicks_Batch_from_navigation_bar() {
		dashboardPage.clickBatch();
	}

	/**
	 * Validate Manage Batch
	 *
	 */

	//Validate Manage Batch URL
	@Then("Admin should see the {string} in the URL of manage batch page")
	public void admin_should_see_the_in_the_URL_of_manage_batch_page(String expectedPageURL) {

		String actualURL=batchManager.getManageBatchURL();
		Assert.assertTrue(actualURL.contains(expectedPageURL));
		Log.logInfo("Validate Manage Batch URL"+actualURL);
	}

	//Validate Manage Batch Title
	@Then("Admin should see the {string} in the header of manage batch page")
	public void admin_should_see_the_in_the_header_of_manage_batch_page(String expectedPageTitle) {

		String actualTitle=batchManager.getManageBatchTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Manage Batch Title"+actualTitle);
	}

	//Validate Pagination
	@Then("Admin should see the pagination controls under the data table on manage batch page")
	public void admin_should_see_the_pagination_controls_under_the_data_table_on_manage_batch_page() {

		batchManager.validatePagination();
		Log.logInfo("Validate Pagination");
	}

	//Validate table header
	@Then("Admin Should see the data table on manage batch")
	public void admin_Should_see_the_data_table_on_manage_batch(DataTable HeaderList) {

		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = batchManager.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));
		Log.logInfo("Validate table header"+actualdHeaderList);
	}

	//Validate delete Icon
	@Then("Admin should be able to see the Delete icon button that is disabled on manage batch")
	public void admin_should_be_able_to_see_the_Delete_icon_button_that_is_disabled_on_manage_batch() {

		batchManager.displayDeleteBtn();
		Log.logInfo("Validate delete Icon");
	}

	//Validate A New batch button
	@Then("Admin should be able to see the + A New batch button on manage batch")
	public void admin_should_be_able_to_see_the_A_New_batch_button_on_manage_batch() {

		batchManager.addNewBatchBtnVisible();
		Log.logInfo("A New batch button is displayed");
	}

	//Validate check box in data table
	@Then("Data table should have a checkbox on manage batch")
	public void data_table_should_have_a_checkbox_on_manage_batch() {

		batchManager.VisibleCheckBox();
		Log.logInfo("Validate check box in data table");
	}

	//Validate edit button in data table
	@Then("Data table should have a edit icon that is enabled on manage batch")
	public void data_table_should_have_a_edit_icon_that_is_enabled_on_manage_batch() {

		batchManager.VisibleEditBatchBtn();
		Log.logInfo("Validate edit button in data table");
	}


	//Validate delete button in data table
	@Then("Data table should have a delete icon that is enabled on manage batch")
	public void data_table_should_have_a_delete_icon_that_is_enabled_on_manage_batch() {

		batchManager.VisibledeleteBatchBtn();
		Log.logInfo("Validate delete button in data table");
	}

	/**
	 * Add New Batch Details Form
	 *
	 */
	
	//Click on add new batch
	@When("Admin clicks + A New Batch button")
	public void admin_clicks_A_New_Batch_button() {

		batchManager.addNewBatchBtn();
		Log.logInfo("Click on add new batch");
	}

	//Validate new pop up with batch details
	@Then("A new pop up with {string} appears")
	public void a_new_pop_up_with_appears(String expectedPageTitle) {

		String actualTitle=addBatch.getBatchDetailsTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Batch details Title"+actualTitle);
	}

	//Validate batch details fields
	@Then("The pop up should include fields like Name Number of classes Description Status and Program Name")
	public void the_pop_up_should_include_fields_like_Name_Number_of_classes_Description_Status_and_Program_Name() {
		addBatch.validateFieldsOnForm();
		Log.logInfo("Validate batch details fields");
	}


	//Fill Batch Detail without Description
	@When("Click on save after filling all the fields except description with valid values on batch details {string} and {string}")
	public void click_on_save_after_filling_all_the_fields_except_description_with_valid_values_on_batch_details_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}


	//Fill Batch Detail with all values
	@When("Click on save after filling all the fields with valid values on batch details {string} and {string}")
	public void click_on_save_after_filling_all_the_fields_with_valid_values_on_batch_details_and(String dataKey, String sheetName) throws Exception {
		
		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}


	//validate data in table
	@Then("The newly added batch should be present in the data table in Manage Batch page")
	public void the_newly_added_batch_should_be_present_in_the_data_table_in_Manage_Batch_page() {

		String actualTableData = batchManager.getTableValue();
		Assert.assertTrue(actualTableData.contains(XlUtilsData.batchName));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.descriptionfrBtch));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.NoOfClassfrBtch));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.programNameFrBtch));
		String title=batchManager.getManageBatchTitle();
		Log.logInfo("Validate Manage Batch Title"+title);
		Log.logInfo("Validate Manage Batch Data");
	}

	//Fill Batch Detail with Invalid value
	@When("Click on save after filling all the fields with Invalid values on batch details {string} and {string}")
	public void click_on_save_after_filling_all_the_fields_with_Invalid_values_on_batch_details_and(String dataKey, String sheetName) throws Exception {
		
		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}


	//Missing Mandatory Fields
	@When("Click on save after missing mandatory fields on batch details {string} and {string}")
	public void Click_on_save_after_missing_mandatory_fields_on_batch_details_and(String dataKey, String sheetName) throws Exception {
		
		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}


	//validate error message
	@Then("Error message should appear on batch detail page")
	public void Error_message_should_appear_on_batch_detail_page() {
		String message = addBatch.errorMessage();
		Log.logInfo("Error message:- " +message);

	}

	/**
	 * Delete Batch at row level
	 *
	 */

	//Click on delete Icon	
	@Then("Admin clicks on the delete icon on batch page if it is enabled")
	public void admin_clicks_on_the_delete_icon_on_batch_page_if_it_is_enabled() {
		batchManager.deleteSingleBatchBtn();
		Log.logInfo("Clicked on delete");
	}

	//Validate Pop up Window
	@Then("Alert appears with yes and No option to delete batch")
	public void alert_appears_with_yes_and_No_option_to_delete_batch() {
		deleteBatch.alertBoxIsDisplayed();
		Log.logInfo("Delete alert box is present");
	}


	//Click Yes to Delete
	@When("Admin click yes option to delete batch")
	public void admin_click_yes_option_to_delete_batch() {

		deleteBatch.deleteYesBtn();
		Log.logInfo("Clicked yes to delete");
	}

	//Validate Deleted batch
	@Then("Batch deleted alert pops and batch is no more available in data table")
	public void batch_deleted_alert_pops_and_batch_is_no_more_available_in_data_table() {
		deleteBatch.deleteMessage();
		Log.logInfo("Batch is deleted");
	}

	//Click No to Delete
	@When("Admin click No option on delete batch")
	public void admin_click_No_option_on_delete_batch() {
		deleteBatch.deleteNoBtn();
		Log.logInfo("Clicked No to delete");
	}

	//Validate batch is not deleted
	@Then("Batch is still listed in data table")
	public void Batch_is_still_listed_in_data_table() {
		deleteBatch.successMessage();
		Log.logInfo("Batch is not deleted");
	}

	/**
	 * Delete Multiple Batch
	 *
	 */

	//None of the checkBox are selected
	@Given("None of the checkboxes in data table of batch are selected")
	public void none_of_the_checkboxes_in_data_table_of_batch_are_selected() {
		batchManager.VisibleCheckBox();
		Log.logInfo("Check Box are not selected");
	}

	//Delete Icon should be disabled
	@Then("The delete icon under the Manage Batch header should be disabled")
	public void The_delete_icon_under_the_Manage_Batch_header_should_be_disabled() {
		batchManager.VisibledeleteBatchBtn();
		Log.logInfo("Delete multiple batch button is disabled");
	}

	//one of the checkBox is selected
	@Given("One of the checkbox row is selected on batch page")
	public void one_of_the_checkbox_row_is_selected_on_batch_page() {
		batchManager.SelectSingleCheckBoxBatch();
		Log.logInfo("Checkbox is selected");
	}

	//Multiple checkBox is selected
	@Given("Two or more checkboxes are selected on batch page")
	public void Two_or_more_checkboxes_are_selected_on_batch_page() {
		batchManager.SelectMultiCheckBoxBatch();;
		Log.logInfo("Checkbox is selected");
	}

	//Click Delete Icon
	@When("Click delete icon below Manage Batch header")
	public void click_delete_icon_below_Manage_Batch_header() {
		batchManager.deleteMutipleBatchBtn();
		Log.logInfo("Click on delete button");
	}

	//Data should be deleted
	@Then("The respective row in the data table of batch is deleted")
	public void the_respective_row_in_the_data_table_of_batch_is_deleted() {
		deleteBatch.deleteMessage();
		Log.logInfo("Batch is deleted successfully");
	}

	/**
	 * Edit Batch
	 *
	 */

	//Validate and click Edit Icon
	@Then("Admin clicks on the Edit icon on batch page if it is enabled")
	public void admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled() {
		batchManager.editBatchBtn();
		Log.logInfo("Click on edit batch buton");
	}

	//Validate batch detail pop up
	@Then("A new pop up with {string} appears to edit")
	public void a_new_pop_up_with_appears_to_edit(String expectedPageTitle) {
		String actualTitle = editBatch.getBatchDetailsTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Batch details Title"+actualTitle);

	}

	//Update batch details
	@When("Click save after updating the batch detail fields with valid values {string} and {string}")
	public void click_save_after_updating_the_batch_detail_fields_with_valid_values_and(String dataKey, String sheetName) throws Exception {

		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}

	//Update Batch Detail with Invalid value
	@When("Click save after updating the batch detail fields with Invalid values {string} and {string}")
	public void Click_save_after_updating_the_batch_detail_fields_with_Invalid_values(String dataKey, String sheetName) throws Exception {

		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}

	//Update with Missing Mandatory Fields
	@When("Click save after updating the batch detail without mandatory fields {string} and {string}")
	public void Click_save_after_updating_the_batch_detail_without_mandatory_fields(String dataKey, String sheetName) throws Exception {
	
		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}

	//Fill Batch Detail without Description
	@When("Erase data from description field of batch {string} and {string}")
	public void Erase_data_from_description_field_of_batch(String dataKey, String sheetName) throws Exception {
	
		XlUtilsData.batchXLdata(dataKey, sheetName);

		batchManager = 
				addBatch.fillBatchDetailForm
				(XlUtilsData.batchName, XlUtilsData.descriptionfrBtch,
						XlUtilsData.NoOfClassfrBtch, XlUtilsData.programNameFrBtch, batchManager);

		Log.logInfo("Batch details added:-" +
				"BatchName:- "+ XlUtilsData.batchName + 
				"Description:- " + XlUtilsData.descriptionfrBtch + 
				"No Of Classe:- " + XlUtilsData.NoOfClassfrBtch + 
				"Program Name:- " + XlUtilsData.programNameFrBtch);
	}

	//Validate Updated batch details
	@Then("The updated batch details should appear on the data table")
	public void the_updated_batch_details_should_appear_on_the_data_table() {
		String actualTableData = batchManager.getTableValue();
		Assert.assertTrue(actualTableData.contains(XlUtilsData.batchName));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.descriptionfrBtch));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.NoOfClassfrBtch));
		Assert.assertTrue(actualTableData.contains(XlUtilsData.programNameFrBtch));
		String title=batchManager.getManageBatchTitle();
		Log.logInfo("Validate Manage Batch Title"+title);
		Log.logInfo("Validate Manage Batch Data");
	}
}

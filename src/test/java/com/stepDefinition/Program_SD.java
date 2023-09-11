package com.stepDefinition;

import java.util.List;

import org.junit.Assert;

import com.baseClass.BaseClass;
import com.pageObject.Program_Manage_Obj;
import com.utility.Log;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Then;

public class Program_SD extends BaseClass{

	private Program_Manage_Obj programManager = new Program_Manage_Obj();

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
	public void admin_should_see_the_in_the_header_of_manage_program_page(String pageTitle) {
		String title=programManager.getManageProgramTitle();
		Assert.assertEquals(pageTitle, title);
		Log.logInfo("Validate Manage Program Title"+title);
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

	//Validate A New batch button
	@Then("Admin should be able to see the + A New program button on manage program")
	public void admin_should_be_able_to_see_the_A_New_batch_button_on_manage_batch() {
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
		programManager.sortingArrowButton();
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



}

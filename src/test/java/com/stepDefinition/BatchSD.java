package com.stepDefinition;

import java.util.List;

import org.junit.Assert;


import com.baseClass.BaseClass;
import com.pageObject.BatchManage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BatchSD extends BaseClass{
	
	private BatchManage batchManager = new BatchManage();
	
	@Given("Admin is on dashboard page after Login")
	public void admin_is_on_dashboard_page_after_Login() {
	   Initialization();
	}

	@When("Admin clicks Batch from navigation bar")
	public void admin_clicks_Batch_from_navigation_bar() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	//Validate Manage Batch URL
	@Then("Admin should see the {string} in the URL of manage batch page")
	public void admin_should_see_the_in_the_URL_of_manage_batch_page(String pageURL) {
		
		String URL=batchManager.getManageBatchTitle();
		Assert.assertTrue(URL.contains(pageURL));
		
	}
	
	//Validate Manage Batch Title
	@Then("Admin should see the {string} in the header of manage batch page")
	public void admin_should_see_the_in_the_header_of_manage_batch_page(String pageTitle) {
		
		String title=batchManager.getManageBatchTitle();
		Assert.assertEquals(pageTitle, title);
		
	}
	
	//Validate Pagination
	@Then("Admin should see the pagination controls under the data table on manage batch page")
	public void admin_should_see_the_pagination_controls_under_the_data_table_on_manage_batch_page() {
	  
		batchManager.validatePagination();
	}
	
	@Then("Admin Should see the data table on manage batch")
	public void admin_Should_see_the_data_table_on_manage_batch(DataTable HeaderList) {
	    
		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = batchManager.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));		
	}

}

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
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.datatable.DataTable;
public class Assignment_Step {

	AssignmentPage assign = new AssignmentPage();
	Controller cn = new Controller();
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
	
	@When("Admin clicks {string} button on the navigation bar")
	public void admin_clicks_button_on_the_navigation_bar(String string) {
	    assign.Assignment_btn();
	}

	@Then("Admin should see URL with {string}")
	public void admin_should_see_URL_with(String PageURL) {
	   
	   String URL=assign.getManageAssignmentTitle();
		Assert.assertTrue(URL.contains(PageURL));
	}

	@When("the user clicks the 'assignment' button")
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


	@Then("Admin should see header with {string}")
	public void admin_should_see_header_with(String pageTitle) {
		String title=assign.getManageAssignmentTitle();
		Assert.assertEquals(pageTitle, title);
	}

	@When("Admin clicks {string} button on the navigation bar and get all text from the portal page")
	public void admin_clicks_button_on_the_navigation_bar_and_get_all_text_from_the_portal_page(String string) {
//		portalPage.clickAssignmentButton();
	}

	@Then("Admin should see correct spelling for the all the fields")
	public void admin_should_see_correct_spelling_for_the_all_the_fields() {
//		portalText = portalPage.getAllText();
	}
	@Then("the admin checks the spelling of all fields")
    public void the_admin_checks_the_spelling_of_all_fields() {
//        SpellCheckerUtilities speller = new SpellCheckerUtilities();
//        String[] words = portalText.split("\\s+");
//
//        for (String word : words) {
//            if (!speller.isSpellingValid(word)) {
//                System.out.println("Spelling error: " + word);
//            }
//         // Clean up
//            driver.quit();
//        }
       }


	@Then("Admin should see disabled delete icon below the {string}")
	public void admin_should_see_disabled_delete_icon_below_the(String String) {
		assign.isDeleteIconDisabled();
	}

	
	@Then("Admin should see search bar on the manage assignment page")
	public void admin_should_see_search_bar_on_the_manage_assignment_page() {
	    assign.isSearchBarDisplayed();
	}


	@Then("Admin should see +Add New assignment button on the manage assignment page")
	public void admin_should_see_Add_New_assignment_button_on_the_manage_assignment_page() {
	    assign.isANewAssignmentbtnDisplayed();
	}

	@Then("Admin should see data table on the manage assignment page With following column headers.")
	public void admin_should_see_data_table_on_the_manage_assignment_page_With_following_column_headers_(DataTable HeaderList) {
		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = assign.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));
	}

	@Then("Edit Icon in each row of data table only  when entries are available")
	public void edit_Icon_in_each_row_of_data_table_only_when_entries_are_available(DataTable HeaderList) {
	
		  List<Boolean> editIconList = assign.areEditIconDisplayed();
          for (boolean isDisplayed : editIconList) {
	      Assert.assertTrue("Edit icon should only be displayed when entries are available", isDisplayed);
	        }
	    }

	@Then("Edit Icon will not be present in data table")
	public void edit_Icon_will_not_be_present_in_data_table() {
		assign.isEditIconDisabled();
	}

	@Then("Delete Icon in each row of data table only  when entries are available")
	public void delete_Icon_in_each_row_of_data_table_only_when_entries_are_available() {
	   
	}

	@Then("Delete Icon will not be present in data table")
	public void delete_Icon_will_not_be_present_in_data_table() {
	    
	}

	@Then("Admin should see sort icon near the column headers except for Edit and Delete")
	public void admin_should_see_sort_icon_near_the_column_headers_except_for_Edit_and_Delete() {
	    
	}

	@Then("Admin should see check box in the all rows  of data table when entries available")
	public void admin_should_see_check_box_in_the_all_rows_of_data_table_when_entries_available() {
	    
	}

	@Then("Above the footer Admin should see the text as {string} below the table.")
	public void above_the_footer_Admin_should_see_the_text_as_below_the_table(String string) {
	    
	}

	@Then("Admin should see the pagination controls under the data table")
	public void admin_should_see_the_pagination_controls_under_the_data_table() {
	    
	}


	@Then("Admin should see the text with total number assignments in the data table. \\({string})")
	public void admin_should_see_the_text_with_total_number_assignments_in_the_data_table(String string) {
	    
	}
}

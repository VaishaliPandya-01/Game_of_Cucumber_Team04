package com.stepDefinition;

import java.util.List;

import org.junit.Assert;

import com.pageObject.User_Manage_Obj;
import com.pageObject.User_Add_Obj;
import com.pageObject.User_Edit_Obj;
import com.pageObject.User_Delete_Obj;
import com.utility.Log;
import com.utility.XlUtilsData;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class User_SD {
	
	private User_Manage_Obj userManager = new User_Manage_Obj();
	private User_Add_Obj addUser = new User_Add_Obj();
	private User_Edit_Obj editUser = new User_Edit_Obj();
	private User_Delete_Obj deleteUser = new User_Delete_Obj();

	
	////////User page validation
	
	@When("Admin clicks User from navigation bar")
	public void admin_User_clicks_from_navigation_bar() {
		userManager.getManageUserTitle();	    
	}
     
	//Validate Manage User URL
	@Then("Admin should see the {string} in the URL of manage user page")
	public void admin_should_see_the_in_the_URL_of_manage_user_page(String pageURL) {
		String URL=userManager.getManageUserURL();
		Assert.assertTrue(URL.contains(pageURL));
		Log.logInfo("Validate Manage User URL"+URL);

	    
	}

	//Validate Manage Program Title
	@Then("Admin should see the {string} in the header of manage user page")
	public void admin_should_see_the_in_the_header_of_manage_user_page(String expectedPageTitle) {
		String actualTitle=userManager.getManageUserTitle();
		Assert.assertEquals(expectedPageTitle, actualTitle);
		Log.logInfo("Validate Manage User Title"+actualTitle);

	    
	}

	//Validate Manage User Pagination
	@Then("Admin should see the pagination controls under the data table of user table")
	public void admin_should_see_the_pagination_controls_under_the_data_table_of_user_table(String expectedText) {
	//public void admin_should_see_the_text_as_along_with_Pagination_icon_below_the_table(String expectedText) {
			String actualText=userManager.validatePagination();
			Assert.assertEquals(expectedText, actualText);
			Log.logInfo("Validate Manage User Title"+actualText);
	    
	}

	
	@Then("Admin Should see the data table with headers Id, Name, location, Phone Number, Edit\\/Delete")
	public void admin_Should_see_the_data_table_with_headers_Id_Name_location_Phone_Number_Edit_Delete(DataTable HeaderList) {
		List<String> expectedHeaderList = HeaderList.asList();
		List<String> actualdHeaderList = userManager.getTableHeaderList();
		Assert.assertTrue(expectedHeaderList.containsAll(actualdHeaderList));
		Log.logInfo("Validate table header"+actualdHeaderList);
	    
	}


	@Then("Admin should be able to see the {string} icon button that is disabled")
	public void admin_should_be_able_to_see_the_icon_button_that_is_disabled(String string) {
		userManager.displayDeleteBtn();
		Log.logInfo("Validate delete Icon");
        
	    
	}


	@Then("Admin should be able to see the {string} button")
	public void admin_should_be_able_to_see_the_button(String string) {
		userManager.addNewUserBtnVisible();


	}


	@Then("Admin should be able to see the search text box")
	public void admin_should_be_able_to_see_the_search_text_box() {
		userManager.searchBox();
		
	    
	}

	
	@Then("Each row in the data table should have a checkbox")
	public void each_row_in_the_data_table_should_have_a_checkbox() {
		userManager.SelectSingleCheckBoxUser();
	

	}


	@Then("Each row in the data table should have a edit icon that is enabled")
	public void each_row_in_the_data_table_should_have_a_edit_icon_that_is_enabled() {
        userManager.VisibleEditUserBtn();
	    
	}


	@Then("Each row in the data table should have a delete icon that is enabled")
	public void each_row_in_the_data_table_should_have_a_delete_icon_that_is_enabled() {
		userManager.VisibledeleteUserBtn();

	    
	}
	
	@Then("Admin should see the {string} in the URL")
	public void admin_should_see_the_in_the_URL(String string) {
		userManager.getManageUserURL();
		Log.logInfo("Validate Manage User URL");
		
	    
	}

	@Then("Admin should see the {string} in the header")
	public void admin_should_see_the_in_the_header(String string) {
		userManager.getManageUserTitle();
		Log.logInfo("Validate Manage User Title");
	   
	}

    @When("Admin clicks {string} button")
	public void admin_clicks_button(String string) {
        userManager.addNewUserBtn();
		Log.logInfo("Click on add new program");


	}

	@Then("A new pop up with User details appears")
	public void a_new_pop_up_with_User_details_appears() {
		addUser.validateFieldsOnForm();
		Log.logInfo("Validate user details fields");
         
	    
	}

	
	
	///////Add new user
	

     @Given("A new pop up with user details appears")
     public void a_new_pop_up_with_user_details_appears() {
    	 addUser.validateFieldsOnForm();
     
     
   
     }

     @Then("The pop up should include the fields First Name,Middle name, Last Name, Location phone, email,linkedin Url,Undergraduate,postgraduate,time zone and user comments as text box User Role, Role status, visa status as drop down")
     public void the_pop_up_should_include_the_fields_First_Name_Middle_name_Last_Name_Location_phone_email_linkedin_Url_Undergraduate_postgraduate_time_zone_and_user_comments_as_text_box_User_Role_Role_status_visa_status_as_drop_down() {
    	 addUser.validateFieldsOnForm();
 		 Log.logInfo("First Name, Middle Name, Last Name, Location phone, email,linkedin Url,Undergraduate,postgraduate,time zone, User Role, Role status, visa status");
          
    
     }

     @When("Fill in all the fields except optional fields with valid values and click submit")
     public void fill_in_all_the_fields_except_optional_fields_with_valid_values_and_click_submit() {
    	 addUser.validateFieldsOnForm();
    	 
     
     }

     @Then("The newly added user should be present in the data table in Manage User page")
     public void the_newly_added_user_should_be_present_in_the_data_table_in_Manage_User_page() {
    	 userManager.getTableValue();
    	 
    	 
    }

     @When("Fill in all the fields with valid values and click submit")
     public void fill_in_all_the_fields_with_valid_values_and_click_submit() {
    	 addUser.validateFieldsOnForm();
    
    
     }

     @When("any of the fields have invalid values")
     public void any_of_the_fields_have_invalid_values() {
    	 addUser.errorMessage();
    
    
     }

     @Then("Error message should appear for user")
     public void error_message_should_appear_for_user() {
    	 String errorMessage = addUser.errorMessage();
 		 Log.logInfo("Validate message for empty fields of user" +errorMessage);
    
    
     }

     @When("Any of the mandatory fields are blank")
     public void any_of_the_mandatory_fields_are_blank(String expectedMessage) {
    	String actualMessage = addUser.errorMessage();
 		Assert.assertEquals(expectedMessage,actualMessage);
 		
 		//Log.logInfo("Validate message for mandatory field of user" +actualMessage);
    
     }

     @Then("Error message should be appear for user fields")
     public void error_message_should_be_appear_for_user_fields() {
    	 String errorMessage = addUser.errorMessage();
    	 Log.logInfo("Validate message for empty fields of user" +errorMessage);
    
    
     }
     
     
     //Edit new user
     

     @When("Update the fields with valid values and click submit {string} and {string}")
     public void update_the_fields_with_valid_values_and_click_submit(String dataKey, String sheetName) throws Exception {
    	 
    	 XlUtilsData.userXLdata(dataKey, sheetName);

 		userManager = 
 				addUser.fillUserDetailForm
 				(XlUtilsData.firstNamefrUser,XlUtilsData.lastNamefrUser, XlUtilsData.locationfrUser, XlUtilsData.phoneNofrUser, XlUtilsData.userRoleDropDwn, XlUtilsData.roleStatusDropDwn, XlUtilsData.visaStatusDropDwn, userManager);
 				
 		Log.logInfo("User details added"); 
 				
    	 
    	 
     }

     @When("Update the fields with invalid values and click submit {string} and {string}")
     public void update_the_fields_with_invalid_values_and_click_submit(String dataKey, String sheetName) throws Exception {
    	 XlUtilsData.userXLdata(dataKey, sheetName);

  		userManager = 
  				addUser.fillUserDetailForm
  				(XlUtilsData.firstNamefrUser,XlUtilsData.lastNamefrUser, XlUtilsData.locationfrUser, XlUtilsData.phoneNofrUser, XlUtilsData.userRoleDropDwn, XlUtilsData.roleStatusDropDwn, XlUtilsData.visaStatusDropDwn, userManager);
  				
  		Log.logInfo("User details added"); 
    	
   
     }

     
     @When("Erase data from mandatory field")
     public void erase_data_from_mandatory_field() {
           editUser.getUserDetailsTitle();
         
         
     }

     @Then("Admin clicks the edit icon if it is enabled")
     public void admin_clicks_the_edit_icon_if_it_is_enabled() {
    	 userManager.editUserBtn();
    	 
         
     }


     @Then("The updated user details should appear on the data table")
     public void the_updated_user_details_should_appear_on_the_data_table() {
    	   userManager.getTableValue();
         
         
     }

     
     
     //Delete user
     

     @When("Admin clicks the delete icon")
     public void admin_clicks_the_delete_icon() {
    	 deleteUser.deleteYesBtn();
        
         
     }

     @Then("Alert appears with Yes and No option")
     public void alert_appears_with_Yes_and_No_option() {
    	 deleteUser.alertBoxIsDisplayed();
        
         
     }

     

     @When("Admin click yes option")
     public void admin_click_yes_option() {
    	 deleteUser.deleteYesBtn();
        
         
     }

     @Then("User deleted alert pops and user is no more available in data table")
     public void user_deleted_alert_pops_and_user_is_no_more_available_in_data_table() {
    	 deleteUser.successMessage();
        
         
     }

     @Then("Admin clicks the delete icon if it is enabled")
     public void admin_clicks_the_delete_icon_if_it_is_enabled() {
    	 deleteUser.deleteMessage();
        
         
     }

     @When("Admin click No option")
     public void admin_click_No_option() {
    	 deleteUser.deleteNoBtn();
        
         
     }

     @Then("User is still listed in data table")
     public void user_is_still_listed_in_data_table() {
    	 deleteUser.alertBoxIsDisplayed();
    	
        
         
     }
     //Delete multiple user
     

     @Given("None of the checkboxes in data table are selected")
     public void none_of_the_checkboxes_in_data_table_are_selected() {
         
         
     }
     
     
     @When("Click delete icon below {string} header")
     public void click_delete_icon_below_header(String string) {
         
         
     }

     @Then("The delete icon under the {string} header should be disabled")
     public void the_delete_icon_under_the_header_should_be_disabled(String string) {
         
         
     }

     @Given("One of the checkbox\\/ row is selected")
     public void one_of_the_checkbox_row_is_selected() {
         
         
     }

     @Then("The respective row in the data table is deleted")
     public void the_respective_row_in_the_data_table_is_deleted() {
         
         
     }

     @Given("Two or more checkboxes is selected")
     public void two_or_more_checkboxes_row_is_selected() {
         
         
     }
     
     @Given("One of the checkbox is selected")
     public void One_of_the_checkbox_is_selected() {
         
         
     }

 }

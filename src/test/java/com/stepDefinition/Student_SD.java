package com.stepDefinition;

import org.junit.Assert;

import com.baseClass.BaseClass;
import com.pageObject.Student_Details_Obj;
import com.utility.Log;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Student_SD extends BaseClass {

	private Student_Details_Obj student = new Student_Details_Obj();
	private long startTime;
	private long endTime;


	@When("Admin clicks Student on the navigation bar")
	public void admin_clicks_Student_on_the_navigation_bar() {
		startTime = System.currentTimeMillis();
		student.StudentBtn_onNav();
		Log.logInfo("Admin Clicks 'Attendance' on NavigationBar");
		endTime = System.currentTimeMillis();

	}

	@Then("Admin should see the Student details Page Title")
	public void Admin_should_see_the_Student_details_Page_Title() {

		student.VerifyTitle();
		Log.logInfo("Validate admin is on Student Details , Title is :-"+student.VerifyTitle());
	}

	@Then("Maximum navigation time in milliseconds, defaults to {int} seconds in Student Module")
	public void maximum_navigation_time_in_milliseconds_defaults_to_seconds_in_Student_Module(Integer int1) {

		long responseTime = endTime - startTime;
		Log.logInfo("Response time:  "+ responseTime +" milliseconds");
	}


	@Then("HTTP response >= {int}, then the link is broken in Student Module")
	public void http_response_then_the_link_is_broken_in_Student_Module(Integer int1) {

		student.verifyBrokenLink();
		Log.logInfo("Validate Broken Link");
	}


	@Then("Admin should see {string}  as title in Student Module")
	public void admin_should_see_LMS_Learning_management_system_as_title_in_Student_Module(String expectedtitle) {

		String ActualTitle = student.VerifyTitle();
		Assert.assertEquals(ActualTitle,expectedtitle);   
		Log.logInfo("Validate LMS Title");
	}


	@Then("Student Detail title should be in centre of the pag in Student Module")
	public void student_Detail_title_should_be_in_centre_of_the_pag_in_Student_Module() {

		Assert.assertEquals("center",student.alignmentStudentDetails());
		Log.logInfo("Validate Alignment of Header");
	}


	@Then("{int} dropdowns should be present in the page in Student Module")
	public void dropdowns_should_be_present_in_the_page_in_Student_Module(int count) {

		int countDropdown = student.DropDownNumbers();
		Assert.assertEquals(countDropdown, count);
		Log.logInfo("Validate the number of DropDowns");
	}


	@Then("Admin should see search box inside the drop down in Student Module")
	public void admin_should_see_search_box_inside_the_drop_down_in_Student_Module() {

		Assert.assertTrue(student.searchboxStudName());
		Log.logInfo("Validate the visibility of searchbox");
	}


	@Then("Admin should see search box inside  batch id drop down in Student Module")
	public void admin_should_see_search_box_inside_batch_id_drop_down_in_Student_Module() {

		Assert.assertTrue(student.searchboxBatchID());
		Log.logInfo("Validate the visibility of searchbox");

	}


	@Then("Admin should see correct spelling select student name in Student Module")
	public void admin_should_see_correct_spelling_select_student_name_in_Student_Module() {

		String[] correctS = {"Select Student Name"};
		for (String Spelling : correctS) {
			Assert.assertTrue(student.SelectStudentText().contains(Spelling));
		}
	}


	@Then("Admin should see correct spelling select  batch id text in Student Module")
	public void admin_should_see_correct_spelling_select_batch_id_text_in_Student_Module() {

		String[] correctS = {"Select batch id"};
		for (String Spelling : correctS) {
			Assert.assertTrue(student.SelectBatchIdText().contains(Spelling));
		}

	}


	@Then("Admin should see only numbers inside batch id drop down in Student Module")
	public void admin_should_see_only_numbers_inside_batch_id_drop_down_in_Student_Module() {


		Assert.assertTrue(student.dropdownvalues());
	}


	@Then("Admin should see select student name in gray color in Student Module")
	public void admin_should_see_select_student_name_in_gray_color_in_Student_Module() {

		Assert.assertTrue(student.StudentTextColor().contains("gray"));
	}


	@Then("Admin should see select batch ID in gray color in Student Module")
	public void admin_should_see_select_batch_ID_in_gray_color_in_Student_Module() {

		Assert.assertTrue(student.BatchIdTextColor().contains("gray"));
	}


	@Then("Admin should see {string} in first in Student Module")
	public void admin_should_see_select_student_name_in_first_in_Student_Module(String text) {

		Assert.assertEquals(text,student.CheckTextfirstDropdown());
	}


	@Then("Admin should see {string} in second in Student Module")
	public void admin_should_see_select_batch_id_in_second_in_Student_Module(String text) {

		Assert.assertEquals(text,student.CheckTextsecondDropdown());
	}


	@Then("Admin should able to scroll down to select the name in Student Module")
	public void admin_should_able_to_scroll_down_to_select_the_name_in_Student_Module() {

		student.SnameDropDownScroll();
	}

	@Then("Admin should able to scroll down to select the batch id in Student Module")
	public void admin_should_able_to_scroll_down_to_select_the_batch_id_in_Student_Module() {

		student.BatchIdDropDownScroll();
	}



	////////////******************Student page verification_2***************************************

	@Given("Admin is on student details page")
	public void admin_is_on_student_details_page() {

		student.VerifyTitle();
		Log.logInfo("Validate admin is on Student Details , Title is :-"+student.VerifyTitle());
	}

	@When("Admin select student name from the drop down")
	public void admin_select_student_name_from_the_drop_down() {

		student.Select_Student_Name();
	}

	@Then("Admin shouldn't see select student name text")
	public void admin_shouldn_t_see_select_student_name_text() {

		student.NameTextVisibility();
	}

	@When("Admin select batch id from the drop down")
	public void admin_select_batch_id_from_the_drop_down() {

		Assert.assertFalse(student.NameTextVisibility());
	}

	@Then("Admin shouldn't see select batch id text")
	public void admin_shouldn_t_see_select_batch_id_text() {

		Assert.assertFalse(student.IDTextVisibility());
	}

	@When("Admin clicks select student name and  enters x alphabet in the search box")
	public void admin_clicks_select_student_name_and_enters_x_alphabet_in_the_search_box() {

		student.enterStudentNameX();
	}

	@Then("Admin should see student name start with x is listed below")
	public void admin_should_see_student_name_start_with_x_is_listed_below() {

		student.listNameStartsX();

	}

	@When("Admin  clicks select batch id and enter x number in the search box")
	public void admin_clicks_select_batch_id_and_enter_x_number_in_the_search_box() {

		student.enterBatchIdX();
	}

	@Then("Admin should see batch id start with x is listed below")
	public void admin_should_see_batch_id_start_with_x_is_listed_below() {

		student.listBatchIdStartsX();

	}

	@When("Admin selects only student name")
	public void admin_selects_only_student_name() {

		student.StudentNmDropDwn();
	}

	@When("Admin selects only batch id")
	public void admin_selects_only_batch_id() {

		student.BatchIdDropDwn();

	}

	@Then("Student details shouldn't be displayed")
	public void student_details_shouldn_t_be_displayed() {

		Assert.assertFalse(student.DisplayDetails());
	}

	@When("Admin selects  student name and batch id")
	public void admin_selects_student_name_and_batch_id() {

		student.selectNameAndBatch();

	}

	@Then("Particular student informations should be display")
	public void particular_student_informations_should_be_display() {

		Assert.assertTrue(student.DisplayDetails());
	}

}


//    
//    //Navigation Validation from student page to other Pages
//    @When("Admin clicks on program link on student  page")
//    public void admin_clicks_on_program_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to Program page")
//    public void admin_is_redirected_to_Program_page() {
//
//
//    }
//
//    @When("Admin clicks on Batch link on student page")
//    public void admin_clicks_on_Batch_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to Batch page")
//    public void admin_is_redirected_to_Batch_page() {
//
//
//    }
//
//    @When("Admin clicks on Class link on student page")
//    public void admin_clicks_on_Class_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to Class page")
//    public void admin_is_redirected_to_Class_page() {
//
//
//    }
//
//    @When("Admin clicks on User link on student page")
//    public void admin_clicks_on_User_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to User page")
//    public void admin_is_redirected_to_User_page() {
//
//
//    }
//
//    @When("Admin clicks on Assignment link on student page")
//    public void admin_clicks_on_Assignment_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to Assignment page")
//    public void admin_is_redirected_to_Assignment_page() {
//
//
//    }
//
//    @When("Admin clicks on Attendance link on student page")
//    public void admin_clicks_on_Attendance_link_on_student_page() {
//
//
//    }
//
//    @Then("Admin is redirected to Attendance page")
//    public void admin_is_redirected_to_Attendance_page() {
//        
//    }
//
//    @When("Admin clicks on Logout link on student page")
//    public void admin_clicks_on_Logout_link_on_student_page() {
//        
//    }
//
//    @Then("Admin is redirected to Login page")
//    public void admin_is_redirected_to_Login_page() {
//        
//    }
//
//
//}
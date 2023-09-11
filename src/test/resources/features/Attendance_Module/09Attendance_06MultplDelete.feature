
Feature: Delete multiple attendance validation
  
 Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page
		
	Scenario: Verify delete multiple class  button is enabled
		When Admin clicks single  row level check box in the data table for Attendance Module
		Then Admin should see delete icon below the header is enabled on Attendance Module

	Scenario: verify tick mark is visible after clicking on check box for single data
		When Admin clicks single  row level check box in the data table for Attendance Module
		Then Admin should see tick mark in check box for Attendance Module
	
	Scenario: verify admin able to click multiple check box
		When Admin clicks multiple row level check box in the data table for Attendance Module
		Then Admin should see tick mark in check box of the selected rows

	Scenario: Verify accept alert in delete multiple attendance by selecting single checkbox
		When Admin clicks delete button under header after selecting the check box in the data table for Attendance Module
		Then Admin is in delete alert for Attendance Module
		When Admin clicks yes button for Attendance Module
		Then Success message and selected attendance detail are deleted from the data table
	
	Scenario: Verify reject alert in delete multiple attendance by selecting single checkbox
		When Admin clicks delete button under header after selecting the check box in the data table for Attendance Module
		Then Admin is in delete alert for Attendance Module
		When Admin clicks no button for Attendance Module
		Then Redirected attendance page and selected attendance details are not deleted from the data table
		
	Scenario: Verify accept alert in delete multiple attendance by selecting multiple checkbox
		When Admin clicks delete button under header after selecting the multiple check box for Attendance Module
		Then Admin is in delete alert for Attendance Module
		When Admin clicks yes button for Attendance Module
		Then Success message and selected attendance detail are deleted from the data table
	
	Scenario: Verify reject alert in delete multiple attendance by selecting multiple checkbox
		When Admin clicks delete button under header after selecting the multiple check box for Attendance Module
		Then Admin is in delete alert for Attendance Module
		When Admin clicks no button for Attendance Module
		Then Redirected attendance page and selected attendance details are not deleted from the data table
		
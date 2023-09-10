
Feature: Delete attendance validation - Single
  
  Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page
		
	Scenario: Verify Delete attendance alert 
		When Admin clicks delete button in data table row level on Attendance Page
		Then Admin should see alert  for Attendance page

	Scenario: Verify  accept enabled in alert
		When Admin clicks delete button in data table row level on Attendance Page
		Then Alert should have "yes" button to accept   for Attendance page
	
	Scenario: Verify reject enabled in alert
		When Admin clicks delete button in data table row level on Attendance Page
		Then Alert should have "No" button to reject  for Attendance page

	Scenario: Validate accept in alert
		When Admin clicks delete button in data table row level on Attendance Page
		Then Admin should see Delete alert  for Attendance page
		When Admin clicks yes button  for Attendance page
		Then Success message and selected attendance details are deleted from the data table
	
	Scenario: Validate reject in alert
		When Admin clicks delete button in data table row level on Attendance Page
		Then Admin should see Delete alert  for Attendance page
		When Admin clicks no button  for Attendance page
		Then Redirected attendance page and selected attendance details are not deleted from the data table
		
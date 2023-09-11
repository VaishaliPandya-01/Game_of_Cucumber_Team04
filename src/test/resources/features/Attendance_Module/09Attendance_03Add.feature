Feature: Add new Attendance 

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page
		When Admin clicks + a new attendance button
		Then Admin is in  attendance details popup window
	
	Scenario: Validate admin able to create new attendance data
		When Admin fills all the values and click save for Attendance module
		Then Admin should see success message in popup window and sees new attendance details in manage attendance details DB


		Scenario Outline: Validate admin able to create new attendance data without Fields
		When Admin fills values missing "<options>" and click save for Attendance module
		Then Message displays "<options>" is missing  for Attendance module
			Examples: 
		| options |
		| Program name |
		| class name |
		| student name |
		| Attendance |
		| Attendance date |
	

	Scenario: Validate admin able to create new attendance by selecting future date
		When Admin fills values with future date  and click save for Attendance module 
		Then Invalidate attendance date
	

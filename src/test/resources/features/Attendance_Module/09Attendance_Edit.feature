Feature: Add new Attendance 

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page
		When Admin clicks edit icon button on Attendence Manage page
		Then Admin is in  attendance details popup window
	
	Scenario: Validate admin able to edit  attendance data
		When Admin fills all the values and click save for Attendance page
		Then Admin should see success message in popup window and sees new attendance details in manage attendance details DB

	Scenario Outline: Validate admin able to edit attendance data without Fields
		When Admin fills values missing "<options>" and click save
		Then Message displays "<options>" is missing 
			Examples: 
		| options |
		| Program name |
		| class name |
		| student name |
		| Attendance |
		| Attendance date |

	Scenario: Validate admin able to  edit attendance by selecting future date
		When Admin fills values with future date  and click save  for Attendance page
		Then Invalidate attendance date
	

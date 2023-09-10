Feature: Attendance details popup window  verification

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page

	Scenario Outline: Verify admin is able to navigate from manage attendance to student page
		When Admin clicks "<option>" button in the navigation bar 
		
		Examples: 
		| option |
		| Student |
		| Program |
		| Batch |
		| User |
		| Assignment |
		| Class |
		| Logout |

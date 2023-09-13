Feature: Edit Attendance 

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks Attendance on the navigation bar
		Then Admin clicks edit icon button on Attendence Manage page

	
	Scenario Outline: Validate admin able to edit  attendance data
		When Admin fills all the values as "<dataKey>" and "<Sheetname>" and click save for Attendance module
		Then Admin should see success message in popup window and sees new attendance details in manage attendance details DB
	Examples:
		| dataKey   | Sheetname |
		| EditAtt_valid | attendanceDetailsForm |

	Scenario Outline: Validate admin able to edit attendance data without Fields
		When Admin fills values missing as "<dataKey>" and "<Sheetname>" and click save for Attendance module
		Then Message displays field is missing for Attendance module
			Examples: 
		| dataKey   | Sheetname     |
		| EditAtt_missingPgmName | attendanceDetailsForm |
		| EditAtt_missingClassName | attendanceDetailsForm |
		| EditAtt_missingStudName | attendanceDetailsForm |
		| EditAtt_missingAttendnc | attendanceDetailsForm |
		| EditAtt_missingAttDate | attendanceDetailsForm |
		
	Scenario Outline: Validate admin able to  edit attendance by selecting future date
		When Admin fills values with future date in "<dataKey>" and "<Sheetname>" and click save for Attendance module 
		Then Invalidate attendance date
			Examples: 
			| dataKey | Sheetname |
			| EditAtt_futureDate | attendanceDetailsForm |
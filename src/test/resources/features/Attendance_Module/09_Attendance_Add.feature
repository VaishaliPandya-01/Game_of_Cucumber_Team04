Feature: Add new Attendance 

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks Attendance on the navigation bar
		Then Admin clicks + a new attendance button
		
	
	Scenario Outline: Validate admin able to create new attendance data
		When Admin fills all the values as "<dataKey>" and "<Sheetname>" and click save for Attendance module
		Then Admin should see success message in popup window and sees new attendance details in manage attendance details DB
	Examples:
		| dataKey   | Sheetname     |
		| AddAtt_valid | attendanceDetailsForm |

		Scenario Outline: Validate admin able to create new attendance data without Fields
		When Admin fills values missing as "<dataKey>" and "<Sheetname>" and click save for Attendance module
		Then Message displays field is missing for Attendance module
			Examples: 
		| dataKey   | Sheetname     |
		| AddAtt_missingPgmName | attendanceDetailsForm |
		| AddAtt_missingClassName | attendanceDetailsForm |
		| AddAtt_missingStudName | attendanceDetailsForm |
		| AddAtt_missingAttendnc | attendanceDetailsForm |
		| AddAtt_missingAttDate | attendanceDetailsForm |
	

	Scenario Outline: Validate admin able to create new attendance by selecting future date
		When Admin fills values with future date in "<dataKey>" and "<Sheetname>" and click save for Attendance module 
		Then Invalidate attendance date
			Examples: 
			| dataKey | Sheetname |
			| AddAtt_futureDate | attendanceDetailsForm |
	

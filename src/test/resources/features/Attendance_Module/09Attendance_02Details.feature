
Feature: Attendance details popup window  verification

Background: Logged on the LMS portal as Admin
  	Given Admin is on dashboard page after Login
		When Admin clicks "Attendance" on the navigation bar
		Then Admin is in manage attendance page
		When Admin clicks + a new attendance button
 
		 
  Scenario: Verify all label text  
    Then Admin should see correct spellings in the label for Attendance Module
  
    Scenario: Verify dropdown box is present  
    Then Four dropdown should be present for Attendance Module
  
   Scenario: Verify close button in attendance details popup window 
    Then Admin should see  close button on the attendance details popup window
  
  Scenario: Verify the alignment of the close button
    Then Close button should on the top right corner for Attendance Module
  
    Scenario: Verify the text on first dropdown select a program name  
    Then First dropdown box "select a program name" text  should be present for Attendance Module
  
   Scenario: Verify the text on second dropdown select class  name 
    Then Second dropdown box "select class name" text  should be present for Attendance Module
  
  Scenario: Verify the text on third dropdown select students 
    Then Third dropdown box "select students" text  should be present for Attendance Module
  
   Scenario: Verify the text on fourth dropdown select attendance 
    Then Fourth dropdown box "select attendance" text  should be present for Attendance Module
  
   Scenario: Verify all the text inside the dropdown box is gray color  for Attendance Module
    Then Admin  should text in gray color for Attendance Module
  
   Scenario: Verify save button is present
    Then Admin should see  save button in the class detail popup window for Attendance Module
  
   Scenario: Verify cancel button is present  
    Then Admin should see  cancel button in the class detail popup window for Attendance Module
 
   Scenario: Verify order of the label in attendance details page
    Then Order of the label should be Program name, Class Name, Student Name, Attendance, Attendance Date.
  
 	Scenario: Validate all program name is reflecting in the dropdown
 		Given Admin is in  attendance details popup window
 		When Admin clicks  program name dropdown for Attendance Module
 		Then Program Name in the drop down  for Attendance Module should match with  program name in  manage program page table
 		
 	 Scenario: Validate all class name  is reflecting in the dropdown
 		Given Admin is in  attendance details popup window
 		When Admin clicks class name dropdown for Attendance Module
 		Then Class Name in the drop down should match with  class name in  manage class page table
 	 
 	 Scenario: Validate attendance field dropdown all mandatory keywords
 		Given Admin is in  attendance details popup window
 		When Admin clicks attendance dropdown for Attendance Module
 		Then Attendance field should have keywords such as - present, absent, late, excused
 	 	 
 	 Scenario: Verify spellings in the attendance field drop down 
 		Given Admin is in  attendance details popup window
 		When Admin clicks attendance dropdown for Attendance Module
 		Then Admin should see correct spellings in dropdown text for Attendance Module
  	 
 	 Scenario: Validate date picker
 		Given Admin is in  attendance details popup window
 		When Admin clicks date from date picker for Attendance Module
 		Then selected date should be their in class date text box for Attendance Module
 			 
 	 Scenario: validate date picker should be correct format
 		Given Admin is in  attendance details popup window
 		When Admin clicks date from date picker for Attendance Module
 		Then selected date should be in  mm/dd/yyyy format for Attendance Module
 	 			 
 	 Scenario: Validate right arrow in data picker to navigate to next month
 		Given Admin is in  attendance details popup window
 		When Admin clicks right arrow in the date picker near month for Attendance Module
 		Then Next month calender should visible for Attendance Module
 	 			 
 	 Scenario: Validate left arrow in data picker to navigate to previous month
 		Given Admin is in  attendance details popup window
 		When Admin clicks left arrow in the date picker near month for Attendance Module
 		Then previous month calender should visible for Attendance Module
 	 			 
 	 Scenario: Validate current date is highlighted in the date picker
 		Given Admin is in  attendance details popup window
 		When Admin clicks date picker button for Attendance Module
 		Then Admin should see current date is highled in the date picker for Attendance Module
 	 			 
 	 Scenario: Validate selected date is highlighted in the date picker
 		Given Admin is in  attendance details popup window
 		When Admin clicks date picker button and selects future date for Attendance Module
 		Then Admin should see selected date is highled in the date picker for Attendance Module
 	 			 

 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		 
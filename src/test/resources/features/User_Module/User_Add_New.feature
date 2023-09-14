Feature: Add new user

Background: Logged on the LMS portal, Admin is on dashboard page after Login Admin clicks "User" from navigation bar, Admin clicks "+ A New User" button
Given A new pop up with user details appears 

Scenario: Check if the fields exist in pop
Then  The pop up should include the fields First Name,Middle name, Last Name, Location phone, email,linkedin Url,Undergraduate,postgraduate,time zone and user comments as text box User Role, Role status, visa status as drop down
      
      
Scenario: Check if Middle name, linkedIn url, email, user comments.under graduate,post graduate,time zone are optional 
When Fill in all the fields except optional fields with valid values and click submit
Then The newly added user should be present in the data table in Manage User page

Scenario: Check if the program details are added in data table
When Fill in all the fields with valid values and click submit
Then Error message should be appear for user fields

Scenario: Check for error messages for invalid fields
When any of the fields have invalid values
Then Error message should be appear for user fields

Scenario: Check for error messages for mandatory fields
When Any of the mandatory fields are blank
Then Error message should be appear for user fields


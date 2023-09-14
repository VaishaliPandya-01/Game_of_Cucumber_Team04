Feature: Delete multiple class validation sc01
Background: Admin logged into LMS portal and clicks class button on the navigation bar 
Given Admin is in Manage class page
When Admin clicks single  row level check box in the data table


@Verifydeleteicon
Scenario: Verify delete multiple class  button is enabled
Then Admin should see delete icon below the header is enabled

@Verifytickmark
Scenario: verify tick mark is visible after clicking on check box 
Then Admin should see tick mark in check box 

@Verifymultiplecheckbox
Scenario: verify admin able to click multiple check box
Then Admin should see tick mark in check box  of the selected rows

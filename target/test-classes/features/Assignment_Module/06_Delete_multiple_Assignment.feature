
@tag
Feature: Delete multiple class validation
  Background: Admin logged into LMS portal and clicks assignment button on the navigation bar
  Given Admin is in manage assignment page
  Then Admin is in delete alert

  @Delete_multiple_assignment
  Scenario: Verify delete multiple Assignment  button is enabled
  When Admin clicks single  row level check box in the data table in Manage Assignment page
  Then Admin should see delete icon below the header is enabled in Manage Assignment page
  
  @Delete_multiple_accept_alert_assignment
  Scenario: Verify accept alert in delete multiple Assignment function by selecting single checkbox in Manage Assignment
  When Admin clicks yes button in manage assignment alert window
  Then Redirected to assignment page and selected assignment details are deleted from the data table
  
    @Delete_multiple_reject_alert_assignment
  Scenario: Verify reject alert in delete multiple assignment function by selecting single checkbox in Manage Assignment
  When Admin clicks no button in manage assignment alert window
  Then Redirected to assignment page and selected assignment details are not deleted from the data table
  
  @  @Delete_multiple_accept_alert_assignment
  Scenario: Verify accept alert in delete multiple assignment function by selecting multiple checkbox in Manage Assignment
  When Admin clicks yes button in manage assignment alert window
  Then Redirected to assignment page and selected assignment details are deleted from the data table
  
  @  @Delete_multiple_reject_alert_assignment
  Scenario: Verify reject alert in delete multiple assignment function by selecting multiple checkbox in Manage Assignment
  When Admin clicks no button in manage assignment alert window
  Then Redirected to assignment page and selected assignment details are not deleted from the data table

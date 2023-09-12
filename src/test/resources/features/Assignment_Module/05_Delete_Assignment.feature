Feature: Delete Assignment validation
  I want to use this template for my feature file

  Background: Admin logged into LMS portal and clicks assignment button on the navigation bar
    Given Admin is in manage assignment page
    When 

  @Delete_Assignment_alert
  Scenario: Verify Delete Assignment alert
    When Admin clicks delete button in data table row level in manage assignment page
    Then Admin should see dialog box in manage assignment page

  @Delete_Assignment_accept_alert
  Scenario: Verify  accept enabled in alert
    When Admin clicks delete button in data table row level in manage assignment page delete window
    Then Alert should have "yes" button to accept in manage assignment page delete window

  @Delete_Assignment_reject_alert
  Scenario: Verify reject enabled in alert
    When Admin clicks delete button in data table row level in manage assignment page
    Then Alert should have "No" button to reject in manage assignment page

  @Delete_Assignment_accept_alert
  Scenario: Validate accept in alert
    Given Admin is in delete alert in manage assignment page
    When Admin clicks yes button in manage assignment page
    Then Redirected to assignment page and selected assignment details are deleted from the data table in manage assignment page

  @Delete_Assignment_reject_alert
  Scenario: Validate reject in alert on manage assignment page
    Given Admin is in delete alert in manage assignment page
    When Admin clicks no button in manage assignment page
    Then Redirected to assignment page and selected assignment details are not deleted from the data table

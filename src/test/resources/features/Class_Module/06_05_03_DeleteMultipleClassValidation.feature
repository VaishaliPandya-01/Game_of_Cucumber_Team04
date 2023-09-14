
Feature: Delete multiple class validation sc03
Background: Admin clicks delete button under header after selecting the multiple check box in the data table
Given Admin is in delete alert
When Admin clicks yes button

@Verifyacceptalert
Scenario: Verify accept alert in delete multiple class function by selecting single checkbox
Then Admin should land on manage class page and validate particular class details are deleted from the data table 

@Verifyrejectalert
Scenario: Verify reject alert in delete multiple class function by selecting multiple checkbox
Then Admin should land on manage class page and validate particular class details are not deleted from the data table
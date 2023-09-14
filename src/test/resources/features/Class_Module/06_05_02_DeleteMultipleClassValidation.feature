Feature: Delete multiple class validation sc02

  Background: Admin clicks delete button under header after selecting the check box in the data table
	    Given Admin is in delete alert
	    
  @Verifysuccessmessageanddata
  Scenario: Verify accept alert in delete multiple class function by selecting single checkbox
    When Admin clicks yes button
    Then Success message and validate particular class details are deleted from the data table

  @Verifyrejectalert
  Scenario: Verify reject alert in delete multiple class function by selecting single checkbox
    When Admin clicks no button
    Then Admin should land on manage class page and validate particular class details are not deleted from the data table

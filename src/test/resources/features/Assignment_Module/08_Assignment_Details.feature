@tag
Feature: Assignment details Feature

  Background: Admin logged into LMS portal and clicks assignment button on the navigation bar
   Given Admin is on dashboard page after Login
    When Admin clicks Assignment button on the navigation bar in assignment page
    Then Admin click +Add new assignment button in Assignment details popup window

  @verifyHeaderTitle
  Scenario: Verify Assignment details popup window
    Then Admin click +Add new assignment button in Assignment details popup window

  @verifyInputField
  Scenario Outline: Verify input fields in Assignment details popup window
    Then Admin should see input fields Text in Assignment details popup window

    Examples: 
      | Fields                 |
      | Program Name           |
      | batch number           |
      | Assignment Name        |
      | Assignment Description |
      | Grade By               |
      | Assignment Due Date    |
      | Assignment File1       |
      | Assignment File1       |
      | Assignment File1       |
      | Assignment File1       |
      | Assignment File1       |

  @VerifyTextBoX
  Scenario: Verify text box present in Assignment details popup window
    Then Eight 8 textbox should be present in Assignment details popup window

  @VerifyDropdownBatch
  Scenario: Verify drop down in Batch Number  in Assignment details popup window
    Then Admin should see  dropdown option for Batch Number in Assignment details popup window

  @VerifyDropdownProgram
  Scenario: Verify drop down in Program name  in Assignment details popup window
    Then Admin should see  dropdown option for Program name in Assignment details popup window

  @VerifyCalenderIcon
  Scenario: Verify calendar icon in Assignment due date  in Assignment details popup window
    Then Admin should see  calendar icon for assignment due date

  @VerifySave
  Scenario: Verify save button is present in Assignment details popup window
    Then Admin should see  save button in the Assignment detail popup window

  @VerifyCancel
  Scenario: Verify cancel button is present in Assignment details popup window
    Then Admin should see  cancel button in the Assignment detail popup window

  @VerifyClose
  Scenario: Verify close button in  Assignment details popup window
    Then Admin should see  close button on the Assignment details popup window

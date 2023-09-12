@EditProgram
Feature: Edit Program Details

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar
    Then Admin clicks on the Edit icon on program page if it is enabled

  @validateEditProgramDetails
  Scenario: Validate Edit Feature
    Then The pop up should include fields like Name Description Status on program detail

  @UpdateWithProgramName
  Scenario Outline: Edit Program Name
    When Click save after updating the valid program name "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message "Successful Program Updated" alert and able to see the new program added in the data table

    Examples: 
      | KeyOption         | Sheetname      |
      | UpdateProgramName | programDetails |

  @UpdateWithProgramDescription
  Scenario Outline: Edit Program Description
    When Click save after updating the valid program description "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message "Successful Program Updated" alert and able to see the new program added in the data table

    Examples: 
      | KeyOption                | Sheetname      |
      | UpdateProgramDescription | programDetails |

  @UpdateWithProgramStatus
  Scenario: Edit Program Status
    When Click save after updating the valid program status
    Then Admin gets a message for program update as "Successful Program Updated"

  @ValidateCancelIcon
  Scenario: Validate Cancel icon on Program Details form
    When Admin clicks Cancel Icon on Program Details form
    Then Program Details popup window should be closed without saving

  @ValidateInvalidValuesInColumn
  Scenario Outline: Validate invalid values on the text column
    When Admin enters only numbers or special char in name and desc column on program details "<KeyOption>" and "<Sheetname>"
    Then Admin gets a Error message alert for program fields

    Examples: 
      | KeyOption             | Sheetname      |
      | InvalidProgramDetails | programDetails |

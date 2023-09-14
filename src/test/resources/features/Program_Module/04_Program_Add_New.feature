@AddNewProgram
Feature: Add New Program

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar
    Then Admin clicks + A New Program button

  @validateProgramPopUPWindow
  Scenario: Validate Program Details Popup window
    Then The pop up should include fields like Name Description Status on program detail

  @EmptyFormSubmission
  Scenario: Empty program details form submission
    When Admin clicks Save button on program details without entering any data
    Then Admin gets a Error message alert for program fields

  @EnterOnlyProgramName
  Scenario Outline: Enter only Program Name
    When Admin clicks Save button after entering only program name "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message alert for program mandatory field 'Description is required'

    Examples: 
      | KeyOption            | Sheetname      |
      | EnterOnlyProgramName | programDetails |

  @EnterOnlyProgramDescription
  Scenario Outline: Enter only Program Description
    When Admin clicks Save button after entering only program description "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message alert for program mandatory field 'Name is required'

    Examples: 
      | KeyOption            | Sheetname      |
      | EnterOnlyProgramDesc | programDetails |

  @EnterOnlyProgramStatus
  Scenario Outline: Select Status only
    When Admin clicks Save button after entering only program status "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message alert for program mandatory field 'Name and Description required'

    Examples: 
      | KeyOption              | Sheetname      |
      | EnterOnlyProgramStatus | programDetails |

  @ValidateInvalidValuesInColumn
  Scenario Outline: Validate invalid values on the text column
    When Admin enters only numbers or special char in name and desc column on program details "<KeyOption>" and "<Sheetname>"
    Then Admin gets a Error message alert for program fields

    Examples: 
      | KeyOption             | Sheetname      |
      | InvalidProgramDetails | programDetails |

  @ValidateCloseIcon
  Scenario: Validate Close icon on Program Details form
    When Admin clicks Close Icon on Program Details form
    Then Program Details popup window should be closed without saving

  @ValidateCancelIcon
  Scenario: Validate Cancel icon on Program Details form
    When Admin clicks Cancel Icon on Program Details form
    Then Program Details popup window should be closed without saving

  @EnterAllValidData
  Scenario Outline: Validate Save button on Program Details form
    When Enter all the required fields with valid values and click Save button "<KeyOption>" and "<Sheetname>"
    Then Admin gets a message "Successful Program Created" alert and able to see the new program added in the data table

    Examples: 
      | KeyOption           | Sheetname      |
      | ValidProgramDetails | programDetails |

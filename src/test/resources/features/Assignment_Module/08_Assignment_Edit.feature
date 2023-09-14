@tag
Feature: Edit Assignment Validation

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Assignment button on the navigation bar in assignment page
    Then Admin clicks Edit button in data table

  @Verify_Edit_PopUpWindow
  Scenario: Verify Edit assignment popup window
   
    Then Edit popup window appears with heading Assignment Details

  @Verify_Edit_PopUpWindow
  Scenario Outline: Verify values in popup window
    When Admin clicks Edit button from one of the row in data table in Manage Assignment Page
    Then Edit popup window appears with same row values in the all fields in Assignment Details pop-up window

  @ValidData_in_mandatory_fields
  Scenario Outline: Validate admin able to add Update assignment with valid data in mandatory fields
    When Admin enters all mandatory field values with valid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Admin should see new assignment details is added in the data table

    Examples: 
      | KeyOptions             |  | Sheetname         |
      | valid mandatory fields |  | AssignmentDetails |

  @InValidData_mandatory_fields
  Scenario Outline: Validate admin able to add Update assignment with invalid data in mandatory fields
    When Admin enters all mandatory field values with invalid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Error message should appear in alert  in assignment details

    Examples: 
      | KeyOptions               |  | Sheetname         |
      | invalid mandatory fields |  | AssignmentDetails |

  @Validate_ValidData_in_allfields
  Scenario Outline: Validate admin able to add Update assignment with valid data  in all fields
    When Admin enters values in all fields with valid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Admin should see new assignment details is added in the data table

    Examples: 
      | KeyOptions       |  | Sheetname         |
      | valid all fields |  | AssignmentDetails |

  @Validate_InValidData_in_optionalfields
  Scenario Outline: Validate admin able to add Update assignment with invalid data  in optional fields
    When Admin enters with invalid data in optional fields and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Error message should appear in alert  in assignment details

    Examples: 
      | KeyOptions         |  | Sheetname         |
      | Invalid all fields |  | AssignmentDetails |

  @validate_program_Name_missing
  Scenario Outline: Validate admin able to add Update assignment with valid data  in all fields
    When Admin enters  data missing value in program name and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Program Name is missing  in assignment details

    Examples: 
      | KeyOptions           |  | Sheetname         |
      | Program Name missing |  | AssignmentDetails |

  @validate_Batch_Number_missing
  Scenario Outline: Validate admin able to add Update assignment with invalid data  in optional fields
    When Admin enters  data missing value in Batch number and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Batch number is missing  in assignment details

    Examples: 
      | KeyOptions           |  | Sheetname         |
      | Batch number missing |  | AssignmentDetails |

  @validate_Assignment_Name_missing
  Scenario Outline: Validate admin able to add Update assignment missing program nam
    When Admin enters data missing value in Assignment name and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment name is missing  in assignment details

    Examples: 
      | KeyOptions              |  | Sheetname         |
      | Assignment name missing |  | AssignmentDetails |

  @validate_Assignment_dueDate_missing
  Scenario Outline: Validate admin able to add Update assignment missing batch number
    When Admin enters data missing value in Assignment due date and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment due date is missing  in assignment details

    Examples: 
      | KeyOptions                  |  | Sheetname         |
      | Assignment due date missing |  | AssignmentDetails |

  @validate_Gradeby_missing
  Scenario Outline: Validate admin able to add Update assignment missing assignment name
    When Admin enters data missing value in grade by  and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Grade by is missing  in assignment details

    Examples: 
      | KeyOptions       |  | Sheetname         |
      | Grade by missing |  | AssignmentDetails |

  @validate_with_Passed_Date
  Scenario Outline: Validate  admin able to add Update assignment passing past date
    When Admin enters passed date in the due date field and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment cannot be created for the passed date  in assignment details

    Examples: 
      | KeyOptions  |  | Sheetname         |
      | passed date |  | AssignmentDetails |

  @validate_Cancel_Button_popupWindow
  Scenario: Validate cancel button function in assignment details popup window
    When Admin clicks Cancel button without entering values in the fields in assignment details window
    Then Admin should land on manage assignment page

  @validate_Cancel_Button_popupWindow_withValues
  Scenario: Validate cancel button function in assignment details popup window with values in field
    When Admin clicks Cancel button entering values in the fields in assignment details window
    Then Admin should land on manage assignment Page and validate new assignment is not created in the data table

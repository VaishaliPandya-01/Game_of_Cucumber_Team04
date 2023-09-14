
@tag
Feature: Add new assignment
 
    Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Assignment button on the navigation bar in assignment page
    Then Admin click +Add new assignment button in Assignment details popup window

     @ValidData_in_mandatory_fields
    Scenario Outline: Validate admin able to add new assignment with valid data in mandatory fields
    
    When Admin enters all mandatory field values with valid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Admin should see new assignment details is added in the data table

    Examples: 
    
    |KeyOptions|        |Sheetname|
    |valid mandatory fields|  |AssignmentDetails|
     
      
      
       @InValidData_mandatory_fields
    Scenario Outline: Validate admin able to add new assignment with invalid data in mandatory fields
    
    When Admin enters all mandatory field values with invalid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Error message should appear in alert  in assignment details

    Examples: 
       |KeyOptions|        |Sheetname|
       |invalid mandatory fields|  |AssignmentDetails|
    
    @Validate_ValidData_in_allfields
    Scenario Outline: Validate admin able to add new assignment with valid data  in all fields
    
    When Admin enters values in all fields with valid data and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Admin should see new assignment details is added in the data table

      Examples: 
       |KeyOptions|        |Sheetname|
       |valid all fields|  |AssignmentDetails|
      
        @Validate_InValidData_in_optionalfields
  Scenario Outline: Validate admin able to add new assignment with invalid data  in optional fields
    
    When Admin enters with invalid data in optional fields and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Error message should appear in alert  in assignment details

    Examples: 
       |KeyOptions|        |Sheetname|
       |Invalid all fields|  |AssignmentDetails|
       
       @validate_program_Name_missing
  Scenario Outline: Validate admin able to add new assignment with valid data  in all fields
    
    When Admin enters  data missing value in program name and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Program Name is missing  in assignment details

     Examples: 
       |KeyOptions|        |Sheetname|
       |Program Name missing|  |AssignmentDetails|
          
       @validate_Batch_Number_missing
  Scenario Outline: Validate admin able to add new assignment with invalid data  in optional fields
    
    When Admin enters  data missing value in Batch number and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Batch number is missing  in assignment details
   Examples: 
       |KeyOptions|        |Sheetname|
       |Batch number missing|  |AssignmentDetails|
      
      
       @validate_Assignment_Name_missing
  Scenario Outline: Validate admin able to add new assignment missing program nam
    
    When Admin enters data missing value in Assignment name and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment name is missing  in assignment details

     Examples: 
       |KeyOptions|        |Sheetname|
       |Assignment name missing|  |AssignmentDetails|
       
     @validate_Assignment_dueDate_missing  
  Scenario Outline: Validate admin able to add new assignment missing batch number
    
    When Admin enters data missing value in Assignment due date and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment due date is missing  in assignment details

    Examples: 
       |KeyOptions|                   |Sheetname|
       |Assignment due date missing|  |AssignmentDetails|
       
        @validate_Gradeby_missing 
  Scenario Outline: Validate admin able to add new assignment missing assignment name
    
    When Admin enters data missing value in grade by  and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Grade by is missing  in assignment details

      Examples: 
       |KeyOptions|        |Sheetname|
       |Grade by missing|  |AssignmentDetails|
       
        @validate_with_Passed_Date
  Scenario Outline: Validate  admin able to add new assignment passing past date
    
    When Admin enters passed date in the due date field and clicks save button in assignment details "<KeyOptions>" and "<SheetName>"
    Then Assignment cannot be created for the passed date  in assignment details

     Examples: 
       |KeyOptions|        |Sheetname|
       |passed date|  |AssignmentDetails|
       
        @validate_DatePicker
  Scenario: Validate date picker in assignment details window
    
    When Admin clicks date from date picker in assignment details window
    Then selected date should be their in Assignment due date text box assignment details window
    
       @validate_Format_DatePicker
  Scenario: validate date picker should be correct format in assignment details window
    
    When Admin clicks date from date picker in assignment details window
    Then selected date should be in  mm/dd/yyyy format in assignment details window
    
       @validate_Navigation_Next_DatePicker
  Scenario: Validate right arrow in data picker to navigate to next month in assignment details window
    
    When Admin clicks right arrow in the date picker near month in assignment details window
    Then Next month calender should visible in assignment details window
    
        @validate_Navigation_Previous_DatePicker
  Scenario: Validate left arrow in data picker to navigate to previous month in assignment details window
    
    When Admin clicks left arrow in the date picker near month in assignment details window
    Then previous month calender should visible in assignment details window
    
        @validate_Navigation_Current_DatePicker
  Scenario: Validate current date is highlighted in the date picker in assignment details window

    When Admin clicks date picker button in assignment details window
    Then Admin should see current date is highled in the date picker in assignment details window
    
      @validate_Navigation_Selected_DatePicker
  Scenario: Validate selected date is highlighted in the date picker in assignment details window
    
    When Admin clicks date picker button and selects future date in assignment details window
    Then Admin should see selected date is highled in the date picker in assignment details window
    
       @validate_Cancel_Button_popupWindow
  Scenario: Validate cancel button function in assignment details popup window
    
    When Admin clicks Cancel button without entering values in the fields in assignment details window
    Then Admin should land on manage assignment page
    
       @validate_Cancel_Button_popupWindow_withValues
  Scenario: Validate cancel button function in assignment details popup window with values in field
    
    When Admin clicks Cancel button entering values in the fields in assignment details window
    Then Admin should land on manage assignment Page and validate new assignment is not created in the data table
    
      

   
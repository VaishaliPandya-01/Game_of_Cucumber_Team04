@ProgramPageValidations
Feature: Program Page Validation

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar

  @validateProgramURL
  Scenario: Validate landing in Program page
    Then Admin should see the "Manage Program" in the URL of manage program page

  @validateProgramTitle
  Scenario: Validate heading in the Program Page
    Then Admin should see the "Manage Program" in the header of manage program page

  @validateProgramPagination
  Scenario: Validate the text and pagination icon below the data table on program page
    Then Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table

  @validateProgramFooter
  Scenario: Validate the footer on program page
    Then Admin should see the footer as "In total there are z programs"

  @ValidateDeleteIcon
  Scenario: Validate Delete button in Program Page
    Then Admin should be able to see the Delete icon button that is disabled on manage program

  @ValidateANewProgramButton
  Scenario: Validate "+ A New Program" in Program Page
    Then Admin should be able to see the + A New program button on manage program

  @ValidateNumberOfProgramRecord
  Scenario: Validate that number of records displayed
    Then Admin should see the number of records displayed on the page are 5

  @validateProgramTableHeader
  Scenario Outline: Validate data table headers in the Program Page
    Then Admin Should see the data table on manage program

    Examples: 
      | headers             |
      | Program Name        |
      | Program Description |
      | Program Status      |
      | Edit                |
      | Delete              |

  @ValidateSortArrowIcon
  Scenario: Verify Sort arrow icon on the data table
    Then Admin should see the sort arrow icon beside to each column header except Edit and Delete on program manage

  @ValidateCheckBoxOnProgram
  Scenario: Validate checkbox in data table of Manage program
    Then Data table should have a checkbox on manage program

  @ValidateEditButtonOfProgram
  Scenario: Validate Edit button in data table of Manage program
    Then Data table should have a edit icon that is enabled on manage program

  @ValidateDeleteButtonOfProgram
  Scenario: Validate Delete button in data table of Manage program
    Then Data table should have a delete icon that is enabled on manage program

  @ValidateSearchBarOfProgram
  Scenario: Validate Search Bar on Manage program
    Then Admin should see Search bar with text as "Search..."

  @SearchProgramByInvalidName
  Scenario Outline: Search program by Invalid name
    When Admin enters invalid Program name into search box "<KeyOption>" and "<Sheetname>"
    Then Admin should see zero entries on the data table of manage program

    Examples: 
      | KeyOption                  | Sheetname      |
      | SearchProgramByInvalidName | programDetails |

  @SearchProgramByName
  Scenario Outline: Search program by name
    When Admin enters Program name into search box "<KeyOption>" and "<Sheetname>"
    Then Admin should see the Programs displayed based on the Program Name

    Examples: 
      | KeyOption           | Sheetname      |
      | SearchProgramByName | programDetails |

  @SearchProgramByDescription
  Scenario Outline: Search program by description
    When Admin enters Program description into search box "<KeyOption>" and "<Sheetname>"
    Then Admin should see the Programs displayed based on the Program description

    Examples: 
      | KeyOption                  | Sheetname      |
      | SearchProgramByDescription | programDetails |

  @SearchProgramByStatus
  Scenario Outline: Search program by status
    When Admin enters Program status into search box "<KeyOption>" and "<Sheetname>"
    Then Admin should see the Programs displayed based on the Program status

    Examples: 
      | KeyOption             | Sheetname      |
      | SearchProgramByStatus | programDetails |

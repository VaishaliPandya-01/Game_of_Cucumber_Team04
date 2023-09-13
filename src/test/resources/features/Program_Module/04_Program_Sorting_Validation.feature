@ProgramSortingValidations
Feature: Program Sorting Validation

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar

  @validateProgramNameAscending
  Scenario: Validate sort icon of program name column in ascending
    When Admin clicks the ascending sort icon of program name column
    Then The data get sorted on the table based on the program name column values in ascending order

  @validateProgramNameDescending
  Scenario: Validate sort icon of program name column in Descending
    When Admin clicks the descending sort icon of program name column
    Then The data get sorted on the table based on the program name column values in descending order

  @validateProgramDescriptionAscending
  Scenario: Validate sort icon of program description column in ascending
    When Admin clicks the ascending sort icon of program description column
    Then The data get sorted on the table based on the program description column values in ascending order

  @validateProgramDescriptionDescending
  Scenario: Validate sort icon of program description column in Descending
    When Admin clicks the descending sort icon of program description column
    Then The data get sorted on the table based on the program description column values in descending order
    
      @validateProgramStatusAscending
  Scenario: Validate sort icon of program status column in ascending
    When Admin clicks the ascending sort icon of program status column
    Then The data get sorted on the table based on the program status column values in ascending order

  @validateProgramStatusDescending
  Scenario: Validate sort icon of program status column in Descending
    When Admin clicks the descending sort icon of program status column
    Then The data get sorted on the table based on the program status column values in descending order

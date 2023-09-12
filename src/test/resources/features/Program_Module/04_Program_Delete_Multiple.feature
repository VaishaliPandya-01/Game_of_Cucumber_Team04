@DeleteMultipleProgram
Feature: Delete Multiple Batch

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar

  @ValidateDeleteIconBelowHeader
  Scenario: Validate the delete icon below the header
    Given None of the checkboxes in data table of program are selected
    Then The delete icon under the Manage program header should be disabled

  @CheckForSingleRowDeleteClickYes
  Scenario: Check for single row delete click yes
    Given One of the checkbox row is selected on program page
    When Click delete icon below Manage program header and click Yes
    Then The respective row in the data table of program is deleted

  @CheckForSingleRowDeleteClickNo
  Scenario: Check for single row delete click No
    Given One of the checkbox row is selected on program page
    When Click delete icon below Manage program header and click No
    Then The respective row in the data table of program should not get delete

  @CheckForMutiRowDeleteClickYes
  Scenario: Check for multi row delete click yes
    Given Two or more checkboxes are selected on program page
    When Click delete icon below Manage program header and click Yes
    Then The respective row in the data table of program is deleted

  @CheckForMutiRowDeleteClickYes
  Scenario: Check for multi row delete click No
    Given Two or more checkboxes are selected on program page
    When Click delete icon below Manage program header and click No
    Then The respective row in the data table of program should not get delete


@DeleteMultipleAssignment
Feature: Delete Multiple Assignment
  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Assignment button on the navigation bar in assignment page


  @ValidateDeleteIconBelowHeader
  Scenario: Validate the delete icon below the header
    Given None of the checkboxes in data table of Assignment are selected
    Then The delete icon under the Manage Assignment header should be disabled

  @CheckForSingleRowDeleteClickYes
  Scenario: Check for single row delete click yes
    Given One of the checkbox row is selected on Assignment page
    When Click delete icon below Manage Assignment header and click Yes
    Then The respective row in the data table of Assignment is deleted

  @CheckForSingleRowDeleteClickNo
  Scenario: Check for single row delete click No
    Given One of the checkbox row is selected on Assignment page
    When Click delete icon below Manage Assignment header and click No
    Then The respective row in the data table of Assignment should not get delete

  @CheckForMutiRowDeleteClickYes
  Scenario: Check for multi row delete click yes
    Given Two or more checkboxes are selected on Assignment page
    When Click delete icon below Manage Assignment header and click Yes
    Then The respective row in the data table of Assignment is deleted

  @CheckForMutiRowDeleteClickYes
  Scenario: Check for multi row delete click No
    Given Two or more checkboxes are selected on Assignment page
    When Click delete icon below Manage Assignment header and click No
    Then The respective row in the data table of Assignment should not get delete
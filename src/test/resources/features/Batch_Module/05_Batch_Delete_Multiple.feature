@DeleteMultipleBatch
Feature: Delete Multiple Batch

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar

  @ValidateDeleteIconBelowHeader
  Scenario: Validate the delete icon below the header
    Given None of the checkboxes in data table of batch are selected
    Then The delete icon under the Manage Batch header should be disabled

  @CheckForSingleRowDelete
  Scenario: Check for single row delete
    Given One of the checkbox row is selected on batch page
    When Click delete icon below Manage Batch header
    Then The respective row in the data table of batch is deleted

  @CheckForMutiRowDelete
  Scenario: Check for multi row delete
    Given Two or more checkboxes are selected on batch page
    When Click delete icon below Manage Batch header
    Then The respective row in the data table of batch is deleted

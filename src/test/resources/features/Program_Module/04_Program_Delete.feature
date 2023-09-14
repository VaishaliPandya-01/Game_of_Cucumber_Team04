@DeleteProgram
Feature: Delete Program

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar
    Then Admin clicks on the delete icon on program page if it is enabled

  @ValidateAlertBox
  Scenario: Delete Feature
    Then Alert appears with yes and No option to delete program

  @ValidateTextInAlertBox
  Scenario: Validate details for Confirm Deletion form
    Then Admin should see a message on manage program "Are you sure you want to delete"

  @ValidateRowLevelDeleteIconClickYesToDelete
  Scenario: Admin clicks the yes icon
    When Admin click yes option to delete program
    Then Program deleted alert pops and program is no more available in data table

  @ValidateRowLevelDeleteIconClickNo
  Scenario: Admin clicks the No icon
    When Admin click No option on delete program
    Then Program is still listed in data table

  @ValidateRowLevelDeleteIconClickClose
  Scenario: Admin clicks the close icon
    When Admin click close option on delete program
    Then Program is still listed in data table

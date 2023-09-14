@DeleteAssignment
Feature: Delete Assignment

   Background: Logged on the LMS portal
     Given Admin is on dashboard page after Login
    When Admin clicks Assignment button on the navigation bar in assignment page
    Then Admin clicks on the delete icon on Assignment page if it is enabled
 

  @ValidateAlertBox
  Scenario: Delete Feature
    Then Alert appears with yes and No option to delete Assignment

  @ValidateTextInAlertBox
  Scenario: Validate details for Confirm Deletion form
    Then Admin should see a message on manage assignment "Are you sure you want to delete"

  @ValidateRowLevelDeleteIconClickYesToDelete
  Scenario: Admin clicks the yes icon
    When Admin click yes option to delete Assignment
    Then Assignment deleted alert pops and Assignment is no more available in data table

  @ValidateRowLevelDeleteIconClickNo
  Scenario: Admin clicks the No icon
    When Admin click No option on delete Assignment
    Then Assignment is still listed in data table

  @ValidateRowLevelDeleteIconClickClose
  Scenario: Admin clicks the close icon
    When Admin click close option on delete Assignment
    Then Assignment is still listed in data table
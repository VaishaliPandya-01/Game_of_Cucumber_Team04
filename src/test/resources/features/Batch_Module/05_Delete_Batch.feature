@DeleteBatch
Feature: Delete Batch

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar
    Then Admin clicks on the delete icon on batch page if it is enabled

  @ValidateRowLevelDeleteIcon
  Scenario: Validate row level delete icon
    Then Alert appears with yes and No option to delete batch

  @ValidateRowLevelDeleteIconClickYesToDelete
  Scenario: Admin clicks the yes icon
    When Admin click yes option to delete batch
    Then Batch deleted alert pops and batch is no more available in data table
    
     @ValidateRowLevelDeleteIconClickNo
  Scenario: Admin clicks the No icon
    When Admin click No option on delete batch
    Then Batch is still listed in data table

Feature: Batch Page Validation
 
  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar

  @validateURL
  Scenario: Validate Manage batch URL
    Then Admin should see the "Manage Batch" in the URL of manage batch page

  @validateHeader
  Scenario: Validate Manage batch Header
    Then Admin should see the "Manage Batch" in the header of manage batch page

  @validatePaginator
  Scenario: Validate pagination on Manage batch
    Then Admin should see the pagination controls under the data table on manage batch page

  @validateTableHeader
  Scenario Outline: Validate Manage batch data table Header
    Then Admin Should see the data table on manage batch

    Examples: 
      | headers           |
      | Batch Name        |
      | Batch Description |
      | Batch Status      |
      | No Of Classes     |
      | Program Name      |
      | Edit Delete       |
      
      

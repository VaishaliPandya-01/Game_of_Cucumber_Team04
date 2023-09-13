@BatchPageValidations
Feature: Batch Page Validation

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar

  @validateBatchURL
  Scenario: Validate landing in Batch page
    Then Admin should see the "Manage Batch" in the URL of manage batch page

  @validateBatchTitle
  Scenario: Validate heading in the Batch Page
    Then Admin should see the "Manage Batch" in the header of manage batch page

  @validatePaginator
  Scenario: Validate pagination in the Batch Page
    Then Admin should see the pagination controls under the data table on manage batch page

  @validateTableHeader
  Scenario Outline: Validate data table headers in the Batch Page
    Then Admin Should see the data table on manage batch

    Examples: 
      | headers           |
      | Batch Name        |
      | Batch Description |
      | Batch Status      |
      | No Of Classes     |
      | Program Name      |
      | Edit Delete       |

  @ValidateDeleteIcon
  Scenario: Validate Delete button in Batch Page
    Then Admin should be able to see the Delete icon button that is disabled on manage batch

  @ValidateANewBatchButton
  Scenario: Validate "+ A New batch" in Batch Page
    Then Admin should be able to see the + A New batch button on manage batch

  @ValidateCheckBox
  Scenario: Validate checkbox in data table of Manage batch
    Then Data table should have a checkbox on manage batch

  @ValidateEditButton
  Scenario: Validate Edit button in data table of Manage batch
    Then Data table should have a edit icon that is enabled on manage batch

  @ValidateDeleteButton
  Scenario: Validate Delete button in data table of Manage batch
    Then Data table should have a delete icon that is enabled on manage batch

  @ValidatePopUpWithNewBatchDetails
  Scenario: Validate pop up for adding batch
    When Admin clicks + A New Batch button
    Then A new pop up with "Batch Details" appears

@AddNewBatch
Feature: Add New Batch

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar
    Then Admin clicks + A New Batch button

  @validateBatchDetailsFormFields
  Scenario: Check if the fields exist in pop
    Then The pop up should include fields like Name Number of classes Description Status and Program Name

  @FillAllDetailsExceptDescription
  Scenario Outline: Check if description is optional field
    When Click on save after filling all the fields except description with valid values on batch details "<KeyOption>" and "<Sheetname>"
    Then The newly added batch should be present in the data table in Manage Batch page

    Examples: 
      | KeyOption               | Sheetname        |
      | batchDetailsWithoutDesc | batchDetailsForm |

  @FillAllBatchDetails
  Scenario Outline: Check if the program details are added in data table
    When Click on save after filling all the fields with valid values on batch details "<KeyOption>" and "<Sheetname>"
    Then The newly added batch should be present in the data table in Manage Batch page

    Examples: 
      | KeyOption    | Sheetname        |
      | batchDetails | batchDetailsForm |

  @GiveInvalidValueInBatchDetails
  Scenario Outline: Check for error messages for invalid fields
    When Click on save after filling all the fields with Invalid values on batch details "<KeyOption>" and "<Sheetname>"
    Then Error message should appear on batch detail page

    Examples: 
      | KeyOption           | Sheetname        |
      | InvalidbatchDetails | batchDetailsForm |

  @MissingMandatoryInBatchDetails
  Scenario Outline: Check for error messages for mandatory fields
    When Click on save after missing mandatory fields on batch details "<KeyOption>" and "<Sheetname>"
    Then Error message should appear on batch detail page

    Examples: 
      | KeyOption           | Sheetname        |
      | MissingMandatoryInDetails | batchDetailsForm |

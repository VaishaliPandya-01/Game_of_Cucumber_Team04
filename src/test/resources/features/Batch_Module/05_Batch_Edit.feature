@EditBatch
Feature: Edit Batch Details

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar
    Then Admin clicks on the Edit icon on batch page if it is enabled

  @ValidateRowLevelEditIcon
  Scenario: Validate row level edit icon
    Then A new pop up with "Batch details" appears to edit

  @UpdateWithValidValues
  Scenario Outline: Check if the fields are updated
    When Click save after updating the batch detail fields with valid values "<KeyOption>" and "<Sheetname>"
    Then The updated batch details should appear on the data table

    Examples: 
      | KeyOption          | Sheetname        |
      | UpdatedBatchDetail | batchDetailsForm |

  @UpdateWithInValidValues
  Scenario Outline: Check if the update throws error with invalid valued
    When Click save after updating the batch detail fields with Invalid values "<KeyOption>" and "<Sheetname>"
    Then Error message should appear on batch detail page

    Examples: 
      | KeyOption           | Sheetname        |
      | InvalidbatchDetails | batchDetailsForm |

  @UpdateWithoutMandatoryFields
  Scenario Outline: Check if the update throws error with invalid valued
    When Click save after updating the batch detail without mandatory fields "<KeyOption>" and "<Sheetname>"
    Then Error message should appear on batch detail page

    Examples: 
      | KeyOption                 | Sheetname        |
      | MissingMandatoryInDetails | batchDetailsForm |

  @UpdateWithoutDescriptionField
  Scenario Outline: Check if the update throws error with invalid valued
    When Erase data from description field of batch "<KeyOption>" and "<Sheetname>"
    Then The updated batch details should appear on the data table

    Examples: 
      | KeyOption                 | Sheetname        |
      | batchDetailsWithoutDesc | batchDetailsForm |

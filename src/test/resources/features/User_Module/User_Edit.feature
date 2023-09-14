Feature: Edit new user

Background: Logged on the LMS portal
Given Admin is on dashboard page after Login
When Admin clicks User from navigation bar
Then Admin clicks the edit icon if it is enabled

Scenario: Validate row level edit icon
Then A new pop up with User details appears

Scenario Outline: Batch link on navigation bar
When Update the fields with valid values and click submit "<KeyOption>" and "<Sheetname>"
Then The updated user details should appear on the data table

    Examples: 
      | KeyOption         | Sheetname       |
      | ValidUserDetails  | userDetailsForm |

Scenario Outline: Class link on navigation bar
When Update the fields with invalid values and click submit "<KeyOption>" and "<Sheetname>"
Then Error message should appear for user

Examples: 
      | KeyOption          | Sheetname       |
      | InvalidUserDetails | userDetailsForm |

Scenario: User link on navigation bar
When Erase data from mandatory field
Then Error message should appear for user












@tag
Feature: Assignment feature

  Background: 
    Given Logged on the LMS portal as Admin
    When Admin clicks "assignment" button on the navigation bar

  @tag1
  Scenario: Verify landing in manage assignment page
    Then Admin should see URL with "Manage assignment" in manage assignment page

  @tag2
  Scenario: Capture the response time to navigate to manage assignment page
    Then Get the response time for navigation from dashboard page to manage assignment page

  @tag3
  Scenario: Verify manage assignment page Header in manage assignment page
    Then Admin should see header with "Manage assignment" in manage assignment page

  @tag4
  Scenario: Validate text in manage assignment page
    Then Admin should see correct spelling for the all the fields in manage assignment page

  @tag5
  Scenario: Verify delete icon below the header in manage assignment page
    Then Admin should see disabled delete icon below the "Manage assignment" in manage assignment page

  @tag6
  Scenario: Verify search bar on the manage assignment page
    Then Admin should see search bar on the manage assignment page

  @tag7
  Scenario: Verify add new assignment button  on manage assignment page
    Then Admin should see +Add New assignment button on the manage assignment page

  @tag8
  Scenario Outline: Verify add new assignment button  on manage assignment page
    Then Admin should see data table on the manage assignment page With following column headers.

    Examples: 
      | headers                |
      | check box symbol       |
      | Assignment Name        |
      | Assignment Description |
      | Assignment Date        |
      | Assignment Grade       |
      | Edit Delete            |

  @tag9
  Scenario: Verify Edit icon in the data table in manage assignment page
    Then Edit Icon in each row of data table only  when entries are available in manage assignment page

  @tag10
  Scenario: Verify Edit icon when no data in the table in manage assignment page
    Then Edit Icon will not be present in data table in manage assignment page

  @tag11
  Scenario: Verify delete icon in the data table in manage assignment page
    Then Delete Icon in each row of data table only  when entries are available in manage assignment page

  @tag12
  Scenario: Verify delete icon when no data in the table in manage assignment page
    Then Delete Icon will not be present in data table in manage assignment page

  @tag13
  Scenario: Verify sort icon in the data table in manage assignment page
    Then Admin should see sort icon near the column headers except for Edit and Delete in manage assignment page

  @tag14
  Scenario: Verify check box in the data table in manage assignment page
    Then Admin should see check box in the all rows  of data table when entries available in manage assignment page

  @tag15
  Scenario: Validate the number entries displaying in manage assignment page
    Then Above the footer Admin should see the text as "Showing x to y of z entries" below the table in manage assignment page

  @tag16
  Scenario: Verify Pagination control below the data table in manage assignment page
    Then Admin should see the pagination controls under the data table in manage assignment page

  @tag17
  Scenario: Validate footer  text in manage assignment page
    Then Admin should see the text with total number assignments in the data table in manage assignment page

  @tag17
  Scenario: Validate search box function in manage assignment page
    When Admin enters assignment name into search box in manage assignment page
    Then Displays entries with that assignment name
    When Admin enters assignment  name is not existing the table into search box
    Then Displays empty details in the data table in manage assignment page
    When Admin enters assignment description into search box
    Then Displays entries with that assignment description
    When Admin enters assignment description which is not existing the table into search box
    Then Displays empty details in the data table in manage assignment page
    When Admin enters assignment due date into search box
    Then Displays entries with that assignment due date
    When Admin enters assignment due date which is not existing the table into search box
    Then Displays empty details in the data table in manage assignment page

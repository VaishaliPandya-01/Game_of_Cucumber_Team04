Feature: Dashboard Page Validation

  Background: Admin clicks Login butter after giving correct URL
    Given Admin is in login page
    When Admin enter valid credentials  and clicks login button

  Scenario: Verify after login  admin lands on manage program as dashboard page
    Then Admin should see manage program as header

  Scenario: Verify the response time
    Then Maximum navigation time in milliseconds, defaults to 30 seconds

  Scenario: Verify broken link
    Then HTTP response >= 400. Then the link is broken

  Scenario: Verify LMS title
    Then Admin should see LMS -Learning management system  as title

  Scenario: Verify  LMS title alignment
    Then LMS title should be on the top left corner of page

  Scenario: Validate navigation bar text
    Then Admin should see correct spelling in navigation bar text

  Scenario: Validate LMS title has correct spelling ang space
    Then Admin should see correct spelling and space in LMS title

  Scenario: Validate alignment for navigation bar
    Then Admin should see the navigation bar text on the top right side

  Scenario: Validate navigation bar order 1st Student
    Then Admin should see student in the 1st place

  Scenario: Validate navigation bar order  2nd Program
    Then Admin should see program in the 2nd place

  Scenario: Validate navigation bar order  3rd Batch
    Then Admin should see batch in the 3rd place

  Scenario: Validate navigation bar order 4th Class
    Then Admin should see class in the 4th place

  Scenario: Validate navigation bar order 5th User
    Then Admin should see user in the  5th

  Scenario: Validate navigation bar order 6th Assignment
    Then Admin should see  assignment in the  6th

  Scenario: Validate navigation bar order 7th Attendance
    Then Admin should see  attendance in the  7th

  Scenario: Validate navigation bar order 8th Logout
    Then Admin should see logout in the 8th

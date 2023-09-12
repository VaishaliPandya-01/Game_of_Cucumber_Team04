@ProgramPagination
Feature: Program Pagination

  Background: Logged on the LMS portal
    Given Admin is on dashboard page after Login
    When Admin clicks Program from navigation bar

  @VerifyNextPageLink
  Scenario: Verify Next page link
    When Admin clicks Next page link on the program table 
    Then Admin should see the Pagination has Next link
    
    @VerifyLastPageLink
  Scenario: Verify Last page link
    When Admin clicks Last page link on the program table 
    Then Admin should see the last page record on the table with Next page link are disabled
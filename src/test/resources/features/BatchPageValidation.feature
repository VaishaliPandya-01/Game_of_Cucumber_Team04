Feature: Batch Page Validation
 
 Rule: Logged on the LMS portal
 
 Background: 
    Given Admin is on dashboard page after Login
    When Admin clicks Batch from navigation bar

  @validateURL
  Scenario: Validate Manage batch URL
    Then Admin should see the "Manage Batch" in the URL
 


@tag
Feature: Verify sort function in manage assignment page
  
Background: Admin is manage assignment page after logged in
Given Admin clicks Assignment button on the navigation bar in assignment page
When Admin click on assignment name column header to sort 


  @Sorted_in_descending_order
  Scenario: Verify sort function in data table for descending order in manage assignment page 
  Then Admin should see data table sorted in descending order in manage assignment page
  
  @sorted_in_ascending_order
  Scenario: Verify sort function in data table for ascending order in manage assignment page
  Then Admin should see data table sorted in ascending  order in manage assignment page
  
 
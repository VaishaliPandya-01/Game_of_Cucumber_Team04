@tag
Feature: Pagination in manage assignment
 
 
 Background:Logged on the LMS portal as Admin 
Given Admin is on dashboard page after Login
When Admin clicks Assignment button on the navigation bar in assignment page

  @Verify_sheet_one_is_displayed
  Scenario: Verify sheet one is displayed on default in data table in Manage Assignment Page
   
  Then Data table should display 1 page  when entries available in Manage Assignment Page
  
  @Verify_right_arrow_is_enable
  Scenario: Verify  right arrow is enable when sheet one is displayed in data table in Manage Assignment Page

  Then Right arrow should be enabled in page one  when entries are more than 5 available in Manage Assignment Page
  
  @Verify_left_arrow_is_disable
  Scenario: Verify  left arrow is disable when sheet one is displayed in data table in Manage Assignment Page
   
  Then Left arrow should be disabled in page one  when entries are more than 5 available in Manage Assignment Page
  
  @Verify_right_arrow_is_enable
  Scenario: Verify  right arrow is enable when sheet two is displayed in data table when entries are more than 10 in Manage Assignment Page
  
  Then Right arrow should be enabled in page two when entries are more than 10 available in Manage Assignment Page
  
  @Verify_left_arrow_is_enable
  Scenario: Verify  left arrow is enable when sheet two is displayed in data table in Manage Assignment Page
   
  Then Left arrow should be enabled in page two  in Manage Assignment Page
  
  @pagination_controls_enabled
  Scenario: Verify pagination controls enabled in Manage Assignment Page
  Then entries are more than 5 in data table pagination controls enabled in Manage Assignment Page
  
   @pagination_controls_disabled
  Scenario: Verify pagination controls disabled in Manage Assignment Page

  Then entries are less than 5 in data table pagination controls disabled in Manage Assignment Page
  
  @next_page_is_enabled
  Scenario: Verify next page is enabled in Manage Assignment Page
   
  Then  total class entries above 5 next page is enabled ( On multiples of 5 new page will be enabled) in Manage Assignment Page
  
  @next_page_is_enabled
  Scenario: verify next page is enabled in Manage Assignment Page
 
  Then total class entries  5 or below next page is disabled in Manage Assignment Page
  
  
  
  
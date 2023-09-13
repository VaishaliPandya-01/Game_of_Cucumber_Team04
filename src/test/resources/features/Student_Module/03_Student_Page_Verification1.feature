Feature: Student Page Verification

Background: Logged on the LMS portal as Admin 
Given Admin is on dashboard page after Login
When Admin clicks Student on the navigation bar

Scenario: Validate the title of the page 
Then Admin should see the Student details Page Title

Scenario: Validate response time from dashboard page to student page
Then  Maximum navigation time in milliseconds, defaults to 30 seconds in Student Module

Scenario: Validate the broken link
Then HTTP response >= 400, then the link is broken in Student Module

Scenario: Verify LMS title  
Then Admin should see "LMS -Learning management system"  as title in Student Module

Scenario: Verify the alignment of the Student detail title 
Then Student Detail title should be in centre of the pag in Student Module

Scenario: Validate drop down is present in the page 
Then 2 dropdowns should be present in the page in Student Module

Scenario: Validate search bar in select student name drop down
Then Admin should see search box inside the drop down in Student Module

Scenario: Validate search bar in select batch id drop down
Then Admin should see search box inside  batch id drop down in Student Module

Scenario: Validate text spelling student name
Then Admin should see correct spelling select student name in Student Module

Scenario: Validate text spelling select batch id
Then Admin should see correct spelling select  batch id text in Student Module

Scenario: Validate only numbers inside select batch id 
Then Admin should see only numbers inside batch id drop down in Student Module

Scenario: Validate gray color in student name drop down
Then Admin should see select student name in gray color in Student Module

Scenario: Validate gray color in batch id drop down
Then Admin should see select batch ID in gray color in Student Module

Scenario: Validate first drop down label is select student name
Then Admin should see "select student name" in first in Student Module

Scenario: Validate second drop down label is select batch id
Then Admin should see select batch id in second in Student Module

Scenario: Validate scroll down inside student name dropdown
Then Admin should able to scroll down to select the name in Student Module

Scenario: Validate scroll down inside batch id dropdown
Then Admin should able to scroll down to select the batch id in Student Module









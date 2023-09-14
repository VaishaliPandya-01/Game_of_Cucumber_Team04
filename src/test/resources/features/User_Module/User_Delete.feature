Feature: Delete user

Background: Logged on the LMS portal
Given Admin is on dashboard page after Login
When Admin clicks User from navigation bar
Then Admin clicks the delete icon if it is enabled

Scenario: Validate row level delete icon
When Admin clicks the delete icon
Then Alert appears with Yes and No option

Scenario: Validate accept alert
When Admin click yes option
Then User deleted alert pops and user is no more available in data table

Scenario: Validate reject alert
When Admin click No option
Then User is still listed in data table



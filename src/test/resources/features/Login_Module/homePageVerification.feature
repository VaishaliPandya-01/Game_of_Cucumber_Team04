#Feature: Home Page Verfication of LMS Application
#
  #Background: Admin landed at home page
    #Given Admin launch the browser
    #When Admin gives the correct LMS portal URL
#
  #Scenario: Verify admin is able to land on home page
    #Then Admin should land on the home page
#
  #Scenario: Verify admin is able to land on home page with invalid URL
    #When Admin gives the invalid LMS portal URL
    #Then Admin should recive 404 page not fount error
#
  #Scenario: Verify for broken link
    #Then HTTP response >= 400
    #Then the link is broken
#
  #Scenario: Verify the text spelling in the page
    #Then Admin should see correct spellings in all fields
#
  #Scenario: Verify the logo of the LMS
    #Then Admin should see correct logo of the LMS
#
  #Scenario: Verify the logo properly aligned
    #Then Admin should see logo is properly aligned
#
  #Scenario: Verify login button is present
    #Then Admin should see login button
#
  #Scenario: Verify login button is clickable
    #Then Admin should able to click the Login button
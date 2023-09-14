Feature: Navigation function validation from manage class page to other pages
Background: Admin is manage class page after logged in
 Given Admin is in Manage class page
 
 
@Verifyadminnavigatesfrommanagetostudentpage
  Scenario: Verify admin is able to navigate from manage class to student page
    When Admin clicks Student button in the navigation bar
    Then Admin should able to land on student page
   

@Verifyadminnavigatesfrommanagetoprogrampage
  Scenario: Verify admin is able to navigate from manage class to program page
    When Admin clicks Program button in the navigation bar
    Then Admin should able to land on program page
   
   
@Verifyadminnavigatesfrommanagetobatchpage
  Scenario: Verify admin is able to navigate from manage class to batch page
    When Admin clicks " Batch" button in the navigation bar
    Then Admin should able to land on batch page
   
   
@Verifyadminnavigatesfrommanagetouserpage
  Scenario: Verify admin is able to navigate from manage class to user page
    When Admin clicks " User" button in the navigation bar
    Then Admin should able to land on user page
   
   
@Verifyadminnavigatesfrommanagetoassignmentpage
  Scenario: Verify admin is able to navigate from manage class to assignment page
    When Admin clicks " Assignment" button in the navigation bar
    Then Admin should able to land on Assignment page
   
   
@Verifyadminnavigatesfrommanagetoattendancepage
  Scenario: Verify admin is able to navigate from manage class to attendance page
    Given Admin is in Manage class page
    When Admin clicks " Attendance" button in the navigation bar
    Then Admin should able to land on Attendance page
   
   
@Verifyadminnavigatestologoutfrommanagepage
  Scenario: Verify adminshould able to do logout function from manage class
    Given Admin is in Manage class page
    When Admin clicks "Logout" button in the navigation bar
    Then Admin should able to land on login page
   
   
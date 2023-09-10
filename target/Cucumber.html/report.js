$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/BatchPageValidation.feature");
formatter.feature({
  "name": "Batch Page Validation",
  "description": " Rule: Logged on the LMS portal",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Admin is on dashboard page after Login",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Batch.admin_is_on_dashboard_page_after_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Batch from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch.admin_clicks_Batch_from_navigation_bar()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat com.stepDefinition.Batch.admin_clicks_Batch_from_navigation_bar(Batch.java:20)\r\n\tat ✽.Admin clicks Batch from navigation bar(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/BatchPageValidation.feature:7)\r\n",
  "status": "pending"
});
formatter.scenario({
  "name": "Validate Manage batch URL",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validateURL"
    }
  ]
});
formatter.step({
  "name": "Admin should see the \"Manage Batch\" in the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch.admin_should_see_the_in_the_URL(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Batch_Module/05_Add_New_Batch.feature");
formatter.feature({
  "name": "Add New Batch",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Logged on the LMS portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on dashboard page after Login",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks Batch from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Batch_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Batch button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_A_New_Batch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the fields exist in pop",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@validateBatchDetailsFormFields"
    }
  ]
});
formatter.step({
  "name": "The pop up should include fields like Name Number of classes Description Status and Program Name",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_pop_up_should_include_fields_like_Name_Number_of_classes_Description_Status_and_Program_Name()"
});

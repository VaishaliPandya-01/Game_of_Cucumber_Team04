$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Assignment_Module/08_AssigmentAddNew.feature");
formatter.feature({
  "name": "Add new assignment",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate admin able to add new assignment with valid data in mandatory fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidData_in_mandatory_fields"
    }
  ]
});
formatter.step({
  "name": "Admin enters all mandatory field values with valid data and clicks save button in assignment details \"\u003cKeyOptions\u003e\" and \"\u003cSheetName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see new assignment details is added in the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOptions",
        "",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "valid mandatory fields",
        "",
        "AssignmentDetails"
      ]
    }
  ]
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
  "name": "Admin clicks \"Assignment\" button on the navigation bar in assignment page",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Assignment_SD.admin_clicks_button_on_the_navigation_bar_in_assignment_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin click +Add new assignment button in Assignment details popup window",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Assignment_SD.admin_click_Add_new_assignment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate admin able to add new assignment with valid data in mandatory fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@ValidData_in_mandatory_fields"
    }
  ]
});
formatter.step({
  "name": "Admin enters all mandatory field values with valid data and clicks save button in assignment details \"valid mandatory fields\" and \"\u003cSheetName\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Assignment_SD.admin_enters_all_mandatory_field_values_with_valid_data_and_clicks_save_button_in_assignment_details_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.apache.poi.xssf.usermodel.XSSFSheet.getLastRowNum()\" because \"com.utility.XLUtils.sheet\" is null\r\n\tat com.utility.XLUtils.getDataRow(XLUtils.java:31)\r\n\tat com.utility.XLUtils.getData(XLUtils.java:57)\r\n\tat com.utility.XlUtilsData.AssignmentXLdata(XlUtilsData.java:73)\r\n\tat com.stepDefinition.Assignment_SD.admin_enters_all_mandatory_field_values_with_valid_data_and_clicks_save_button_in_assignment_details_and(Assignment_SD.java:328)\r\n\tat ✽.Admin enters all mandatory field values with valid data and clicks save button in assignment details \"valid mandatory fields\" and \"\u003cSheetName\u003e\"(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Assignment_Module/08_AssigmentAddNew.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin should see new assignment details is added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Assignment_SD.admin_should_see_new_assignment_details_is_added_in_the_data_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9bc0d4c31b0e8ea975645248e51f55f8, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63901}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63901/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9bc0d4c31b0e8ea975645248e51f55f8\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate admin able to add new assignment with invalid data in mandatory fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InValidData_mandatory_fields"
    }
  ]
});
formatter.step({
  "name": "Admin enters all mandatory field values with invalid data and clicks save button in assignment details \"\u003cKeyOptions\u003e\" and \"\u003cSheetName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should appear in alert  in assignment details",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOptions",
        "",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "invalid mandatory fields",
        "",
        "AssignmentDetails"
      ]
    }
  ]
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
  "name": "Admin clicks \"Assignment\" button on the navigation bar in assignment page",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Assignment_SD.admin_clicks_button_on_the_navigation_bar_in_assignment_page(java.lang.String)"
});

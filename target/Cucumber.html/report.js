$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Add_New.feature");
formatter.feature({
  "name": "Add New Batch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddNewBatch"
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
      "name": "@AddNewBatch"
    },
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
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check if description is optional field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FillAllDetailsExceptDescription"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields except description with valid values on batch details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The newly added batch should be present in the data table in Manage Batch page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "batchDetailsWithoutDesc",
        "batchDetailsForm"
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
  "name": "Check if description is optional field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewBatch"
    },
    {
      "name": "@FillAllDetailsExceptDescription"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields except description with valid values on batch details \"batchDetailsWithoutDesc\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_on_save_after_filling_all_the_fields_except_description_with_valid_values_on_batch_details_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The newly added batch should be present in the data table in Manage Batch page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_newly_added_batch_should_be_present_in_the_data_table_in_Manage_Batch_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"actualTableData\" is null\r\n\tat com.stepDefinition.Batch_SD.the_newly_added_batch_should_be_present_in_the_data_table_in_Manage_Batch_page(Batch_SD.java:215)\r\n\tat ✽.The newly added batch should be present in the data table in Manage Batch page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Add_New.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [af86a6e659ccaa45e84c65dad037f56b, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55322}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55322/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: af86a6e659ccaa45e84c65dad037f56b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if the program details are added in data table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FillAllBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields with valid values on batch details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The newly added batch should be present in the data table in Manage Batch page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "batchDetails",
        "batchDetailsForm"
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
  "name": "Check if the program details are added in data table",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewBatch"
    },
    {
      "name": "@FillAllBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields with valid values on batch details \"batchDetails\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_on_save_after_filling_all_the_fields_with_valid_values_on_batch_details_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The newly added batch should be present in the data table in Manage Batch page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_newly_added_batch_should_be_present_in_the_data_table_in_Manage_Batch_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"actualTableData\" is null\r\n\tat com.stepDefinition.Batch_SD.the_newly_added_batch_should_be_present_in_the_data_table_in_Manage_Batch_page(Batch_SD.java:215)\r\n\tat ✽.The newly added batch should be present in the data table in Manage Batch page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Add_New.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9f13db0d94f0310abd78637ec9352465, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55412}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55412/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9f13db0d94f0310abd78637ec9352465\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check for error messages for invalid fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GiveInvalidValueInBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields with Invalid values on batch details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "InvalidbatchDetails",
        "batchDetailsForm"
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
  "name": "Check for error messages for invalid fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewBatch"
    },
    {
      "name": "@GiveInvalidValueInBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after filling all the fields with Invalid values on batch details \"InvalidbatchDetails\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_on_save_after_filling_all_the_fields_with_Invalid_values_on_batch_details_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027message\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027message\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f8602126972b6060568a1265b3a2605c, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027message\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55497}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55497/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f8602126972b6060568a1265b3a2605c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Add_Obj.errorMessage(Batch_Add_Obj.java:96)\r\n\tat com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page(Batch_SD.java:278)\r\n\tat ✽.Error message should appear on batch detail page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Add_New.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f8602126972b6060568a1265b3a2605c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55497}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55497/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f8602126972b6060568a1265b3a2605c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check for error messages for mandatory fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@MissingMandatoryInBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after missing mandatory fields on batch details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "MissingMandatoryInDetails",
        "batchDetailsForm"
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
  "name": "Check for error messages for mandatory fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewBatch"
    },
    {
      "name": "@MissingMandatoryInBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Click on save after missing mandatory fields on batch details \"MissingMandatoryInDetails\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Click_on_save_after_missing_mandatory_fields_on_batch_details_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027message\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027message\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e2a2034a6f7a82072f38d6ca01f39749, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027message\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55593}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55593/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e2a2034a6f7a82072f38d6ca01f39749\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Add_Obj.errorMessage(Batch_Add_Obj.java:96)\r\n\tat com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page(Batch_SD.java:278)\r\n\tat ✽.Error message should appear on batch detail page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Add_New.feature:43)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e2a2034a6f7a82072f38d6ca01f39749, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55593}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55593/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e2a2034a6f7a82072f38d6ca01f39749\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Delete.feature");
formatter.feature({
  "name": "Delete Batch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteBatch"
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
  "name": "Admin clicks on the delete icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_delete_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate row level delete icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteBatch"
    },
    {
      "name": "@ValidateRowLevelDeleteIcon"
    }
  ]
});
formatter.step({
  "name": "Alert appears with yes and No option to delete batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.alert_appears_with_yes_and_No_option_to_delete_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks on the delete icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_delete_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin clicks the yes icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteBatch"
    },
    {
      "name": "@ValidateRowLevelDeleteIconClickYesToDelete"
    }
  ]
});
formatter.step({
  "name": "Admin click yes option to delete batch",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_click_yes_option_to_delete_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Batch deleted alert pops and batch is no more available in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.batch_deleted_alert_pops_and_batch_is_no_more_available_in_data_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Are you sure\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Are you sure\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8d689954ff357a25d9c57654c7ae8f8d, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55716}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55716/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8d689954ff357a25d9c57654c7ae8f8d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Delete_Obj.deleteMessage(Batch_Delete_Obj.java:65)\r\n\tat com.stepDefinition.Batch_SD.batch_deleted_alert_pops_and_batch_is_no_more_available_in_data_table(Batch_SD.java:314)\r\n\tat ✽.Batch deleted alert pops and batch is no more available in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8d689954ff357a25d9c57654c7ae8f8d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55716}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55716/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8d689954ff357a25d9c57654c7ae8f8d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks on the delete icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_delete_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin clicks the No icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteBatch"
    },
    {
      "name": "@ValidateRowLevelDeleteIconClickNo"
    }
  ]
});
formatter.step({
  "name": "Admin click No option on delete batch",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_click_No_option_on_delete_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Batch is still listed in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Batch_is_still_listed_in_data_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Success\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Success\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [98b81500b57b5e907e99ba515722a5f7, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Success\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55760}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55760/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 98b81500b57b5e907e99ba515722a5f7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Delete_Obj.successMessage(Batch_Delete_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.Batch_is_still_listed_in_data_table(Batch_SD.java:328)\r\n\tat ✽.Batch is still listed in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [98b81500b57b5e907e99ba515722a5f7, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55760}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55760/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 98b81500b57b5e907e99ba515722a5f7\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Delete_Multiple.feature");
formatter.feature({
  "name": "Delete Multiple Batch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteMultipleBatch"
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
  "name": "Admin clicks Batch from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Batch_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the delete icon below the header",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleBatch"
    },
    {
      "name": "@ValidateDeleteIconBelowHeader"
    }
  ]
});
formatter.step({
  "name": "None of the checkboxes in data table of batch are selected",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.none_of_the_checkboxes_in_data_table_of_batch_are_selected()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4061932387c83a1f6dc84109155b7853, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55803}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55803/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4061932387c83a1f6dc84109155b7853\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Batch_Manage_Obj.VisibleCheckBox(Batch_Manage_Obj.java:113)\r\n\tat com.stepDefinition.Batch_SD.none_of_the_checkboxes_in_data_table_of_batch_are_selected(Batch_SD.java:340)\r\n\tat ✽.None of the checkboxes in data table of batch are selected(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete_Multiple.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The delete icon under the Manage Batch header should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.The_delete_icon_under_the_Manage_Batch_header_should_be_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4061932387c83a1f6dc84109155b7853, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55803}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55803/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4061932387c83a1f6dc84109155b7853\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Check for single row delete",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleBatch"
    },
    {
      "name": "@CheckForSingleRowDelete"
    }
  ]
});
formatter.step({
  "name": "One of the checkbox row is selected on batch page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.one_of_the_checkbox_row_is_selected_on_batch_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click delete icon below Manage Batch header",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_delete_icon_below_Manage_Batch_header()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The respective row in the data table of batch is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_respective_row_in_the_data_table_of_batch_is_deleted()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Are you sure\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Are you sure\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7a1d9a57857ab11cd7a62939e0f40e6d, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55828}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55828/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7a1d9a57857ab11cd7a62939e0f40e6d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Delete_Obj.deleteMessage(Batch_Delete_Obj.java:65)\r\n\tat com.stepDefinition.Batch_SD.the_respective_row_in_the_data_table_of_batch_is_deleted(Batch_SD.java:375)\r\n\tat ✽.The respective row in the data table of batch is deleted(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete_Multiple.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7a1d9a57857ab11cd7a62939e0f40e6d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55828}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55828/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7a1d9a57857ab11cd7a62939e0f40e6d\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Check for multi row delete",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleBatch"
    },
    {
      "name": "@CheckForMutiRowDelete"
    }
  ]
});
formatter.step({
  "name": "Two or more checkboxes are selected on batch page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Two_or_more_checkboxes_are_selected_on_batch_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9097b37432707b4936c9af304dcd9ddf, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55863}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55863/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9097b37432707b4936c9af304dcd9ddf\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Batch_Manage_Obj.SelectMultiCheckBoxBatch(Batch_Manage_Obj.java:105)\r\n\tat com.stepDefinition.Batch_SD.Two_or_more_checkboxes_are_selected_on_batch_page(Batch_SD.java:361)\r\n\tat ✽.Two or more checkboxes are selected on batch page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete_Multiple.feature:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click delete icon below Manage Batch header",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_delete_icon_below_Manage_Batch_header()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The respective row in the data table of batch is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_respective_row_in_the_data_table_of_batch_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9097b37432707b4936c9af304dcd9ddf, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55863}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55863/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9097b37432707b4936c9af304dcd9ddf\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Edit.feature");
formatter.feature({
  "name": "Edit Batch Details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EditBatch"
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
  "name": "Admin clicks on the Edit icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate row level edit icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EditBatch"
    },
    {
      "name": "@ValidateRowLevelEditIcon"
    }
  ]
});
formatter.step({
  "name": "A new pop up with \"Batch details\" appears to edit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.a_new_pop_up_with_appears_to_edit(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Batch details]\u003e but was:\u003c[Google]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Batch_SD.a_new_pop_up_with_appears_to_edit(Batch_SD.java:395)\r\n\tat ✽.A new pop up with \"Batch details\" appears to edit(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Edit.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [62ee6285ef081e809d50957040e67dc1, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55892}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55892/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 62ee6285ef081e809d50957040e67dc1\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if the fields are updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithValidValues"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail fields with valid values \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The updated batch details should appear on the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "UpdatedBatchDetail",
        "batchDetailsForm"
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
  "name": "Admin clicks on the Edit icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the fields are updated",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditBatch"
    },
    {
      "name": "@UpdateWithValidValues"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail fields with valid values \"UpdatedBatchDetail\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.click_save_after_updating_the_batch_detail_fields_with_valid_values_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The updated batch details should appear on the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_updated_batch_details_should_appear_on_the_data_table()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"actualTableData\" is null\r\n\tat com.stepDefinition.Batch_SD.the_updated_batch_details_should_appear_on_the_data_table(Batch_SD.java:501)\r\n\tat ✽.The updated batch details should appear on the data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Edit.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e23e167f5a6152b8f6aa8a55cfdcbc6c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55926}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55926/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e23e167f5a6152b8f6aa8a55cfdcbc6c\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithInValidValues"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail fields with Invalid values \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "InvalidbatchDetails",
        "batchDetailsForm"
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
  "name": "Admin clicks on the Edit icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditBatch"
    },
    {
      "name": "@UpdateWithInValidValues"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail fields with Invalid values \"InvalidbatchDetails\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Click_save_after_updating_the_batch_detail_fields_with_Invalid_values(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027message\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027message\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e10e3879876ffe77f3c2d3326b340e00, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027message\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55997}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55997/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e10e3879876ffe77f3c2d3326b340e00\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Add_Obj.errorMessage(Batch_Add_Obj.java:96)\r\n\tat com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page(Batch_SD.java:278)\r\n\tat ✽.Error message should appear on batch detail page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Edit.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e10e3879876ffe77f3c2d3326b340e00, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55997}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55997/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e10e3879876ffe77f3c2d3326b340e00\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithoutMandatoryFields"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail without mandatory fields \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "MissingMandatoryInDetails",
        "batchDetailsForm"
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
  "name": "Admin clicks on the Edit icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditBatch"
    },
    {
      "name": "@UpdateWithoutMandatoryFields"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the batch detail without mandatory fields \"MissingMandatoryInDetails\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Click_save_after_updating_the_batch_detail_without_mandatory_fields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message should appear on batch detail page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027message\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027message\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [91681c1b2349fa4ea5278d0d8d770797, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027message\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56062}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56062/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 91681c1b2349fa4ea5278d0d8d770797\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Add_Obj.errorMessage(Batch_Add_Obj.java:96)\r\n\tat com.stepDefinition.Batch_SD.Error_message_should_appear_on_batch_detail_page(Batch_SD.java:278)\r\n\tat ✽.Error message should appear on batch detail page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Edit.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [91681c1b2349fa4ea5278d0d8d770797, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56062}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56062/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 91681c1b2349fa4ea5278d0d8d770797\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithoutDescriptionField"
    }
  ]
});
formatter.step({
  "name": "Erase data from description field of batch \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "The updated batch details should appear on the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "batchDetailsWithoutDesc",
        "batchDetailsForm"
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
  "name": "Admin clicks on the Edit icon on batch page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_on_the_Edit_icon_on_batch_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check if the update throws error with invalid valued",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditBatch"
    },
    {
      "name": "@UpdateWithoutDescriptionField"
    }
  ]
});
formatter.step({
  "name": "Erase data from description field of batch \"batchDetailsWithoutDesc\" and \"batchDetailsForm\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.Erase_data_from_description_field_of_batch(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The updated batch details should appear on the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.the_updated_batch_details_should_appear_on_the_data_table()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"actualTableData\" is null\r\n\tat com.stepDefinition.Batch_SD.the_updated_batch_details_should_appear_on_the_data_table(Batch_SD.java:501)\r\n\tat ✽.The updated batch details should appear on the data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Edit.feature:43)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ad03ea04e5ed003e0483d6e488d94f5b, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56130}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56130/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ad03ea04e5ed003e0483d6e488d94f5b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Page_Validation.feature");
formatter.feature({
  "name": "Batch Page Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@BatchPageValidations"
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
  "name": "Admin clicks Batch from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Batch_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate landing in Batch page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateBatchURL"
    }
  ]
});
formatter.step({
  "name": "Admin should see the \"Manage Batch\" in the URL of manage batch page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_should_see_the_in_the_URL_of_manage_batch_page(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.stepDefinition.Batch_SD.admin_should_see_the_in_the_URL_of_manage_batch_page(Batch_SD.java:56)\r\n\tat ✽.Admin should see the \"Manage Batch\" in the URL of manage batch page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Page_Validation.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0867bccf46119da95dbc52688825c251, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56213}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56213/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0867bccf46119da95dbc52688825c251\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate heading in the Batch Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateBatchTitle"
    }
  ]
});
formatter.step({
  "name": "Admin should see the \"Manage Batch\" in the header of manage batch page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_should_see_the_in_the_header_of_manage_batch_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Manage Batch]\u003e but was:\u003c[Google]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Batch_SD.admin_should_see_the_in_the_header_of_manage_batch_page(Batch_SD.java:65)\r\n\tat ✽.Admin should see the \"Manage Batch\" in the header of manage batch page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Page_Validation.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e6ef808732fb4903e7e039da7817a283, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56238}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56238/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e6ef808732fb4903e7e039da7817a283\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate pagination in the Batch Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validatePaginator"
    }
  ]
});
formatter.step({
  "name": "Admin should see the pagination controls under the data table on manage batch page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_should_see_the_pagination_controls_under_the_data_table_on_manage_batch_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "headers"
      ]
    },
    {
      "cells": [
        "Batch Name"
      ]
    },
    {
      "cells": [
        "Batch Description"
      ]
    },
    {
      "cells": [
        "Batch Status"
      ]
    },
    {
      "cells": [
        "No Of Classes"
      ]
    },
    {
      "cells": [
        "Program Name"
      ]
    },
    {
      "cells": [
        "Edit Delete"
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
  "name": "Admin clicks Batch from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Batch_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c570f2341cb1a3cf5bbc69c8eb9c45b9, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56299}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56299/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c570f2341cb1a3cf5bbc69c8eb9c45b9\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f97ee6aea21742ec17bdaa8fe7d9f66e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56328}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56328/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f97ee6aea21742ec17bdaa8fe7d9f66e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [935ca6fc8a37202e9fdb8f8b291bb985, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56354}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56354/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 935ca6fc8a37202e9fdb8f8b291bb985\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [17b0d4d66a42a5b8d5753635fd72f226, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56379}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56379/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 17b0d4d66a42a5b8d5753635fd72f226\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [aa20992eb5e8fe5c6f75e191554cc322, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56404}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56404/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: aa20992eb5e8fe5c6f75e191554cc322\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate data table headers in the Batch Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@validateTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage batch] is defined with 1 parameters at \u0027com.stepDefinition.Batch_SD.admin_Should_see_the_data_table_on_manage_batch(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage batch\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [354b750e6ad7ae6747ec5601cf6b8ff3, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56434}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56434/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 354b750e6ad7ae6747ec5601cf6b8ff3\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate Delete button in Batch Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidateDeleteIcon"
    }
  ]
});
formatter.step({
  "name": "Admin should be able to see the Delete icon button that is disabled on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_should_be_able_to_see_the_Delete_icon_button_that_is_disabled_on_manage_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Validate \"+ A New batch\" in Batch Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidateANewBatchButton"
    }
  ]
});
formatter.step({
  "name": "Admin should be able to see the + A New batch button on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_should_be_able_to_see_the_A_New_batch_button_on_manage_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Validate checkbox in data table of Manage batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidateCheckBox"
    }
  ]
});
formatter.step({
  "name": "Data table should have a checkbox on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.data_table_should_have_a_checkbox_on_manage_batch()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [674f02e93ed53b6e8e7dd5aa67b535aa, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56537}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56537/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 674f02e93ed53b6e8e7dd5aa67b535aa\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Batch_Manage_Obj.VisibleCheckBox(Batch_Manage_Obj.java:113)\r\n\tat com.stepDefinition.Batch_SD.data_table_should_have_a_checkbox_on_manage_batch(Batch_SD.java:107)\r\n\tat ✽.Data table should have a checkbox on manage batch(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Page_Validation.feature:43)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [674f02e93ed53b6e8e7dd5aa67b535aa, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56537}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56537/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 674f02e93ed53b6e8e7dd5aa67b535aa\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Validate Edit button in data table of Manage batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidateEditButton"
    }
  ]
});
formatter.step({
  "name": "Data table should have a edit icon that is enabled on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.data_table_should_have_a_edit_icon_that_is_enabled_on_manage_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Validate Delete button in data table of Manage batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidateDeleteButton"
    }
  ]
});
formatter.step({
  "name": "Data table should have a delete icon that is enabled on manage batch",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.data_table_should_have_a_delete_icon_that_is_enabled_on_manage_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.scenario({
  "name": "Validate pop up for adding batch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@BatchPageValidations"
    },
    {
      "name": "@ValidatePopUpWithNewBatchDetails"
    }
  ]
});
formatter.step({
  "name": "Admin clicks + A New Batch button",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_A_New_Batch_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A new pop up with \"Batch Details\" appears",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.a_new_pop_up_with_appears(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Batch Details]\u003e but was:\u003c[Google]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Batch_SD.a_new_pop_up_with_appears(Batch_SD.java:146)\r\n\tat ✽.A new pop up with \"Batch Details\" appears(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Page_Validation.feature:56)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1610aacb00aed453fe83b5abe402e54c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56633}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56633/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1610aacb00aed453fe83b5abe402e54c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Add_New.feature");
formatter.feature({
  "name": "Add New Program",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddNewProgram"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Program Details Popup window",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@validateProgramPopUPWindow"
    }
  ]
});
formatter.step({
  "name": "The pop up should include fields like Name Description Status on program detail",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_pop_up_should_include_fields_like_Name_Description_Status_on_program_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Empty program details form submission",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@EmptyFormSubmission"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button on program details without entering any data",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Save_button_on_program_details_without_entering_any_data()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enter only Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EnterOnlyProgramName"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program name \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Description is required\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "EnterOnlyProgramName",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter only Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@EnterOnlyProgramName"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program name \"EnterOnlyProgramName\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_clicks_Save_button_after_entering_only_program_name(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Description is required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Description is required]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(Program_SD.java:291)\r\n\tat ✽.Admin gets a message alert for program mandatory field \u0027Description is required\u0027(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [af0dd9c8e7de7aff5bd97295b7a29c33, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56777}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56777/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: af0dd9c8e7de7aff5bd97295b7a29c33\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Enter only Program Description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EnterOnlyProgramDescription"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program description \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name is required\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "EnterOnlyProgramDesc",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter only Program Description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@EnterOnlyProgramDescription"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program description \"EnterOnlyProgramDesc\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_clicks_Save_button_after_entering_only_program_description(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name is required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Name is required]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(Program_SD.java:291)\r\n\tat ✽.Admin gets a message alert for program mandatory field \u0027Name is required\u0027(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [05e3a29f73996b113d191ee0fea61bf9, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56838}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56838/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 05e3a29f73996b113d191ee0fea61bf9\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Select Status only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EnterOnlyProgramStatus"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program status \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name and Description required\u0027",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "EnterOnlyProgramStatus",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Select Status only",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@EnterOnlyProgramStatus"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Save button after entering only program status \"EnterOnlyProgramStatus\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_clicks_Save_button_after_entering_only_program_status(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name and Description required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Name and Description required]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(Program_SD.java:291)\r\n\tat ✽.Admin gets a message alert for program mandatory field \u0027Name and Description required\u0027(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:39)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e92a5f2d6c7100c40355654595db6f9c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:56900}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:56900/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e92a5f2d6c7100c40355654595db6f9c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate invalid values on the text column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateInvalidValuesInColumn"
    }
  ]
});
formatter.step({
  "name": "Admin enters only numbers or special char in name and desc column on program details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "InvalidProgramDetails",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid values on the text column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@ValidateInvalidValuesInColumn"
    }
  ]
});
formatter.step({
  "name": "Admin enters only numbers or special char in name and desc column on program details \"InvalidProgramDetails\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_enters_only_numbers_or_special_char_in_name_and_desc_column_on_program_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Close icon on Program Details form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@ValidateCloseIcon"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Close Icon on Program Details form",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Close_Icon_on_Program_Details_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Cancel icon on Program Details form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@ValidateCancelIcon"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Cancel Icon on Program Details form",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Cancel_Icon_on_Program_Details_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate Save button on Program Details form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EnterAllValidData"
    }
  ]
});
formatter.step({
  "name": "Enter all the required fields with valid values and click Save button \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Created\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "ValidProgramDetails",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Save button on Program Details form",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddNewProgram"
    },
    {
      "name": "@EnterAllValidData"
    }
  ]
});
formatter.step({
  "name": "Enter all the required fields with valid values and click Save button \"ValidProgramDetails\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Enter_all_the_required_fields_with_valid_values_and_click_Save_button(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Created\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Successful Program Created]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(Program_SD.java:350)\r\n\tat ✽.Admin gets a message \"Successful Program Created\" alert and able to see the new program added in the data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:67)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a0d2dcc1dbc0885e91216fd22c4e9823, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57111}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57111/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a0d2dcc1dbc0885e91216fd22c4e9823\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Delete.feature");
formatter.feature({
  "name": "Delete Program",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteProgram"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete Feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgram"
    },
    {
      "name": "@ValidateAlertBox"
    }
  ]
});
formatter.step({
  "name": "Alert appears with yes and No option to delete program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.alert_appears_with_yes_and_No_option_to_delete_program()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate details for Confirm Deletion form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgram"
    },
    {
      "name": "@ValidateTextInAlertBox"
    }
  ]
});
formatter.step({
  "name": "Admin should see a message \"Are you sure you want to delete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_a_message(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Are you sure you want to delete]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_a_message(Program_SD.java:445)\r\n\tat ✽.Admin should see a message \"Are you sure you want to delete\"(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [260e3428f6c12bf87dcfc57faa003b94, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57217}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57217/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 260e3428f6c12bf87dcfc57faa003b94\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin clicks the yes icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgram"
    },
    {
      "name": "@ValidateRowLevelDeleteIconClickYesToDelete"
    }
  ]
});
formatter.step({
  "name": "Admin click yes option to delete program",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_click_yes_option_to_delete_program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program deleted alert pops and program is no more available in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_deleted_alert_pops_and_program_is_no_more_available_in_data_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Are you sure\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Are you sure\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5aa1aa348dabf3a6d5553d0618671406, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57263}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57263/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5aa1aa348dabf3a6d5553d0618671406\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Program_Delete_Obj.deleteMessage(Program_Delete_Obj.java:65)\r\n\tat com.stepDefinition.Program_SD.program_deleted_alert_pops_and_program_is_no_more_available_in_data_table(Program_SD.java:460)\r\n\tat ✽.Program deleted alert pops and program is no more available in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5aa1aa348dabf3a6d5553d0618671406, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57263}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57263/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5aa1aa348dabf3a6d5553d0618671406\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin clicks the No icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgram"
    },
    {
      "name": "@ValidateRowLevelDeleteIconClickNo"
    }
  ]
});
formatter.step({
  "name": "Admin click No option on delete program",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_click_No_option_on_delete_program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program is still listed in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Success\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Success\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8ee398c0a27a5012a20ecca0c3c7880d, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Success\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57312}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57312/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ee398c0a27a5012a20ecca0c3c7880d\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Program_Delete_Obj.successMessage(Program_Delete_Obj.java:60)\r\n\tat com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table(Program_SD.java:481)\r\n\tat ✽.Program is still listed in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8ee398c0a27a5012a20ecca0c3c7880d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57312}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57312/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8ee398c0a27a5012a20ecca0c3c7880d\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Admin clicks the close icon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteProgram"
    },
    {
      "name": "@ValidateRowLevelDeleteIconClickClose"
    }
  ]
});
formatter.step({
  "name": "Admin click close option on delete program",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_click_close_option_on_delete_program()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program is still listed in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Success\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Success\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bd5194b05970d9c749e86a7383716002, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Success\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57359}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57359/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bd5194b05970d9c749e86a7383716002\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Program_Delete_Obj.successMessage(Program_Delete_Obj.java:60)\r\n\tat com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table(Program_SD.java:481)\r\n\tat ✽.Program is still listed in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bd5194b05970d9c749e86a7383716002, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57359}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57359/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bd5194b05970d9c749e86a7383716002\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature");
formatter.feature({
  "name": "Delete Multiple Batch",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the delete icon below the header",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
    },
    {
      "name": "@ValidateDeleteIconBelowHeader"
    }
  ]
});
formatter.step({
  "name": "None of the checkboxes in data table of program are selected",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.none_of_the_checkboxes_in_data_table_of_program_are_selected()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1ff89ef1fc6328f5c42c9a330d3e5ab4, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57412}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57412/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1ff89ef1fc6328f5c42c9a330d3e5ab4\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Program_Manage_Obj.VisibleCheckBox(Program_Manage_Obj.java:168)\r\n\tat com.stepDefinition.Program_SD.none_of_the_checkboxes_in_data_table_of_program_are_selected(Program_SD.java:493)\r\n\tat ✽.None of the checkboxes in data table of program are selected(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The delete icon under the Manage program header should be disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.The_delete_icon_under_the_Manage_program_header_should_be_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1ff89ef1fc6328f5c42c9a330d3e5ab4, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57412}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57412/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1ff89ef1fc6328f5c42c9a330d3e5ab4\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for single row delete click yes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
    },
    {
      "name": "@CheckForSingleRowDeleteClickYes"
    }
  ]
});
formatter.step({
  "name": "One of the checkbox row is selected on program page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.one_of_the_checkbox_row_is_selected_on_program_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click delete icon below Manage program header and click Yes",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.click_delete_icon_below_Manage_program_header_and_click_Yes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The respective row in the data table of program is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_is_deleted()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Are you sure\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Are you sure\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1b8079140b2c61f2f1588888f58fce5c, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57439}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57439/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1b8079140b2c61f2f1588888f58fce5c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Program_Delete_Obj.deleteMessage(Program_Delete_Obj.java:65)\r\n\tat com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_is_deleted(Program_SD.java:530)\r\n\tat ✽.The respective row in the data table of program is deleted(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:17)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1b8079140b2c61f2f1588888f58fce5c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57439}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57439/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 1b8079140b2c61f2f1588888f58fce5c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for single row delete click No",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
    },
    {
      "name": "@CheckForSingleRowDeleteClickNo"
    }
  ]
});
formatter.step({
  "name": "One of the checkbox row is selected on program page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.one_of_the_checkbox_row_is_selected_on_program_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click delete icon below Manage program header and click No",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.click_delete_icon_below_Manage_program_header_and_click_No()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The respective row in the data table of program should not get delete",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_should_not_get_delete()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[contains(text(),\u0027Are you sure\u0027) because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[contains(text(),\u0027Are you sure\u0027)\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [469b39a65ef59a152a69d199f1cf4454, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57485}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57485/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 469b39a65ef59a152a69d199f1cf4454\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Program_Delete_Obj.deleteMessage(Program_Delete_Obj.java:65)\r\n\tat com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_should_not_get_delete(Program_SD.java:549)\r\n\tat ✽.The respective row in the data table of program should not get delete(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [469b39a65ef59a152a69d199f1cf4454, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57485}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57485/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 469b39a65ef59a152a69d199f1cf4454\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for multi row delete click yes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
    },
    {
      "name": "@CheckForMutiRowDeleteClickYes"
    }
  ]
});
formatter.step({
  "name": "Two or more checkboxes are selected on program page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Two_or_more_checkboxes_are_selected_on_program_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c1222bae39071d985814746ca8f4668c, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57531}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57531/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c1222bae39071d985814746ca8f4668c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Program_Manage_Obj.SelectMultiCheckBoxProgram(Program_Manage_Obj.java:160)\r\n\tat com.stepDefinition.Program_SD.Two_or_more_checkboxes_are_selected_on_program_page(Program_SD.java:514)\r\n\tat ✽.Two or more checkboxes are selected on program page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click delete icon below Manage program header and click Yes",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.click_delete_icon_below_Manage_program_header_and_click_Yes()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The respective row in the data table of program is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_is_deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c1222bae39071d985814746ca8f4668c, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57531}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57531/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c1222bae39071d985814746ca8f4668c\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for multi row delete click No",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteMultipleProgram"
    },
    {
      "name": "@CheckForMutiRowDeleteClickYes"
    }
  ]
});
formatter.step({
  "name": "Two or more checkboxes are selected on program page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Two_or_more_checkboxes_are_selected_on_program_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7bea738d7360621dc26b1ee9c0d38096, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57558}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57558/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7bea738d7360621dc26b1ee9c0d38096\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Program_Manage_Obj.SelectMultiCheckBoxProgram(Program_Manage_Obj.java:160)\r\n\tat com.stepDefinition.Program_SD.Two_or_more_checkboxes_are_selected_on_program_page(Program_SD.java:514)\r\n\tat ✽.Two or more checkboxes are selected on program page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click delete icon below Manage program header and click No",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.click_delete_icon_below_Manage_program_header_and_click_No()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The respective row in the data table of program should not get delete",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_respective_row_in_the_data_table_of_program_should_not_get_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7bea738d7360621dc26b1ee9c0d38096, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57558}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57558/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7bea738d7360621dc26b1ee9c0d38096\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Edit.feature");
formatter.feature({
  "name": "Edit Program Details",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@EditProgram"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Edit Feature",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@validateEditProgramDetails"
    }
  ]
});
formatter.step({
  "name": "The pop up should include fields like Name Description Status on program detail",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_pop_up_should_include_fields_like_Name_Description_Status_on_program_detail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithProgramName"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the valid program name \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "UpdateProgramName",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Program Name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@UpdateWithProgramName"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the valid program name \"UpdateProgramName\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Click_save_after_updating_the_valid_program_name(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Successful Program Updated]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(Program_SD.java:350)\r\n\tat ✽.Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fab8ad38448eb16c122de7229546d4e5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57653}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57653/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fab8ad38448eb16c122de7229546d4e5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Edit Program Description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UpdateWithProgramDescription"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the valid program description \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "UpdateProgramDescription",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Program Description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@UpdateWithProgramDescription"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the valid program description \"UpdateProgramDescription\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Click_save_after_updating_the_valid_program_description(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Successful Program Updated]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(Program_SD.java:350)\r\n\tat ✽.Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [569c2df8bd45aa34e6a166fe551a4f4f, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57721}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57721/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 569c2df8bd45aa34e6a166fe551a4f4f\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Program Status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@UpdateWithProgramStatus"
    }
  ]
});
formatter.step({
  "name": "Click save after updating the valid program status",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Click_save_after_updating_the_valid_program_status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a message for program update as \"Successful Program Updated\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_for_program_update_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Successful Program Updated]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.Admin_gets_a_message_for_program_update_as(Program_SD.java:418)\r\n\tat ✽.Admin gets a message for program update as \"Successful Program Updated\"(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d84e2db3e66ac9103f4c5d406a4ff075, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57787}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57787/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d84e2db3e66ac9103f4c5d406a4ff075\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Cancel icon on Program Details form",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@ValidateCancelIcon"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Cancel Icon on Program Details form",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Cancel_Icon_on_Program_Details_form()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate invalid values on the text column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ValidateInvalidValuesInColumn"
    }
  ]
});
formatter.step({
  "name": "Admin enters only numbers or special char in name and desc column on program details \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "InvalidProgramDetails",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate invalid values on the text column",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@EditProgram"
    },
    {
      "name": "@ValidateInvalidValuesInColumn"
    }
  ]
});
formatter.step({
  "name": "Admin enters only numbers or special char in name and desc column on program details \"InvalidProgramDetails\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_enters_only_numbers_or_special_char_in_name_and_desc_column_on_program_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Page_Validation.feature");
formatter.feature({
  "name": "Program Page Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProgramPageValidations"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate landing in Program page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramURL"
    }
  ]
});
formatter.step({
  "name": "Admin should see the \"Manage Program\" in the URL of manage program page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_in_the_URL_of_manage_program_page(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_in_the_URL_of_manage_program_page(Program_SD.java:36)\r\n\tat ✽.Admin should see the \"Manage Program\" in the URL of manage program page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3b57ddb61b2fe3ece49fb6c820349bd0, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57960}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57960/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b57ddb61b2fe3ece49fb6c820349bd0\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate heading in the Program Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTitle"
    }
  ]
});
formatter.step({
  "name": "Admin should see the \"Manage Program\" in the header of manage program page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_in_the_header_of_manage_program_page(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Manage Program]\u003e but was:\u003c[Google]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_in_the_header_of_manage_program_page(Program_SD.java:44)\r\n\tat ✽.Admin should see the \"Manage Program\" in the header of manage program page(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [823ea2057666ad7d895b89c762d317b5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:57993}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:57993/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 823ea2057666ad7d895b89c762d317b5\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the text and pagination icon below the data table on program page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramPagination"
    }
  ]
});
formatter.step({
  "name": "Admin should see the text as \"Showing x to y of z entries\" along with Pagination icon below the table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_text_as_along_with_Pagination_icon_below_the_table(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Showing x to y of z entries]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_text_as_along_with_Pagination_icon_below_the_table(Program_SD.java:52)\r\n\tat ✽.Admin should see the text as \"Showing x to y of z entries\" along with Pagination icon below the table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bdb1550493b1ae593ce142cbb0b5dabd, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58018}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58018/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bdb1550493b1ae593ce142cbb0b5dabd\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the footer on program page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramFooter"
    }
  ]
});
formatter.step({
  "name": "Admin should see the footer as \"In total there are z programs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_footer_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[In total there are z programs]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_footer_as(Program_SD.java:60)\r\n\tat ✽.Admin should see the footer as \"In total there are z programs\"(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [633e6dfa78bca5e82b9445585fa8833a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58057}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58057/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 633e6dfa78bca5e82b9445585fa8833a\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Delete button in Program Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateDeleteIcon"
    }
  ]
});
formatter.step({
  "name": "Admin should be able to see the Delete icon button that is disabled on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_be_able_to_see_the_Delete_icon_button_that_is_disabled_on_manage_program()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate \"+ A New Program\" in Program Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateANewProgramButton"
    }
  ]
});
formatter.step({
  "name": "Admin should be able to see the + A New program button on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_be_able_to_see_the_A_New_program_button_on_manage_batch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate that number of records displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateNumberOfProgramRecord"
    }
  ]
});
formatter.step({
  "name": "Admin should see the number of records displayed on the page are 5",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_number_of_records_displayed_on_the_page_are(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c5\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_number_of_records_displayed_on_the_page_are(Program_SD.java:82)\r\n\tat ✽.Admin should see the number of records displayed on the page are 5(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [eb591b3ecf4dc30d27f53b85748cfa90, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58177}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58177/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: eb591b3ecf4dc30d27f53b85748cfa90\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "headers"
      ]
    },
    {
      "cells": [
        "Program Name"
      ]
    },
    {
      "cells": [
        "Program Description"
      ]
    },
    {
      "cells": [
        "Program Status"
      ]
    },
    {
      "cells": [
        "Edit"
      ]
    },
    {
      "cells": [
        "Delete"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage program] is defined with 1 parameters at \u0027com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage program\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [299a6cdadd79ca6dc6b40f7db7a93881, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58212}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58212/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 299a6cdadd79ca6dc6b40f7db7a93881\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage program] is defined with 1 parameters at \u0027com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage program\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c03d902722ae8be7b511402a33b4760e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58238}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58238/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c03d902722ae8be7b511402a33b4760e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage program] is defined with 1 parameters at \u0027com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage program\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4873b49c8203ca1a4dc0454bd6445388, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58266}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58266/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4873b49c8203ca1a4dc0454bd6445388\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage program] is defined with 1 parameters at \u0027com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage program\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [52674212d238410a963e363ac811153f, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58291}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58291/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 52674212d238410a963e363ac811153f\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate data table headers in the Program Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@validateProgramTableHeader"
    }
  ]
});
formatter.step({
  "name": "Admin Should see the data table on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [Admin Should see the data table on manage program] is defined with 1 parameters at \u0027com.stepDefinition.Program_SD.admin_Should_see_the_data_table_on_manage_program(io.cucumber.datatable.DataTable)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Admin Should see the data table on manage program\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:135)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:66)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9715a97be4df317dc58c7f779b209378, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58318}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58318/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9715a97be4df317dc58c7f779b209378\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Sort arrow icon on the data table",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateSortArrowIcon"
    }
  ]
});
formatter.step({
  "name": "Admin should see the sort arrow icon beside to each column header except Edit and Delete on program manage",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_sort_arrow_icon_beside_to_each_column_header_except_Edit_and_Delete_on_program_manage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate checkbox in data table of Manage program",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateCheckBoxOnProgram"
    }
  ]
});
formatter.step({
  "name": "Data table should have a checkbox on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.data_table_should_have_a_checkbox_on_manage_program()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression //*[@span/select-multiple-checkbox\u0027] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027//*[@span/select-multiple-checkbox\u0027]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#invalid-selector-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [62071b40399ea77b1c8bd299239b710a, findElements {using\u003dxpath, value\u003d//*[@span/select-multiple-checkbox\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58401}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58401/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 62071b40399ea77b1c8bd299239b710a\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor68.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElements(ElementLocation.java:182)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElements(ElementLocation.java:103)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElements(DefaultElementLocator.java:83)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementListHandler.invoke(LocatingElementListHandler.java:36)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy38.iterator(Unknown Source)\r\n\tat com.pageObject.Program_Manage_Obj.VisibleCheckBox(Program_Manage_Obj.java:168)\r\n\tat com.stepDefinition.Program_SD.data_table_should_have_a_checkbox_on_manage_program(Program_SD.java:108)\r\n\tat ✽.Data table should have a checkbox on manage program(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:54)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [62071b40399ea77b1c8bd299239b710a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58401}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58401/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 62071b40399ea77b1c8bd299239b710a\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Edit button in data table of Manage program",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateEditButtonOfProgram"
    }
  ]
});
formatter.step({
  "name": "Data table should have a edit icon that is enabled on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.data_table_should_have_a_edit_icon_that_is_enabled_on_manage_program()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Delete button in data table of Manage program",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateDeleteButtonOfProgram"
    }
  ]
});
formatter.step({
  "name": "Data table should have a delete icon that is enabled on manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.data_table_should_have_a_delete_icon_that_is_enabled_on_manage_program()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Search Bar on Manage program",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@ValidateSearchBarOfProgram"
    }
  ]
});
formatter.step({
  "name": "Admin should see Search bar with text as \"Search...\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_Search_bar_with_text_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Search...]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.stepDefinition.Program_SD.admin_should_see_Search_bar_with_text_as(Program_SD.java:130)\r\n\tat ✽.Admin should see Search bar with text as \"Search...\"(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:66)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e25d3af67bd3f45edbce7fd15c50d83e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58504}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58504/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e25d3af67bd3f45edbce7fd15c50d83e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search program by Invalid name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProgramByInvalidName"
    }
  ]
});
formatter.step({
  "name": "Admin enters invalid Program name into search box \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see zero entries on the data table of manage program",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "SearchProgramByInvalidName",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search program by Invalid name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@SearchProgramByInvalidName"
    }
  ]
});
formatter.step({
  "name": "Admin enters invalid Program name into search box \"SearchProgramByInvalidName\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_enters_invalid_Program_name_into_search_box_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see zero entries on the data table of manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_zero_entries_on_the_data_table_of_manage_program()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"tablevalue\" is null\r\n\tat com.stepDefinition.Program_SD.Admin_should_see_zero_entries_on_the_data_table_of_manage_program(Program_SD.java:202)\r\n\tat ✽.Admin should see zero entries on the data table of manage program(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:71)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fcd31998d24e90e134b16e188659388a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58538}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58538/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fcd31998d24e90e134b16e188659388a\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search program by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProgramByName"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program name into search box \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program Name",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "SearchProgramByName",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search program by name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@SearchProgramByName"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program name into search box \"SearchProgramByName\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_enters_Program_name_into_search_box_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program Name",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_Name()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"tablevalue\" is null\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_Name(Program_SD.java:148)\r\n\tat ✽.Admin should see the Programs displayed based on the Program Name(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:80)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d624d5c52c61f4bf30135c1b7f0ff38e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58581}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58581/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d624d5c52c61f4bf30135c1b7f0ff38e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search program by description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProgramByDescription"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program description into search box \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program description",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "SearchProgramByDescription",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search program by description",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@SearchProgramByDescription"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program description into search box \"SearchProgramByDescription\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_enters_Program_description_into_search_box_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program description",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_description()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"tablevalue\" is null\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_description(Program_SD.java:166)\r\n\tat ✽.Admin should see the Programs displayed based on the Program description(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:89)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ab6f0bc9188de4da40b7d8ae12f10332, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58621}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58621/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ab6f0bc9188de4da40b7d8ae12f10332\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Search program by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SearchProgramByStatus"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program status into search box \"\u003cKeyOption\u003e\" and \"\u003cSheetname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program status",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "KeyOption",
        "Sheetname"
      ]
    },
    {
      "cells": [
        "SearchProgramByStatus",
        "programDetails"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search program by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProgramPageValidations"
    },
    {
      "name": "@SearchProgramByStatus"
    }
  ]
});
formatter.step({
  "name": "Admin enters Program status into search box \"SearchProgramByStatus\" and \"programDetails\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_enters_Program_status_into_search_box_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_status()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"String.contains(java.lang.CharSequence)\" because \"tablevalue\" is null\r\n\tat com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_status(Program_SD.java:184)\r\n\tat ✽.Admin should see the Programs displayed based on the Program status(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:98)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ffccef4105c1ff6c78febd6ae9d8bd42, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58666}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58666/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ffccef4105c1ff6c78febd6ae9d8bd42\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor67.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Pagination.feature");
formatter.feature({
  "name": "Program Pagination",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProgramPagination"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Next page link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPagination"
    },
    {
      "name": "@VerifyNextPageLink"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Next page link on the program table",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Next_page_link_on_the_program_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the Pagination has Next link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Pagination_has_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Last page link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPagination"
    },
    {
      "name": "@VerifyLastPageLink"
    }
  ]
});
formatter.step({
  "name": "Admin clicks Last page link on the program table",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Last_page_link_on_the_program_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the last page record on the table with Next page link are disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_last_page_record_on_the_table_with_Next_page_link_are_disabled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify First page link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPagination"
    },
    {
      "name": "@VerifyFirstPageLink"
    }
  ]
});
formatter.step({
  "name": "Admin clicks first page link on the program table",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_first_page_link_on_the_program_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the previous page record on the table with pagination has previous page link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_the_previous_page_record_on_the_table_with_pagination_has_previous_page_link()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Start page link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramPagination"
    },
    {
      "name": "@VerifyStartPageLink"
    }
  ]
});
formatter.step({
  "name": "Admin clicks start page link on the program table",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_start_page_link_on_the_program_table()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see the very first page record on the table with Previous page link are disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_the_very_first_page_record_on_the_table_with_Previous_page_link_are_disabled()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature");
formatter.feature({
  "name": "Program Sorting Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program name column in ascending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramNameAscending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the ascending sort icon of program name column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_ascending_sort_icon_of_program_name_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program name column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program name column in Descending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramNameDescending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the descending sort icon of program name column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_descending_sort_icon_of_program_name_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program name column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program description column in ascending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramDescriptionAscending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the ascending sort icon of program description column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_ascending_sort_icon_of_program_description_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program description column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_decsription_column_values_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program description column in Descending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramDescriptionDescending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the descending sort icon of program description column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_descending_sort_icon_of_program_description_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program description column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_description_column_values_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program status column in ascending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramStatusAscending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the ascending sort icon of program status column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_ascending_sort_icon_of_program_status_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program status column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Batch_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate sort icon of program status column in Descending",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ProgramSortingValidations"
    },
    {
      "name": "@validateProgramStatusDescending"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the descending sort icon of program status column",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_the_descending_sort_icon_of_program_status_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The data get sorted on the table based on the program status column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
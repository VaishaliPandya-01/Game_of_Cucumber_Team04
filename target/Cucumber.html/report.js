$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Program_Module/04_Program_Add_New.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4f40749bc5b20d8a971aadc5e0409857, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61515}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61515/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f40749bc5b20d8a971aadc5e0409857\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4f40749bc5b20d8a971aadc5e0409857, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61515}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61515/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4f40749bc5b20d8a971aadc5e0409857\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [48c6020f13507b81dd04118c6f2b3ce5, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61553}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61553/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 48c6020f13507b81dd04118c6f2b3ce5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [48c6020f13507b81dd04118c6f2b3ce5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61553}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61553/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 48c6020f13507b81dd04118c6f2b3ce5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a22128e849ced87dec4747bd88493717, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61593}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61593/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a22128e849ced87dec4747bd88493717\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Description is required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a22128e849ced87dec4747bd88493717, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61593}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61593/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a22128e849ced87dec4747bd88493717\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [985354beccdf1c1fac7302d9d4cd9107, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61637}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61637/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 985354beccdf1c1fac7302d9d4cd9107\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name is required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [985354beccdf1c1fac7302d9d4cd9107, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61637}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61637/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 985354beccdf1c1fac7302d9d4cd9107\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba462da39f67b73d363c8a0496bdd5de, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61680}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61680/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba462da39f67b73d363c8a0496bdd5de\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message alert for program mandatory field \u0027Name and Description required\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_message_alert_for_program_mandatory_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba462da39f67b73d363c8a0496bdd5de, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61680}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61680/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba462da39f67b73d363c8a0496bdd5de\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba500d21e0e77e23ca7d20486fa343cd, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61720}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61720/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba500d21e0e77e23ca7d20486fa343cd\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba500d21e0e77e23ca7d20486fa343cd, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61720}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61720/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba500d21e0e77e23ca7d20486fa343cd\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [07b93a6df37832ad4e5de65e49898a91, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61771}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61771/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07b93a6df37832ad4e5de65e49898a91\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [07b93a6df37832ad4e5de65e49898a91, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61771}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61771/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07b93a6df37832ad4e5de65e49898a91\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e909e485e203ef833d171fbd09230b22, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61828}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61828/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e909e485e203ef833d171fbd09230b22\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e909e485e203ef833d171fbd09230b22, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61828}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61828/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e909e485e203ef833d171fbd09230b22\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0e4ec099d07642bf24ec38d455e45790, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61877}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61877/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0e4ec099d07642bf24ec38d455e45790\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Add_New.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks + A New Program button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_A_New_Program_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Created\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0e4ec099d07642bf24ec38d455e45790, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61877}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61877/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0e4ec099d07642bf24ec38d455e45790\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f817608167cb0935f7becd65c31140f5, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61912}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61912/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f817608167cb0935f7becd65c31140f5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f817608167cb0935f7becd65c31140f5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61912}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61912/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: f817608167cb0935f7becd65c31140f5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [93741a6f51a994da5bb0bbbc8289f7f6, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61952}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61952/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 93741a6f51a994da5bb0bbbc8289f7f6\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Admin should see a message on manage program \"Are you sure you want to delete\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_a_message_on_manage_program(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [93741a6f51a994da5bb0bbbc8289f7f6, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:61952}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:61952/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 93741a6f51a994da5bb0bbbc8289f7f6\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [37f1284b17662e7e56114709124c0a98, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62001}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62001/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 37f1284b17662e7e56114709124c0a98\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program deleted alert pops and program is no more available in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_deleted_alert_pops_and_program_is_no_more_available_in_data_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [37f1284b17662e7e56114709124c0a98, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62001}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62001/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 37f1284b17662e7e56114709124c0a98\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9c7195da2fafe37a5e10abebe26ae8c7, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62047}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62047/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c7195da2fafe37a5e10abebe26ae8c7\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program is still listed in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9c7195da2fafe37a5e10abebe26ae8c7, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62047}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62047/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 9c7195da2fafe37a5e10abebe26ae8c7\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e37e9e665a62969f6a1b9aa64b00c051, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62082}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62082/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e37e9e665a62969f6a1b9aa64b00c051\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the delete icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_delete_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program is still listed in data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Program_is_still_listed_in_data_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e37e9e665a62969f6a1b9aa64b00c051, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62082}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62082/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e37e9e665a62969f6a1b9aa64b00c051\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c5d23f066edd1c9666f0e155e8d94db5, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62126}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62126/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c5d23f066edd1c9666f0e155e8d94db5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c5d23f066edd1c9666f0e155e8d94db5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62126}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62126/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c5d23f066edd1c9666f0e155e8d94db5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2208bee01572f29c3ee8251e18f4693e, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62165}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62165/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2208bee01572f29c3ee8251e18f4693e\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2208bee01572f29c3ee8251e18f4693e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62165}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62165/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2208bee01572f29c3ee8251e18f4693e\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [244a75d7136487d3cb62070fe6fe5188, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62204}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62204/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 244a75d7136487d3cb62070fe6fe5188\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [244a75d7136487d3cb62070fe6fe5188, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62204}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62204/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 244a75d7136487d3cb62070fe6fe5188\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bf6db6c154da60ef4855cd2e5d020605, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62244}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62244/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bf6db6c154da60ef4855cd2e5d020605\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d116.0.5845.189)\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bf6db6c154da60ef4855cd2e5d020605, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62244}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62244/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: bf6db6c154da60ef4855cd2e5d020605\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:405)\r\n\tat com.baseClass.BaseClass.teardown(BaseClass.java:45)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:25)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [557458e9b40080fe87baaf585dc0f658, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62285}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62285/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 557458e9b40080fe87baaf585dc0f658\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Delete_Multiple.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [557458e9b40080fe87baaf585dc0f658, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62285}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62285/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 557458e9b40080fe87baaf585dc0f658\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [490440a286ea1cad1ed4cd5991fe6fd9, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62336}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62336/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 490440a286ea1cad1ed4cd5991fe6fd9\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [490440a286ea1cad1ed4cd5991fe6fd9, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62336}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62336/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 490440a286ea1cad1ed4cd5991fe6fd9\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e5612d95b280e3e6a8062c8941bf4ace, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62375}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62375/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e5612d95b280e3e6a8062c8941bf4ace\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e5612d95b280e3e6a8062c8941bf4ace, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62375}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62375/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e5612d95b280e3e6a8062c8941bf4ace\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [56473215cf6e07ee170b51ffed910ac5, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62410}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62410/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 56473215cf6e07ee170b51ffed910ac5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message \"Successful Program Updated\" alert and able to see the new program added in the data table",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_alert_and_able_to_see_the_new_program_added_in_the_data_table(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [56473215cf6e07ee170b51ffed910ac5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62410}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62410/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 56473215cf6e07ee170b51ffed910ac5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ab6c5297e9eb9fb9894490f0b89f064b, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62451}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62451/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ab6c5297e9eb9fb9894490f0b89f064b\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a message for program update as \"Successful Program Updated\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_gets_a_message_for_program_update_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ab6c5297e9eb9fb9894490f0b89f064b, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62451}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62451/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ab6c5297e9eb9fb9894490f0b89f064b\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e1f1c1975aa262c694d8506b21f2588e, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62491}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62491/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e1f1c1975aa262c694d8506b21f2588e\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Program Details popup window should be closed without saving",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.program_Details_popup_window_should_be_closed_without_saving()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e1f1c1975aa262c694d8506b21f2588e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62491}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62491/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e1f1c1975aa262c694d8506b21f2588e\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fbab460eaedc85f6101a09959dd0c316, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62530}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62530/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fbab460eaedc85f6101a09959dd0c316\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Edit.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks on the Edit icon on program page if it is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_on_the_Edit_icon_on_program_page_if_it_is_enabled()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets a Error message alert for program fields",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_gets_a_Error_message_alert_for_program_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fbab460eaedc85f6101a09959dd0c316, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62530}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62530/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: fbab460eaedc85f6101a09959dd0c316\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [665bcf96ec3abfed5eeb1b01997e53c7, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62567}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62567/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 665bcf96ec3abfed5eeb1b01997e53c7\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [665bcf96ec3abfed5eeb1b01997e53c7, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62567}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62567/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 665bcf96ec3abfed5eeb1b01997e53c7\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [55da4629ce30ac283ebeb96b32337c3d, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62608}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62608/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 55da4629ce30ac283ebeb96b32337c3d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [55da4629ce30ac283ebeb96b32337c3d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62608}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62608/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 55da4629ce30ac283ebeb96b32337c3d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b57e653e00a7204800efe48e8007d1ee, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62649}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62649/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b57e653e00a7204800efe48e8007d1ee\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b57e653e00a7204800efe48e8007d1ee, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62649}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62649/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b57e653e00a7204800efe48e8007d1ee\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba8a869dfa12db4eafa01f247c934092, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62688}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62688/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba8a869dfa12db4eafa01f247c934092\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ba8a869dfa12db4eafa01f247c934092, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62688}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62688/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ba8a869dfa12db4eafa01f247c934092\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b70b40bea6518d75bd93a53dfb1b8606, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62724}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62724/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b70b40bea6518d75bd93a53dfb1b8606\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b70b40bea6518d75bd93a53dfb1b8606, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62724}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62724/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b70b40bea6518d75bd93a53dfb1b8606\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b860912da88cf8ec4ffc10a2ff999277, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62765}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62765/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b860912da88cf8ec4ffc10a2ff999277\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b860912da88cf8ec4ffc10a2ff999277, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62765}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62765/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b860912da88cf8ec4ffc10a2ff999277\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e3232d9915cb804805a74bd8a585e4cd, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62805}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62805/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e3232d9915cb804805a74bd8a585e4cd\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e3232d9915cb804805a74bd8a585e4cd, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62805}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62805/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: e3232d9915cb804805a74bd8a585e4cd\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b224c3c217c4b54262c5ad78cdb7a0f3, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62850}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62850/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b224c3c217c4b54262c5ad78cdb7a0f3\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b224c3c217c4b54262c5ad78cdb7a0f3, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62850}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62850/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b224c3c217c4b54262c5ad78cdb7a0f3\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [28e4a8c39eaa4c0eb7b1b73aef8f5eb4, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62892}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62892/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 28e4a8c39eaa4c0eb7b1b73aef8f5eb4\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [28e4a8c39eaa4c0eb7b1b73aef8f5eb4, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62892}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62892/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 28e4a8c39eaa4c0eb7b1b73aef8f5eb4\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7033273ffac28e872854eb8909f982fa, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62932}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62932/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7033273ffac28e872854eb8909f982fa\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7033273ffac28e872854eb8909f982fa, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62932}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62932/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7033273ffac28e872854eb8909f982fa\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d76411c67d4a72c94250a70345bfaa41, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62974}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62974/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d76411c67d4a72c94250a70345bfaa41\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d76411c67d4a72c94250a70345bfaa41, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:62974}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:62974/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d76411c67d4a72c94250a70345bfaa41\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4d49339eb09aba9fb9e1461adcfd4080, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63016}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63016/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4d49339eb09aba9fb9e1461adcfd4080\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4d49339eb09aba9fb9e1461adcfd4080, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63016}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63016/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4d49339eb09aba9fb9e1461adcfd4080\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5c0bbc679ae0f024e537be9e5144051f, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63052}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63052/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c0bbc679ae0f024e537be9e5144051f\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5c0bbc679ae0f024e537be9e5144051f, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63052}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63052/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c0bbc679ae0f024e537be9e5144051f\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7afc54396e60a657e2ee04a97a8694e2, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63093}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63093/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7afc54396e60a657e2ee04a97a8694e2\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [7afc54396e60a657e2ee04a97a8694e2, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63093}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63093/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 7afc54396e60a657e2ee04a97a8694e2\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [01e69b7a68a076f76fec84dae01284b8, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63132}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63132/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 01e69b7a68a076f76fec84dae01284b8\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [01e69b7a68a076f76fec84dae01284b8, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63132}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63132/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 01e69b7a68a076f76fec84dae01284b8\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d1cc033cab133d7c488a74a68b70d3b1, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63174}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63174/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1cc033cab133d7c488a74a68b70d3b1\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [d1cc033cab133d7c488a74a68b70d3b1, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63174}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63174/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1cc033cab133d7c488a74a68b70d3b1\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [07f91cdf486f022f773e74cc6b6f2f3a, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63211}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63211/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07f91cdf486f022f773e74cc6b6f2f3a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [07f91cdf486f022f773e74cc6b6f2f3a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63211}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63211/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 07f91cdf486f022f773e74cc6b6f2f3a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72c6ffaf44bd95ed20146869e3797dc0, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63250}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63250/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 72c6ffaf44bd95ed20146869e3797dc0\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see zero entries on the data table of manage program",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_zero_entries_on_the_data_table_of_manage_program()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [72c6ffaf44bd95ed20146869e3797dc0, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63250}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63250/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 72c6ffaf44bd95ed20146869e3797dc0\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2ec47326b4dfa37627912c47d31513ed, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63298}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63298/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2ec47326b4dfa37627912c47d31513ed\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program Name",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2ec47326b4dfa37627912c47d31513ed, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63298}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63298/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2ec47326b4dfa37627912c47d31513ed\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [148d7d3e93e81e55ed08d167844cde10, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63339}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63339/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 148d7d3e93e81e55ed08d167844cde10\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program description",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [148d7d3e93e81e55ed08d167844cde10, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63339}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63339/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 148d7d3e93e81e55ed08d167844cde10\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4efd105172d7c2ab1e53f610945f6d4, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63374}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63374/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c4efd105172d7c2ab1e53f610945f6d4\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Page_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the Programs displayed based on the Program status",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Programs_displayed_based_on_the_Program_status()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c4efd105172d7c2ab1e53f610945f6d4, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63374}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63374/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: c4efd105172d7c2ab1e53f610945f6d4\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b83e570839d733b9ff18b6481620ea90, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63413}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63413/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b83e570839d733b9ff18b6481620ea90\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Pagination.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the Pagination has Next link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_Pagination_has_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b83e570839d733b9ff18b6481620ea90, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63413}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63413/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b83e570839d733b9ff18b6481620ea90\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8f6ce4518c05623f166a701161b7a6d1, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63454}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63454/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f6ce4518c05623f166a701161b7a6d1\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Pagination.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the last page record on the table with Next page link are disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_should_see_the_last_page_record_on_the_table_with_Next_page_link_are_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8f6ce4518c05623f166a701161b7a6d1, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63454}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63454/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8f6ce4518c05623f166a701161b7a6d1\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a95086bc4cc423b8796d684d9757897d, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63490}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63490/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a95086bc4cc423b8796d684d9757897d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Pagination.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the previous page record on the table with pagination has previous page link",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_the_previous_page_record_on_the_table_with_pagination_has_previous_page_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: disconnected: Unable to receive message from renderer\n  (failed to check if window was closed: disconnected: not connected to DevTools)\n  (Session info: chrome\u003d116.0.5845.189)\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a95086bc4cc423b8796d684d9757897d, close {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63490}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63490/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a95086bc4cc423b8796d684d9757897d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:405)\r\n\tat com.baseClass.BaseClass.teardown(BaseClass.java:45)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:25)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8b68572d58032cffa83220dc8392cbe2, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63531}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63531/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8b68572d58032cffa83220dc8392cbe2\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Pagination.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "Admin should see the very first page record on the table with Previous page link are disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.Admin_should_see_the_very_first_page_record_on_the_table_with_Previous_page_link_are_disabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8b68572d58032cffa83220dc8392cbe2, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63531}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63531/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8b68572d58032cffa83220dc8392cbe2\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5c7c2bf85208e2b8d5a79a0e204118fa, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63570}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63570/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c7c2bf85208e2b8d5a79a0e204118fa\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program name column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [5c7c2bf85208e2b8d5a79a0e204118fa, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63570}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63570/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 5c7c2bf85208e2b8d5a79a0e204118fa\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6a540c9d28769b4489d60936244bb357, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63611}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63611/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6a540c9d28769b4489d60936244bb357\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program name column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_name_column_values_in_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6a540c9d28769b4489d60936244bb357, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63611}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63611/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 6a540c9d28769b4489d60936244bb357\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ae57c797e9f878ba0402eeaf9761108d, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63647}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63647/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ae57c797e9f878ba0402eeaf9761108d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program description column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_decsription_column_values_in_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ae57c797e9f878ba0402eeaf9761108d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63647}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63647/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: ae57c797e9f878ba0402eeaf9761108d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [398630b3dc307ea53e548691cc3e9842, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63686}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63686/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 398630b3dc307ea53e548691cc3e9842\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program description column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_description_column_values_in_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [398630b3dc307ea53e548691cc3e9842, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63686}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63686/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 398630b3dc307ea53e548691cc3e9842\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a19ebfd11a73af8a9e37a2418771496a, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63726}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63726/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a19ebfd11a73af8a9e37a2418771496a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program status column values in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_ascending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a19ebfd11a73af8a9e37a2418771496a, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63726}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63726/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: a19ebfd11a73af8a9e37a2418771496a\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#id_username\"}\n  (Session info: chrome\u003d116.0.5845.189)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b218661c3cbb75bb63429eaa7a88b18d, findElement {using\u003did, value\u003did_username}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63765}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63765/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b218661c3cbb75bb63429eaa7a88b18d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.sendKeys(Unknown Source)\r\n\tat com.pageObject.Login_Obj.userNameText(Login_Obj.java:60)\r\n\tat com.stepDefinition.Batch_SD.admin_is_on_dashboard_page_after_Login(Batch_SD.java:33)\r\n\tat ✽.Admin is on dashboard page after Login(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Program_Module/04_Program_Sorting_Validation.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Admin clicks Program from navigation bar",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.admin_clicks_Program_from_navigation_bar()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "The data get sorted on the table based on the program status column values in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.Program_SD.the_data_get_sorted_on_the_table_based_on_the_program_status_column_values_in_descending_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b218661c3cbb75bb63429eaa7a88b18d, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.189, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63765}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63765/devtoo..., se:cdpVersion: 116.0.5845.189, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b218661c3cbb75bb63429eaa7a88b18d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
  "status": "failed"
});
});
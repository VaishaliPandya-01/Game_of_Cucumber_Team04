$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Batch_Module/05_Batch_Delete.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Are you sure\u0027)]\"}\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b8da4876ac0c07e36d5c083ce6699fe5, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Are you sure\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63574}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63574/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b8da4876ac0c07e36d5c083ce6699fe5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Delete_Obj.deleteMessage(Batch_Delete_Obj.java:61)\r\n\tat com.stepDefinition.Batch_SD.batch_deleted_alert_pops_and_batch_is_no_more_available_in_data_table(Batch_SD.java:284)\r\n\tat ✽.Batch deleted alert pops and batch is no more available in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b8da4876ac0c07e36d5c083ce6699fe5, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63574}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63574/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: b8da4876ac0c07e36d5c083ce6699fe5\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Success\u0027)]\"}\n  (Session info: chrome\u003d116.0.5845.187)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8adc6e85925812b48180a18a15713c7e, findElement {using\u003dxpath, value\u003d//*[contains(text(),\u0027Success\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63648}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63648/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8adc6e85925812b48180a18a15713c7e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy37.getText(Unknown Source)\r\n\tat com.pageObject.Batch_Delete_Obj.successMessage(Batch_Delete_Obj.java:56)\r\n\tat com.stepDefinition.Batch_SD.Batch_is_still_listed_in_data_table(Batch_SD.java:298)\r\n\tat ✽.Batch is still listed in data table(file:///C:/Users/joshi/eclipse-workspace/Game_of_Cucumber_Team04/src/test/resources/features/Batch_Module/05_Batch_Delete.feature:21)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.5\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [8adc6e85925812b48180a18a15713c7e, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.187, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Users\\joshi\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:63648}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:63648/devtoo..., se:cdpVersion: 116.0.5845.187, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 8adc6e85925812b48180a18a15713c7e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.stepDefinition.Hooks.tearDown(Hooks.java:30)\r\n",
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
});
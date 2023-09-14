package com.stepDefinition;

import java.io.ByteArrayInputStream;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.baseClass.BaseClass;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.qameta.allure.Allure;

public class Hooks{

	@Before
	public void setUp() {
		BaseClass.Initialization();
	}

	
	@After
	public void tearDown(Scenario scenario) {
		BaseClass.teardown();

		if (scenario.isFailed()) {
			// take screenshot:
				String screenshotName = scenario.getName().replaceAll(" ", "_");
				byte[] sourcePath = ((TakesScreenshot)BaseClass.driver).getScreenshotAs(OutputType.BYTES);
				//scenario.attach(sourcePath, "image/png", screenshotName);
				Allure.addAttachment("Failed screenshots", new ByteArrayInputStream(sourcePath));
		}
	}  
}
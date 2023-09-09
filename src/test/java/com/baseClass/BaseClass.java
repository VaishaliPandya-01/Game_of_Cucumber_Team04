package com.baseClass;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.utility.Readconfig;

public class BaseClass {

	Readconfig readconfig=new Readconfig();
	public String baseURL=readconfig.getApplicationURL();
	public WebDriver driver;
	public String browserName = readconfig.getbrowser();


	public void Initialization() {

		if(browserName.equalsIgnoreCase("chrome")) {
			driver=new ChromeDriver();
		}

		else if(browserName.equalsIgnoreCase("firefox")) {
			driver=new FirefoxDriver();
		}

		else if (browserName.equalsIgnoreCase("edge")) {
			driver=new EdgeDriver();
		}

		driver.get(baseURL);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(90));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
	}


	public void teardown() {
		driver.close();
		driver.quit();
	}
}

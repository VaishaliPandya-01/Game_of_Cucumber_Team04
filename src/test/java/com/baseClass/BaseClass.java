package com.baseClass;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.utility.Readconfig;

public class BaseClass {

	static Readconfig readconfig=new Readconfig();
	public static String baseURL=readconfig.getApplicationURL();
	public static WebDriver driver;
	public static String browserName = readconfig.getbrowser();

	public static void Initialization() {
		if(driver==null) {
			if(browserName.equalsIgnoreCase("chrome")) {
				driver=new ChromeDriver();
			}

			else if(browserName.equalsIgnoreCase("firefox")) {
				driver=new FirefoxDriver();
			}

			else if (browserName.equalsIgnoreCase("edge")) {
				driver=new EdgeDriver();
			}
		}

		driver.get(baseURL);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(90));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
	}


	public static void teardown() {
		if (driver != null) {
			driver.close();
		}
	}
}
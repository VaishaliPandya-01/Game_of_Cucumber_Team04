package com.baseClass;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;

import com.utility.Readconfig;

public class BaseClass {

	static Readconfig readconfig=new Readconfig();
	public static String baseURL=readconfig.getApplicationURL();
	public static WebDriver driver;
	public static String browserName = readconfig.getbrowser();

	public static void Initialization() {

		if(browserName.equalsIgnoreCase("chrome")) {
			ChromeOptions options = new ChromeOptions();
					options.addArguments("--no-sandbox");
			driver=new ChromeDriver(options);
		}

		else if(browserName.equalsIgnoreCase("firefox")) {
			FirefoxOptions options = new FirefoxOptions();
			options.addArguments("--no-sandbox");
			driver=new FirefoxDriver(options);
		}

		else if (browserName.equalsIgnoreCase("edge")) {
			EdgeOptions options = new EdgeOptions();
			options.addArguments("--no-sandbox");
			driver=new EdgeDriver(options);
		}
		driver.get(baseURL);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
	}


	public static void teardown() {
		driver.close();
	}
}

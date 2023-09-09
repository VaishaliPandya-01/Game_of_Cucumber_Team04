package com.controller;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.baseClass.BaseClass;
import com.controllerInterface.ControllerInterface;

public class Controller extends BaseClass implements ControllerInterface{


	Actions action = new Actions(driver);
	Select select;

	@Override
	public void click(WebDriver driver, WebElement element) {
		action.moveToElement(element).click().build().perform();		
	}


	@Override
	public boolean type(WebElement element, String text) {
		boolean flag = false;

		if (element.isDisplayed()) {

			element.clear();
			element.sendKeys(text);
			flag = true;
			System.out.println("Successfully entered value");

		} else {
			flag = false;
			System.out.println("Unable to enter value");
		}

		return flag;
	}


	
	@Override
	public boolean isDisplayed(WebDriver driver, WebElement element) {
		boolean flag = false;

		if (element.isDisplayed()) {				
			flag = true;
			System.out.println("The element is Displayed");

		} else {
			flag = false;
			System.out.println("The element is not Displayed");
		}

		return flag;
	}

	
	
	@Override
	public boolean isSelected(WebDriver driver, WebElement element) {
		boolean flag = false;

		if (element.isSelected()) {				
			flag = true;
			System.out.println("The element is Selected");

		} else {
			flag = false;
			System.out.println("The element is not Selected");
		}

		return flag;
	}


	@Override
	public boolean isEnabled(WebDriver driver, WebElement element) {
		boolean flag = false;

		if (element.isEnabled()) {				
			flag = true;
			System.out.println("The element is Enabled");

		} else {
			flag = false;
			System.out.println("The element is not Enabled");
		}

		return flag;
	}

	
	
	@Override
	public boolean selectByIndex(WebElement element, int index) {
		boolean flag = false;

		if (element.isDisplayed()) {

			select = new Select(element);
			select.selectByIndex(index);
			flag = true;
			System.out.println("Option selected by Index");

		} else {
			flag = false;
			System.out.println("Option not selected by Index");
		}

		return flag;
	}


	@Override
	public boolean selectByValue(WebElement element, String value) {
		boolean flag = false;

		if (element.isDisplayed()) {

			select = new Select(element);
			select.selectByValue(value);
			flag = true;
			System.out.println("Option selected by value");

		} else {
			flag = false;
			System.out.println("Option not selected by value");
		}

		return flag;
	}

	
	
	@Override
	public boolean selectByVisibleText(String visibletext, WebElement element) {
		boolean flag = false;

		if (element.isDisplayed()) {

			select = new Select(element);
			select.selectByVisibleText(visibletext);
			flag = true;
			System.out.println("Option selected by visibletext");

		} else {
			flag = false;
			System.out.println("Option not selected by visibletext");
		}

		return flag;
	}

	
	
	@Override
	public boolean switchToFrameByIndex(WebDriver driver, int index) {
		boolean flag = false;

		driver.switchTo().frame(index);
		flag = true;

		if (flag) {
			System.out.println("Frame is selected");
		} else {
			System.out.println("Frame is not selected");
		}
		return flag;
	}

	
	
	@Override
	public boolean switchToFrameById(WebDriver driver, String idValue) {
		boolean flag = false;

		driver.switchTo().frame(idValue);
		flag = true;

		if (flag) {
			System.out.println("Frame is selected");
		} else {
			System.out.println("Frame is not selected");
		}
		return flag;
	}

	
	
	@Override
	public boolean switchToFrameByName(WebDriver driver, String nameValue) {
		boolean flag = false;

		driver.switchTo().frame(nameValue);
		flag = true;

		if (flag) {
			System.out.println("Frame is selected");
		} else {
			System.out.println("Frame is not selected");
		}
		return flag;
	}

	
	
	@Override
	public boolean switchToDefaultFrame(WebDriver driver) {
		boolean flag = false;

		driver.switchTo().defaultContent();
		flag = true;

		if (flag) {
			System.out.println("Frame is selected");
		} else {
			System.out.println("Frame is not selected");
		}
		return flag;
	}


	@Override
	public void moveToElement(WebDriver driver, WebElement element) {

		action.moveToElement(element).click().build().perform();		
	}

	
	@Override
	public void rightclick(WebDriver driver, WebElement element) {

		action.contextClick(element).perform();
	}

	
	@Override
	public void Alert(WebDriver driver) {
		driver.switchTo().alert().accept();
	}

	
	@Override
	public String getTitle(WebDriver driver) {
		boolean flag = false;

		String text = driver.getTitle();
		if (flag) {
			System.out.println("Title of the page is: \""+text+"\"");
		}
		return text;
	}

	@Override
	public String getCurrentURL(WebDriver driver)  {
		boolean flag = false;

		String text = driver.getCurrentUrl();
		if (flag) {
			System.out.println("Current URL is: \""+text+"\"");
		}
		return text;
	}

}

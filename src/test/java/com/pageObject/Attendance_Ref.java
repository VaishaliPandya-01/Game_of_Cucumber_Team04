package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import com.baseClass.BaseClass;

public class Attendance_Ref extends BaseClass{
	
	@FindBy(xpath="//input[@class='pgmName']") private WebElement att_pgmName;
	@FindBy(xpath="//input[@class='className']") private WebElement att_className;
	@FindBy(xpath="//input[@class='studentName']") private WebElement att_studName;
	@FindBy(xpath="//div[@class='dropdown-menu show']/a[1]")private WebElement att_select;
	@FindBy(xpath="//*[@id='cancel']") @CacheLookup  WebElement att_cancel;
	@FindBy(xpath="//*[@id='submit']") @CacheLookup  WebElement att_submit;

	
	
	
}

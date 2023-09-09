package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import com.baseClass.BaseClass;

public class Attendance_Delete extends BaseClass{
	
	
	@FindBy(xpath="//*[@id='confirm_no']") private  WebElement att_confrim_n;
	@FindBy(xpath="//*[@id='confirm_yes']") private  WebElement att_confrim_y;
	@FindBy(name = "closepop_up") private WebElement confirm_close;
}

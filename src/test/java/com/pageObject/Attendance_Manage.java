package com.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Attendance_Manage extends BaseClass {
	
	@FindBy (id="id_searchtxt") private WebElement attendnc_searchbox;
	@FindBy (xpath="//div[@class='add_newAttendnc']") private WebElement attendnc_addNew;
	@FindBy (xpath="//div[@class='edit_attendance']") private WebElement attendnc_edit;
	@FindBy (xpath="//div[@class='delete_attendance']") private WebElement attendnc_delete;
	
	Controller cn = new Controller();
	
	public Attendance_Manage() {
		PageFactory.initElements(driver,this);
	}
	public void getTitle() {
		cn.getTitle(driver);
	}
	public void searchbox_text(String text) {
		cn.type(attendnc_searchbox,text);	
	}
	public void addNewAttendance() {
		cn.click(driver, attendnc_addNew);
	}
	public void editIconAttendance() {
		cn.click(driver, attendnc_addNew);
	}
	public void deleteIconAttendance() {
		cn.click(driver, attendnc_delete);
	}
	

}

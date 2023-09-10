package com.pageObject;

import java.net.MalformedURLException;
import java.util.List;

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
	@FindBy (xpath="//div[@class='Attendance']/p[9]") private WebElement attendnc_Button;
	@FindBy (xpath="//*[@class='checkbox']/p[1]") private List<WebElement> attendnc_m_checkbox;
	@FindBy (xpath="//*[@class='checkbox-single']/") private WebElement attendnc_single_checkbx;
	@FindBy (xpath="//table/tbody/tr[2]/td[2]/table/tbody/tr/td[2]") private WebElement attendnc_datatable_data;
	
	
	Controller cn = new Controller();
	
	public Attendance_Manage() {
		PageFactory.initElements(driver,this);
	}
	public String getTitle() {
		String title = cn.getTitle(driver);
		return title;
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
	public void AttendanceButtonHeader() {
		cn.click(driver, attendnc_Button);
	}
	public void SelectMultiCheckBoxAtt() {

		for ( WebElement checkBox : attendnc_m_checkbox ) {
			if ( !cn.isSelected(driver, checkBox) ) {
				cn.click(driver, checkBox);
			}
		}
	}
	public void SelectSingleCheckBoxAtt() {
		cn.click(driver, attendnc_single_checkbx);
	}
	public void getResponseCode() {
		
	}
	public void DataTableDataValidation() {
		
		String datatableText = attendnc_datatable_data.getText();
		
	}
	
}

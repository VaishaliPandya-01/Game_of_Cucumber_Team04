package com.pageObject;

import java.net.MalformedURLException;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.Point;
import com.baseClass.BaseClass;
import com.controller.Controller;

public class Attendance_Manage extends BaseClass {
	
	@FindBy (id="id_searchtxt") private WebElement attendnc_searchbox;
	@FindBy (xpath="//div[@class='add_newAttendnc']") private WebElement attendnc_addNew;
	@FindBy (xpath="//div[@class='edit_attendance']") private WebElement attendnc_SingleEdit;
	@FindBy (xpath="//div[@class='delete_iconS']") private WebElement attendnc_SingleDelete;
	@FindBy (xpath="//div[@class='delete_iconM']") private WebElement attendnc_MultiplDelete;
	@FindBy (xpath="//div[@class='Attendance']/p[9]") private WebElement attendnc_Button;
	@FindBy (xpath="//*[@class='checkbox']/p[1]") private List<WebElement> attendnc_multipl_checkbox;
	@FindBy (xpath="//*[@class='checkbox-single']/") private WebElement attendnc_single_checkbx;
	@FindBy (xpath="//table/tbody/tr[2]/td[2]/table/tbody/tr/td[2]") private WebElement attendnc_datatable_data;
	@FindBy (xpath="//*[@class='ManageAttendanceHeader") private WebElement manageAttHeader;
	
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
		cn.click(driver, attendnc_SingleEdit);
	}
	public void deleteIconAttendance() {
		cn.click(driver, attendnc_SingleDelete);
	}
	public void deleteMultiplAttendnc_Btn() {
		cn.click(driver, attendnc_MultiplDelete);
	}
	public void AttendanceButtonHeader() {
		cn.click(driver, attendnc_Button);
	}
	public void SelectMultiCheckBoxAtt() {

		for ( WebElement checkBox : attendnc_multipl_checkbox ) {
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
		//attendnc_datatable_data
	}
	public boolean alignmentManageHeader() {
		Boolean flag;
		Point point = manageAttHeader.getLocation();
		int xcord = point.getX();
		if (xcord<=600){
			System.out.println("Manage attendance header is in left side of the page");
			flag = true;
		}else {
			System.out.println("Manage attendance header is not in left side of the page");
			flag = false;
		}
		return flag;
	}
	
}

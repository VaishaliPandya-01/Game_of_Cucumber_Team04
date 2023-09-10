package com.pageObject;

import java.net.MalformedURLException;
import java.util.List;
import java.net.URL;
import java.net.HttpURLConnection;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.Point;
import com.baseClass.BaseClass;
import com.controller.Controller;
import com.utility.Readconfig;

import junit.framework.Assert;

public class Attendance_Manage extends BaseClass {
	
	@FindBy (id="id_searchtxt") private WebElement attendnc_searchbox;
	@FindBy (xpath="//div[@class='add_newAttendnc']") private WebElement attendnc_addNew;
	@FindBy (xpath="//div[@class='edit_attendance']") private WebElement attendnc_SingleEdit;
	@FindBy (xpath="//div[@class='delete_iconS']") private WebElement attendnc_SingleDelete;
	@FindBy (xpath="//div[@class='delete_iconM']") private WebElement attendnc_MultiplDelete;
	@FindBy (xpath="//*[@class='checkbox']/p[1]") private List<WebElement> attendnc_multipl_checkbox;
	@FindBy (xpath="//*[@class='checkbox-single']/") private WebElement attendnc_single_checkbx;
	@FindBy (xpath="//table/tbody/tr[2]/td[2]/table/tbody/tr/td[2]") private WebElement attendnc_datatable_data;
	@FindBy (xpath="//*[@class='ManageAttendanceHeader") private WebElement manageAttHeader;
	@FindBy (xpath="//*[@class='Nav_Attendance") private WebElement AttendanceButon_header;
	@FindBy (xpath="//div[@class='Attendance']/p[9]") private WebElement attendnc_Button_Nav;
	
	static Readconfig rc = new Readconfig();
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
	public String GetTextManageAttendanceHeader() {
		String headerText = manageAttHeader.getText();
		return headerText;
	}
	public void AttendncBtn_onNav() {
		cn.click(driver, attendnc_Button_Nav);
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
		int eleWidth = manageAttHeader.getSize().getWidth();
		int winWidth = driver.manage().window().getSize().getWidth();
		if ((xcord + eleWidth) <= (winWidth/2)){
			System.out.println("Manage attendance header is in left side of the page");
			flag = true;
		}else {
			System.out.println("Manage attendance header is not in left side of the page");
			flag = false;
		}
		return flag;
	}
	
	public  void verifyBrokenLink() {
		//Boolean flag = false;
		String url = cn.getCurrentURL(driver);
		try {		
			
			URL link = new URL(url);
			HttpURLConnection httpURLConnection = (HttpURLConnection) link.openConnection();
			httpURLConnection.setConnectTimeout(3000); // Set connection timeout to 3 seconds
			httpURLConnection.connect();
			if (httpURLConnection.getResponseCode()> 400) {
			System.out.println(url + " - " + httpURLConnection.getResponseMessage()+ " - " + "is a broken link");
			//flag = true;
			} else {
			System.out.println(url + " - " + httpURLConnection.getResponseMessage() );
			//flag = false;
		}
		} catch (Exception e) {
			System.out.println(url + " - " + "is a broken link");
			
		}
		//return flag;	
	}
	public void CheckSpelling() {
		
	}
	
}

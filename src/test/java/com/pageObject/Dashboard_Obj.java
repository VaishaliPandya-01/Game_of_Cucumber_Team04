package com.pageObject;

import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Dashboard_Obj extends BaseClass{

	//Created object for controller class
	Controller act = new Controller();

	//Elements

	@FindBy (xpath="//*[contains(text(),'Showing ')]") private WebElement header_text;	
	@FindBy (xpath="//*[@class='ManageAttendanceHeader") private WebElement manageAttHeader;
	@FindBy (xpath="//a[text()='Student']") private WebElement student_btn;
	@FindBy (xpath="//a[text()='program ']") private WebElement program_btn;
	@FindBy (xpath="//a[text()='batch']") private WebElement batch_btn;
	@FindBy (xpath="//a[text()='class Id']") private WebElement class_btn;
	@FindBy (xpath="//a[text()='user']") private WebElement user_btn;
	@FindBy (xpath="//a[text()='attendance ']") private WebElement attendance_btn;
	@FindBy (xpath="//a[text()='assignmant']") private WebElement assignment_btn;
	@FindBy (xpath="//a[text()='logout']") private WebElement logout_btn;
	@FindBy (xpath="//*[@class='navigate") private WebElement navigationBar;
	@FindBy (xpath="//*[@span/tableHeader']") private List<WebElement> listOfTableHeader;	
	@FindBy (id="tableId") private List<WebElement> table;
	@FindBy (tagName=("td")) private List<WebElement> cells;
	@FindBy (tagName=("tr")) private List<WebElement> Row;	
	@FindBy(xpath="//*[@class='btn btn-batch']")private WebElement btnClickBatch;
	@FindBy(xpath="//*[@class='btn btn-program']")private WebElement btnClickProgram;
	@FindBy(xpath="//*[@class='btn btn-Student']")private WebElement btnClickStudent;
	@FindBy(xpath="//*[@class='btn btn-Class']")private WebElement btnClickClass;
	@FindBy(xpath="//*[@class='btn btn-User']")private WebElement btnClickUser;
	@FindBy(xpath="//*[@class='btn btn-Assignment']")private WebElement btnClickAssignment;
	@FindBy(xpath="//*[@class='btn btn-Attendance']")private WebElement btnClickAttendance;
	List<WebElement> allElements=driver.findElements(By.cssSelector(".list.list-categories li"));

	List<String> all_elements_text=new ArrayList<>();

	//Constructor
	public Dashboard_Obj() 
	{
		PageFactory.initElements(driver, this);
	}

	//Methods	


	public String validateDashboardHeaderText() {	
		return act.getText(header_text);
	}

	public void validateDashboardPage() {

		String title = driver.getTitle();
		Assert.assertEquals("DashBoard Page", title);
		System.out.println("Admin is on " + title + "page");
	}

	public  void verifyBrokenLink() {
		String url = act.getCurrentURL(driver);
		try {		

			URL link = new URL(url);
			HttpURLConnection httpURLConnection = (HttpURLConnection) link.openConnection();
			httpURLConnection.setConnectTimeout(3000); // Set connection timeout to 3 seconds
			httpURLConnection.connect();
			if (httpURLConnection.getResponseCode()> 400) {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage()+ " - " + "is a broken link");
			} else {
				System.out.println(url + " - " + httpURLConnection.getResponseMessage() );
			}
		} catch (Exception e) {
			System.out.println(url + " - " + "is a broken link");

		}	
	}

	public String verifyDashboardPageTitle() {
		String dashboardpageTitle=act.getTitle(driver);
		return dashboardpageTitle;
	}


	public String alignmentManageHeader() {

		String alignmentposition = manageAttHeader.getAttribute("align");
		return alignmentposition;
	}

	public void spellCheckFunction() {
		Assert.assertEquals("LMS - Learning Management System", driver.getTitle());
		Assert.assertEquals(class_btn.getText(),"Class");
		Assert.assertEquals(student_btn.getText(),"Student");
		Assert.assertEquals(program_btn.getText(),"Program");
		Assert.assertEquals(batch_btn.getText(),"Batch");
		Assert.assertEquals(user_btn.getText(),"User");
		Assert.assertEquals(assignment_btn.getText(),"Assignment");
		Assert.assertEquals(attendance_btn.getText(),"Attendance");
		Assert.assertEquals(logout_btn.getText(),"Logout");
	}

	public void listOfModules() {

		for(int i=0; i<allElements.size(); i++){

			//loading text of each element in to array all_elements_text
			all_elements_text.add(allElements.get(i).getText());
			System.out.println(allElements.get(i).getText());
		}
	}
	public void validateStudentModule() {
		for(int i=0; i<1; i++){
			Assert.assertEquals("Student",allElements.get(i).getText() );
		}
	}
	public void validateProgramModule() {
		for(int i=1; i<2; i++){
			Assert.assertEquals("Program",allElements.get(i).getText() );
		}
	}

	public void validateBatchModule() {
		for(int i=2; i<3; i++){
			Assert.assertEquals("Batch",allElements.get(i).getText() );
		}
	}

	public void validateClassModule() {
		for(int i=3; i<4; i++){
			Assert.assertEquals("Class",allElements.get(i).getText() );
		}
	}

	public void validateUserModule() {
		for(int i=4; i<5; i++){
			Assert.assertEquals("User",allElements.get(i).getText() );
		}
	}

	public void validateAssignmentModule() {
		for(int i=5; i<6; i++){
			Assert.assertEquals("Assignment",allElements.get(i).getText() );
		}
	}

	public void validateAttendanceModule() {
		for(int i=6; i<7; i++){
			Assert.assertEquals("Attendance",allElements.get(i).getText() );
		}
	}

	public void validateLogoutModule() {
		for(int i=7; i<8; i++){
			Assert.assertEquals("Logout",allElements.get(i).getText() );
		}
	}

	public String navigationBarAllignment() {
		String pstn = navigationBar.getAttribute("allign");
		return pstn;
	}

	public void clickLogoutBtn()  {
		act.click(driver, logout_btn);
	}

	public String getDashboardTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}
	
	public void clickBatch()  {
		act.click(driver, btnClickBatch);
	}
	
	public void clickProgram()  {
		act.click(driver, btnClickProgram);
	}
	
	public void clickStudent()  {
		act.click(driver, btnClickStudent);
	}
	
	public void clickClass()  {
		act.click(driver, btnClickClass);
	}
	
	public void clickUser()  {
		act.click(driver, btnClickUser);
	}
	
	public void clickAssignment()  {
		act.click(driver, btnClickAssignment);
	}
	
	public void clickAttendance()  {
		act.click(driver, btnClickAttendance);
	}

}

package com.pageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class AssignmentPage extends BaseClass {
	
	@FindBy(xpath="//a[@href ='/login']") private WebElement signin;
	@FindBy (xpath="//button[text()='Assignment']") private WebElement Assignment_btn;
	@FindBy (id="search bar")private WebElement Search_text_box;
	@FindBy (xpath="//button[text()='A New Assignment']") private WebElement New_Assignment_btn;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[1]") private WebElement dropDownprogramname;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[2]") private WebElement dropDownbatchnumber;
	@FindBy (xpath="//a[text()='Assignment Name']") private WebElement Assignment_Name;
	@FindBy (xpath="//a[text()='Assignment Description']") private WebElement Assignment_Description;
	@FindBy (xpath="//a[text()='Grade By']") private WebElement GradeBy;
	@FindBy (xpath="//a[text()='Assignment File 1']") private WebElement Assignment_File_1;
	@FindBy (xpath="//a[text()='Assignment File 2']") private WebElement Assignment_File_2;
	@FindBy (xpath="//a[text()='Assignment File 3']") private WebElement Assignment_File_3;
	@FindBy (id="calender") private WebElement Assignment_Due_Date;
	@FindBy (xpath="//input[@value='Save']") private WebElement SaveButton;
	@FindBy (xpath="//input[@value='Cancel']") private WebElement CancelButton;
	
	@FindBy (xpath="//button[text()='upload assignment']") private WebElement Upload_Assignment_btn;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[Select Assignment]") private WebElement Select_Assignment;
	@FindBy (xpath="//input[@value='Upload']") private WebElement UploadButton;
	@FindBy (xpath="//input[@value='Cancel']") private WebElement Cancel_upload_Button;
	
	
	@FindBy (xpath="//button[Edit()='Edit']") private WebElement Edit_btn;
	
	
	@FindBy (xpath="//button[Edit()='Delete']") private WebElement Delete_btn;
	@FindBy (xpath="//button[text()='No']") WebElement No_Button;
	@FindBy (xpath="//button[text()='Yes']") WebElement Yes_Button;
	
	
	@FindBy (xpath="//button//span[textt()='Delete']") private WebElement deleteMultipl_btn;
	
	
	Controller cn = new Controller();
	
	
	
	//Constructor
		public AssignmentPage() {

			PageFactory.initElements(driver, this);
		}
		
		//Methods
		public void Search_Box_Assignment(String text) {
			cn.type(Search_text_box, text);

		}
		public void Assignment_btn(){
			cn.click(driver, Assignment_btn);
		}
		
		public boolean isURLContainsManageAssignment() {
			String currentURL = driver.getCurrentUrl();
	        return currentURL.contains("Manage Assignment");
		
		}
	    //doubt in second Then
		public void getResponseTime() {
			
		}
		
		public boolean isHeaderContainsManageAssignment() {
			String currentTitle = driver.getTitle();
	        return currentTitle.contains("Manage Assignment");
		}

}

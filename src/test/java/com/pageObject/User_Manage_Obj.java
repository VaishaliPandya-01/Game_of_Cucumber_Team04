package com.pageObject;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class User_Manage_Obj extends BaseClass{
	
	    //Created object for controller class
	    Controller act = new Controller();
	
	    @FindBy (xpath="//button//span[text()=' Delete']") 
		private WebElement deleteMutipleUser_btn;

		@FindBy (id="search_query_top") 
		private WebElement search_txt;

		@FindBy (xpath="//*[@aria-label='Add a new Batch']//span")
		private WebElement addNewUser_btn;

		@FindBy (xpath="//*[@class='btn btn-edit']")
		private WebElement editUser_btn;

		@FindBy (xpath="//*[@class='btn btn-edit']")
		private WebElement deleteSingleUser_btn;

		@FindBy (xpath="//*[@span/select-multiple-checkbox']")
		private List<WebElement> multiCheckBoxUser;

		@FindBy (xpath="//*[@span/select-multiple-checkbox']")
		private WebElement singleCheckBoxUser;

		@FindBy (className = "pagination") 
		private WebElement pagination;

		@FindBy (xpath="//*[@span/tableHeader']")
		private List<WebElement> listOfTableHeader;

		@FindBy (id="tableId")
		private List<WebElement> table;

		@FindBy (tagName=("td")) 
		private List<WebElement> cells;

		@FindBy (tagName=("tr")) 
		private List<WebElement> Row;
		
		//Constructor
		public User_Manage_Obj() {
			PageFactory.initElements(driver, this);
		}


		//Methods
		public void searchBox() {
			//act.type(search_txt, text);
			search_txt.isDisplayed();
		}

		public void deleteMutipleUserBtn() {
			act.click(driver, deleteMutipleUser_btn);
		}

		public boolean VisibledeleteUserBtn() {
			if(!act.isEnabled(driver, deleteMutipleUser_btn)) {
				return true;
			}
			return false;
		}

		public void addNewUserBtn() {
			act.click(driver, addNewUser_btn);
		}

		public boolean addNewUserBtnVisible() {
			return act.isDisplayed(driver, addNewUser_btn);
		}

		public void editUserBtn() {
			if(act.isEnabled(driver, editUser_btn))
			act.click(driver, editUser_btn);
		}

		public void VisibleEditUserBtn() {
			act.isEnabled(driver, editUser_btn);
		}

		public void deleteSingleUserBtn() {
			if(act.isEnabled(driver, deleteSingleUser_btn))
			act.click(driver, deleteSingleUser_btn);
		}

		public void displayDeleteBtn() {
			act.isEnabled(driver, deleteSingleUser_btn);
		}

		public void SelectMultiCheckBoxUser() {
			for ( WebElement checkBox : multiCheckBoxUser ) {
				if ( !act.isSelected(driver, checkBox) ) {
					act.click(driver, checkBox);
				}
			}
		}

		public boolean VisibleCheckBox() {
			for ( WebElement checkBox : multiCheckBoxUser ) {
				if ( act.isDisplayed(driver, checkBox) ) {
					return true;
				}
			}
			return false;
		}

		public void SelectSingleCheckBoxUser() {
			act.click(driver, singleCheckBoxUser);
		}

		public String getManageUserTitle() {
			String pageTitle=act.getTitle(driver);
			return pageTitle;
		}

		public String getManageUserURL() {
			String URL=act.getCurrentURL(driver);
			return URL;
		}

//		public boolean validatePagination() {
//			return act.isDisplayed(driver, pagination);
//		}
		
		public String validatePagination() {
			String text="";
			if(act.isDisplayed(driver, pagination)) {
			act.getText(pagination);
			}
			return text;
		}

		public List<String> getTableHeaderList() {
			List<String> tableHeader = new ArrayList<>();		
			for(WebElement list : listOfTableHeader) {
				String headerList =list.getText();
				tableHeader.add(headerList);
			}
			return tableHeader;
		}

		public String getTableValue() {

			for (WebElement row : Row) {
				for (WebElement cell : cells) {
					String cellText = cell.getText();
					return cellText;
				}
			}
			return null;
		}
	}

	
	
	
	
	


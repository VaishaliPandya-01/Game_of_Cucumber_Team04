package com.pageObject;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Program_Manage_Obj extends BaseClass{

	//Created object for controller class
	Controller act = new Controller();

	//Element Object
	@FindBy (xpath="//button//span[text()=' Delete']") 
	private WebElement deleteMutipleProgram_btn;

	@FindBy (id="search_query_top") 
	private WebElement search_txt;

	@FindBy (xpath="//*[@aria-label='Add a new Program']//span")
	private WebElement addNewProgram_btn;

	@FindBy (xpath="//*[@class='btn btn-edit']")
	private WebElement editProgram_btn;

	@FindBy (xpath="//*[@class='btn btn-edit']")
	private WebElement deleteSingleProgram_btn;

	@FindBy (xpath="//*[@span/select-multiple-checkbox']")
	private List<WebElement> multiCheckBoxBatch;

	@FindBy (xpath="//*[@span/select-multiple-checkbox']")
	private WebElement singleCheckBoxBatch;

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
	
	@FindBy (xpath="//*[contains(text(),'Showing ')]") 
	private WebElement footer_text;
	
	@FindBy(xpath="//*[@class='btn btn-description-desc']") 
	private WebElement sorting_Arrow;


	//Constructor
	public Program_Manage_Obj() {
		PageFactory.initElements(driver, this);
	}


	//Methods
	public void typeSearchBox(String text) {
		act.type(search_txt, text);
	}
	
	public String validateSearchBox() {
		String text = "";
		if(act.isEnabled(driver, search_txt)){
			text = act.getText(search_txt);
		}
		return text;
	}

	public void deleteMutipleProgramBtn() {
		act.click(driver, deleteMutipleProgram_btn);
	}

	public boolean VisibledeleteProgramBtn() {
		if(!act.isEnabled(driver, deleteMutipleProgram_btn)) {
			return true;
		}
		return false;
	}
	
	public boolean sortingArrowButton() {
		if(!act.isDisplayed(driver, sorting_Arrow)) {
			return true;
		}
		return false;
	}

	public void addNewProgramBtn() {
		act.click(driver, addNewProgram_btn);
	}

	public boolean addNewProgramBtnVisible() {
		return act.isDisplayed(driver, addNewProgram_btn);
	}

	public void editProgramBtn() {
		if(act.isEnabled(driver, editProgram_btn))
		act.click(driver, editProgram_btn);
	}

	public void VisibleEditProgramBtn() {
		act.isEnabled(driver, editProgram_btn);
	}

	public void deleteSingleProgramBtn() {
		if(act.isDisplayed(driver, deleteSingleProgram_btn))
		act.click(driver, deleteSingleProgram_btn);
	}

	public void displayDeleteBtn() {
		act.isEnabled(driver, deleteSingleProgram_btn);
	}

	public void SelectMultiCheckBoxBatch() {
		for ( WebElement checkBox : multiCheckBoxBatch ) {
			if ( !act.isSelected(driver, checkBox) ) {
				act.click(driver, checkBox);
			}
		}
	}

	public boolean VisibleCheckBox() {
		for ( WebElement checkBox : multiCheckBoxBatch ) {
			if ( act.isDisplayed(driver, checkBox) ) {
				return true;
			}
		}
		return false;
	}

	public void SelectSingleCheckBoxBatch() {
		act.click(driver, singleCheckBoxBatch);
	}

	public String getManageProgramTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}

	public String getManageProgramURL() {
		String URL=act.getCurrentURL(driver);
		return URL;
	}

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
	
	public String validateFooterText() {
		String text;
		return act.getText(footer_text);
	}
	
	public int getRowSize() {
		int rowSize = Row.size();
		return rowSize;
	}
}

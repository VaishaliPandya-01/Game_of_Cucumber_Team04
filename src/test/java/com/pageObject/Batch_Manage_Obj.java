package com.pageObject;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class Batch_Manage_Obj extends BaseClass{

	//Created object for controller class
	Controller act = new Controller();

	//Element Object
	@FindBy (xpath="//button//span[text()=' Delete']") 
	private WebElement deleteMutipleBatch_btn;
	@FindBy (id="search_query_top") 
	private WebElement search_txt;
	@FindBy (xpath="//*[@aria-label='Add a new Batch']//span")
	private WebElement addNewBatch_btn;
	@FindBy (xpath="//*[@class='btn btn-edit']")
	private WebElement editBatch_btn;
	@FindBy (xpath="//*[@class='btn btn-edit']")
	private WebElement deleteSingleBatch_btn;
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


	//Constructor
	public Batch_Manage_Obj() {
		PageFactory.initElements(driver, this);
	}


	//Methods
	public void searchBox(String text) {
		act.type(search_txt, text);
	}

	public void deleteMutipleBatchBtn() {
		act.click(driver, deleteMutipleBatch_btn);
	}

	public boolean VisibledeleteBatchBtn() {
		if(!act.isEnabled(driver, deleteMutipleBatch_btn)) {
			return true;
		}
		return false;
	}

	public void addNewBatchBtn() {
		act.click(driver, addNewBatch_btn);
	}

	public boolean addNewBatchBtnVisible() {
		return act.isDisplayed(driver, addNewBatch_btn);
	}

	public void editBatchBtn() {
		if(act.isEnabled(driver, editBatch_btn))
		act.click(driver, editBatch_btn);
	}

	public void VisibleEditBatchBtn() {
		act.isEnabled(driver, editBatch_btn);
	}

	public void deleteSingleBatchBtn() {
		if(act.isEnabled(driver, deleteSingleBatch_btn))
		act.click(driver, deleteSingleBatch_btn);
	}

	public void displayDeleteBtn() {
		act.isEnabled(driver, deleteSingleBatch_btn);
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

	public String getManageBatchTitle() {
		String pageTitle=act.getTitle(driver);
		return pageTitle;
	}

	public String getManageBatchURL() {
		String URL=act.getCurrentURL(driver);
		return URL;
	}

	public boolean validatePagination() {
		return act.isDisplayed(driver, pagination);
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

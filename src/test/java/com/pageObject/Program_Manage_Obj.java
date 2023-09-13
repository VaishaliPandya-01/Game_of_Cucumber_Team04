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
	private List<WebElement> multiCheckBoxProgram;
	@FindBy (xpath="//*[@span/select-multiple-checkbox']")
	private WebElement singleCheckBoxProgram;
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
	private WebElement descDescSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-name-desc']") 
	private WebElement descNameSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-status-desc']") 
	private WebElement descStatusSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-description-asc']") 
	private WebElement ascDescSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-name-asc']") 
	private WebElement ascNameSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-status-asc']") 
	private WebElement ascStatusSorting_Arrow;	
	@FindBy (className = "pagination-arrowLast") 
	private WebElement lastPage_arrow;
	@FindBy (className = "pagination-arrowRight") 
	private WebElement nextPage_arrow;
	@FindBy (className = "pagination-arrowFirst") 
	private WebElement firstPage_arrow;
	@FindBy (className = "pagination-arrowLeft") 
	private WebElement startPage_arrow;


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
	
	public void descDescSorting() {
		if(act.isDisplayed(driver, descDescSorting_Arrow)) {
			act.click(driver, descDescSorting_Arrow);
		}
	}
	
	public void descNameSorting() {
		if(act.isDisplayed(driver, descNameSorting_Arrow)) {
			act.click(driver, descNameSorting_Arrow);
		}
	}
	
	public void descStatusSorting() {
		if(act.isDisplayed(driver, descStatusSorting_Arrow)) {
			act.click(driver, descStatusSorting_Arrow);
		}
	}
	
	public void ascDescSorting() {
		if(act.isDisplayed(driver, ascDescSorting_Arrow)) {
			act.click(driver, ascDescSorting_Arrow);
		}
	}
	
	public void ascNameSorting() {
		if(act.isDisplayed(driver, ascNameSorting_Arrow)) {
			act.click(driver, ascNameSorting_Arrow);
		}
	}
	
	public void ascStatusSorting() {
		if(act.isDisplayed(driver, ascStatusSorting_Arrow)) {
			act.click(driver, ascStatusSorting_Arrow);
		}
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

	public void SelectMultiCheckBoxProgram() {
		for ( WebElement checkBox : multiCheckBoxProgram ) {
			if ( !act.isSelected(driver, checkBox) ) {
				act.click(driver, checkBox);
			}
		}
	}

	public boolean VisibleCheckBox() {
		for ( WebElement checkBox : multiCheckBoxProgram ) {
			if ( act.isDisplayed(driver, checkBox) ) {
				return true;
			}
		}
		return false;
	}

	public void SelectSingleCheckBoxProgram() {
		act.click(driver, singleCheckBoxProgram);
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
	
	public void firstPageArrow() {
		if(act.isEnabled(driver, firstPage_arrow))
		act.click(driver, firstPage_arrow);
	}
	
	public void lastPageArrow() {
		if(act.isEnabled(driver, lastPage_arrow))
		act.click(driver, lastPage_arrow);
	}
	
	public void nextPageArrow() {
		if(act.isEnabled(driver, nextPage_arrow))
		act.click(driver, nextPage_arrow);
	}
	
	public void disableNextPageArrow() {
		if(!act.isEnabled(driver, nextPage_arrow))
		System.out.println("Next page arrow is diabled");		
	}
	
	public void disablePrePageArrow() {
		if(!act.isEnabled(driver, startPage_arrow))
		System.out.println("Next page arrow is diabled");		
	}
	
	public void startPageArrow() {
		if(act.isEnabled(driver, startPage_arrow))
		act.click(driver, startPage_arrow);
	}
}

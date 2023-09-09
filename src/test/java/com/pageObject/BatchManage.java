package com.pageObject;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;

public class BatchManage extends BaseClass{

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

	Controller act = new Controller();


	//Constructor
	public BatchManage() {

		PageFactory.initElements(driver, this);
	}



	//Methods
	public void searchBox(String text) {

		act.type(search_txt, text);
	}


	public void deleteMutipleBatchBtn() {

		act.click(driver, deleteMutipleBatch_btn);

		deleteMutipleBatch_btn.click();
	}


	public void addNewBatchBtn() {

		act.click(driver, addNewBatch_btn);
	}

	public void editBatchBtn() {

		act.click(driver, editBatch_btn);
	}

	public void deleteSingleBatchBtn() {
		act.click(driver, deleteSingleBatch_btn);
	}

	public void SelectMultiCheckBoxBatch() {

		for ( WebElement checkBox : multiCheckBoxBatch ) {
			if ( !act.isSelected(driver, checkBox) ) {
				act.click(driver, checkBox);
			}
		}
	}


	public void SelectSingleCheckBoxBatch() {

		act.click(driver, singleCheckBoxBatch);
	}


	public void getManageBatchTitle() {

		act.getTitle(driver);
	}
}

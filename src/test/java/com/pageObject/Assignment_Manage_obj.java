package com.pageObject;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.baseClass.BaseClass;
import com.controller.Controller;
import java.util.ArrayList;
import java.util.List;

public class Assignment_Manage_obj extends BaseClass {

	@FindBy(xpath="//a[@href ='/login']")
	private WebElement signin;
	@FindBy (xpath="//button[text()='Assignment']")
	private WebElement Assignment_btn;
	@FindBy (id="search bar")
	private WebElement Search_text_box;	
	@FindBy (xpath="//*[@span/tableHeader']") 
	private List<WebElement> listOfTableHeader; //driver.findElement(By.id("delete-icon"));
	@FindBy (id="delete-icon") 
	private WebElement deleteIcon ;
	@FindBy (xpath="//*[@span/tableEditIcons']")
	private List<WebElement> listOfTableEditIcons;
	@FindBy (id="showing-entries")
	private WebElement ShowingEntriesElements ;
	@FindBy (xpath="//button[text()='upload assignment']")
	private WebElement Upload_Assignment_btn;
	@FindBy(xpath = "//div[@class='dropdown-menu show']/a[Select Assignment]")
	private WebElement Select_Assignment;
	@FindBy (xpath="//input[@value='Upload']")
	private WebElement UploadButton;
	@FindBy (xpath="//input[@value='Cancel']") 
	private WebElement Cancel_upload_Button;
	@FindBy (xpath="//*[@id='DataTable']/div/table/tbody/tr/td/a")
	private List<WebElement> assign_DatatTable_data;
	@FindBy (xpath="//*[contains(text(),'Showing 1 to 5 of 9 entries')]")
	private WebElement footer_text;
	@FindBy (xpath="//*[contains(text(),'total number of text x')]") 
	private WebElement total_numberOfAssignment;	
	@FindBy (className = "pagination-arrowLast") 
	private WebElement lastPage_arrow;
	@FindBy (className = "pagination-arrowRight") 
	private WebElement nextPage_arrow;
	@FindBy (className = "pagination-arrowFirst")
	private WebElement firstPage_arrow;
	@FindBy (className = "pagination-arrowLeft") 
	private WebElement prevPage_arrow;	
	@FindBy (xpath="//table/tbody/tr/i")
	private WebElement sortOrder_btn;
	@FindBy (xpath="//table//thead//tr//th//input")
	private WebElement checkbox;	
	@FindBy (xpath="//button[Edit()='Edit']")
	private WebElement Edit_btn;	
	@FindBy (xpath="//button[text()='No']")
	private WebElement No_Button;
	@FindBy (xpath="//button[text()='Yes']")
	private WebElement Yes_Button;	
	@FindBy (xpath="//button//span[textt()='Delete']")
	private WebElement deleteMultipl_btn;
	@FindBy(xpath="//*[@class='programName']")
	private WebElement programName;
	@FindBy(xpath="//table/tbody/tr/i")
	private WebElement clickSave;
	@FindBy (xpath="//button//span[text()=' Cancel']")
	private WebElement cancel_btn;
	@FindBy(xpath="//table/tbody/tr/i")
	private WebElement BatchNumber;
	@FindBy(xpath="//*[@class='AssignmentName']")
	private WebElement AssignmentName;
	@FindBy (xpath="//*[@aria-label='AssignmentDescription']//span")
	private WebElement AssignmentDescription;
	@FindBy(xpath="//*[@class='GradeBy']")
	private WebElement GradeBy;
	@FindBy (id="AssignmentDueDate") 
	private WebElement AssignmentDueDate;
	@FindBy (xpath="//*[@aria-label='AssignmentFile1']//span")
	private WebElement AssignmentFile1_txtBx;
	@FindBy (xpath="//*[@aria-label='AssignmentFile2']//span")
	private WebElement AssignmentFile2_txtBx;
	@FindBy (xpath="//*[@aria-label='AssignmentFile3']//span") 
	private WebElement AssignmentFile3_txtBx;
	@FindBy (xpath="//*[@id='post-2646']//select")
	private WebElement programNmDropDwn;
	@FindBy (xpath="//*[@id='post-2646']//select") 
	private WebElement batchNumDropDwn;
	@FindBy(xpath="//*[contains(text(),'message')")
	private WebElement Message;
	@FindBy (id="calender") 
	private WebElement calender;
	@FindBy(xpath = "//button[@class='next']") 
	private WebElement nextMonthButton;
	@FindBy(id = "datePickerInput") 
	private WebElement datePickerInput;
	@FindBy(xpath = "//button[@class='Last']") 
	private WebElement LastMonthButton;
	@FindBy(xpath = "//button[@class='Current']")
	private WebElement CurrentMonthButton;
	@FindBy(xpath = "//div[@class='datepicker']//td[@data-handler='selectDay']")
	private WebElement datepickerDay;
	@FindBy(xpath = "//td[@data-handler='selectDay']")
	private List<WebElement> datepickerDays;
	@FindBy (tagName=("td"))
	private List<WebElement> cells;
	@FindBy (tagName=("tr"))
	private List<WebElement> Row; 
	@FindBy(xpath="//*[@class='btn btn-description-asc']")
	private WebElement ascDescSorting_Arrow;	
	@FindBy(xpath="//*[@class='btn btn-name-asc']") 
	private WebElement ascNameSorting_Arrow;
	@FindBy (xpath="//*[@class='btn btn-edit']")
	private WebElement deleteSingleAssignment_btn;
	@FindBy (xpath="//button//span[text()=' Delete']")
	private WebElement deleteMutipleAssignment_btn;
	@FindBy (xpath="//*[@span/select-multiple-checkbox']")
	private List<WebElement> multiCheckBoxAssignment;
	@FindBy (xpath="//*[@span/select-multiple-checkbox']")
	private WebElement singleCheckBoxAssignment;
	@FindBy(xpath = "//table[@id='assignmentTable']//tbody//tr")
	private List<WebElement> assignmentRows;

	Controller control = new Controller();



	//Constructor
	public Assignment_Manage_obj() {

		PageFactory.initElements(driver, this);
	}



	//Methods
	public void Search_Box_Assignment(String text) {
		control.type(Search_text_box, text);
	}


	public void Assignment_btn(){
		control.click(driver, Assignment_btn);
	}
	public void Edit_btn(){
		control.click(driver, Edit_btn);
	}



	public String getManageAssignmentTitle() {

		String pageTitle=control.getTitle(driver);
		return pageTitle;
	}
	public String getAssignmentDetailTitle() {

		String pageTitle=control.getTitle(driver);
		return pageTitle;
	}


	public boolean isDeleteIconDisabled() {
		return control.isEnabled(driver, deleteIcon);
	}


	public boolean isSearchBarDisplayed() {
		return control.isDisplayed(driver,Search_text_box );
	}


	public boolean isANewAssignmentbtnDisplayed() {
		return control.isDisplayed(driver, Assignment_btn);
	}



	public boolean isHeaderContainsManageAssignment() {
		String currentTitle = driver.getTitle();
		return currentTitle.contains("Manage Assignment");
	}



	public List<String> getTableHeaderList() {

		List<String> tableHeader = new ArrayList<>();		
		for(WebElement list : listOfTableHeader) {
			String headerList =list.getText();
			tableHeader.add(headerList);
		}
		return tableHeader;
	}



	public List<Boolean> areEditIconDisplayed() {

		List<Boolean> isDisplayedList = new ArrayList<>();		
		for(WebElement editIcon : listOfTableEditIcons) {

			isDisplayedList.add(editIcon.isDisplayed());
		}
		return isDisplayedList;
	}




	public boolean isEditIconDisabled() {
		return control.isEnabled(driver,Edit_btn );
	}


	public boolean checkdataTableHasData() {
		boolean flag = false ;
		List<WebElement> data = assign_DatatTable_data;
		for(int i=0; i<data.size(); i++) {
			WebElement current = data.get(i);
			if(current.getText()!= null) {
				System.out.println("Data Table has data");
				flag = true;
			}  else {
				System.out.println("Data Table has no data");
				flag = false;
			}
		}
		return flag;
	}

	public String footerText(String expectedmsg) {

		return footer_text.getText();

	}

	//pagination
	public boolean firstPageArrow() {

		return control.isDisplayed(driver, firstPage_arrow);
	}
	public boolean nextPageArrow() {

		return	control.isDisplayed(driver,nextPage_arrow);
	}

	public boolean lastPageArrow() {

		return control.isDisplayed(driver,lastPage_arrow);
	}

	public boolean prevPageArrow() {

		return control.isDisplayed(driver,prevPage_arrow);
	}


	public boolean sortingbtn() {

		return control.isDisplayed(driver,sortOrder_btn);
	}

	public boolean Checkbox() {

		return control.isDisplayed(driver,checkbox);
	}
	public boolean totalNumberOfAssignment() {

		return control.isDisplayed(driver, total_numberOfAssignment);
	}

	public String GetTextAllFieldsOnForm() {
		programName.getText();
		BatchNumber.getText();
		AssignmentName.getText();
		AssignmentDescription.getText();
		GradeBy.getText();
		AssignmentDueDate.getText();
		AssignmentFile1_txtBx.getText();
		AssignmentFile2_txtBx.getText();
		AssignmentFile3_txtBx.getText();
		programNmDropDwn.getText();
		return batchNumDropDwn.getText();
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

	public void ascDescSorting() {
		if(control.isDisplayed(driver, ascDescSorting_Arrow)) {
			control.click(driver, ascDescSorting_Arrow);
		}
	}

	public void ascNameSorting() {
		if(control.isDisplayed(driver, ascNameSorting_Arrow)) {
			control.click(driver, ascNameSorting_Arrow);
		}
	}

	public void deleteSingleAssignmentBtn() {
		if(control.isDisplayed(driver, deleteSingleAssignment_btn))
			control.click(driver, deleteSingleAssignment_btn);
	}

	public boolean VisibledeleteAssignmentBtn() {
		if(!control.isEnabled(driver, deleteMutipleAssignment_btn)) {
			return true;
		}
		return false;
	}
	public boolean VisibleCheckBox() {
		for ( WebElement checkBox : multiCheckBoxAssignment ) {
			if ( control.isDisplayed(driver, checkBox) ) {
				return true;
			}
		}
		return false;
	}

	public void SelectSingleCheckBoxAssignment() {
		control.click(driver, singleCheckBoxAssignment);
	}
	public void SelectMultiCheckBoxAssignment() {
		for ( WebElement checkBox : multiCheckBoxAssignment ) {
			if ( !control.isSelected(driver, checkBox) ) {
				control.click(driver, checkBox);
			}
		}
	}
	public void deleteMutipleAssignmentBtn() {
		control.click(driver, deleteMutipleAssignment_btn);
	}
	public int getNumberOfAssignmentRows() {
		return assignmentRows.size();
	}
}

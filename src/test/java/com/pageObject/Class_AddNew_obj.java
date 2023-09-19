package com.pageObject;

import static org.junit.Assert.assertTrue;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.controller.Controller;
import com.baseClass.BaseClass;
import com.utility.Log;
import java.util.List;




public class Class_AddNew_obj extends BaseClass {

	Controller control = new Controller();


	//Constructor
	public Class_AddNew_obj() {

		PageFactory.initElements(driver, this);
	}

	boolean status;

	@FindBy(xpath = "//a[@id ='batchid']")
	private WebElement Batchidval;
	@FindBy(xpath = "//a[@id ='noofclasses']")
	private WebElement noclassval;
	@FindBy(xpath = "//a[@id ='classdate']")
	private WebElement clasdtval;
	@FindBy(xpath = "//a[@id ='staffid']")
	private WebElement staffval;
	@FindBy(xpath = "//a[@id ='Save']")
	private WebElement saveBtnclick;
	@FindBy(xpath = "//pre[@id='classdetail']")
	private WebElement OutputclassdetailChk;
	@FindBy(xpath = "//a[@id ='date picker']")
	private WebElement datepickerclick;
	@FindBy(xpath = "//a[@id ='Cancel']")
	private WebElement cancelclick;
	@FindBy(xpath = "//a[@id ='msgcheck']")
	private WebElement manageclassnoent;
	@FindBy(xpath = "//a[@id ='classdescrip']")
	private WebElement classDescription;
	@FindBy(xpath = "//a[@id ='comments']")
	private WebElement classComments;
	@FindBy(xpath = "//a[@id ='notes']")
	private WebElement classNotes;
	@FindBy(xpath = "//a[@id ='recordings']")
	private WebElement classRecordings;
	@FindBy(xpath = "//a[@id ='classTopic']")
	private WebElement classTopic;
	
	
	//Validate Fields
	
	public boolean fieldsOnClassForm() {
		control.isDisplayed(driver, Batchidval);
		control.isDisplayed(driver, noclassval);
		control.isDisplayed(driver, clasdtval);
		control.isDisplayed(driver, classTopic);
		control.isDisplayed(driver, staffval);
		control.isDisplayed(driver, classDescription);
		control.isDisplayed(driver, classComments);
		control.isDisplayed(driver, classNotes);
		control.isDisplayed(driver, classRecordings);

		return true;
	}
	
	//Fill in form
	
	public <classDetailObj> Class_Detail_Obj fillClassDetailsForm(String Batch_id,String No_of_Classes,String class_date,String Class_Topic,String Staff_Id,String Class_Descrip,
			String Class_Comm,String Class_notes, String Class_recording, classDetailObj Class_Manage_Obj) {
		
		control.selectByVisibleText(Batch_id, Batchidval);
		control.type(noclassval, No_of_Classes);
		control.click(driver, clasdtval);
		control.type(classTopic, Class_Topic);
		control.selectByVisibleText(Staff_Id,  staffval);
		control.type(classDescription, Class_Descrip);
		control.type(classComments, Class_Comm);
		control.type(classNotes, Class_notes);
		control.type(classRecordings, Class_recording);
		
		Class_Detail_Obj classDetailObj = new Class_Detail_Obj();
		return classDetailObj;
	
	}
	

	public void batchidDrpdwn()
	{
		Batchidval.click();
	}
	public void datepickerclickmeth()
	{
		datepickerclick.click();
	}




	public void cancelclkmeth()
	{
		cancelclick.click();
	}
	public void checkpopmsg()
	{
		try {
			status = OutputclassdetailChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("No button is displayed");

		} catch (AssertionError e) {
			Log.error("No button is not displayed");
			System.out.println(e.getMessage());
		}

	}
	public void checkbatchdrpmsg()
	{
		try {
			status = Batchidval.isDisplayed();
			assertTrue(status);

			Log.logInfo("batch id is displayed");

		} catch (AssertionError e) {
			Log.error("batch id is not displayed");
			System.out.println(e.getMessage());
		}


	}

	public void checknoclasspmsg()
	{
		try {
			status = noclassval.isDisplayed();
			assertTrue(status);

			Log.logInfo("no of classes is displayed");

		} catch (AssertionError e) {
			Log.error("no of classes  is not displayed");
			System.out.println(e.getMessage());
		}


	}
	public void checkclasdtmsg()
	{
		try {
			status = clasdtval.isDisplayed();
			assertTrue(status);

			Log.logInfo("class date is displayed");

		} catch (AssertionError e) {
			Log.error("class date is not displayed");
			System.out.println(e.getMessage());
		}


	}
	public void checkstaffidmsg()
	{
		try {
			status = staffval.isDisplayed();
			assertTrue(status);

			Log.logInfo("staff id is displayed");

		} catch (AssertionError e) {
			Log.error("staff id is not displayed");
			System.out.println(e.getMessage());
		}


	}

	public void checfieldsmsg()
	{
		try {
			status = saveBtnclick.isDisplayed();
			assertTrue(status);

			Log.logInfo("No button is displayed");

		} catch (AssertionError e) {
			Log.error("No button is not displayed");
			System.out.println(e.getMessage());
		}


	}

	public void allfields()
	{
		Batchidval.getAttribute("value");
		noclassval.getText();
		clasdtval.getText();
		staffval.getText();
	}

	public void savebtnclickmth()
	{
		saveBtnclick.click();
	}


	public void alertmsg()
	{
		try {
			status = OutputclassdetailChk.isDisplayed();
			assertTrue(status);

			Log.logInfo("class added is displayed");

		} catch (AssertionError e) {
			Log.error("class added is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public void mangecalssnoentrychk()
	{
		try {
			status = manageclassnoent.isDisplayed();
			assertTrue(status);

			Log.logInfo("class added is displayed");

		} catch (AssertionError e) {
			Log.error("class added is not displayed");
			System.out.println(e.getMessage());
		}
	}

	public Class_Manage_Obj fillClassDetailsForm(String batchID_class, String noOfClasses_Class, String classDate_Class,
			String classDescription_Class, Class_Manage_Obj mCP) {
		// TODO Auto-generated method stub
		return null;
	}







}


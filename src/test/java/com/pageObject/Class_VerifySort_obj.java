package com.pageObject;

import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.controller.Controller;
import com.baseClass.BaseClass;
import com.utility.Log;
import java.util.List;

public class Class_VerifySort_obj extends BaseClass{

	Controller control = new Controller();


	//Constructor
	public  Class_VerifySort_obj() {

		PageFactory.initElements(driver, this);
	}

	boolean status;

	@FindBy(xpath = "//button[contains(text(),'Sort')]]")
	private WebElement batchidTab;

	@FindBy(xpath = "//table[@id='myTable']/tbody/tr/td[1]")
	private WebElement tablsrt;

	public void clickbatchid()
	{
		batchidTab.click();
	}

	public void Sortingmethod()
	{


		// driver.findElement(By.xpath("//button[contains(text(),'Sort')]")).click();
		List<WebElement> tdList = (List<WebElement>) tablsrt;
		String strArry [] = new String[tdList.size()];
		for(int i=0;i < tdList.size();i++)
		{
			strArry[i]=tdList.get(i).getText();
		}
		/*
		 * Compare the values
		 */
		boolean sortFunctionality = true;
		outer: 
			for(int i=0;i < strArry.length;i++)
			{
				for(int j=i+1;j < i;j++)
				{
					int result = strArry[j].compareTo(strArry[i]);
					if(!(result > 0))
					{
						Log.logInfo("Data in the Table is not SORTED");
						//	System.out.println("Data in the Table is not SORTED::" +strArry[j]+":::"+ strArry[i]);
						sortFunctionality=false;
						break outer;
					}
					else
					{
						Log.logInfo("Data in the Table is SORTED");
						// System.out.println("Data in the Table is SORTED::" +strArry[j]+":::"+ strArry[i]);
					}
				}
			}


		if(sortFunctionality)
		{
			Log.logInfo("SORT Functionality is working");
			//System.out.println("SORT Functionality is working");
		}
		else
		{
			Log.logInfo("SORT Functionality is not working");
			//System.out.println("SORT Functionality is not working");
		}

	}




}

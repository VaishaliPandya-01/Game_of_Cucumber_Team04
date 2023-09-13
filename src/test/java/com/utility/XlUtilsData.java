package com.utility;
import java.util.Map;

import com.pageObject.Assignment_detailsPage_obj;
public class XlUtilsData {
	
	public static String batchName;
	public static String description;
	public static String NoOfClass;
	public static String programName;
	
	//assignment
	
	public static String assignNm;
	public static String assignDescri;
	public static String gradeby;
	public static String assignDueDate;
	public static String file1;
	public static String file3;
	public static String file2;
	public static String programNm;
	public static String batchNum;
	
	static Map<String, String> excelDataMap;

	public static Map<String, String> batchXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("Name");
		description = excelDataMap.get("Description");
		NoOfClass = excelDataMap.get("Number Of Classes");
		programName = excelDataMap.get("Program Name");
		
		return excelDataMap;
	}
	
	public static Map<String, String> AssignmentXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName); 

	    assignNm = excelDataMap.get("Assignment Name");
	    assignDescri = excelDataMap.get("Assignment Description");
	    gradeby = excelDataMap.get("Grade By");
	    assignDueDate = excelDataMap.get("Assignment Due Date");
	    file1 = excelDataMap.get("Assignment File 1");
	    file2 = excelDataMap.get("Assignment File 2");
	    file3 = excelDataMap.get("Assignment File 3");
	    programNm = excelDataMap.get("Program Name");
	    batchNum = excelDataMap.get("Batch Number");
		return excelDataMap;
	}

}



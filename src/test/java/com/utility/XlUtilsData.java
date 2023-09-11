package com.utility;

import java.util.Map;

public class XlUtilsData {

	public static String batchName;
	public static String description;
	public static String NoOfClass;
	public static String programName;
	
	static Map<String, String> excelDataMap;

	public static Map<String, String> batchXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("Name");
		description = excelDataMap.get("Description");
		NoOfClass = excelDataMap.get("Number Of Classes");
		programName = excelDataMap.get("Program Name");
		
		return excelDataMap;
	}

}

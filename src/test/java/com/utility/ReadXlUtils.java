package com.utility;

import java.util.Map;

public class ReadXlUtils {

	public static String batchName;
	public static String description;
	public static String NoOfClass;
	public static String programName;

	public static Map<String, String> ReadData(String dataKey,String sheetName) throws Exception {

		Map<String, String> excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("Name");
		description = excelDataMap.get("Description");
		NoOfClass = excelDataMap.get("Number Of Classes");
		programName = excelDataMap.get("Program Name");
		
		return excelDataMap;
	}

}
package com.utility;

import java.util.Map;

public class XlUtilsData {

	public static String batchName;
	public static String descriptionfrBtch;
	public static String NoOfClassfrBtch;
	public static String programNameFrBtch;
	public static String programName;
	public static String descriptionfrPrgrm;
	public static String prgrmStatus;
	
	static Map<String, String> excelDataMap;

	public static Map<String, String> batchXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("batchName");
		descriptionfrBtch = excelDataMap.get("descriptionfrBtch");
		NoOfClassfrBtch = excelDataMap.get("NoOfClassfrBtch");
		programNameFrBtch = excelDataMap.get("programNameFrBtch");
		
		return excelDataMap;
	}
	

	public static Map<String, String> programXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

	    programName = excelDataMap.get("programName");
	    descriptionfrPrgrm = excelDataMap.get("descriptionfrPrgrm");
	    prgrmStatus = excelDataMap.get("prgrmStatus");
				
		return excelDataMap;
	}

}

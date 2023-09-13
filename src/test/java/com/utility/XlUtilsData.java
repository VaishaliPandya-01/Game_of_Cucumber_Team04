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
	public static String programName_att;
	public static String ClassName_att;
	public static String StudName_att;
	public static String attendance_att;
	public static String AttendDate_att;
	
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
	public static Map<String, String> AttendanceXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

	    programName_att = excelDataMap.get("PgmName");
	    ClassName_att = excelDataMap.get("ClassName");
	    StudName_att = excelDataMap.get("StudName");
	    attendance_att = excelDataMap.get("Attendance");
	    AttendDate_att = excelDataMap.get("AttendanceDate");
		
		return excelDataMap;
	}
}

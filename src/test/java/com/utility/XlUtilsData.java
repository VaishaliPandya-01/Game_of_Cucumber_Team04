package com.utility;

import java.util.Map;

public class XlUtilsData {

	public static String batchName;
	public static String description;
	public static String NoOfClass;
	public static String programName;
	public static String ClassName;
	public static String StudName;
	public static String attendance;
	public static String AttendDate;
	static Map<String, String> excelDataMap;

	public static Map<String, String> batchXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("Name");
		description = excelDataMap.get("Description");
		NoOfClass = excelDataMap.get("Number Of Classes");
		programName = excelDataMap.get("Program Name");
		
		return excelDataMap;
	}

	public static Map<String, String> AttendanceXLdata(String dataKey,String sheetName) throws Exception {

	    excelDataMap = XLUtils.getData(dataKey, sheetName);

	    programName = excelDataMap.get("PgmName");
	    ClassName = excelDataMap.get("ClassName");
	    StudName = excelDataMap.get("StudName");
	    attendance = excelDataMap.get("Attendance");
	    AttendDate = excelDataMap.get("AttendanceDate");
		
		return excelDataMap;
	}

}

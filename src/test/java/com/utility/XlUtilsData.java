package com.utility;

import com.pageObject.Assignment_detailsPage_obj;
>>>>>>> d3331b0254c4fdc8b49959c1a9b8075b45a10587
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

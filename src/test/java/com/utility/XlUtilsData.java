package com.utility;

import java.util.Map;

public class XlUtilsData {

	//Batch
	public static String batchName;
	public static String descriptionfrBtch;
	public static String NoOfClassfrBtch;
	public static String programNameFrBtch;
	
	//Class
	public static String batchID_class;
	public static String noOfClasses_Class;
	public static String classDate_Class;
	public static String classTopic_class;
	public static String staffID_Class;
	public static String classDescription_Class;
	public static String comments_class;
	public static String notes_Class;
	public static String recording_Class;
	
	//Program
	public static String programName;
	public static String descriptionfrPrgrm;
	public static String prgrmStatus;
	//Attendance
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
	//User
	public static String firstNamefrUser;
	public static String lastNamefrUser;
	public static String locationfrUser;
	public static String phoneNofrUser;
	public static String userRoleDropDwn;
	public static String roleStatusDropDwn;
	public static String visaStatusDropDwn;

	static Map<String, String> excelDataMap;
	//Batch
	public static Map<String, String> batchXLdata(String dataKey,String sheetName) throws Exception {

		excelDataMap = XLUtils.getData(dataKey, sheetName);

		batchName = excelDataMap.get("batchName");
		descriptionfrBtch = excelDataMap.get("descriptionfrBtch");
		NoOfClassfrBtch = excelDataMap.get("NoOfClassfrBtch");
		programNameFrBtch = excelDataMap.get("programNameFrBtch");

		return excelDataMap;
	}
	
	//Class
	
	public static Map<String, String> classXLData (String datakey, String sheetName) throws Exception {
		
		excelDataMap = XLUtils.getData(datakey, sheetName);
		
		batchID_class = excelDataMap.get("BatchID");
		noOfClasses_Class = excelDataMap.get("NoofClasses");
		classDate_Class = excelDataMap.get("ClassDate");
		classTopic_class = excelDataMap.get("ClassTopic");
		staffID_Class = excelDataMap.get("StaffId");
		classDescription_Class = excelDataMap.get("ClassDescription");
		comments_class = excelDataMap.get("Comments");
		notes_Class = excelDataMap.get("Notes");
		recording_Class = excelDataMap.get("Recording");
		
		return excelDataMap;
		
	}
	//Program
	public static Map<String, String> programXLdata(String dataKey,String sheetName) throws Exception {

		excelDataMap = XLUtils.getData(dataKey, sheetName);

		programName = excelDataMap.get("programName");
		descriptionfrPrgrm = excelDataMap.get("descriptionfrPrgrm");
		prgrmStatus = excelDataMap.get("prgrmStatus");

		return excelDataMap;
	}
	//Attendance
	public static Map<String, String> AttendanceXLdata(String dataKey,String sheetName) throws Exception {

		excelDataMap = XLUtils.getData(dataKey, sheetName);

		programName_att = excelDataMap.get("PgmName");
		ClassName_att = excelDataMap.get("ClassName");
		StudName_att = excelDataMap.get("StudName");
		attendance_att = excelDataMap.get("Attendance");
		AttendDate_att = excelDataMap.get("AttendanceDate");

		return excelDataMap;
	}
	//Assignment
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
	//User
	public static Map<String, String> userXLdata(String dataKey,String sheetName) throws Exception {

		excelDataMap = XLUtils.getData(dataKey, sheetName);

		firstNamefrUser = excelDataMap.get("fristNamefrUser");
		lastNamefrUser = excelDataMap.get("lastNamefrUser");
		locationfrUser = excelDataMap.get("locationfrUser");
		phoneNofrUser = excelDataMap.get("phoneNofrUser");
		userRoleDropDwn = excelDataMap.get("userRoleDropDwn");
		roleStatusDropDwn = excelDataMap.get("roleStatusDropDwn");
		visaStatusDropDwn = excelDataMap.get("visaStatusDropDwn");

		return excelDataMap;
	}

}

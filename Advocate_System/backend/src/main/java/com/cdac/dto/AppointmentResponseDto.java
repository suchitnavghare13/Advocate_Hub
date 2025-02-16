//package com.medeasemanagement.dto;
//
//import lombok.Data;
//
//public class AppointmentResponseDto {
//
//	private int id;
//	
//	private int patientId;
//
//	private int doctorId;
//
//	private String problem;
//
//	private String prescription;
//
//	private String price;
//
//	private String patientName;
//
//	private String patientContact;
//
//	private String doctorName;
//
//	private String doctorContact;
//
//	private String status;
//
//	private String appointmentDate;
//
//	private String date;
//
//	private String bloodGroup;
//
//	public int getId() {
//		return id;
//	}
//
//	public void setId(int id) {
//		this.id = id;
//	}
//
//	public int getPatientId() {
//		return patientId;
//	}
//
//	public void setPatientId(int patientId) {
//		this.patientId = patientId;
//	}
//
//	public int getDoctorId() {
//		return doctorId;
//	}
//
//	public void setDoctorId(int doctorId) {
//		this.doctorId = doctorId;
//	}
//
//	public String getProblem() {
//		return problem;
//	}
//
//	public void setProblem(String problem) {
//		this.problem = problem;
//	}
//
//	public String getPrescription() {
//		return prescription;
//	}
//
//	public void setPrescription(String prescription) {
//		this.prescription = prescription;
//	}
//
//	public String getPrice() {
//		return price;
//	}
//
//	public void setPrice(String price) {
//		this.price = price;
//	}
//
//	public String getPatientName() {
//		return patientName;
//	}
//
//	public void setPatientName(String patientName) {
//		this.patientName = patientName;
//	}
//
//	public String getPatientContact() {
//		return patientContact;
//	}
//
//	public void setPatientContact(String patientContact) {
//		this.patientContact = patientContact;
//	}
//
//	public String getDoctorName() {
//		return doctorName;
//	}
//
//	public void setDoctorName(String doctorName) {
//		this.doctorName = doctorName;
//	}
//
//	public String getDoctorContact() {
//		return doctorContact;
//	}
//
//	public void setDoctorContact(String doctorContact) {
//		this.doctorContact = doctorContact;
//	}
//
//	public String getStatus() {
//		return status;
//	}
//
//	public void setStatus(String status) {
//		this.status = status;
//	}
//
//	public String getAppointmentDate() {
//		return appointmentDate;
//	}
//
//	public void setAppointmentDate(String appointmentDate) {
//		this.appointmentDate = appointmentDate;
//	}
//
//	public String getDate() {
//		return date;
//	}
//
//	public void setDate(String date) {
//		this.date = date;
//	}
//
//	public String getBloodGroup() {
//		return bloodGroup;
//	}
//
//	public void setBloodGroup(String bloodGroup) {
//		this.bloodGroup = bloodGroup;
//	}
//
//}

package com.cdac.dto;

import lombok.Data;

public class AppointmentResponseDto {

	private int id;
	
	private int userId;  

	private int advocateId;  

	private String problem;

	private String prescription;

	private String price;

	private String userName;  

	private String userContact;  

	private String advocateName;  

	private String advocateContact;  

	private String status;

	private String appointmentDate;

	private String date;

	private String bloodGroup;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {  
		return userId;
	}

	public void setUserId(int userId) {  
		this.userId = userId;
	}

	public int getAdvocateId() {  
		return advocateId;
	}

	public void setAdvocateId(int advocateId) {  
		this.advocateId = advocateId;
	}

	public String getProblem() {
		return problem;
	}

	public void setProblem(String problem) {
		this.problem = problem;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUserName() {  
		return userName;
	}

	public void setUserName(String userName) {  
		this.userName = userName;
	}

	public String getUserContact() {  
		return userContact;
	}

	public void setUserContact(String userContact) {  
		this.userContact = userContact;
	}

	public String getAdvocateName() {  
		return advocateName;
	}

	public void setAdvocateName(String advocateName) {  
		this.advocateName = advocateName;
	}

	public String getAdvocateContact() {  
		return advocateContact;
	}

	public void setAdvocateContact(String advocateContact) {  
		this.advocateContact = advocateContact;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
}

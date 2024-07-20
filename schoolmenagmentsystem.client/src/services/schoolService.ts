import axios from "axios";
import type { School } from "@/models/School";

const API_URL = "https://localhost:7290/api/School";

export const getSchools = async (): Promise<School[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getSchoolById = async (id: number): Promise<School> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createSchool = async (school: School): Promise<School> => {
  const response = await axios.post(API_URL, school);
  return response.data;
};

export const updateSchool = async (school: School): Promise<School> => {
  const response = await axios.put(`${API_URL}/${school.schoolId}`, school);
  return response.data;
};

export const deleteSchool = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

//Promise to obiekt, który reprezentuje wynik operacji asynchronicznej, która może zakończyć się sukcesem lub niepowodzeniem.
import { Credentials } from "../interfaces/Credentials";
import { Review } from "../interfaces/Review";
import User from "../interfaces/User";
import axios from "axios";

const testUser = {
  _id: "123",
  email: "email@gmail.com",
  points: 10,
  targetCompanies: [],
  resumes: [],
};

const URL = "http://localhost:8080";

const getLoggedInUser = async (): Promise<User | undefined> => {
  // return undefined;

  // return testUser;
  return axios
    .get(`${URL}/user/profile`, { withCredentials: true })
    .then((res) => res.data);
};

const login = async (credentials: Credentials) => {
  // return testUser;
  await axios
    .post(`${URL}/auth/login`, credentials, { withCredentials: true })
    .catch((err) => {
      console.log(err);
      throw new Error("Invalid email/password. Please try again");
    });
  return await getLoggedInUser();
};

const signup = async (credentials: Credentials) => {
  // return testUser;
  await axios
    .post(`${URL}/auth/signup`, credentials, { withCredentials: true })
    .catch((err) => {
      console.log(err);
      throw new Error("Invalid email/password. Please try again");
    });

  return await login(credentials);
};

const getAllReviews = async (userId: string): Promise<Review[]> => {
  // return [
  //   {
  //     _id: "123456",
  //     visual: 7,
  //     content: 8,
  //     relevance: 6,
  //     feedback: "Tailor resume to the job description",
  //     createdAt: "2021-03-27T01:43:55.174+00:00",
  //   },
  // ];

  return axios
    .get(`${URL}/review/user/${userId}`, { withCredentials: true })
    .then((res) => res.data);
};

const logout = async () => {
  await axios.get(`${URL}/auth/logout`, { withCredentials: true });
  window.location.replace("/");
};

const getResumeFile = async (filename: string): Promise<string> => {
  return axios
    .get(`${URL}/user/resume/${filename}`, {
      withCredentials: true,
    })
    .then((res) => res.data);
};

const uploadResume = async (userId: string, formData: FormData) => {
  await axios.post(`${URL}/user/${userId}/resume`, formData, {
    withCredentials: true,
  });
};

export default {
  getLoggedInUser,
  login,
  signup,
  logout,
  getAllReviews,
  getResumeFile,
  uploadResume,
};

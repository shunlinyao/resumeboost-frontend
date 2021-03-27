import { Credentials } from "../interfaces/Credentials";
import { Review } from "../interfaces/Review";
import User from "../interfaces/User";

const testUser = {
  _id: "123",
  email: "email@gmail.com",
  points: 10,
  targetCompanies: [],
  resumes: [],
};

const getLoggedInUser = async (): Promise<User | undefined> => {
  return undefined;

  // return testUser;
};

const login = async (credentials: Credentials) => {
  return testUser;
};

const signup = async (credentials: Credentials) => {
  return testUser;
};

const getAllReviews = async (): Promise<Review[]> => {
  return [
    {
      _id: "123456",
      visual: 7,
      content: 8,
      relevance: 6,
      feedback: "Tailor resume to the job description",
      createdAt: "2021-03-27T01:43:55.174+00:00",
    },
  ];
};

const logout = async () => {
  window.location.replace("/");
};

export default {
  getLoggedInUser,
  login,
  signup,
  logout,
  getAllReviews,
};

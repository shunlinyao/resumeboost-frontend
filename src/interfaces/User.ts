import { Review } from "./Review";

interface Employer {
  industries: string[];
  name: string;
  logo: string;
}

interface Resume {
  _id: string;
  isActive: true;
}

export default interface User {
  _id: string;
  email: string;
  points: number;
  targetCompanies: Employer[];
  resumes: Resume[];
  reviews?: Review[];
}

/* eslint-disable no-unused-vars */
import { ObjectId } from "mongoose";

// Verification Info
export interface IUserVerification {
  verified: boolean;
  plans?: ObjectId;
  plansType?: "basic" | "advanced" | "";
  otp?: string;
}

// Ratings Info
export interface IRatings {
  star: number;
  totalReview: number;
  totalUser: number;
}

// Payment Info
export interface IPayment {
  status: "paid" | "not-paid" | "expired" | "free";
  amount: number;
  issuedAt: Date;
  deadline: number;
  deadlineType: "day" | "week" | "month" | "year";
  subscription: ObjectId;
}

// Location Info
export interface ILocation {
  type: string;
  coordinates: number[]; // [longitude, latitude]
  name?: string;
}

// Profile Info
export interface IProfile {
  firstName: string;
  lastName: string;
  userName?: string;
  phoneNumber: string;
  companyName?: string;
  bio?: string;
  profileImage?: string;
}

// Auth Info
export interface IAuth {
  email: string;
  password: string;
  confirmPassword?: string;
  agreeToTerms: boolean;
  passwordChangedAt?: Date;
}

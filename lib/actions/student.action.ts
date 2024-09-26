"use server";
// Register students for internship, tech programs, podcast, talk, events

import { ID, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  databases,
  ENDPOINT,
  STUDENT_COLLECTION_ID,
  PROJECT_ID,
  storage,
  users,
  STUDENTDATA_COLLECTION_ID,
} from "../appwrite.config";
import { parseStringify } from "../utils";
import { InputFile } from "node-appwrite/file";
import { CreateUserParams, RegisterUserParams } from "@/constants/type";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      //   password is suppose to be here, but we put undefined
      undefined,
      user.name
    );
    console.log(newUser);
    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      // if there is an error and error is user already exist, then........
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents?.users[0];
    }
    console.error("An error occurred while creating a new user", error);
  }
};

//  GET CREATED USER

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

export const registerStudent = async ({
  applicationDocument,

  ...student
}: RegisterUserParams) => {
  try {
    // try to upload the file before storing it
    let file1;
    let file2;
    if (applicationDocument) {
      const inputFile1 =
        applicationDocument &&
        InputFile.fromBuffer(
          applicationDocument?.get("blobFile") as Blob,
          applicationDocument?.get("fileName") as string
        );
      // console.log(inputFile1);

      file1 = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile1);
      // console.log(file1);
    }

    console.log({
      applicationDocumentId: file1?.$id ? file1.$id : null,
      applicationDocumentUrl: `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file1?.$id}/view??project=${PROJECT_ID}`,
      ...student,
    });

    const newStudent = await databases.createDocument(
      DATABASE_ID!,
      STUDENT_COLLECTION_ID!,
      ID.unique(),
      {
        applicationDocumentId: file1?.$id ? file1.$id : null,
        applicationDocumentUrl: file1?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file1?.$id}/view??project=${PROJECT_ID}`
          : null,

        ...student,
      }
    );

    return parseStringify(newStudent);
  } catch (err) {
    console.log("The error that occurred is " + err);
  }
};

export const updatedStudentData = async (status: String, userId: string) => {
  try {
    await databases.updateDocument(
      DATABASE_ID!,
      STUDENTTDATA_COLLECTION_ID!,
      userId,
      { status: status }
    );
  } catch (err) {
    console.log(
      "error occured while trying to change the status of student",
      err
    );
  }
};
//  GET PATIENT

export const getStudent = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      STUDENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (err) {
    console.log("An error occurred while retrieving the patient details:", err);
  }
};

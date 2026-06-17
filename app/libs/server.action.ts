"use server";

import Email from "next-auth/providers/email";
import dbconnect from "./db";
import PageModel from "./page.model";
import UserModel from "./user.model";
import bcrypt from "bcryptjs";
import { auth } from "../auth";

export async function CreateLinks(data: any) {
  await dbconnect();

  const session = await auth();

  if (!session?.user?.id) {
    return {
      message: "Unauthorized",
      status: 401,
    };
  }

  const title = data.title?.trim();
  const url = data.url?.trim();

  if (!title || !url) {
    return {
      message: "Title and URL are required",
      status: 400,
    };
  }

  try {
    const result = await PageModel.findOneAndUpdate(
      { authorId: session.user.id },
      {
        $push: {
          links: { title, url },
        },
      },
      {
        new: true,
      }
    );

    if (!result) {
      return {
        message: "Page not found for user",
        status: 404,
      };
    }

    return result.links
  } catch (error) {
    console.error("CreateLinks Error:", error);

    return {
      message: "Something went wrong",
      status: 500,
    };
  }
}

export async function getAllLinks() {
  await dbconnect();
  const session = await auth();
  const data = await PageModel.findOne({ authorId: session?.user?.id });
  return data.links;
}

// TODO: USER CANT CREATE DUPLICATE ACCOUNTS AND ADD BCRYPT
export async function SignupUser(data: any) {
  await dbconnect();

  try {
    const cryptedpass = await bcrypt.hashSync(data.password, 10);
    await UserModel.create({ email: data.email, password: cryptedpass });
  } catch (error) {
    console.error(error);
  }
  return {
    message: "user created",
    status: 201,
  };
}

export async function CheckUser(userdata: any) {
  await dbconnect();
  try {
    let user: any = await UserModel.findOne({
      email: userdata.email,
    });
    if (!user) throw new Error("error");
    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function UpdatePage(userdata: any) {
  await dbconnect();
  const session = await auth();
  const updateData = Object.fromEntries(
  Object.entries(userdata).filter(([_, value]) => {
    return (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(typeof value === "string" && value.trim() === "")
    );
  })
);
  const updated = await PageModel.findOneAndUpdate(
    { authorId: session?.user?.id },
    { $set: updateData },
    { new: true }
  );
}

export async function Onboard() {
  await dbconnect();
  const session = await auth();
  const user = await UserModel.findOne({ _id: session?.user?.id });

  if (!user.onboarded) return null;

  return true;
}

export async function UserOnboarded(data: any) {
  await dbconnect();

  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  try {
    const username = data.username.trim();
    

    if (!username) {
      return {
        success: false,
        message: "Username is required",
      };
    }

    await PageModel.create({
      authorId: session.user.id,
      username,
    });

    await UserModel.findByIdAndUpdate(session.user.id, {
      onboarded: true,
    });

    return {
      success: true,
      message: "Onboarding completed",
    };
  } catch (error: any) {
    console.error(error);

    return {
      success: false,
      message:
        error?.code === 11000
          ? "Username already taken"
          : "Something went wrong",
    };
  }
}

export async function GetUserDetails() {
  await dbconnect();
  const session = await auth();
  const user = await PageModel.findOne({ authorId: session?.user?.id }).lean();
  return user;
}

export async function deleteLinks(data:any){
  await dbconnect()
  const session=await auth();
  if (!session?.user?.id) return  "invalid error"
  
}

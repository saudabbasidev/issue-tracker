"use server";

import Email from "next-auth/providers/email";
import dbconnect from "./db";
import PageModel from "./page.model";
import UserModel from "./user.model";
import bcrypt from "bcryptjs";
import { auth } from "../auth";

export async function CreateLinks(data: any) {
  await dbconnect();
  try {
    console.log(data);
    await PageModel.create({
      links: [
        {
          title: data.title,
          url: data.url,
        },
      ],
    });
    return {
      message: "Links Created",
      status: 201,
    };
  } catch (error) {}
}

export async function getAllLinks() {
  await dbconnect();
  const data = await PageModel.find();
  return data;
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
  await PageModel.findOneAndUpdate(
    { authorId: session?.user?.id },
    {
      username: userdata.username,
      bio: userdata.bio,
    },
    {
      new: true,
    },
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
    const username = data.username?.trim();

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
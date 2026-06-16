"use server";

import Email from "next-auth/providers/email";
import dbconnect from "./db";
import PageModel from "./page.model";
import UserModel from "./user.model";

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
  const data = await PageModel.findById({ _id: "6a2fd888d4fa7f71acd1e469" });
  return data;
}

export async function UpdatePage(data: any) {
  await dbconnect();

  try {
  } catch (error) {}
}
export async function SignupUser(data: any) {
  await dbconnect();

  try {
    await UserModel.create({ email: data.email, password: data.password });
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
    return {
    id: user._id.toString(),
    email: user.email,
  };
  } catch (error) {
    console.error(error);
  }
}

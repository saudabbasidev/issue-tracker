"use server";

import z from "zod";
import dbconnect from "./db";
import IssueModel from "./issue.model";

const issueschema = z.object({
  title: z.string().min(1).max(112),
  description: z.string().min(1),
});
interface Idata{
  title:string,
  description:string
}
export async function createIssue(data: Idata) {
  await dbconnect();
  const valid = issueschema.safeParse(data);
  if (!valid.success) {
    return valid.error;
  }
  try {
    const newdata = await IssueModel.create({
      title: data.title,
      description: data.description,
    });
    return {
      message: "object created",
      status: 201,
      Data: JSON.stringify(newdata),
    };
  } catch (error) {
    return error;
  }
}

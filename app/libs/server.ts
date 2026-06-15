"use server";

import dbconnect from "./db";
import PageModel from "./page.model";

interface Idata {
  title: string;
  url: string;
}

export async function CreateLinks(data: Idata) {
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
  const data = await PageModel.findById({_id:"6a2fd888d4fa7f71acd1e469"});
  return data;

}

"use server";

import client from "@/app/db";

export const signup = async (username: string, password: string) => {
  const body = { username, password };

  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

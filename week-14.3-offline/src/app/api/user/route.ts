import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req: NextRequest) {
  const username = await client.user.findFirst();

  return NextResponse.json({
    name: username,
    email: "utkarsh@gmail.com",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = req.nextUrl.searchParams.get("name");
  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });

    // Auth Token
    const token = req.headers.get("authorization");
    console.log(token);

    return NextResponse.json({
      body,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      {
        message: "Error while signing up",
      },
      {
        status: 411,
      }
    );
  }
}

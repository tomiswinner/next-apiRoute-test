import { NextResponse } from "next/server";

// api route の場合、default export は許可されていない
export async function GET() {
  console.log("GET is called");
  return NextResponse.json({ message: "Hello World" });
}

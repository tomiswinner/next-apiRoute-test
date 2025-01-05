import { NextResponse } from "next/server";

// 
export async function GET() {
  console.log("GET is called");
  return NextResponse.json({ message: "Hello World" });
}

import { NextRequest, NextResponse } from "next/server";

// api route の場合、default export は許可されていない
export async function GET(req: NextRequest) {
  console.log("GET is called, request: ", req);
  return NextResponse.json({ message: "Hello World" });
}

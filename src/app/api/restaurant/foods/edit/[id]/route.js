import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  let success = false;
  let id = content.params.id;
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await foodSchema.findOne({ _id: id });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

export async function PUT(request, content) {
  let success = false;
  let id = content.params.id;
  let payload = await request.json();
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await foodSchema.findOneAndUpdate({ _id: id }, payload);
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  let success = false;
  let queryParams = request.nextUrl.searchParams;
  let filter = {};
  if (queryParams.get("location")) {
    let city = queryParams.get("location");
    filter = { city: { $regex: new RegExp(city, "i") } };
  } else if (queryParams.get("restaurant")) {
    let name = queryParams.get("restaurant");
    filter = { name: { $regex: new RegExp(name, "i") } };
  }
  await mongoose.connect(connectionStr, { useNewUrlParser: true });
  let result = await restaurantSchema.find(filter);
  if (result) {
    success = true;
  }
  return NextResponse.json({ success, result });
}

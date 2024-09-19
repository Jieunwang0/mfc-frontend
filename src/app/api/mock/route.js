'use server';
import { NextResponse } from "next/server";
import mockData from "@/mock/data.json";

export async function GET() {
  return NextResponse.json(mockData);
}

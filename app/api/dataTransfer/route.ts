// /app/api/dataTransfer/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Define interface for Developer as an example
interface Developer {
  id: number; // project_ID
  name: string; // Project_Title
  tag: string; // Tag
  desc: string; // Project_Desc
  status: string; // Status
  Expected_Invested_Amount: number; // Expected_Invested_Amount
  Capital: string; // Capital
  region: string; // 
  author: string; // Author
  IsTeamReq: boolean; // IsTeamReq
  imageDemo: string; // ImageDemo
  price: number; // BasePrice
}

// Function to insert data into the specified table
async function insertDataIntoTable(tableName: string, data: any) {
  try {
    // Insert data into the table using Supabase
    const { data: insertedData, error } = await supabase.from(tableName).insert([data]);

    if (error) {
      throw error;
    }
    return insertedData;
  } catch (error: any) {
    throw new Error(`Error inserting data into ${tableName}: ${error.message}`);
  }
}

// API route handler for POST requests to insert data
export async function POST(req: NextRequest) {
  try {
    // Get the table name and the JSON body from the request
    const { table, jsonData } = await req.json();

    if (!table || typeof table !== 'string') {
      return NextResponse.json({ message: 'Table name is required and must be a string' }, { status: 400 });
    }

    if (!jsonData || typeof jsonData !== 'object') {
      return NextResponse.json({ message: 'jsonData is required and must be a valid JSON object' }, { status: 400 });
    }

    // Insert data into the specified table
    const insertedData = await insertDataIntoTable(table, jsonData);

    return NextResponse.json(insertedData, { status: 200 });
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

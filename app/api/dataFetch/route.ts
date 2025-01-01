// /app/api/dataFetch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Function to fetch data from Supabase table
async function fetchDataFromTable(tableName: string) {
  try {
    const { data, error } = await supabase.from(tableName).select('*');
    if (error) {
      throw error;
    }
    return data;
  } catch (error:any) {
    throw new Error(`Error fetching data from ${tableName}: ${error.message}`);
  }
}

// API route handler using NextRequest and NextResponse
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const table = searchParams.get('table');  // Extract the 'table' query param

  if (!table || typeof table !== 'string') {
    return NextResponse.json({ message: 'Table name is required and must be a string' }, { status: 400 });
  }

  try {
    const data = await fetchDataFromTable(table);
    return NextResponse.json(data, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

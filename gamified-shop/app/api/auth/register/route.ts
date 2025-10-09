import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    // --- Blocked by environment issue ---
    // This is where we would validate the input.
    // For example, check if email is a valid format and password is long enough.
    if (!name || !email || !password) {
      return new NextResponse("Missing name, email, or password", { status: 400 });
    }

    // --- Blocked by environment issue ---
    // This is where we would hash the password.
    // const bcrypt = require('bcryptjs');
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = `hashed_${password}`; // Placeholder

    // --- Blocked by environment issue ---
    // This is where we would connect to the database and insert the user.
    // const { db } = await connectToDatabase();
    // const existingUser = await db.collection('users').findOne({ email });
    // if (existingUser) {
    //   return new NextResponse("User already exists", { status: 400 });
    // }
    // await db.collection('users').insertOne({ name, email, password: hashedPassword, points: 0 });
    console.log("--- MOCK API ---");
    console.log("A real API would now save this user to the database:");
    console.log({ name, email, password: hashedPassword, points: 0 });
    console.log("-----------------");


    // Return a mock success response
    return NextResponse.json({ message: "User registered successfully (mock response)" }, { status: 201 });

  } catch (error) {
    console.error("Registration API error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

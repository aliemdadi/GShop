import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    // --- Blocked by environment issue ---
    // This is where we would connect to the database and find the user.
    // const { db } = await connectToDatabase();
    // const user = await db.collection('users').findOne({ email });
    // if (!user) {
    //   return new NextResponse("Invalid credentials", { status: 401 });
    // }
    console.log(`--- MOCK API: Checking credentials for ${email} ---`);

    // --- Blocked by environment issue ---
    // This is where we would compare the hashed password.
    // const bcrypt = require('bcryptjs');
    // const isPasswordValid = await bcrypt.compare(password, user.password_hashed);
    // if (!isPasswordValid) {
    //   return new NextResponse("Invalid credentials", { status: 401 });
    // }
    const isPasswordValid = password.length > 0; // Placeholder validation
    if (!isPasswordValid) {
       return new NextResponse("Invalid credentials (mock)", { status: 401 });
    }

    // --- Mock Success ---
    // If login is successful, we would typically create a session or JWT.
    // Here, we just return mock user data.
    const mockUser = {
      id: "mock-user-id-123",
      name: "کاربر نمونه",
      email: email,
      points: 1337,
      level: 5,
    };

    console.log("--- MOCK API: Login successful ---");
    return NextResponse.json({ user: mockUser, token: "mock-jwt-token" }, { status: 200 });

  } catch (error) {
    console.error("Login API error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

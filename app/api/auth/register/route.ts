import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    console.log('Registration attempt starting...')
    const { email, password, name } = await request.json()
    console.log('Received registration data:', { email, name }) // Don't log passwords

    // Validation
    if (!email || !password || !name) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "Password must be at least 6 characters" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 400 })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Check if this is the first user (admin)
    const userCount = await prisma.user.count()
    const isAdmin = userCount === 0

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        isAdmin
      }
    })

    // Set auth cookie
    const cookieStore = await cookies()
    cookieStore.set("auth_token", `token_${user.id}_${Date.now()}`, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({ 
      message: "Registration successful", 
      isAdmin: user.isAdmin 
    }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: "Registration failed" }, { status: 500 })
  }
}

import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { verify } from "jsonwebtoken"

const prisma = new PrismaClient()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const authToken = cookieStore.get("auth_token")

    if (!authToken) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    // Verify the token and get the user ID
    const decoded = verify(authToken.value, JWT_SECRET) as { userId: string }
    
    // Fetch the user from the database
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId
      },
      select: {
        name: true,
        email: true
      }
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch user" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

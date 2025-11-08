import { redirect } from "next/navigation"

export default function LoginPage() {
  // Send users to the redesigned Clerk Sign In page
  redirect("/sign-in")
}

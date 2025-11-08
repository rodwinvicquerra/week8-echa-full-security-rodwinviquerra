"use client"

import Link from "next/link"
import { SignUp } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const { isSignedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isSignedIn) router.replace("/portfolio")
  }, [isSignedIn, router])

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background to-background/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Welcome to Rodwin's Portfolio
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Start your journey here. Create your account to unlock the full experience.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="mb-4 text-center text-sm text-muted-foreground">
            <span>Already have an account? </span>
            <Link href="/sign-in" className="text-primary hover:underline font-medium">Sign in</Link>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/40 shadow-xl p-4 md:p-6">
            <div className="text-center mb-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Sign up with Clerk</p>
            </div>
            <SignUp
              afterSignInUrl="/portfolio"
              afterSignUpUrl="/portfolio"
              path="/sign-up"
              signInUrl="/sign-in"
              appearance={{
                layout: {
                  socialButtonsPlacement: "bottom",
                  socialButtonsVariant: "iconButton",
                  logoPlacement: "none",
                  showOptionalFields: true,
                },
                variables: {
                  colorPrimary: "hsl(var(--primary))",
                  colorText: "hsl(var(--foreground))",
                  colorBackground: "hsl(var(--background))",
                  colorInputBackground: "hsl(var(--background))",
                  colorInputText: "hsl(var(--foreground))",
                  borderRadius: "0.5rem",
                },
                elements: {
                  rootBox: "mx-auto w-full",
                  card: "border-0 bg-transparent shadow-none max-w-xl w-full",
                  header: "hidden",
                  form: "space-y-4",
                  formFieldInput: "!text-lg !h-14 !bg-background !text-foreground !placeholder:text-muted-foreground/70 !border-2 !border-border/70 focus-visible:!ring-2 focus-visible:!ring-primary focus-visible:!border-primary !transition-all !duration-200 !font-medium",
                  formFieldLabel: "!text-sm !font-medium !text-foreground",
                  formButtonPrimary: "!h-12 !text-base !font-semibold",
                  footer: "hidden",
                  socialButtonsBlockButton: "!h-12 md:!h-14 !text-sm",
                  socialButtons: "!gap-3 !mt-4",
                  alternativeMethods: "!mt-4",
                  dividerLine: "!bg-border",
                  dividerText: "!text-muted-foreground !text-sm",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
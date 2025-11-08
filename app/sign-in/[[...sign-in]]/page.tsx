"use client"

import Link from "next/link"
import { SignIn } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && isSignedIn) router.replace("/portfolio")
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) return null

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Welcome to Rodwin's Portfolio
          </h1>
          <p className="text-slate-300 text-lg md:text-xl">
            Discover projects, skills, and a journey of continuous growth. Sign in to get the full experience.
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <div className="mb-4 text-center text-sm text-slate-300">
            <span>First time? </span>
            <Link href="/sign-up" className="text-blue-400 hover:text-blue-300 underline font-semibold">Create an account</Link>
          </div>

          <div className="rounded-2xl border-2 border-slate-400 bg-slate-800/95 backdrop-blur-sm shadow-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <p className="text-base uppercase tracking-wider text-slate-200 font-bold">Sign in with Clerk</p>
            </div>
            <SignIn
              afterSignInUrl="/portfolio"
              afterSignUpUrl="/portfolio"
              appearance={{
                layout: {
                  socialButtonsPlacement: "bottom",
                  socialButtonsVariant: "iconButton",
                  logoPlacement: "none",
                  showOptionalFields: true,
                },
                variables: {
                  colorPrimary: "#2563eb",
                  colorText: "#ffffff",
                  colorBackground: "#1e293b",
                  colorInputBackground: "#334155",
                  colorInputText: "#ffffff",
                  colorTextSecondary: "#f1f5f9",
                  colorNeutral: "#94a3b8",
                  colorDanger: "#ef4444",
                  borderRadius: "0.75rem",
                },
                elements: {
                  rootBox: "mx-auto w-full",
                  card: "border-0 bg-transparent shadow-none max-w-xl w-full",
                  header: "hidden",
                  form: "space-y-6",
                  formFieldInput: "!text-lg !h-16 !bg-slate-700 !text-white !placeholder:text-slate-300 !border-2 !border-slate-500 focus-visible:!ring-4 focus-visible:!ring-blue-500/50 focus-visible:!border-blue-400 !transition-all !duration-200 !font-medium !rounded-xl !px-4 !shadow-lg",
                  formFieldLabel: "!text-base !font-bold !text-white !mb-2",
                  formButtonPrimary: "!h-14 !text-lg !font-bold !bg-blue-600 hover:!bg-blue-500 !text-white !rounded-xl !shadow-xl hover:!shadow-2xl !transition-all !duration-200",
                  footer: "hidden",
                  socialButtonsBlockButton: "!h-14 !text-base !border-2 !border-slate-400 hover:!border-slate-300 !bg-slate-600 hover:!bg-slate-500 !text-white !rounded-xl !font-semibold !shadow-lg hover:!shadow-xl !transition-all !duration-200",
                  socialButtons: "!gap-4 !mt-8",
                  alternativeMethods: "!mt-8",
                  dividerLine: "!bg-slate-400 !h-0.5",
                  dividerText: "!text-slate-200 !text-base !font-semibold !bg-slate-800 !px-4",
                  identityPreview: "hidden",
                  formHeaderTitle: "hidden",
                  formHeaderSubtitle: "hidden",
                  footerActionText: "!text-slate-200 !text-base",
                  footerActionLink: "!text-blue-400 hover:!text-blue-300 !font-semibold !underline",
                  formHeaderText: "!text-white !text-xl !font-bold",
                  formHeaderSubtext: "!text-slate-300 !text-base",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
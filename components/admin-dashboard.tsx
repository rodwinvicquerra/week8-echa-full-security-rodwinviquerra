"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, FileText, LogOut } from "lucide-react"

interface UserData {
  name: string
  email: string
}

export function AdminDashboard() {
  const router = useRouter()
  const [user, setUser] = useState<UserData | null>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch user data
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/user", {
          method: "GET",
        })

        if (response.ok) {
          const data = await response.json()
          setUser(data)
        }
      } catch (err) {
        console.error("Failed to fetch user data")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
    } catch (err) {
      console.error("Logout failed")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="border-b border-border bg-card sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.location.href = '/'} 
              className="text-xl font-bold hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Portfolio Admin
            </button>
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => setActiveTab("overview")}
                className={`pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === "overview"
                    ? "border-accent text-foreground scale-105"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`pb-2 border-b-2 transition-all duration-300 ${
                  activeTab === "portfolio"
                    ? "border-accent text-foreground scale-105"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Portfolio
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground animate-fade-in">Welcome, {user?.name || "User"}!</p>
            <Button
              onClick={handleLogout}
              variant="ghost"
              size="sm"
              className="gap-2 hover:bg-red-500/10 hover:text-red-500 transition-all"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer border-0 bg-linear-to-br from-card to-card/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    Portfolio Stats
                  </h3>
                  <p className="text-3xl font-bold text-accent">5</p>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent/40 group-hover:text-accent transition-all duration-300" />
              </div>
            </Card>
            <Card
              className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer border-0 bg-linear-to-br from-card to-card/50"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Views</h3>
                  <p className="text-3xl font-bold text-accent">2.4K</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
                <BarChart3 className="h-8 w-8 text-accent/40 group-hover:text-accent transition-all duration-300" />
              </div>
            </Card>
            <Card
              className="p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer border-0 bg-linear-to-br from-card to-card/50"
              style={{ animationDelay: "200ms" }}
            >
              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Quick Links
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-primary/10 transition-all"
                    onClick={() => {
                      window.location.href = '/portfolio';
                    }}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "portfolio" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Portfolio Management
            </h2>
            <Card className="p-8 text-center border-dashed">
              <p className="text-muted-foreground mb-4">Portfolio editing features coming soon.</p>
              <Button asChild>
                <Link href="/">Return to Portfolio</Link>
              </Button>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

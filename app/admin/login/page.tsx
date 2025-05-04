"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication
    setTimeout(() => {
      // For demo purposes, hardcoded credentials
      if (email === "admin@cherrypop.id" && password === "password") {
        router.push("/admin/dashboard")
      } else {
        setError("Invalid email or password")
        setIsLoading(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8">
            <Link href="/" className="text-2xl font-bold">
              CHERRYPOP
            </Link>
            <h1 className="text-3xl font-bold mt-8 mb-2">Admin Login</h1>
            <p className="text-muted-foreground">Sign in to manage your festival content</p>
          </div>

          {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 mb-6">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                placeholder="admin@cherrypop.id"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 bg-accent/5 border border-border focus:border-primary outline-none transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 border border-border bg-accent/5 focus:ring-primary"
                />
                <label htmlFor="remember" className="ml-2 text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full p-3 bg-primary text-white font-medium ${
                isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Need help? Contact{" "}
              <a href="mailto:support@cherrypop.id" className="text-primary hover:underline">
                support@cherrypop.id
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block w-1/2 bg-black relative">
        <Image
          src="/placeholder.svg?height=1080&width=1080"
          alt="Cherrypop Festival"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-0 flex items-center p-16">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">Content Management System</h2>
            <p className="text-xl text-muted-foreground">
              Manage your festival content, lineup, news, and more from one central dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

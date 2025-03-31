import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const handleSubmitLoginData = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
    
    if (response.ok) {
      console.log("Login successful", data);
      window.location.href = "/dashboard"; // Redirect after login
    } else {
      console.error("Login failed", data.detail);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container max-w-[1400px] px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 text-white p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <span className="text-xl font-bold text-red-600">BillEase</span>
        </Link>
        <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-red-600">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-gray-500 mt-2">Log in to your BillEase account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmitLoginData}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-xs text-red-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm leading-none pt-0.5">
                Remember me
              </Label>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
              Log In
            </Button>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-red-600 hover:underline">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      <footer className="py-6 text-center text-sm text-gray-500 border-t">
        <p>© {new Date().getFullYear()} BillEase. All rights reserved.</p>
      </footer>
    </div>
  )
}


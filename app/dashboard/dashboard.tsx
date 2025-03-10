import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Welcome to your BillEase Dashboard</h1>
        <p className="text-gray-500">This is a placeholder for your dashboard.</p>
        <div className="pt-4">
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}


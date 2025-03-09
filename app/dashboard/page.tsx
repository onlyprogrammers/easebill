"use client"

import {

  Search,
  Settings,
  Printer,
  Grid,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ExpandablePanel } from "@/components/ui/expandable-panel"
import Link from "next/link"

export default function Dashboard() {


  return (
    <div className="flex h-screen bg-gray-50">
      

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="h-16 border-b bg-white flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search anything..." className="pl-10 border-gray-200 focus-visible:ring-blue-500" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Printer className="h-5 w-5 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Grid className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <div className="flex gap-2">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  New Transaction
                </Button>
                <Link href="/invoices">
                <Button className="bg-blue-600 hover:bg-blue-700">Create Invoice</Button>
                </Link>
              </div>
            </div>

            {/* Sample content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Total Sales", value: "₹59,820.00", change: "+12.5%", color: "bg-blue-500" },
                { title: "Outstanding", value: "₹12,450.00", change: "-3.2%", color: "bg-amber-500" },
                { title: "Total Purchases", value: "₹32,640.00", change: "+8.7%", color: "bg-emerald-500" },
              ].map((card, index) => (
                <ExpandablePanel
                  key={index}
                  title={card.title}
                  className="flex flex-col"
                  allowMinimize={false}
                  allowMaximize={false}
                >
                  <div className={`h-1 ${card.color} -mt-5`}></div>
                  <div className="p-5 pt-4">
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                      <Badge variant={card.change.startsWith("+") ? "default" : "destructive"} className="mb-1">
                        {card.change}
                      </Badge>
                    </div>

                    {/* Additional content that shows when expanded */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Today</span>
                          <span className="font-medium">₹4,250.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">This Week</span>
                          <span className="font-medium">₹18,720.00</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">This Month</span>
                          <span className="font-medium">₹59,820.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandablePanel>
              ))}
            </div>

            {/* Sample table */}
            <ExpandablePanel title="Recent Transactions">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Invoice No.
                      </th>
                      <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-5 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      {
                        date: "04/07/2023",
                        invoice: "945",
                        customer: "AMAN PROVISIONAL",
                        amount: "₹230.72",
                        status: "Paid",
                      },
                      {
                        date: "02/07/2023",
                        invoice: "944",
                        customer: "SHARMA TRADERS",
                        amount: "₹1,450.00",
                        status: "Pending",
                      },
                      {
                        date: "28/06/2023",
                        invoice: "943",
                        customer: "GUPTA ENTERPRISES",
                        amount: "₹3,200.00",
                        status: "Paid",
                      },
                      {
                        date: "25/06/2023",
                        invoice: "942",
                        customer: "SINGH ELECTRONICS",
                        amount: "₹780.50",
                        status: "Paid",
                      },
                      {
                        date: "20/06/2023",
                        invoice: "941",
                        customer: "VERMA SUPPLIES",
                        amount: "₹2,100.00",
                        status: "Pending",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-5 py-4 text-sm text-gray-700">{row.date}</td>
                        <td className="px-5 py-4 text-sm text-gray-700">{row.invoice}</td>
                        <td className="px-5 py-4 text-sm text-gray-700 font-medium">{row.customer}</td>
                        <td className="px-5 py-4 text-sm text-gray-700 font-semibold">{row.amount}</td>
                        <td className="px-5 py-4 text-sm">
                          <Badge
                            variant={row.status === "Paid" ? "outline" : "secondary"}
                            className={
                              row.status === "Paid"
                                ? "border-green-200 text-green-700 bg-green-50"
                                : "border-amber-200 text-amber-700 bg-amber-50"
                            }
                          >
                            {row.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ExpandablePanel>
            {/* Added Panel States Demo */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Panel States Demo</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ExpandablePanel title="Default Panel" defaultState="default">
                  <div className="p-5">
                    <p className="text-gray-600">
                      This panel is in the default state. You can maximize or minimize it using the buttons in the
                      top-right corner.
                    </p>
                  </div>
                </ExpandablePanel>

                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


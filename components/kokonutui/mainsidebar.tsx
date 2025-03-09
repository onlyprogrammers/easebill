'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
    Home,
    Users,
    Package,
    FileText,
    BarChart2,
    Building,
    Wallet,
    DollarSign,
    ShoppingCart,
    FileSpreadsheet,
    CreditCard,
    Menu,
    X,
} from "lucide-react"
import { url } from "inspector"
import Link from "next/link"



export default function Mainsidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [activeItem, setActiveItem] = useState("Home")
    return (
        <>
            {/* Sidebar */}
            <div
                className={cn(
                    "relative flex flex-col h-full bg-gradient-to-b from-blue-950 to-blue-900 text-white transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-[70px]" : "w-[240px]",
                )}
            >
                {/* Company header */}
                <div className="flex items-center gap-3 p-4 border-b border-blue-800">
                    <Avatar className="h-10 w-10 border-2 border-blue-400">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Company Logo" />
                        <AvatarFallback className="bg-blue-700 text-white">RA</AvatarFallback>
                    </Avatar>
                    <div className={cn("transition-opacity", isCollapsed ? "opacity-0 invisible" : "opacity-100 visible")}>
                        <h2 className="font-bold text-sm">RASTOGI AGENCY</h2>
                        <p className="text-xs text-blue-200">Business Account</p>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-4 text-blue-200 hover:text-white hover:bg-blue-800"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? <Menu size={18} /> : <X size={18} />}
                    </Button>
                </div>

                {/* Main navigation section */}
                <div className="px-2 py-4">
                    <p className={cn("text-xs font-medium text-blue-300 px-3 mb-2", isCollapsed && "text-center")}>
                        {isCollapsed ? "MAIN" : "MAIN NAVIGATION"}
                    </p>
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <Link href={item.url}>
                                <Button
                                    key={item.name}
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start px-3 py-2 relative group",
                                        activeItem === item.name
                                            ? "bg-blue-800 text-white hover:bg-blue-700"
                                            : "text-blue-100 hover:bg-blue-800 hover:text-white",
                                        isCollapsed && "justify-center",
                                    )}
                                    onClick={() => setActiveItem(item.name)}
                                >
                                    <div
                                        className={cn(
                                            "absolute left-0 w-1 h-6 rounded-r-full transition-all",
                                            activeItem === item.name ? "bg-blue-400" : "bg-transparent group-hover:bg-blue-400 group-hover:h-4",
                                        )}
                                    />
                                    <item.icon className={cn("h-5 w-5 mr-2", isCollapsed && "mr-0")} />
                                    <span className={cn("transition-opacity", isCollapsed ? "opacity-0 w-0" : "opacity-100")}>
                                        {item.name}
                                    </span>
                                    {item.badge && !isCollapsed && (
                                        <Badge className="ml-auto bg-blue-600 hover:bg-blue-500">{item.badge}</Badge>
                                    )}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>


            </div>

        </>
    )
}

const navItems = [
    { name: "Home", icon: Home, url: "/dashboard" },
    { name: "Parties", icon: Users, url: '/parties' },
    { name: "Items", icon: Package, url: '' },
    { name: "Tax List", icon: FileText, url: '' },
    { name: "Reports", icon: BarChart2, url: '' },
    { name: "Bank Accounts", icon: Building, url: '' },
    { name: "Cash In Hand", icon: Wallet, badge: "New", url: '' },
    { name: "Expenses", icon: DollarSign, url: '' },
    { name: "Orders", icon: ShoppingCart, url: '' },
    { name: "Estimate/Quotation", icon: FileSpreadsheet, url: '' },
    { name: "Cheques", icon: CreditCard, url: '' },
]


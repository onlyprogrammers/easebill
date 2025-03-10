"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { InvoiceData, InvoiceItem } from "@/types/invoice"

interface InvoiceContextType {
  invoiceData: InvoiceData
  setInvoiceData: (data: InvoiceData) => void
  selectedTemplate: string
  setSelectedTemplate: (template: string) => void
  items: InvoiceItem[]
  setItems: (items: InvoiceItem[]) => void
  addItem: (item: InvoiceItem) => void
  removeItem: (index: number) => void
  calculateTotal: () => number
}

const defaultInvoiceData: InvoiceData = {
  businessName: "",
  invoiceNumber: "1",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  customerName: "",
  customerEmail: "",
  customerPhone: "",
  terms: "Thanks for doing business with us!",
  totalAmount: 0,
  subTotal: 0,
  taxRate: 18,
  taxAmount: 0,
  balanceDue: 0,
  paidAmount: 0,
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined)

export function InvoiceProvider({ children }: { children: React.ReactNode }) {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(defaultInvoiceData)
  const [selectedTemplate, setSelectedTemplate] = useState("business")
  const [items, setItems] = useState<InvoiceItem[]>([])

  const addItem = (item: InvoiceItem) => {
    setItems([...items, item])
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    const subTotal = items.reduce((acc, item) => acc + item.quantity * item.totalAmount, 0)
    const taxAmount = subTotal * (invoiceData.taxRate / 100)
    const total = subTotal + taxAmount

    setInvoiceData({
      ...invoiceData,
      subTotal,
      taxAmount,
      totalAmount: total,
      balanceDue: total - (invoiceData.paidAmount || 0),
    })

    return total
  }

  return (
    <InvoiceContext.Provider
      value={{
        invoiceData,
        setInvoiceData,
        selectedTemplate,
        setSelectedTemplate,
        items,
        setItems,
        addItem,
        removeItem,
        calculateTotal,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  )
}

export function useInvoice() {
  const context = useContext(InvoiceContext)
  if (!context) {
    throw new Error("useInvoice must be used within an InvoiceProvider")
  }
  return context
}


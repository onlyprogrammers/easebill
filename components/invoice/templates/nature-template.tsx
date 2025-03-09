"use client"

import { useInvoice } from "../invoice-context"
import { format } from "date-fns"
import Image from "next/image"

// Add the same date formatting helper
const formatDate = (dateString: string) => {
  if (!dateString) return format(new Date(), "MMMM d, yyyy")
  try {
    return format(new Date(dateString), "MMMM d, yyyy")
  } catch (error) {
    return format(new Date(), "MMMM d, yyyy")
  }
}

export default function NatureTemplate() {
  const { invoiceData, items } = useInvoice()

  return (
    <div className="min-h-[29.7cm] bg-white">
      {/* Header */}
      <div className="bg-[#2F4F4F] p-8 flex items-start gap-4">
        <div className="w-16 h-16 bg-white p-2 rounded">
          <div className="w-full h-full relative">
            {invoiceData.logo ? (
              <Image src={invoiceData.logo || "/placeholder.svg"} alt="Company Logo" fill className="object-contain" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <span className="text-[#2F4F4F]">Logo</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-1">{invoiceData.businessName || "Happiest Valley Farms"}</h1>
          <p className="text-green-200 text-sm">{invoiceData.businessSlogan || "Happy plants means happy people"}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-sm font-medium text-gray-600 mb-2">To:</h2>
            <div className="space-y-1">
              <p className="font-medium">{invoiceData.customerName || "Maria Sullivan"}</p>
              <p className="text-sm text-gray-600">{invoiceData.customerBusiness || "The Palm Tree Nursery"}</p>
              <p className="text-sm text-gray-600">{invoiceData.customerAddress || "987 6th Ave"}</p>
              <p className="text-sm text-gray-600">
                {invoiceData.customerCity || "Santa Fe"}, {invoiceData.customerZip || "NM 11121"}
              </p>
              <p className="text-sm text-gray-600">{invoiceData.customerPhone || "201-555-0122"}</p>
            </div>
          </div>
          <div className="text-right space-y-1">
            <p className="text-sm text-gray-600">
              Date: <span className="font-medium">{formatDate(invoiceData.invoiceDate)}</span>
            </p>
            <p className="text-sm text-gray-600">
              Invoice #: <span className="font-medium">{invoiceData.invoiceNumber}</span>
            </p>
            <p className="text-sm text-gray-600">
              Customer ID: <span className="font-medium">{invoiceData.customerId || "ID"}</span>
            </p>
          </div>
        </div>

        {/* Sales Info */}
        <div className="mb-6">
          <table className="w-full text-sm">
            <thead className="bg-[#2F4F4F] text-white">
              <tr>
                <th className="py-2 px-4 text-left">Salesperson</th>
                <th className="py-2 px-4 text-left">Job</th>
                <th className="py-2 px-4 text-left">Payment Terms</th>
                <th className="py-2 px-4 text-left">Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4">{invoiceData.salesperson || "Sonu Jain"}</td>
                <td className="py-2 px-4">{invoiceData.job || "Sales"}</td>
                <td className="py-2 px-4">{invoiceData.paymentTerms || "Due upon receipt"}</td>
                <td className="py-2 px-4">{formatDate(invoiceData.dueDate)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Items */}
        <div className="mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">Qty</th>
                <th className="py-2 text-left">Description</th>
                <th className="py-2 text-right">Unit Price</th>
                <th className="py-2 text-right">Line Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 text-right">${item.unitPrice.toFixed(2)}</td>
                  <td className="py-2 text-right">${(item.quantity * item.unitPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-8">
          <div className="w-1/3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${invoiceData.subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Sales Tax</span>
                <span>${invoiceData.taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium pt-2 border-t">
                <span>Total</span>
                <span>${invoiceData.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-8 pt-8 border-t">
          <p className="font-medium mb-1">
            Make all checks payable to {invoiceData.businessName || "Happiest Valley Farms"}
          </p>
          <p>Thank you for your business!</p>
          <p className="mt-4">
            {invoiceData.businessAddress || "4321 Maplewood Ave"} | {invoiceData.businessCity || "Nashville"},{" "}
            {invoiceData.businessState || "TN"} | {invoiceData.businessZip || "10105"} |{" "}
            {invoiceData.businessEmail || "happiestvalley@example.com"}
          </p>
        </div>
      </div>
    </div>
  )
}


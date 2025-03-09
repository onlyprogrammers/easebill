"use client"

import { useInvoice } from "../invoice-context"
import { format } from "date-fns"
import Image from "next/image"

// Add the same date formatting helper
const formatDate = (dateString: string) => {
  if (!dateString) return format(new Date(), "dd/MM/yyyy")
  try {
    return format(new Date(dateString), "dd/MM/yyyy")
  } catch (error) {
    return format(new Date(), "dd/MM/yyyy")
  }
}

export default function ModernTemplate() {
  const { invoiceData, items } = useInvoice()

  return (
    <div className="min-h-[29.7cm] bg-white">
      {/* Header */}
      <div className="bg-[#40E0D0] text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
            <div className="space-y-1 text-sm opacity-90">
              <p>{invoiceData.businessName || "Creative Media"}</p>
              <p>{invoiceData.businessAddress || "A-Unknown Area"}</p>
              <p>{invoiceData.businessCity || "Lorem, Ipsum Dolor"}</p>
            </div>
          </div>
          <div className="w-32 h-32 bg-white p-2 rounded-lg">
            {invoiceData.logo ? (
              <Image src={invoiceData.logo || "/placeholder.svg"} alt="Company Logo" fill className="object-contain" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">Logo</div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Bill To & Invoice Details */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Bill to:</h2>
            <div className="space-y-1">
              <p className="font-medium">{invoiceData.customerName || "Dwyane Clark"}</p>
              <p className="text-gray-600">{invoiceData.customerAddress || "24 Dummy Street Area"}</p>
              <p className="text-gray-600">{invoiceData.customerCity || "Location Lorem Ipsum"}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="space-y-1">
              <div className="flex justify-end gap-4">
                <span className="text-gray-600">Invoice #:</span>
                <span className="font-medium">{invoiceData.invoiceNumber || "52148"}</span>
              </div>
              <div className="flex justify-end gap-4">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{formatDate(invoiceData.invoiceDate)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Items Table */}
        <div className="mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-[#40E0D0] text-white">
                <th className="py-3 px-4 text-left">QTY</th>
                <th className="py-3 px-4 text-left">PRODUCT DESCRIPTION</th>
                <th className="py-3 px-4 text-right">PRICE</th>
                <th className="py-3 px-4 text-right">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-3 px-4">{item.quantity}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4 text-right">${item.unitPrice.toFixed(2)}</td>
                  <td className="py-3 px-4 text-right">${(item.quantity * item.unitPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="flex justify-end mb-8">
          <div className="w-1/3">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${invoiceData.subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax Rate</span>
                <span>{invoiceData.taxRate}%</span>
              </div>
              <div className="flex justify-between bg-[#40E0D0] text-white px-4 py-2">
                <span>TOTAL</span>
                <span>${invoiceData.totalAmount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details & Notes */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">Bank Transfer:</h3>
            <p className="text-sm text-gray-600">Add your bank details,</p>
            <p className="text-sm text-gray-600">Lorem ipsum dolor.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t">
          <div className="bg-gray-800 text-white p-4 text-center text-sm">
            <p>THANK YOU FOR YOUR BUSINESS</p>
            <p className="text-gray-400 text-xs mt-1">Payment is due max 7 days after invoice without deduction.</p>
          </div>
        </div>
      </div>
    </div>
  )
}


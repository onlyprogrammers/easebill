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

export default function BusinessTemplate() {
  const { invoiceData, items } = useInvoice()

  return (
    <div className="min-h-[29.7cm] bg-white">
      {/* Header */}
      <div className="p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 relative">
            {invoiceData.logo ? (
              <Image src={invoiceData.logo || "/placeholder.svg"} alt="Business Logo" fill className="object-contain" />
            ) : (
              <div className="w-full h-full bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-yellow-600">Logo</span>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{invoiceData.businessName || "Your Business Name"}</h1>
          </div>
        </div>

        {/* Invoice Info Bar */}
        <div className="grid grid-cols-4 mb-8">
          <div className="bg-yellow-400 text-white p-4">
            <p className="text-sm">Invoice No.</p>
            <p className="font-bold">{invoiceData.invoiceNumber}</p>
          </div>
          <div className="bg-yellow-400 text-white p-4">
            <p className="text-sm">Issue date</p>
            <p className="font-bold">{formatDate(invoiceData.invoiceDate)}</p>
          </div>
          <div className="bg-yellow-400 text-white p-4">
            <p className="text-sm">Due date</p>
            <p className="font-bold">{formatDate(invoiceData.dueDate)}</p>
          </div>
          <div className="bg-gray-800 text-white p-4">
            <p className="text-sm">Total due (AUD)</p>
            <p className="font-bold">${invoiceData.totalAmount.toFixed(2)}</p>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-2">BILL TO</h2>
          <div className="space-y-1">
            <p>{invoiceData.customerName || "Your Client"}</p>
            <p>{invoiceData.customerAddress || "100 Harris St"}</p>
            <p>
              {invoiceData.customerCity || "Sydney NSW"} {invoiceData.customerZip || "NSW 2009"}
            </p>
            <p>{invoiceData.customerCountry || "Australia"}</p>
          </div>
        </div>

        {/* Items Table */}
        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Quantity</th>
              <th className="text-right py-2">Unit price ($)</th>
              <th className="text-right py-2">Amount ($)</th>
            </tr>
          </thead>
          <tbody className="border-t border-b">
            {items.map((item, index) => (
              <tr key={index}>
                <td className="py-2">{item.name}</td>
                <td className="text-right py-2">{item.quantity}</td>
                <td className="text-right py-2">${item.unitPrice.toFixed(2)}</td>
                <td className="text-right py-2">${(item.quantity * item.unitPrice).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="flex justify-end mb-8">
          <div className="w-1/2 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${invoiceData.subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>GST {invoiceData.taxRate}%:</span>
              <span>${invoiceData.taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total (AUD):</span>
              <span>${invoiceData.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="mt-16">
          <div className="w-64 h-16 mb-2">
            {invoiceData.signature ? (
              <Image
                src={invoiceData.signature || "/placeholder.svg"}
                alt="Signature"
                width={200}
                height={64}
                className="object-contain"
              />
            ) : (
              <div className="w-full h-full border-b border-black" />
            )}
          </div>
          <p>Issued by, signature:</p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t grid grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>{invoiceData.businessPhone || "+61200000000"}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🌐</span>
            <span>{invoiceData.businessWebsite || "www.yourbusinessname.com.au"}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>{invoiceData.businessEmail || "email@yourbusinessname.com.au"}</span>
          </div>
        </div>
      </div>
    </div>
  )
}


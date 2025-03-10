'use client'

import InvoiceForm from "@/components/invoice/invoice-form"
import { InvoiceProvider } from "@/components/invoice/invoice-context"

export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 overflow-scroll">
      <div className="container mx-auto py-8">
        <InvoiceProvider>
          <InvoiceForm />
        </InvoiceProvider>
      </div>
    </div>
  )
}


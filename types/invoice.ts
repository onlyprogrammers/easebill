export interface InvoiceItem {
  name: string
  unitPrice: number // Use number instead of float
  quantity: number  // Use number instead of int
  basicPrice: number
  gst: number       // Use number if it's a percentage (e.g., 18 for 18%)
  gstAmount: number
  totalAmount: number
}



export interface InvoiceData {
  businessName: string
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  customerName: string
  customerEmail: string
  customerPhone: string
  terms: string
  totalAmount: number
  subTotal: number
  taxRate: number
  taxAmount: number
  balanceDue: number
  paidAmount: number
  [key: string]: any // Allow for additional properties
}


"use client"

import { useInvoice } from "./invoice-context"
import { Card, CardContent } from "@/components/ui/card"
import ClassicTemplate from "./templates/classic-template"
import ModernTemplate from "./templates/modern-template"
import BusinessTemplate from "./templates/business-template"
import NatureTemplate from "./templates/nature-template"
import { Button } from "@/components/ui/button"
import { Download, Share2, Printer } from "lucide-react"
import html2pdf from "html2pdf.js"

export default function InvoicePreview() {
  const { invoiceData, selectedTemplate } = useInvoice()

  const handleDownloadPDF = () => {
    const element = document.getElementById("invoice-preview")
    const opt = {
      margin: 1,
      filename: `invoice-${invoiceData.invoiceNumber}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    }
    html2pdf().set(opt).from(element).save()
  }

  const handlePrint = () => {
    window.print()
    
  }

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate />
      case "business":
        return <BusinessTemplate />
      case "nature":
        return <NatureTemplate />
      default:
        return <ModernTemplate />
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end gap-2 print:hidden">
        <Button variant="outline" onClick={handlePrint}>
          <Printer className="w-4 h-4 mr-2" />
          Print
        </Button>
        <Button variant="outline">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button onClick={handleDownloadPDF}>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </div>
      <Card className="w-full max-w-[210mm] mx-auto">
        <CardContent className="p-0 text-black" id="invoice-preview">
          {renderTemplate()}
        </CardContent>
      </Card>
    </div>
  )
}


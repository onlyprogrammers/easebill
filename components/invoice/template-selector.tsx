"use client"

import { useInvoice } from "./invoice-context"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const templates = [
 
  {
    id: "modern",
    name: "Modern Teal",
    description: "Clean and modern design",
    preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in2.jpg-YCsmNIJoC4Qu2QdUrKrYcwRuHWy2Ve.jpeg",
  },
  {
    id: "business",
    name: "Business Yellow",
    description: "Corporate style with yellow highlights",
    preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in3-JK0IEEaUKMS7uFjN21iQaMiXsjP5vb.png",
  },
  {
    id: "nature",
    name: "Nature Green",
    description: "Elegant design with green theme",
    preview: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/in1-i2TVkj7kD1ZxzWoCaOCovzXavwaTGX.webp",
  },
]

export default function TemplateSelector() {
  const { selectedTemplate, setSelectedTemplate } = useInvoice()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-lg",
            selectedTemplate === template.id && "ring-2 ring-primary",
          )}
          onClick={() => setSelectedTemplate(template.id)}
        >
          <CardContent className="p-4">
            <div className="relative aspect-[210/297] mb-4 rounded-lg overflow-hidden">
              <img
                src={template.preview || "/placeholder.svg"}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              )}
            </div>
            <h3 className="font-medium text-lg mb-1">{template.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{template.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}


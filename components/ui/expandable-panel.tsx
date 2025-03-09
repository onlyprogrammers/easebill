"use client"

import * as React from "react"
import { Maximize2, Minimize2, X } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const panelVariants = cva(
  "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 ease-in-out",
  {
    variants: {
      state: {
        default: "relative",
        maximized: "fixed inset-4 z-50 m-0 flex flex-col",
        minimized: "max-h-16 overflow-hidden",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
)

export interface ExpandablePanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof panelVariants> {
  title: string
  defaultState?: "default" | "maximized" | "minimized"
  allowMaximize?: boolean
  allowMinimize?: boolean
  onStateChange?: (state: "default" | "maximized" | "minimized") => void
}

export function ExpandablePanel({
  title,
  children,
  className,
  defaultState = "default",
  allowMaximize = true,
  allowMinimize = true,
  onStateChange,
  ...props
}: ExpandablePanelProps) {
  const [state, setState] = React.useState<"default" | "maximized" | "minimized">(defaultState)
  const [prevState, setPrevState] = React.useState<"default" | "maximized" | "minimized">("default")

  // Store the previous body overflow style to restore it later
  const [prevBodyOverflow, setPrevBodyOverflow] = React.useState<string>("")

  const toggleMaximize = () => {
    if (state === "maximized") {
      setState(prevState)
      // Restore body overflow
      document.body.style.overflow = prevBodyOverflow
    } else {
      setPrevState(state)
      setState("maximized")
      // Store current body overflow and prevent scrolling when maximized
      setPrevBodyOverflow(document.body.style.overflow)
      document.body.style.overflow = "hidden"
    }
  }

  const toggleMinimize = () => {
    if (state === "minimized") {
      setState("default")
    } else {
      setState("minimized")
    }
  }

  React.useEffect(() => {
    onStateChange?.(state)

    // Cleanup function to restore body overflow when component unmounts
    return () => {
      if (state === "maximized") {
        document.body.style.overflow = prevBodyOverflow
      }
    }
  }, [state, onStateChange, prevBodyOverflow])

  return (
    <div className={cn(panelVariants({ state }), className)} {...props}>
      <div
        className={cn(
          "flex items-center justify-between p-5 border-b border-gray-100",
          state === "minimized" && "border-b-0",
        )}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center gap-1">
          {allowMinimize && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
              onClick={toggleMinimize}
              aria-label={state === "minimized" ? "Expand" : "Minimize"}
            >
              {state === "minimized" ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
          )}
          {allowMaximize && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-500 hover:text-gray-700"
              onClick={toggleMaximize}
              aria-label={state === "maximized" ? "Restore" : "Maximize"}
            >
              {state === "maximized" ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
          )}
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-300",
          state === "maximized" && "flex-1 overflow-auto",
          state === "minimized" ? "max-h-0" : "max-h-[2000px]",
        )}
      >
        {children}
      </div>
    </div>
  )
}


import * as React from "react"

import { cn } from "@/lib/utils"

// --- Card Component styled with "Tranquil Luxury" theme ---
// The main container for the card. It has a subtle border, a soft cream background,
// and a shadow that becomes more prominent on hover for a premium interactive feel.
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200/80 bg-[#F9F5EB] text-[#4B4B4B] shadow-sm transition-shadow hover:shadow-xl",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

// The header section of the card. Provides consistent padding.
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

// The title of the card. Styled with the theme's primary serif font and dark green color.
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-serif text-2xl font-semibold leading-none tracking-tight text-[#003E29]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

// The description text within the card. Uses the theme's standard text color.
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#4B4B4B]/80", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// The main content area of the card.
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

// The footer section of the card. Includes a top border for clear separation.
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-4 border-t border-gray-200/80", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

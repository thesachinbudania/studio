import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

// A utility function for conditionally joining class names. 
// You would typically have this in a `lib/utils.ts` file.
// For this example, we'll define a simple version here.
function cn(...inputs: any) {
  return inputs.filter(Boolean).join(' ');
}

// --- Button Variants for "Tranquil Luxury" Theme ---
// This CVA definition translates the "Tranquil Luxury" style guide into button variants.
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      // Defines the visual style of the button based on the style guide.
      variant: {
        // Primary action button: solid, dark green background with white text.
        solid: "bg-[#003E29] text-white hover:bg-opacity-90",
        // Secondary action button: transparent with a vibrant green border and text.
        outline: "border-2 border-[#00875A] bg-transparent text-[#00875A] hover:bg-[#00875A] hover:text-white",
      },
      // Defines the padding and height of the button.
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
      },
    },
    // Default styles applied if no variant or size is specified.
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
)

// --- Button Component Props Interface ---
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// --- Button Component Implementation ---
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Use Slot if asChild is true, otherwise use a standard button element.
    // This allows the button to wrap another component and pass props to it.
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

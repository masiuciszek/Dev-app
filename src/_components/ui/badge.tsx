import {cva, type VariantProps} from "class-variance-authority";
import * as React from "react";

import {cn} from "@/lib/utils";

let badgeVariants = cva(
  "inline-flex items-center rounded-md border  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
      size: {
        small: "px-2 py-0.5 text-xs",
        medium: "px-2.5 py-0.5 text-xs",
        large: "px-4 py-2 text-xs",
      },
      // color: {
      //   red: "bg-red-300 text-red-900",
      //   green: "bg-green-300 text-green-900",
      //   blue: "bg-blue-300 text-blue-900",
      //   yellow: "bg-yellow-300 text-yellow-900",
      //   purple: "bg-purple-300 text-purple-900",
      //   orange: "bg-orange-300 text-orange-900",
      //   pink: "bg-pink-300 text-pink-900",
      //   cyan: "bg-cyan-300 text-cyan-900",
      //   gray: "bg-gray-300 text-gray-900",
      // },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
      // color: "gray",
    },
  },
);

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({className, variant, size, ...props}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({variant, size}), className)} {...props} />
  );
}

export {Badge, badgeVariants};
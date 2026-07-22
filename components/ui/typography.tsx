import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      display:
        "text-5xl lg:text-8xl text-foreground font-bold font-bricolage leading-tighter",
      heading:
        "text-5xl lg:text-6xl text-foreground font-bold font-bricolage leading-tight",
      subheading: "text-primary uppercase font-mono font-medium tracking-wider",
      body: "text-muted-foreground text-lg leading-relaxed",
      bodySmall: "text-sm text-muted-foreground leading-relaxed",
      label: "text-sm font-medium",
      caption: "text-xs text-muted-foreground",
      medium: "text-3xl font-bricolage font-bold text-foreground",
    },
  },

  defaultVariants: {
    variant: "body",
  },
});

type TypographyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: ElementType;
  };

export function Typography({
  as,
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component =
    as ??
    ({
      display: "h1",
      heading: "h2",
      subheading: "h3",
      body: "p",
      bodySmall: "p",
      label: "label",
      caption: "h6",
      medium: "h3",
    }[variant ?? "body"] as ElementType);

  return (
    <Component
      className={cn(
        typographyVariants({
          variant,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

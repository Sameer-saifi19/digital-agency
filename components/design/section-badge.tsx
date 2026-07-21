import { cn } from "@/lib/utils";

interface SectionBadgeProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

export default function SectionBadge({
  children,
  className,
  ...props
}: SectionBadgeProps) {
  return (
    <h6
      className={cn(
        "uppercase font-mono font-medium tracking-wider mb-1 text-sm lg:text-lg lg:mb-4 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  );
}
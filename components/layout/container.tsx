import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "w-full mx-auto max-w-6xl px-4 lg:px-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
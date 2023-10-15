import { Element } from "@/lib/ui";
import { cn } from "@/lib/utils";

export const Text: React.FC<any> = ({ as = "p", className, ...rest }) => (
    <Element as={as} className={cn("text-xs", className)} {...rest} />
);
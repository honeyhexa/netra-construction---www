import { cn } from "@/lib/utils";

export const PageContaier: React.FC<any> = ({ className = "", ...rest }) => (
    <div
      className={cn("w-full m-auto max-w-7xl px-4 md:px-8", className)}
      {...rest}
    />
  );

  export const ZStack: React.FC<any> = ({ children, className, ...rest }) => (
    <div className={cn("grid grid-cols-1 grid-rows-1", className)} {...rest}>
      {(Array.isArray(children) ? children : [children])?.map(
        (elem: React.ReactNode, i: number) => (
          <div
            key={i}
            style={{ zIndex: i }}
            className={"col-start-1 row-start-1 col-span-1 row-span-1"}
          >
            {elem}
          </div>
        )
      )}
    </div>
  );
  
  export const Guides: React.FC = () => (
    <div className="flex flex-row w-full h-full justify-between">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="w-[1px] h-full bg-slate-200" />
      ))}
    </div>
  );
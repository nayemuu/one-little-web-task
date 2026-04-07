"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItem = ({ children, item }) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        `text-[18px] leading-[20px] py-[7px] font-normal border-b border-transparent hover:text-primary hover:border-primary cursor-pointer ${
          pathname === item.link ? "text-primary border-primary font-bold" : ""
        }`,
      )}
    >
      {children}
    </div>
  );
};

export default NavItem;

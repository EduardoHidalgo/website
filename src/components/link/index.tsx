import { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  className?: string;
  newTab?: boolean;
  url?: string;
}

export const Link = ({ className, children, newTab, url }: LinkProps) => {
  return (
    <a
      className={className}
      href={url ? url : ""}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

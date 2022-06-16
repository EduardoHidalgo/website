import { ReactNode } from "react";

export interface LinkProps {
  children: ReactNode;
  classes?: string;
  newTab?: boolean;
  url?: string;
}

export const Link = ({ classes, children, newTab, url }: LinkProps) => {
  return (
    <a
      className={classes && ""}
      href={url ? url : ""}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

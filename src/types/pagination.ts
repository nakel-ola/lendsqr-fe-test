import type { ReactNode } from "react";

export type PaginationBaseType = {
  onClick: React.ReactEventHandler;
  page: number | null;
  selected: boolean;
  disabled: boolean;
  className?: string;
  classes?: {
    root?: string;
    selected?: string;
    disabled?: string;
  };
};

export type PaginationNavType = Omit<PaginationBaseType, "page" | "classes"> & {
  type: "next" | "previous";
  children: ReactNode | undefined;
  classes?: {
    root?: string;
    disabled?: string;
  };
};

export type PaginationPageType = PaginationBaseType & {
  type: "page";
};

export type PaginationEllipsisType = Omit<
  PaginationBaseType,
  "onClick" | "selected" | "disabled" | "classes" | "page"
> & {
  type: "ellipsis";
  page: string;
};

export type PaginationItemType =
  | PaginationNavType
  | PaginationPageType
  | PaginationEllipsisType;

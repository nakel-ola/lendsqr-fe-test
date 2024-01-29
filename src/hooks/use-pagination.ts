"use client";
import {
  PaginationEllipsisType,
  PaginationItemType,
  PaginationNavType,
  PaginationPageType,
} from "../types/pagination";
import { useControlled } from "./use-controlled";

export interface UsePaginationProps {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number;
  /**
   * The total number of pages.
   * @default 1
   */
  totalPage: number;
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean;
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean;
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
  /**
   * The current page.
   */
  currentPage?: number;
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: React.ReactEventHandler;
  type: "page" | "next" | "previous" | "ellipsis";
  page: number | null;
  selected: boolean;
  disabled: boolean;
  className?: string;
}

export interface UsePaginationResult {
  items: PaginationItemType[];
}

export const usePagination = (
  props: UsePaginationProps
): UsePaginationResult => {
  // keep default values in sync with @default tags in Pagination.propTypes
  const {
    boundaryCount = 1,
    totalPage,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onPageChange,
    currentPage,
    siblingCount = 1,
    ...other
  } = props;

  const [page, setPageState] = useControlled({
    controlled: currentPage,
    defaultValue: defaultPage,
  });

  const handleClick = (event: React.ChangeEvent<unknown>, value: number) => {
    if (!currentPage) setPageState(value);

    if (onPageChange) onPageChange(event, value);
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, totalPage));
  const endPages = range(
    Math.max(totalPage - boundaryCount + 1, boundaryCount + 1),
    totalPage
  );

  const siblingsStart = Math.max(
    Math.min(
      page - siblingCount,
      totalPage - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : totalPage - 1
  );

  const itemList = [
    ...(hidePrevButton ? [] : (["previous"] as const)),
    ...startPages,

    ...(siblingsStart > boundaryCount + 2
      ? (["ellipsis"] as const)
      : boundaryCount + 1 < totalPage - boundaryCount
      ? [boundaryCount + 1]
      : []),

    ...range(siblingsStart, siblingsEnd),

    ...(siblingsEnd < totalPage - boundaryCount - 1
      ? (["ellipsis"] as const)
      : totalPage - boundaryCount > boundaryCount
      ? [totalPage - boundaryCount]
      : []),
    ...endPages,
    ...(hideNextButton ? [] : (["next"] as const)),
  ];

  const buttonPage = (type: UsePaginationItem["type"] | string) => {
    switch (type) {
      case "previous":
        return page - 1;
      case "next":
        return page + 1;
      default:
        return;
    }
  };

  const renderPage = (item: number): PaginationPageType => {
    return {
      onClick: (event: React.ChangeEvent<unknown>) => {
        handleClick(event, item);
      },
      type: "page",
      page: item,
      selected: item === page,
      disabled,
    };
  };

  const renderNav = (
    type: "next" | "previous",
    disabled: boolean
  ): PaginationNavType => {
    return {
      onClick: (event: React.ChangeEvent<unknown>) => {
        handleClick(event, buttonPage(type)!);
      },
      type,
      children: type,
      selected: false,
      disabled,
    };
  };

  const renderEllipsis = (type: "ellipsis"): PaginationEllipsisType => {
    return {
      type,
      page: "...",
    };
  };

  const items: PaginationItemType[] = itemList.map((item) => {
    return typeof item === "number"
      ? renderPage(item)
      : item === "ellipsis"
      ? renderEllipsis(item)
      : renderNav(item, item === "next" ? page >= totalPage : page <= 1);
  });

  return {
    items,
    ...other,
  };
};

// {
//   onClick: (event: React.ChangeEvent<unknown>) => {
//     handleClick(event, buttonPage(item)!);
//   },
//   type: item,
//   page: buttonPage(item)!,
//   selected: false,
//   disabled:
//     disabled ||
//     (item.indexOf("ellipsis") === -1 &&
//       (item === "next" ? page >= totalPage : page <= 1)),
// };

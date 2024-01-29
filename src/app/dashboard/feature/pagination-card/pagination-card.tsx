"use client";

import { ChevronDown } from "@/components/icons";
import styles from "./pagination-card.module.scss";
import * as Popover from "@radix-ui/react-popover";
import { usePagination } from "@/hooks/use-pagination";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/pagination/pagination";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  page: number;
  pageCount: number;
  pageSize: number;
};

export const PaginationCard = (props: Props) => {
  const { page, pageCount, pageSize } = props;

  const searchParams = useSearchParams();
  const router = useRouter();

  const { items } = usePagination({
    totalPage: pageCount,
    currentPage: page,
    onPageChange: (event, page) => {
      const params = new URLSearchParams(searchParams);

      params.set("page", page.toString());

      router.push(`/dashboard?` + params.toString());
    },
  });

  const handlePageSize = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageSize", value.toString());

    router.push(`/dashboard?` + params.toString());
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className="">Showing</p>

        <Popover.Root>
          <Popover.Trigger className={styles.popover_trigger}>
            <p className="">{pageSize}</p>
            <ChevronDown />
          </Popover.Trigger>
          <Popover.Content className={styles.popover_content}>
            <div onClick={() => handlePageSize(10)}>
              <p>10</p>
            </div>
            <div onClick={() => handlePageSize(50)}>
              <p>50</p>
            </div>
            <div onClick={() => handlePageSize(100)}>
              <p>100</p>
            </div>
          </Popover.Content>
        </Popover.Root>

        <p className="">out of {pageCount * pageSize}</p>
      </div>
      <div className="">
        <Pagination>
          <PaginationContent>
            {items.map((item, index) => (
              <PaginationItem key={index}>
                {item.type === "page" ? (
                  <PaginationLink
                    isActive={item.selected}
                    onClick={item.onClick}
                  >
                    {item.page}
                  </PaginationLink>
                ) : null}
                {item.type === "ellipsis" ? <PaginationEllipsis /> : null}
                {item.type === "next" ? (
                  <PaginationNext
                    isActive={item.selected}
                    onClick={item.onClick}
                  />
                ) : null}
                {item.type === "previous" ? (
                  <PaginationPrevious
                    isActive={item.selected}
                    onClick={item.onClick}
                  />
                ) : null}
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

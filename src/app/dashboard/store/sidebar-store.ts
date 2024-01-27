"use client";
import { create } from "zustand";

type SidebarStoreType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
export const useSidebarStore = create<SidebarStoreType>((set, get) => ({
  isOpen: true,
  setIsOpen: (value) => set({ isOpen: value }),
}));

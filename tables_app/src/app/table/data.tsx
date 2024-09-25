"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox"
import { Check } from "lucide-react";



export interface Product {
  Name: string;
  Description: string;
  Price: number;
  Category: string;
}

export const data: Array<Product> = [
  {
    Name: "Pillow",
    Description: "Sleeping well is important",
    Price: 8.99,
    Category: "Personal",
  },
  {
    Name: "Earphone",
    Description: "You need this one if you love music",
    Price: 9.99,
    Category: "Personal",
  },
  {
    Name: "Mouse",
    Description: "Very useful if you love your computer",
    Price: 11.35,
    Category: "Personal",
  },
  {
    Name: "Trash Can",
    Description: "It will help you maintain cleanliness",
    Price: 3.95,
    Category: "Sports",
  },
  {
    Name: "Eye Glasses",
    Description: "It will make you read better",
    Price: 6.0,
    Category: "Sports",
  },
];

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "checkbox",
    header: () => (<div className="h-5 my-auto"><Checkbox className="text-white border-white " /></div>),
    cell: () => (<div className="h-5 my-auto" ><Checkbox className="text-white border-white " /></div>),

  },
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "Description",
    header: "Description",
  },
  {
    accessorKey: "Price",
    header: "Price",
    cell: ({ row }) => <span>${row.getValue("Price")}</span>,
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "Action",
    header: "Action",
    cell: () => {
      return (
        <div className="flex gap-3">
          <button className="flex gap-2 bg-blue-400 py-1 rounded font-bold items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <p>Edit</p>
          </button>
          <button className="flex gap-2 bg-red-700 py-1 rounded font-bold items-center px-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <p>Delete</p>
          </button>
        </div>
      );
    }
  },
];

"use client";
import { ColumnDef } from "@tanstack/react-table";

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
    accessorKey: "name",
    header: () => <span>CheckBox</span>,
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
  },
];

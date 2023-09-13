"use client"

import { ColumnDef } from "@tanstack/react-table"

import { paids } from "../data/data"
import { Order } from "../data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { Badge } from "@/components/ui/badge"
// import { DataTableRowActions } from "./data-table-row-actions"
// import { Checkbox } from "@/components/ui/checkbox"

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
    ),
    cell: ({ row }) => 
      // <div className=" w-16 font-semibold">{row.getValue("id")}</div>,
    // <div className="flex items-right">
      <span className="flex justify-center">{row.getValue("id")}</span>,
    // </div>,
      
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "paid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pagada" />
    ),
    cell: ({ row }) => {
      const paid = paids.find(
        (paid) => paid.value === row.getValue("paid")
      )

      return (
        // <div className="flex w-[50px] items-right">
          <div className="flex justify-center">{paid?.label}</div>
        // </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => <div className="flex justify-end">{row.getValue("total")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "paidAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pagada en" />
    ),
    cell: ({ row }) => <div className="flex justify-center p-0 ">{row.getValue("paidAt")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "fullname",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Despachado a" />
    ),
    cell: ({ row }) => <div className="p-0">{row.getValue("fullname")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

"use client"

import { Button, DataTableColumnHeader  } from "@/components/ui"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"
// import { ArrowUpDown, MoreHorizontal } from "lucide-react"
// import { Badge } from "@/components/ui/badge";
import { currency } from '@/utils';

export type Hisorder = {
  id: string
  paid: boolean
  total: number
  fullname: string
  paidAt: string
}

const paids = [
  {
    label: "Pagada",
    value: true,
    pagok: " shadow-[0_0_0_3px_#06870cf9_inset] rounded-full text-green-700"
    // icon: CheckCircledIcon,
  },
  {
    label: "Pendiente",
    value: false,
    pagok: " shadow-[0_0_0_3px_#f00_inset] rounded-full text-red-600"
    // icon: CrossCircledIcon,
  }
]


export const columns: ColumnDef<Hisorder>[] = [
  {
    accessorKey:"id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
    ),
    cell: ({ row }) => 
      <span className="flex justify-center">
        {row.getValue("id")}
      </span>,
      enableSorting: false,
      enableHiding: false,
  },
  {
    accessorKey:"paid",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pagada" />
    ),
    cell: ({ row }) => {
      const paid = paids.find(
        (paid) => paid.value === row.getValue("paid")
      )

      return (
          <Link href='/shop/orders/24352-3593-4095' className="flex justify-center">
            <Button  className={`${paid?.pagok} kborder w-24 font-semibold`} >{paid?.label}</Button>
          </Link>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey:"total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total" />
    ),
    cell: ({ row }) => <div className="flex justify-end">{currency.format(row.getValue("total"))}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey:"paidAt",
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
  }
]

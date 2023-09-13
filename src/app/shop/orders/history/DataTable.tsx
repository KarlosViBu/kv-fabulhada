"use client"
import * as React from "react"

import {
   ColumnDef,
   ColumnFiltersState,
   SortingState,
   VisibilityState,
   flexRender,
   getCoreRowModel,
   getFilteredRowModel,
   getPaginationRowModel,
   getSortedRowModel,
   useReactTable,
} from "@tanstack/react-table"

import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui"
import {
   DropdownMenu,
   DropdownMenuCheckboxItem,
   DropdownMenuContent,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[]
   data: TData[]
}

export function DataTable<TData, TValue>({
   columns,
   data,
}: DataTableProps<TData, TValue>) {

   const [sorting, setSorting] = React.useState<SortingState>([])
   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
   )

   const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),

      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      state: {
         sorting,
         columnFilters,
         columnVisibility,
      },
   })

   return (
      <div className=" w-full">
         <div className="flex items-center py-4 ">
            <Input
               placeholder="Filtro por Nombre..."
               value={(table.getColumn("fullname")?.getFilterValue() as string) ?? ""}
               onChange={(e) =>
                  table.getColumn("fullname")?.setFilterValue(e.target.value)
               }
               className=" w-64 bg-slate-2005"
            />
            <DropdownMenu>
               <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="kbox ml-auto">
                     Columns
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent align="end">
                  {table
                     .getAllColumns()
                     .filter(
                        (column) => column.getCanHide()
                     )
                     .map((column) => {
                        return (
                           <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                 column.toggleVisibility(!!value)
                              }
                           >
                              {column.id}
                           </DropdownMenuCheckboxItem>
                        )
                     })}
               </DropdownMenuContent>
            </DropdownMenu>
         </div>
         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                       header.column.columnDef.header,
                                       header.getContext()
                                    )}
                              </TableHead>
                           )
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow
                           key={row.id}
                           data-state={row.getIsSelected() && "selected"}
                        >
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id}>
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                           No results.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
         <div className="flex items-center justify-end space-x-2 py-4">
            <Button
               className="kbox"
               variant="outline"
               size="sm"
               onClick={() => table.previousPage()}
               disabled={!table.getCanPreviousPage()}
            >
               Previous
            </Button>
            <Button
               className="kbox"
               variant="outline"
               size="sm"
               onClick={() => table.nextPage()}
               disabled={!table.getCanNextPage()}
            >
               Next
            </Button>
         </div>
      </div>
   )
}

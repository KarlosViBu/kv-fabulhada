import { Metadata, NextPage } from "next"
import { Hisorder, columns } from "./columns"
import { DataTable } from "./DataTable"

import { IOrder } from "@/interfaces"
import { ShopLayout } from "../../ShopLayout"

interface Props {
  orders: IOrder[]

}

export const metadata: Metadata = {
  title: "Orders",
  description: "Ordenes realizadas por el usuario logueado",
}


const korders = [
  
    {
      "id": "TASK-8782",
      "paid": false,
      "total": 70000,
      "fullname": "Carlos Villegas",
      "paidAt": "2023-07-02"
    },
    {
      "id": "TASK-7878",
      "fullname": "Carlos Villegas",
      "paid": true,
      "total": 210000,
      "paidAt": "2023-07-02"
    },
    {
      "id": "TASK-7839",
      "fullname": "Diana Cardona",
      "paid": true,
      "total": 150000,
      "paidAt": "2023-07-12"
    },
    {
      "id": "TASK-5562",
      "fullname": "Francisco Xavier Villegas",
      "paid": true,
      "total": 20000,
      "paidAt": "2023-08-05"
    },
    {
      "id": "TASK-8686",
      "fullname": "Carlos Villegas",
      "paid": true,
      "total": 85000,
      "paidAt": "2023-09-22"
    },
    {
      "id": "TASK-1280",
      "fullname": "Estebania Villegas",
      "paid": true,
      "total": 120000,
      "paidAt": "2023-09-27"
    },
    {
      "id": "TASK-7262",
      "fullname": "Carlos Villegas",
      "paid": true,
      "total": 15000,
      "paidAt": "2023-09-27"
    }  
  ]

const HistoryPage: NextPage = () => {

  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
      <div className="mt-[75px] h-min w-full flex flex-col "  > 
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-end gap-5 justify-between md:justify-start mb-2">
            <h2 className="text-lg lg:text-3xl font-bold tracking-tight text-white">Historial de ordenes</h2>
            <span className=" text-base items-end mx-7 lg:text-2xl  text-white">
               Carlos Villegas
            </span>
          </div>
        </div>
        <div className="kbox w-full lg:w-[1200] bg-opacity-80 lg:flex justify-center  border p-2 lg:p-10 rounded-lg lg:rounded-2xl">
          <DataTable data={korders} columns={columns} />
        </div>
      </div>
    </ShopLayout>
  )
}

export default HistoryPage;

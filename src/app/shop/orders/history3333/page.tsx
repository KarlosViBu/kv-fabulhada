"use client"
// import { useContext } from "react";
// import NextLink from 'next/link';
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react';

import { DataGrid } from '@mui/x-data-grid';

// import { dbOrders } from '../../database';
// import { IOrder } from '../../interfaces';
import { AuthContext } from "@/context";
import { currency } from "@/utils";
import Link from 'next/link';
import { IOrder } from '@/interfaces';
import { ShopLayout } from '../../ShopLayout';


const columns: divColDef[] = [
    { field: 'id', headerName: 'ID', width: 30 },
    {
        field: 'orderId',
        headerName: 'Ver orden',
        width: 100,
        cellClassName:'hisorder',
        sortable: false,
        renderCell: ({ row }: divRenderCellParams) => {
            return (
                    <h4 >{ row.orderId.substring(15) }</h4> 
            )
        }
    },
    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada la orden o no',
        width: 150,
        renderCell: ({ row }: divRenderCellParams) => {
            return (
                    row.paid
                ? (<Link 
                    href={ `/orders/${ row.orderId }` }
                 />)
                : (<Link 
                    href={ `/orders/${ row.orderId }` }
                 />)
            )
        }
    },
    { 
        field: 'total',
        headerName: 'Total', width: 100, align:"right",
        renderCell: ({ row }: divRenderCellParams) => {
            return currency.format(row.total)
        } 
    },
    { field: 'createdAt', headerName: 'Creada en', width:110 },
    { field: 'fullname', headerName: 'Despachado a', width: 250 },
    
    { 
        field: 'updatedAt', 
        headerName: 'Pagada en', 
        width:90,
        renderCell: ({ row }: divRenderCellParams) => {
            return (
                row.paid
                ? row.updatedAt.substring(0,10)
                : ''
            )
        } 
    }
];

interface Props {
    orders: IOrder[]
}

const HistoryPage: NextPage<Props> = ({ orders }) => {

    // console.log( {orders });
    // const rows = ..  
    // { id: indice + 1, paid: true, fullname: 'Fernando Herrera', orderId: 1283781237123 }

    // const { user, isLoggedIn, logout } = useContext(AuthContext);

//    const kperfil = `Historial de ordenes : ${user?.name}`

    const rows = orders.map( (order, idx) => ({
        id: idx + 1,
        paid: order.isPaid,
        fullname: `${ order.shippingAddress.firstName } ${ order.shippingAddress.lastName }`,
        orderId: order._id,
        total: order.total,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt
    }))

  return (
    <ShopLayout title={'Historial de ordenes'} pageDescription={'Historial de ordenes del cliente'}>
        {/* <div mb={1} variant='h2' component='h2'>{ kperfil }</div> */}


        <div >
            {/* <div item xs={12} sx={{ height:650, width: '100%' }}> */}
            <div className='h-[650] w-full'>
                <DataGrid
                    rows={ rows }
                    columns={ columns }
                    initialState={{
                        pagination: { 
                          paginationModel: { pageSize: 7 } 
                        },
                      }}
                      pageSizeOptions={[7, 14, 21]}
                    autoHeight
                />

            </div>
        </div>

    </ShopLayout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    
//     const session: any = await getSession({ req });

//     if ( !session ) {
//         return {
//             redirect: {
//                 destination: '/auth/login?p=/orders/history',
//                 permanent: false,
//             }
//         }
//     }

//     const orders = await dbOrders.getOrdersByUser( session.user._id );


//     return {
//         props: {
//             orders
//         }
//     }
// }

export default HistoryPage
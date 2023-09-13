import { FC } from 'react';
// import { PropsWithChildren } from 'react';
import Head from 'next/head';
import { arya } from '@/components/ui';
// import { Box } from '@mui/material';

interface Props {
    title: string;
    children?: React.ReactNode;
}

export const AuthLayout: FC<Props> = ({ children, title  }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            
        </Head>

        <main>
            <div className={` h-[calc(100vh-100px)]`}>   
                { children }
            </div>
        </main>
    
    </>
  )
}

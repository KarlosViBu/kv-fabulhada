import { FC } from 'react';
import Head from 'next/head';
// import '../../app/globals.css'

import { KsideMenu, KsideMenu3, NavBar, SideMenu } from '../../components/ui';
import { url } from 'inspector';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children?: React.ReactNode;
}

export const ShopLayout:FC<Props> = ({ children, title, pageDescription, imageFullUrl }) => {
  return (
    <>
        <Head>
            <title>{ title }</title>

            <meta name="description" content={ pageDescription } />
            
            <meta name="og:title" content={ title } />
            <meta name="og:description" content={ pageDescription } />

            {
                imageFullUrl && (
                    <meta name="og:image" content={ imageFullUrl } />
                )
            }

        </Head> 

        <nav>
            <NavBar />
        </nav>

        {/* <KsideMenu /> */}

        <main style={{
            margin: '90px auto',
            maxWidth: '1440px',
            padding: '0px 10px'
        }} >
            { children }
        </main>

        {/* Footer */}
        <footer>
            {/* TODO: mi custom footer */}
        </footer>

    </>
  )
}

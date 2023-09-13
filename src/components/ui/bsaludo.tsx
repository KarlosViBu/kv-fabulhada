"use client"
import Link from 'next/link'
import { buttonVariants } from './button'

export const Bsaludo = () => {
  return (
   <Link href="/" className={buttonVariants()}
   onClick={ () => { alert('Hello!') }}
 >
   go to Home
 </Link>
  )
}

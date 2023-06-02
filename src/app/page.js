// `app/page.js` is the UI for the `/` URL

//The useRouter hook allows you to programmatically change routes inside Client Components.
//To use useRouter, import it from next/navigation, and call the hook inside your Client Component:

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleClick= () =>{
    console.log('Placing your order')
    router.push('/product')
  }
  return (
  <div>
    <h1>Hello, HomePage!</h1>
    <Link href="/blog">Blog</Link>
    <Link href="/product">Products</Link>
    <button onClick={handleClick}> Place order </button>
  </div>
  )
}

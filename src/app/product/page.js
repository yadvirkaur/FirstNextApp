import Link from 'next/link';

export default function Page({ productId=100}) {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1> <Link href="/product/1">Product 1</Link></h1>
            <h1> <Link href="/product/2/review/1">Product 2 review</Link></h1>
            <h1> <Link href={`/product/${productId}`}>Product {productId}</Link></h1>
        </div>
    )
  }
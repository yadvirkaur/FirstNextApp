// In the following route `app/product/[productid]/page.js` where [productid] is the Dynamic Segment for product posts.
// Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

export default function Page({ params }) {
  return <h1>Product details Page: {params.productid}</h1>
}

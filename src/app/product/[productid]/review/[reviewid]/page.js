//Nested Dynamic Routes

export default function Page({ params }) {
    return <h1>Product review {params.reviewid} for product {params.productid}</h1>
  }
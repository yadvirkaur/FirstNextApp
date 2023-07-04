This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

My Documentation:

Routing Section

1. Next.js uses a file-system based router where Folders are used to define routes. Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
2. A special page.js file is used to make route segments publicly accessible.
3. A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName].
4. Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName]. For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops, /shop/clothes/tops/t-shirts, and so on.
5. Link Component provide a way to navigate between routes.
6. The useRouter hook allows you to programmatically change routes inside Client Components with methods such as push()
7. To create custom 404 page using not-found.js

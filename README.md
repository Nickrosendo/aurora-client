This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## TODO'S

[ ] - Replace mock data with real adoptions api data;

[ ] - Connect with back-end for authentication;

[ ] - Style /profile/[id] page;

[ ] - Style /adoption/[id] page;

[ ] - Style /adoption/new page;

[ ] - Style security settings page;

[ ] - Style signIn component;

[ ] - Style signUp component;

[ ] - Style authentication modal component;

### Components

[ ] - Create signIn component;

[ ] - Create signUp component;

[ ] - Create authentication modal containing signIn and signUp options;

[ ] - Create footer component;

### Routes

[ x ] - Include /adoption/[id] route for adoption-item details.

[ x ] - Include /adoption/new route for users to include their adoptions.

[ x ] - Include /profile/[id] details route(for users and organizations).

[ x ] - Include /security route(for password and authentication stuffs).

### Header

[ ] - Include search bar;

[ ] - Include donation button in left drawer component.

[ ] - Include colormode toggle button in left drawer component.

### Right Drawer

[ ] - Populate right drawer with link to profile page. 

[ ] - Populate right drawer with link to security settings page. 

[ ] - Include logout button on right drawer. 

[ ] - Only show right drawer if the user is authenticated;

[ ] - Implement authentication mechanism;

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

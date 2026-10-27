# Z-Bank

HTML, CSS aur JavaScript se bani Roman-English learning library.

## Local build aur run

Node.js 20 ya us se naya version chahiye. Project root mein:

```sh
npm run build
npm start
```

Build static files ko `dist/` mein rakhta hai. Server `PORT` environment variable par listen karta hai; local default port `3000` hai.

## Railway par deploy

1. Code GitHub repository par push karein.
2. Railway mein GitHub repository se naya project/service connect karein.
3. Is app ko kisi database variable ki zaroorat nahi. Agar baad mein secrets add hon, Railway Variables mein set karein.
4. Build command `npm run build` aur start command `npm start` use karein.
5. Deploy logs verify karke Networking settings se public domain generate karein.

`.env.local` aur doosri `.env.*` files Git se ignore hoti hain. Sirf fake placeholders wala `.env.example` share karein.

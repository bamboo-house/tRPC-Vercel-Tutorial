"use client"

import { appRouter } from "@/server/routers/_app"
import { httpBatchLink } from "@trpc/client"
import { trpc } from "@/app/utils/trpc"
import { useEffect } from "react";


// const url =
//   process.env.NODE_ENV === "production"
//     ? "your-production-url/api/trpc"
//     : "http://localhost:3000/api/trpc"

// const serverClient = appRouter.createCaller({
//   links: [
//     httpBatchLink({ url }),
//   ],
// })



export default function Page() {
  const res = trpc.hello.useQuery({ text: "galickho!"});
  // const dataSet = await trpc.setData("test-data")
  
  return (
    <main>
        <div>{res?.data?.greeting}</div>
        {/* <div>{dataSet}</div> */}
    </main>
  )
}
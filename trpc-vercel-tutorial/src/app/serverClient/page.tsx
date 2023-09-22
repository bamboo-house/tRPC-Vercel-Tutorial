"use client"

import { appRouter } from "@/server/routers/_app"
import { httpBatchLink } from "@trpc/client"
import { useEffect } from "react";
import { use } from "react";



const url =
  process.env.NODE_ENV === "production"
    ? "your-production-url/api/trpc"
    : "http://localhost:3000/api/trpc"

const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({ url }),
  ],
})



const res = async () => {
  return await serverClient.hello({ text: "galickhoooooo!"});
}

export const dynamic = "force-dynamic";


// eslint-disable-next-line @next/next/no-async-client-component
export default async function Page() {
  const ress = await res();
  // const dataSet = await trpc.setData("test-data")
  
  return (
    <main>
        <div>{ ress?.greeting}</div>
        {/* <div>{dataSet}</div> */}
    </main>
  )
}



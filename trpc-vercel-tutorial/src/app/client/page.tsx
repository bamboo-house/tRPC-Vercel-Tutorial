"use client"

import { trpc } from "@/app/utils/trpc"

export default function Page() {
  const { data: greeting } = trpc.sayHello.useQuery({ text: "galickho!"});
  const mutation = trpc.setHello.useMutation();

  return (
    <main>
        <div>{greeting}</div>
        <button className="bg-gray-600 rounded-lg" onClick={() => {
          const i = mutation.mutate({ text: "galickhoooo!" })
          console.log()
        }}>
          ボタン
        </button>
        <div>{mutation.data}</div>
    </main>
  )
}
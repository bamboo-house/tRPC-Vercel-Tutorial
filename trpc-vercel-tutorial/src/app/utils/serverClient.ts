import { httpBatchLink } from "@trpc/client";

import { appRouter } from "../../server/routers/_app";

export const dynamic = "force-dynamic";

export const serverClient = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/api/trpc",
    }),
  ],
});
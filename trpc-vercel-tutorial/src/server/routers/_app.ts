import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure
  .input(
    z.object({
      text: z.string(),
    })
    )
  .query((opts) => {
    return {
      greeting: `hello ${opts.input.text}!`,
    };
  }),
});

export type AppRouter = typeof appRouter;

// export const appRouter = router({
//   getData: procedure.query(async () => {
//     // Here you would fetch data from a database in a
//     // real-life application.
//     console.log("getData")
//     return "getData"
//   }),
//   setData: procedure
//     .input(z.string())
//     .mutation(async ({ input }) => {
//       // Here you would update a database using the
//       // input string passed into the procedure
//       console.log(input)
//       return input
//     }),
// })
// // This type will be used as a reference later...
// export type AppRouter = typeof appRouter
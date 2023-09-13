import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  paid: z.boolean(),
  total: z.string(),
  fullname: z.string(),
  title: z.string(),
  paidAt: z.string()
})

export type Order = z.infer<typeof taskSchema>

"use server"
import * as z from "zod"

import { LoginSchema } from "@/schema"

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFileds = LoginSchema.safeParse(values)

  if (!validateFileds) {
    return { error : "Invalid fields!"}
  }

  return { success : "Email sent!"}
}
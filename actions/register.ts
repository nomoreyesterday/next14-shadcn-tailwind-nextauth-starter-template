"use server"
import * as z from "zod"

import { RegisterSchema } from "@/schema"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFileds = RegisterSchema.safeParse(values)

  if (!validateFileds) {
    return { error : "Invalid fields!"}
  }

  return { success : "Email sent!"}
}
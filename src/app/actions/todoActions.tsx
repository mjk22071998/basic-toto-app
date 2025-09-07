"use server"
import { revalidatePath } from "next/cache"
import { prisma } from "@/utils/prisma"

export const addTodo = async (formData: FormData) => {
    const todo = formData.get("todo")?.valueOf()
    if (typeof todo !== "string" || todo.length === 0) {
        return { error: "Invalid todo. Please enter a valid task." }
    }
    await prisma.todo.create({ data: { title: todo, completed: false } })
    revalidatePath("/")
    return { success: true }
}
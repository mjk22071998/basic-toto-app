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

export const changeTodoStatus = async (formData: FormData) => {
    const id = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({ where: { id: id } });
    if (!todo) {
        return { error: "Todo not found" };
    }
    const updatedStatus = !todo.completed;
    await prisma.todo.update({ where: { id: id }, data: { completed: updatedStatus } });
    revalidatePath("/");
    return { success: true, completed: updatedStatus };
}
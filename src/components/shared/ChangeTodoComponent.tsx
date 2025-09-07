"use client";

import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../UI/ButtonComponent";
import Form from "../UI/FormComponent";
import Input from "../UI/InputComponent";
import { changeTodoStatus } from "../../app/actions/todoActions"
import { Toaster, toast } from "react-hot-toast";

interface Todo{ id: string; title: string; completed: boolean; }

interface TodoProps { todo: Todo }

const ChangeTodoComponent = ({ todo }: TodoProps) => {
    const handleChangeTodo = async (formData: FormData) => {

        const result = await changeTodoStatus(formData)
        if (result?.error) {
        toast.error(result.error)
        } else {
        toast.success(`Todo marked as ${result?.completed ? "completed" : "incomplete"} 🎉`)
        }
    }
    return (
        <>
            <Toaster position="top-right" />
            <Form action={async (formData) => {
                    await handleChangeTodo(formData)
                }} className="flex items-center-safe justify-center-safe">
                <Input name="inputId" value={todo.id} type="hidden" />
                <Button actionButton type="submit" text={<AiOutlineCheckCircle/>} />
            </Form>
        </>
  )
}

export default ChangeTodoComponent
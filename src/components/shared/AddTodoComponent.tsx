"use client"

import { useState } from "react"
import { addTodo } from "../../app/actions/todoActions"
import toast, { Toaster } from "react-hot-toast"
import Form from "../UI/FormComponent"
import Input from "../UI/InputComponent"
import Button from "../UI/ButtonComponent"


const AddTodo = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setLoading(true)

    const result = await addTodo(formData)

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success("Todo added 🎉")
    }

    setLoading(false)
  }

  return (
    <>
      <Toaster position="top-right" />
      <Form
        action={async (formData) => {
          await handleSubmit(formData)
        }}
        className="w-1/2 mx-10"
      >
        <div className="flex justify-between space-x-4">
          <Input name="todo" type="text" placeholder="Add Todo..." />
          <Button
            actionButton={true}
            text={loading ? "Adding..." : "Add"}
            type="submit"
            onClick={() => {}}
          />
        </div>
      </Form>
    </>
  )
}

export default AddTodo

"use client"

import { useState, useEffect, useRef } from "react"
import { addTodo } from "../../app/actions/todoActions"
import toast, { Toaster } from "react-hot-toast"
import Form from "../UI/FormComponent"
import Input from "../UI/InputComponent"
import Button from "../UI/ButtonComponent"

const AddTodo = () => {
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(loading)

  useEffect(() => {
    loadingRef.current = loading
    console.log("loading changed:", loading) // ✅ logs correctly
  }, [loading])

  const handleSubmit = async (formData: FormData) => {
    setLoading(true)

    const result = await addTodo(formData)

    if (result?.error) {
      toast.error(result.error)
    } else {
      toast.success("Todo added 🎉")
    }

    setLoading(false)

    // if you need the latest value here
    console.log("loading inside async:", loadingRef.current)
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
            actionButton={false}
            text={loading ? "Adding..." : "Add"}
            type="submit"
            disabled={loading}
          />
        </div>
      </Form>
    </>
  )
}

export default AddTodo

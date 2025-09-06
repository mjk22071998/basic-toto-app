import Form from "../UI/form"
import Input from "../UI/input"
import Button from "../UI/button"
import { addTodo } from "../../app/actions/todoActions"

const AddTodo = () => {
  return (
      <Form action={addTodo} className="w-1/2 mx-10">
          <div className="flex justify-between space-x-4">
              <Input name="todo" type="text" placeholder="Add Todo..." />
              <Button actionButton={true} onClick={()=>{}} text="Add" type="submit"/>
          </div>
    </Form>
  )
}

export default AddTodo
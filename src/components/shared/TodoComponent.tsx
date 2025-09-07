
interface Todo{ id: string; title: string; completed: boolean; }

interface TodoProps { todo: Todo }

const TodoComponent = ({ todo }: TodoProps) => {
  return (
    <div className="w-full flex items-center-safe justify-between bg-white py-3 px-20 rounded-2xl">
      {todo.title}</div>
  )
}

export default TodoComponent
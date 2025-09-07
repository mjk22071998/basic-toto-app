
interface Todo{ id: string; title: string; completed: boolean; }

interface TodoProps { todo: Todo }

const TodoComponent = ({ todo }: TodoProps) => {
  return (
    <span className="text-center font-bold uppercase">
      {todo.title}
    </span>
  )
}

export default TodoComponent
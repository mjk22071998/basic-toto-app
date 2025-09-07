import AddTodo from "@/components/shared/AddTodoComponent"
import TodoComponent from "@/components/shared/TodoComponent"
import { prisma } from "@/utils/prisma"

async function fetchData() {
  const data = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, completed: true },
  })
  return data
}

const Home = async () => {
  const todos = await fetchData()
  console.log(todos)
  return (
    <div className="w-screen flex flex-col items-center-safe justify-center-safe">
      <span className="text-3xl font-extrabold uppercase"> My Todo App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.JS 15
        <span className="text-orange-700 ml-2">Server Actions</span>
      </h1>
      <div className="flex justify-center-safe flex-col items-center-safe w-full">
        <AddTodo />
        <div className="w-full flex flex-col items-center-safe mt-10 gap-5">
          {todos.map((todo) => (
            <div key={todo.id} className="w-full flex items-center-safe justify-center-safe">
              <TodoComponent todo={todo}/>
            </div>
          ))}
          {todos.length === 0 && (
            <span className="text-xl font-semibold">No todos found</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
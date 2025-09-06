"use client"

import AddTodo from "@/components/shared/AddTodo"
const Home = () => {
  return (
    <div className="w-screen flex flex-col items-center-safe justify-center-safe">
      <span className="text-3xl font-extrabold uppercase"> My Todo App</span>
      <h1 className="text-3xl font-extrabold uppercase mb-5">
        Next.JS 15
        <span className="text-orange-700 ml-2">Server Actions</span>
      </h1>
      <div className="flex justify-center-safe flex-col items-center-safe w-full">
        <AddTodo />
      </div>
    </div>
  )
}

export default Home
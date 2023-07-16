import Link from "next/link";

type Todo = {
  id: number;
  title: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/todos", { cache: 'no-store' });
  return res.json();
}

export default async function Page() {
  const todos: Todo[] = await getData();
  console.log(todos);

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
      <Link href="/">Homeへ</Link>
    </>
  );
}
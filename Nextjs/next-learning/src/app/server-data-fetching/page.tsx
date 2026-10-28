import { Suspense } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

async function ServerData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todo: Todo = await response.json();

  return (
    <div>
      <p>{todo.title}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Server Data Fetching</h1>

      <Suspense fallback={<p>Loading todos...</p>}>
        <ServerData />
      </Suspense>
    </main>
  );
}

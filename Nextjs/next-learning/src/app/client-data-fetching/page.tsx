"use client";

import { TodoDetails } from "@/types/type";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoComponent = () => {
  const [todoData, setTodoData] = useState<TodoDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getTodos = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      setTodoData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    todoData && (
      <div>
        <h1>Todo - Client fetching</h1>
        <div>
          <p>Id: {todoData.id}</p>
          <p>
            <strong>{todoData.title}</strong>
          </p>
        </div>
      </div>
    )
  );
};

export default TodoComponent;

import { useCallback, useState } from "react";
import type { ChangeEvent } from "react";

// Define a Todo type
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = useCallback(() => {
    if (!text.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
    setText("");
  }, [text]);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  const removeTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const completedCount = todos.filter((t) => t.completed).length;

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="add-form">
        <input
          value={text}
          onChange={handleTextChange}
          placeholder="Add a todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <p>
        Completed: {completedCount} / {todos.length}
      </p>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <div className="todo-box">
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => toggleTodo(t.id)}
              />
              <div className="todo-item">{t.text}</div>
              <button className="clear-btn" onClick={() => removeTodo(t.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import api from ".";
import { TodoType } from "../../types/todo";

interface AddTodoAPIBody {
  text: string;
  color: TodoType["color"];
}

export const getTodosAPI = () => api.get<TodoType[]>("api/todos");

export const checkTodoAPI = (id: number) => api.patch(`api/todos/${id}`);

export const addTodoAPI = (body: AddTodoAPIBody) => api.post("api/todos", body);

export const deleteTodoAPI = (id: number) => api.delete(`/api/todos/${id}`);

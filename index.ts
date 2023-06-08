import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface todos {
    id: number;
    title: string;
    completed: false;
}

axios.get(url).then(response => {
    const todo = response.data as todos;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logtodo(id, title, completed);
});

const logtodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        ID: ${id}
        Title: ${title}
        Completed: ${completed}`);
}

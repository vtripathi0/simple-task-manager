let tasks = [];

export default function handler(req, res) {

if (req.method === "GET") {
return res.status(200).json(tasks);
}

if (req.method === "POST") {

```
const { text } = req.body;

if (!text) {
  return res.status(400).json({ error: "Task text required" });
}

const newTask = {
  id: Date.now(),
  text: text,
  completed: false,
  createdAt: new Date().toLocaleTimeString()
};

tasks.push(newTask);

return res.status(200).json(newTask);
```

}

if (req.method === "PUT") {

```
const { id } = req.body;

tasks = tasks.map(task =>
  task.id === id ? { ...task, completed: !task.completed } : task
);

return res.status(200).json({ message: "Task updated" });
```

}

if (req.method === "DELETE") {

```
const { id } = req.body;

tasks = tasks.filter(task => task.id !== id);

return res.status(200).json({ message: "Task deleted" });
```

}

if (req.method === "PATCH") {

```
const { id, text } = req.body;

if (id && text) {

  // edit task text

  tasks = tasks.map(task =>
    task.id === id ? { ...task, text: text } : task
  );

  return res.status(200).json({ message: "Task edited" });

}

// clear completed tasks

tasks = tasks.filter(task => !task.completed);

return res.status(200).json({ message: "Completed tasks cleared" });
```

}

return res.status(405).json({ message: "Method not allowed" });

}

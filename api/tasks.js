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
  completed: false
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

return res.status(405).json({ message: "Method not allowed" });

}

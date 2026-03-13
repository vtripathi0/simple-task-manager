let tasks = [];

export default function handler(req, res) {

  if (req.method === "GET") {
    res.status(200).json(tasks);
  }

  else if (req.method === "POST") {

    const { text } = req.body;

    const newTask = {
      id: Date.now(),
      text: text
    };

    tasks.push(newTask);

    res.status(200).json(newTask);
  }
}
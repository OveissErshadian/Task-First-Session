interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
  description?: string;
}

let tasks: Task[] = [
  {
    id: 1,
    title: "law",
    isCompleted: true,
    description: "Rights is fundamental.",
  },
  {
    id: 2,
    title: "catalaxy",
    isCompleted: false,
    description: "Liberty is essential.",
  },
];

const addTask = (tasks: Task[], title: string): Task[] => {
  const newTask: Task = {
    id: Date.now(),
    title: title,
    isCompleted: false,
  };
  return [...tasks, newTask];
};

const toggleTaskStatus = (tasks: Task[], id: number): Task[] => {
  return tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task
  });
};

const showTask = () => {
  tasks.forEach((task) => {
    console.log(`${task.title}, ${task.isCompleted ? "done" : "failed"}`);
  });
};

const updatedTasks = addTask(tasks, "political economy");
tasks = updatedTasks;
showTask();

tasks = toggleTaskStatus(tasks, 2);
showTask();


let myTask: Task[] =[]
myTask = addTask(myTask, "react")
myTask = addTask(myTask, "next")
myTask = addTask(myTask, "html")

const showTasks = () => {
  myTask.forEach((task) => {
    console.log(`${task.title}, ${task.isCompleted ? "done" : "failed"}`);
  });
};


myTask = toggleTaskStatus(myTask, myTask[2].id)

showTasks()
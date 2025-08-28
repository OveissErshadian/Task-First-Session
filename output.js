var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var tasks = [
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
var addTask = function (tasks, title) {
    var newTask = {
        id: Date.now(),
        title: title,
        isCompleted: false,
    };
    return __spreadArray(__spreadArray([], tasks, true), [newTask], false);
};
var toggleTaskStatus = function (tasks, id) {
    return tasks.map(function (task) {
        if (task.id === id) {
            return __assign(__assign({}, task), { isCompleted: !task.isCompleted });
        }
        return task;
    });
};
var showTask = function () {
    tasks.forEach(function (task) {
        console.log("".concat(task.title, ", ").concat(task.isCompleted ? "done" : "failed"));
    });
};
var updatedTasks = addTask(tasks, "political economy");
tasks = updatedTasks;
showTask();
tasks = toggleTaskStatus(tasks, 2);
showTask();
var myTask = [];
myTask = addTask(myTask, "react");
myTask = addTask(myTask, "next");
myTask = addTask(myTask, "html");
var showTasks = function () {
    myTask.forEach(function (task) {
        console.log("".concat(task.title, ", ").concat(task.isCompleted ? "done" : "failed"));
    });
};
myTask = toggleTaskStatus(myTask, myTask[2].id);
showTasks();

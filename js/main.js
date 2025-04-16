import { Task } from "./task.js";
import { updateScreenwithTasks } from "./dom.js";


let task=new Task('wash clothes','wash it well')
task.update('do laundry','use washing machine for laundry');
task.toggle()

let task2=new Task('do your bed',
    'finish your bed stuff',true
)

updateScreenwithTasks([task,task2])
console.log(task)
task2.toggle()
console.log(task2)


/* 
create a task manager class to handle getting all tasks, getting tasks by id, 

*/

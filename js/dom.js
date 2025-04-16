let body=document.getElementById('body')
let p=document.createElement('h1');
let desc=document.createElement('p')
let div=document.createElement('div');
export function updateScreenwithTasks(tasks){
    tasks.map(task=>{
        p.textContent=`${task.name}\n`;
        desc.textContent=`${task.description}`
        div.append(p)
        div.append(desc)
        body.append(div)
    })
   
 
}
let body=document.getElementById('body')

export function updateScreenwithTasks(tasks){
    tasks.map(task=>{
        let p=document.createElement('h1');
        let desc=document.createElement('p')
        let div=document.createElement('div');
        p.textContent=`${task.name}\n`;
        desc.textContent=`${task.description}`
        div.append(p)
        div.append(desc)
        body.append(div)
    })
   
 
}
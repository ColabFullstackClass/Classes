// class Car{
//     constructor(name,plateNumber){
//         this.plate=plateNumber;
//         this.nm=name;
        
//     }
//     speak(){
//         console.log(`${this.nm} goes vroom vroom`)
//     }

// }

// export class CustomCar extends Car{
//  constructor(name,plateNumber,numberOfDiamonds){
//     super(name,plateNumber)
//     this.diamonds=numberOfDiamonds;
//  }

//  numOfDiamonds(){
//       console.log(this.diamonds);
//  }
// }


// let RollsRoyce=new CustomCar('RollsRoyce','12345',500);
// RollsRoyce.speak()
// RollsRoyce.numOfDiamonds()

// export default ()=>{}


export class Task{
    constructor(name,description,isCompleted=false){
        this.id=Date.now()
        this.name=name;
        this.description=description;
        this.isCompleted=isCompleted;
        
    }
    toggle(){
      this.isCompleted=!this.isCompleted;
    }

    update(name,desc){
        if(!name && !desc){
            console.log('enter name or description')
            return;
        }
       if(name){
        this.name=name;
       }
       if(desc){
        this.description=desc;
       }
    }
}

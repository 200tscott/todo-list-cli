const prompt = require('prompt-sync')({sigint: true});

let todos = [];
const iscomplete = [];

    
console.log(" [1]Open to-do list  [2]Mark items as complete.")

    let num1 = Number(prompt(">"));

    while (num1 === 1 ) {
            for (let i=0; i < todos.length; i++){ 
                console.log("Number: " + i + " " + iscomplete[i] + " " + todos[i]) 
            }
        console.log("[1]Add items  [2] Mark as complete:")
        let task1 = Number(prompt(">"))
                if (task1 === 1){
                    let add1 = String(prompt("Add item to your to-do list: "))
                    todos.push(add1)
                    iscomplete.push("incomplete")
                }
                if (task1 === 2){
                    console.log("You have: " +todos.length + " to-dos left.")
                    
                    console.log("Input number of item to mark as completed")
                    iscomplete.unshift("complete")
                    let checkoff = Number(prompt(">"))
                    let n = checkoff
                    
                        console.log("Number: " + checkoff + " " + iscomplete[0] + " " + todos[n])

                       
                        }else {
                            console.log("!error!")
                        }


            }



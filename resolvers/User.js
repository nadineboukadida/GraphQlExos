import {db} from "../data/db.js";

export const User = {
    todos: ( user ) => {
        let res=[]
        for (let i = 0; i < user.todos.length; i++) {
            console.log("todos")
        res.push(  db.todo.find(todo => todo.id==user.todos[i]))
        }
        return res
      
    }
}

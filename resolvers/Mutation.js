import {v4 as uuidv4} from 'uuid';

export const Mutation = {
    addTodo: (parent, { addTodoInput }, { db,pubsub }, info) => {
        const newTodo = {id: uuidv4() , ...addTodoInput};
        const user = db.users.find(user => user.id == addTodoInput.user)
        if(!user) {
          throw new Error("cannot find user");
        } 
     pubsub.publish('todo', {op:"add",data: newTodo})
        db.todo.push(newTodo);
      
        // pubsub.publish('newTodo', {newTodo})
        return newTodo;
    },

    updateTodo: (parent, { id, UpdateTodoInput }, { db,pubsub }, info) => {
     const mytodo = db.todo.find(todo =>todo.id == id )
      if(!mytodo) {
          throw new Error("cannot find todo");
      }
      UpdateTodoInput.name&&(mytodo.name= UpdateTodoInput.name);
      UpdateTodoInput.content && (mytodo.content = UpdateTodoInput.content);
      UpdateTodoInput.user&& (mytodo.user = UpdateTodoInput.user);
      UpdateTodoInput.status && (mytodo.status = UpdateTodoInput.status);
      db.todo.push(mytodo);
        // pubsub.publish('newTodo', {newTodo})
        pubsub.publish('todo', {op:"update",data: mytodo})

        return mytodo;
    },
    deleteTodo: (parent, { id }, { db,pubsub }, info) => {
        const todo = db.todo.find(todo => todo.id == id)
        if(!todo) {
          throw new Error("cannot find todo");
        }
       const newdb =db.todo.filter(e => e.id != id)
       db.todo = newdb;
       pubsub.publish('todo', {op:"delete",data: todo})

        // pubsub.publish('newTodo', {newTodo})
        return newdb;
    }
}

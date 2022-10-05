const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let s=all.filter(item => item.dueDate === yesterday);
    return s;

  }

  const dueToday = () => {
    let p=all.filter(item => item.dueDate ===today );
    return p;
  }

  const dueLater = () => {
    let q=all.filter(item => item.dueDate === tomorrow);
    return q;
  }

  const toDisplayableList = (list) => {
    let OUTPUT_STRING="";
    list.forEach(element => {
      if(element.completed==true){
        OUTPUT_STRING+="[x]"+" "+element.title;
        if(element.dueDate!=today)
         OUTPUT_STRING+=" "+element.dueDate+"\n";
        else
        OUTPUT_STRING+="\n"
      }
      else{
        OUTPUT_STRING+="[]"+" "+element.title;
        if(element.dueDate!=today)
         OUTPUT_STRING+=" "+element.dueDate+"\n";
         else
         OUTPUT_STRING+="\n"
      }
    });

    return OUTPUT_STRING
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();
let s=[];
const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n")
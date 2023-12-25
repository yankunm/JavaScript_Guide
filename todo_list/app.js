
let list = [];
let command;

// WHILE what the user has not quit
while ("quit" !== (command = prompt("Please enter a command").toLowerCase())) {
    switch (command) {
        case "new": // add a new todo
            list.push(prompt("Please enter your todo"));
            break;
        case "list": // list all todos
            console.log("*******");
            for (let i = 0; i < list.length; i++) {
                console.log(`${i}:${list[i]}`);
            }
            console.log("*******");
            break;
        case "delete":
            let i = parseInt(prompt("Please enter index of todo you want to delete"));
            if (i >= 0 && i < list.length && !Number.isNaN(i)) {
                list.splice(i, 1);
            } else {
                console.log("Invalid Index");
            }
            break;
    }
}

if (command === "quit") {
    console.log("The App has quit");
}
// Voice assistant


let nameArr = [];
let getName = "";
let todo = [];
const favsportsArr = [];

function getReply(command) 
{

    if (typeof command !== "string") {
        return "please enter valid string"
    }
    let stringName = command.toLowerCase().split(' '); // This will make all letters into lowercase

    if (command.toLowerCase().includes('hello my name is')) {
        let getName = stringName[stringName.length - 1];
        nameArr.push(getName);

        // if (nameArr[(nameArr.length-2)] == nameArr[nameArr.length-1])

        if ((new Set(nameArr)).size !== nameArr.length)   // locating duplicate name
        {
            nameArr.splice(nameArr[(nameArr.length - 1)], 1);
            return "you have entered your name again"
        }
        else {
            return `nice to meet you ${getName}.`;
        }
    }

    else if (command.toLowerCase() === "what is my name") {
        if (nameArr == "") {
            return `Your have not registered your name yet.`;

        } else {
            return `Your name is ${nameArr[(nameArr.length - 1)]}.`;
        }


    }
    /* .............adding to my todo.......................*/

    else if (command.toLowerCase().includes('to my todo')) {
        const commandArr = command.toLowerCase().split(' ');

        const itemTodoArr = commandArr.slice(1, -3);

        const todoContent = itemTodoArr.join(' ');

        todo.push(todoContent);

        return `${todoContent} added to your todo`;
    }
    else if (command === 'what is on my todo') {
        return todo;
    }
    /*------------------Removing from Todo----------------------------*/

    else if (command.toLowerCase().includes('remove')) {
        const commandArr = command.toLowerCase().split(' ');

        const removeTodoArr = commandArr.slice(1, -3);

        todo.shift(removeTodoArr);

        return `removed ${removeTodoArr} from your todo`;
    }

    /*------------------date----------------------------*/
    else if ((command.toLowerCase().includes('today'))) {
        const today = new Date();

        const todayDate = today.getDate();

        const year = today.getFullYear();
        const currentDay = new Date().toLocaleString('en-us', { month: 'long' });
        return `Today is ${todayDate}. of ${currentDay} ${year}`;
    }
    /*------------------favourite sports----------------------------*/


    else if (command.toLowerCase().includes('my favourite sports is')) {
        const commandArr = command.toLowerCase().split(' ');

        const favSportsName = commandArr[commandArr.length - 1];
        favsportsArr.push(favSportsName);
        return `my favourite sports is ${favsportsArr}`;
    }
    else if (command.toLowerCase().includes('what is my favourite sports')) {
        return `your favourite sport is ${favsportsArr[favsportsArr.length - 1]}.`;
    }
    /*------------------timer----------------------------*/

    else if (command.toLowerCase().includes('set a timer for')) {
        const commandArr = command.toLowerCase().split(' ');

        const timer = commandArr[commandArr.length - 2];
        const milliSeconds = timer * 60000; // converting 4 minutes into milliseconds 
        setTimeout(() => {
            console.log('Timer done')
        }, milliSeconds);
        return `Timer set for ${timer} minutes.`;
    }

    /*------------------Arithmetic Operations----------------------------*/

    else if (command.includes('what is')) {
        const commandArr = command.split(' ');
        const num1 = Number(commandArr[commandArr.length - 3]);
        const num2 = Number(commandArr[commandArr.length - 1]);
        const operator = commandArr[commandArr.length - 2];
        let output;
        switch (operator) {
            case "+":
                return `${num1} ${operator} ${num2} = ${num1 + num2}`;
                break;
            case "*":
                return `${num1} ${operator} ${num2} = ${num1 * num2}`;
                break;
            case "-":
                return `${num1} ${operator} ${num2} = ${num1 - num2}`;
                break;
            case "/":
                return `${num1} ${operator} ${num2} = ${(num1 / num2).toFixed(2)}`;
                break;
            case "%":
                return `${num1} ${operator} ${num2} = ${num1 % num2}`;

            default:
                return "Not a valid operator!"
        }

    }

};
console.log(getReply(123)); //please enter valid string
console.log(getReply('WhAt is my Name'));   // Your have not registered your name yet.
console.log(getReply('helLo my Name is Adnan'));    //nice to meet you adnan.
console.log(getReply('what is my name'))    //Your name is adnan.  
console.log(getReply('helLo my Name is Adnan')); //you have entered your name again
console.log(getReply('helLo my Name is dani')); //nice to meet you dani.
console.log(getReply('what is my name'));   //Your name is dani.
console.log(getReply('helLo my Name is dani')); //  you have entered your name again 
console.log(getReply('what is my name'));   //Your name is dani.
console.log(getReply('helLo my Name is Adnan')); //you have entered your name again

console.log(getReply('Add fishing to my todo'));    //fishing added to your todo
console.log(getReply('Add singing in the shower to my todo'));  //singing in the shower added to your todo
console.log(getReply('what is on my todo'));    // ["fishing", "singing in the shower"]
console.log(getReply('Remove fishing from my todo'));   //removed fishing from your todo
console.log(getReply('what is on my todo'));    //["singing in the shower"]

console.log(getReply('what date is it today'))
console.log(getReply('my favourite sports is cricket')) //my favourite sports is cricket
console.log(getReply('what Is my favourite sports'))    //your favourite sport is cricket.
console.log(getReply('Set a timer for 0.1 minutes')); // Timer set for 0.1 minutes. after few seconds ... Timer Done

console.log(getReply('what is 3 + 3'));
console.log(getReply('what is 3 * 12'));
console.log(getReply('what is 100 / 30'));
console.log(getReply('what is 99 % 4'));
console.log(getReply('what is 99 $ 4'));    //Not a valid operator!
const names = ["Amarilis","Mom", "Teacher", "Friends"];

function writeCards(name,event){
    let messages = [];    //Variable to store my new array
    for(let i=0; i<name.length;i++){
        // console.log(`Thank you, ${name[0]}, for the wonderful ${event} gift!`);
        // debugger;
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);

    }
    return messages;
}

function countDown(number){
    //let countDown = [];
    let i = 0;
    while (i <= number){
        console.log(number--)
    }
    return number;
}

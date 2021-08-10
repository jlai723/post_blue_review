// Be careful of what you assume

class Count {
    constructor(n){
        this.number = n
    }
    next() {
        let tmp = this.number;
        this.number -= 1;
        if (tmp > 0) return tmp;
        throw "Out of tickets"
    }
}

let giveTickets = (t) => {
    console.log(t)
}

let tickets = new Count(20)
for (let i = 0; i<= 25; i++) {
    try {
        giveTickets(tickets.next())
    } catch(err) {
        console.log("We are all out", err)
    }
}

let someFunction = (x, y) => { return x + y }

console.log(someFunction(2, 5))
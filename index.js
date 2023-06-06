// class Governor {
//       name;
//       age;
//       state;


// greeting() {
//     console.log(`Hello, my name is ${this.name}, im ${this.age} years old and im the governor of the state of ${this.state}`);
// }

// static getTermLimit() {
//     return 2;
// }

// static getAgeRequirement() {
//     return 18;
// }

// static ableToRun(age) {
//     return age >= Governor.getAgeRequirement();
// }
// }

// console.log(Governor.getTermLimit());

// const age1 = 36
// console.log(Governor.ableToRun(age1));


class Person{
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    sayHi() {
        console.log(`Hello!`);
    }

    greeting() {
        console.log(`Hey, my name is ${this.name} and I identify as a ${this.gender}`);
    }

    birthday() {
        this.age++;
        console.log(`Today is my birthday and I am turning ${this.age}`);
    }
}

class PostalWorker extends Person {
    mailDelivery() {
        console.log(`My name is ${this.name} and I deliver the mail.`);
    }

    mailGender() {
        console.log(`Based on my preference, you can call me a mail ${this.gender}`);
    }
}

class Chef extends Person {
    foodService() {
        console.log(`My name is ${this.name} and I cook the food.`);
    }

    chefGender() {
        console.log(`Regardless of my preference, im still called a ${this.gender} Chef.`);
    }
}

const postalWorker1 = new PostalWorker("Bob", 27, "man");
postalWorker1.greeting();
postalWorker1.mailGender();

const postalWorker2 = new PostalWorker("Briana", 28, "lady");
postalWorker2.greeting();
postalWorker2.mailGender();

const chef1 = new Chef("Mike", 33, "male");
chef1.greeting();
chef1.chefGender();

const chef2 = new Chef("Maria", 34, "female");
chef2.greeting();
chef2.chefGender();


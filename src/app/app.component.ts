import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  example () {

    let var1 = 'Hello';
    var var2 = 'Beinex';
    const var3 = 'Team';

    if(2>1){
      let var1 = 'Good';
      var var2 = 'Morning';

      console.log(var1)
      console.log(var2)
      console.log(var3)
    }
  }
}

// Let Example  Only Accesible within the block

let count = 6;
if (count > 0){
  let message = 'Positive Count';
  console.log('Message:', message)
}

// Var Example : It can be Accesible outside the Scope
var number = 6;
if (number > 0){
  let message = 'Positive Count';
  console.log('message:', number)
}
console.log('number:', number);
console.log('message2',number )

//Const Example: Can be modified but cannot be re-assigned

const person = { name: 'Subin', age :26}

person.age=28;
console.log('Person', person)




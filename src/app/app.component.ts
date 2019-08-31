import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  groceryArray = [];

  addGrocery(grocery: string){
    this.groceryArray.push(grocery);
  }

  deleteGrocery(grocery: string) {
    for (let i = 0; i <= this.groceryArray.length; i++) {
      if (grocery == this.groceryArray[i]) {
        this.groceryArray.splice(i,1);
      }
    }
  }

  grocerySubmit(grocery: string) {
    console.log(grocery);
    if (grocery != "") {
      this.groceryArray.push(grocery);
    }
  }
}

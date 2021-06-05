import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fauna';
  myimage:string ="assets/images/tiger.jpg";
  myimag: string ="assets/images/heal.png"


  onClick(){
    alert("You can find all animals from here")
  }
  onc(){
    alert("Corona virus updates")
  }

  onclk(){
    alert("All Mummals is here")
  }

a1(){
  alert("You are Looking About Single Animal Page")
}
a2(){
  alert("You are Looking About Groups Animal Pages")
}
a3(){
  alert("Hey Raja here")
}

}

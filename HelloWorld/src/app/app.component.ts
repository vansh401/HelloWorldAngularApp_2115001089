import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:string = 'Hello From BridgeLabz';
  imgUrl: string = 'bridgeLabz.jpeg';
  userName:string='';
  nameError:string='';

  get welcomeMessage():string{
    return this.userName?`Hello ${this.userName} from BridgeLabz, `:'';
  }

  onInput(event: Event) {
    console.log('Input Event Occurred!', event);
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;

    if (nameRegex.test(this.userName)) {
      this.nameError = '';
    } else {
      this.nameError = 'Name is Incorrect!';
    }
  }
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
  
}


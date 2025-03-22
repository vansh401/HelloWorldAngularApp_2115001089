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

  get welcomeMessage():string{
    return this.userName?`Hello ${this.userName} from BridgeLabz, `:'';
  }
  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
  
}


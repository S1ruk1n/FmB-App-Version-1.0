import { Component, NgModule } from '@angular/core';
import { AppUiModule } from '../app-ui.module';



@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})

@NgModule ({
  imports: [
    AppUiModule
  ]
})
export class MenueComponent {

}

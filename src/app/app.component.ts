import { Component } from '@angular/core'; 
import { HeaderComponent } from './header.component';

@Component({
  moduleId: module.id,
  selector: 'rp-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent]
})
export class AppComponent {
  title = 'My-first-app works!';
}

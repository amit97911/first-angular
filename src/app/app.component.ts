import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, faPhoneSquare, faSpinner, faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faCoffee, faStar, faSpinner, faPhoneSquare);
  }

}

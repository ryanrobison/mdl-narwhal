import { Component } from '@angular/core';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MD_BUTTON_DIRECTIVES]
})

export class AppComponent {
  title = 'app works!';


  mobile_nav_button(event) {
    event.preventDefault();

    let sidebar = document.getElementById('sidebar');

    document.getElementById('mobile-header-hamburger').classList.toggle('active');
    document.documentElement.classList.toggle('page-mask');
    document.documentElement.classList.toggle('no-scroll');
    sidebar.classList.toggle('active');

  }


}

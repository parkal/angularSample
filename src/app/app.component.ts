import { Component } from '@angular/core';
 

@Component({
  selector: "my-comp",
  template: `<h1>Inside HTML File</h1>

  <div>
      <li>
          <ul>{{name}}</ul>
      </li>
      <li>
          <Employee></Employee>
      </li>
  </div>
  
  `
})
export class AppComponent {

  name: string = "Angular Application!"
}
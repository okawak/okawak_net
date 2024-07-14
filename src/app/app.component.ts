import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: `<main>
    <h1>{{ title }} home page</h1>
    <ul>
      <li><a href="https://github.com/okawak">my github page</a></li>
    </ul>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'okawak_net';
}

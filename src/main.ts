import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent],
  templateUrl: './app.component.html'
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [RouterModule]
});

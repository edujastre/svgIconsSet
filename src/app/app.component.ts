import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
imports: [
  CommonModule,
  MatIconModule
],
exports: [
  MatIconModule
]
})
export class AppComponent {
  title = 'Tour of Heroes, motherfucker';
}

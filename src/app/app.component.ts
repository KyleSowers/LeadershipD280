import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeopleService } from '../shared/people.service';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  peopleArray: any;

  constructor(private peopleService: PeopleService) { }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.peopleArray = people
    });
  }

  ngOnInit() {
    this.getPeople();
  }
}

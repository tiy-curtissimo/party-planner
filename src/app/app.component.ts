import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPerson, Person } from './person';
import { AddPerson, RemovePerson, AddGuest, RemoveGuest, ToggleAttending } from './actions';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

interface AppState {
  people: IPerson[];
}

let id = 0;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people$: Observable<IPerson[]>;
  subscription: Subscription;

  constructor (
    private store: Store<AppState>
  ) {
    this.people$ = this.store.select('people');
  }

  addPerson(name: string) {
    const person = new Person(id++, name);
    this.store.dispatch(new AddPerson(person));
  }

  removePerson(id: number) {
    this.store.dispatch(new RemovePerson(id));
  }

  addGuest(id: number) {
    this.store.dispatch(new AddGuest(id));
  }

  removeGuest(id: number) {
    this.store.dispatch(new RemoveGuest(id));
  }

  toggleAttending(id: number) {
    this.store.dispatch(new ToggleAttending(id));
  }
}

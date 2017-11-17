import { Action } from '@ngrx/store';
import { IPerson } from './person';

export const ADD_PERSON = 'ADD_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';
export const ADD_GUEST = 'ADD_GUEST';
export const REMOVE_GUEST = 'REMOVE_GUEST';
export const TOGGLE_ATTENDING = 'TOGGLE_ATTENDING';

export class AddPerson implements Action {
  readonly type = ADD_PERSON;
  constructor(public readonly payload: IPerson) {}
}

export class RemovePerson implements Action {
  readonly type = REMOVE_PERSON;
  constructor(public readonly payload: number) {}
}

export class AddGuest implements Action {
  readonly type = ADD_GUEST;
  constructor(public readonly payload: number) {}
}

export class RemoveGuest implements Action {
  readonly type = REMOVE_GUEST;
  constructor(public readonly payload: number) {}
}

export class ToggleAttending implements Action {
  readonly type = TOGGLE_ATTENDING;
  constructor(public readonly payload: number) {}
}

export type All = AddPerson
                | RemovePerson
                | AddGuest
                | RemoveGuest
                | ToggleAttending;

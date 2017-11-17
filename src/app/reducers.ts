import * as Actions from './actions';
import { IPerson } from './person';

export type Action = Actions.All;

const details = (state: IPerson, action: Action) => {
  switch (action.type) {
    case Actions.ADD_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests + 1 });
      }
      break;
    case Actions.REMOVE_GUEST:
      if (state.id === action.payload) {
        return Object.assign({}, state, { guests: state.guests - 1 });
      }
      break;
    case Actions.TOGGLE_ATTENDING:
      console.log(state);
      if (state.id === action.payload) {
        return Object.assign({}, state, { attending: !state.attending });
      }
      break;
    }
  return state;
}

export function people(state: IPerson[], action: Action): IPerson[] {
  state = state || [];
  switch (action.type) {
    case Actions.ADD_PERSON:
      return [
        ...state,
        Object.assign({}, {
          id: action.payload.id,
          name: action.payload.name,
          guests: 0,
          attending: false
        })
      ];
    case Actions.REMOVE_PERSON:
      return state
        .filter(person => person.id !== action.payload);
    case Actions.ADD_GUEST:
      return state.map(person => details(person, action));
    case Actions.REMOVE_GUEST:
      return state.map(person => details(person, action));
    case Actions.TOGGLE_ATTENDING:
      return state.map(person => details(person, action));
  }
  return state;
};

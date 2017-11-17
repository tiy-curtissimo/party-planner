export interface IPerson {
  id: number;
  name: string;
  guests: number;
  attending: boolean;
}

export class Person implements IPerson {
  guests = 0;
  attending = false;

  constructor(
    public id: number,
    public name: string
  ) {
  }
}

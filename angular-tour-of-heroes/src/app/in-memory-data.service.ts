import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Subaru BRZ' },
      { id: 13, name: 'Toyota Supra' },
      { id: 14, name: 'Ford Mustang' },
      { id: 15, name: 'Chevrolet Corvette' },
      { id: 16, name: 'Porsche 911' },
      { id: 17, name: 'Ferrari F8' },
      { id: 18, name: 'Maserati MC20' },
      { id: 19, name: 'McLaren 720S' },
      { id: 20, name: 'Tesla Model X' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: '张三',top:true },
      { id: 12, name: '李四' ,top:true},
      { id: 13, name: '王五' ,top:true},
      { id: 14, name: '赵六' ,top:true},
      { id: 15, name: '测试' ,top:false},
      { id: 16, name: '测试1',top:false },
      // { id: 17, name: 'Narco',top:true },
      // { id: 18, name: 'Bombasto' ,top:false},
      
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
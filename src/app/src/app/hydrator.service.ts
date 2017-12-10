import { Injectable } from '@angular/core';
import { Annotation } from './hydrator/annotation';

const mappingKey = Annotation.getMappinKey();


@Injectable()
export class HydratorService {

  constructor() { }

  hydrate<T>(constructorFn: new (...args) => T, data: Object) {

    let existingMap = Reflect.getOwnMetadata(mappingKey, constructorFn) || [];
    let args = [];
    existingMap.sort( (a, b) => {
      return a.parameterIndex < b.parameterIndex;
    });

    existingMap.forEach(element => {
      args.push(data[element.path]);
    });

    return new constructorFn(...args);
  }
}

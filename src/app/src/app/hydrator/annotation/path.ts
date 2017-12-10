import { Annotation } from './../annotation';

const mappingKey = Annotation.getMappinKey();

export function path(path: any) {

  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {

    let existingMap = Reflect.getOwnMetadata(mappingKey, target) || [];

    existingMap.push({ path, parameterIndex });

    Reflect.defineMetadata(mappingKey, existingMap, target);
  };
};
import { Annotation } from './../annotation';

const mappingKey = Annotation.getMappinKey();

export function DTO(annotation: any) {

  return function (target) {
    // let existingMap = Reflect.getOwnMetadata(mappingKey, target) || [];

    return target;
  };
}

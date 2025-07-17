type Grouped<T> = Record<string, T[]>;

export default function groupBy<T extends Record<string, any>>(
  arrayOfObjects: T[],
  property: keyof T
): Grouped<T> {
  return arrayOfObjects.reduce((acc: Grouped<T>, object) => {
    const key = object[property];

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(object);
    return acc;
  }, {});
}

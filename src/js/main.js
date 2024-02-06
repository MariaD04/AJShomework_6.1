export default function orderByProps(obj, propertyList) {
  const propListSorted = [];
  const propAlphabetSorted = [];

  for (const property in obj) {
    const objNew = {
      key: property,
      value: obj[property],
    };
    if (propertyList.includes(property)) {
      const index = propertyList.indexOf(property);
      propListSorted[index] = objNew;
    } else {
      propAlphabetSorted.push(objNew);
    }
  }

  propAlphabetSorted.sort((a, b) => a.key.localeCompare(b.key));
  const result = propListSorted.concat(propAlphabetSorted);
  return result;
}

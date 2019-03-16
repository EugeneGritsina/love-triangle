/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

 
module.exports = function getLoveTrianglesCount(preferences = []) {
  
  let amountOfTriangles = 0;
  let arrayOfUsedTriangles = new Array(130);
  for (let i = 0; i < 130; i++) {
    arrayOfUsedTriangles[i] = new Array(3);
    for (let j = 0; j < 3; j++) {
      arrayOfUsedTriangles[i][j] = 0;
    }
  }

function isAlreadyUsedTriangle(f, s, t, array) {
    for (let i = 0; i < array.length; i++) {
        if (f == array[i][0] || f == array[i][1] || f == array[i][2] &&
                s == array[i][0] || s == array[i][1] || s == array[i][2] &&
                t == array[i][0] || t == array[i][1] || t == array[i][2])
            return false;
    }
    return true;
}

for (let i = 0, j = 0; i < preferences.length; i++) {
  let firstElement = preferences[i];
  let secondElement = preferences[firstElement - 1];
  let thirdElement = preferences[secondElement - 1];
  if (thirdElement == i + 1 && thirdElement != firstElement && thirdElement != secondElement) {
    if (isAlreadyUsedTriangle(firstElement, secondElement, thirdElement, arrayOfUsedTriangles)) {
      amountOfTriangles++;
      arrayOfUsedTriangles[j][0] = firstElement;
      arrayOfUsedTriangles[j][1] = secondElement;
      arrayOfUsedTriangles[j][2] = thirdElement;
      j++;
  }
  }
}
return amountOfTriangles;

}

  
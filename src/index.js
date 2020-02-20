
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let joinArray = [];

	if(matrix === undefined || matrix.length === 0) {
	    return [];
	}

	for (let i = 0; i < matrix.length; i++) {
		if(i % 2 === 0) {
			matrix[i];
		} else {
      matrix[i].reverse();
    }

    let arr = matrix[i];
		for(let j = 0; j < arr.length; j++) {
			joinArray.push(arr[j]);
		}
	}
  return joinArray;
}

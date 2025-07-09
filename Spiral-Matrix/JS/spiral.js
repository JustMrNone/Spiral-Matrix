function getSpiralOrder(matrix) {
    let answer = [];
    while (matrix.length > 0) {
        answer.push(...matrix.shift());
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let row of matrix) {
                answer.push(row.pop());
            }
        }
        if (matrix.length > 0) {
            answer.push(...matrix.pop().reverse());
        }
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                answer.push(matrix[i].shift());
            }
        }
    }
    return answer;
}

function getReverseSpiralOrder(matrix) {
    return getSpiralOrder(matrix).reverse();
}

function getRecursiveSpiralOrder(matrix) {
    if (matrix.length === 0) {
        return [];
    }
    const firstRow = matrix.shift();
    const rest = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i])).reverse() : [];
    return firstRow.concat(getRecursiveSpiralOrder(rest));
}

function createSpiralMatrix(m, n) {
    const matrix = Array.from({ length: m }, () => Array(n).fill(0));
    let num = 1;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = num++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                matrix[bottom][j] = num++;
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
}

// Example usage:
console.log(getSpiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(getReverseSpiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(getRecursiveSpiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(createSpiralMatrix(3, 5));
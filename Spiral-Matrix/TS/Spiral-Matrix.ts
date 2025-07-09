/* 

Given an m x n matrix, return all elements of the matrix in spiral order.
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5] 

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]


*/ 

function spiralMati(matrix: number[][]): number[] {
    let ans: number[] = [];

    while (matrix.length > 0) {
        ans.push(...matrix.shift()!);

        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let i = 0; i < matrix.length; i++) {
                ans.push(matrix[i].pop()!);
            }
        }

        if (matrix.length > 0) {
            ans.push(...matrix.pop()!.reverse());
        }

        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                ans.push(matrix[i].shift()!);
            }
        }
    }

    return ans;
}

function spiralOrder(matrix: number[][]): number[] {
    let answer: number[] = [];
    while (matrix.length > 0) {
        answer.push(...matrix.shift()!);
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let row of matrix) {
                answer.push(row.pop()!);
            }
        }
        if (matrix.length > 0) {
            answer.push(...matrix.pop()!.reverse());
        }
        if (matrix.length > 0 && matrix[0].length > 0) {
            for (let i = matrix.length - 1; i >= 0; i--) {
                answer.push(matrix[i].shift()!);
            }
        }
    }
    return answer;
}

function reverseSpiral(matrix: number[][]): number[] {
    return spiralOrder(matrix).reverse();
}

//fuck u
function recursiveSpiral(matrix: number[][]): number[] {
    // Base case: if the matrix is empty, return an empty array
    if (matrix.length === 0) {
        return [];
    }
    // Remove and store the first row of the matrix
    const firstRow = matrix.shift()!;
    // Shit is about to hit the fan
    // Rotate the remaining matrix counterclockwise:
    // - Transpose the matrix (swap rows and columns)
    // - Reverse the order of the rows to achieve a 90-degree rotation
    const rest = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i])).reverse() : [];
    // Concatenate the first row with the spiral order of the rotated submatrix
    return firstRow.concat(recursiveSpiral(rest));

    // :| time complexity is O(n) + (O((m-1)) + O((n-1))) = O(m x n)
    // space complexity is O(m + n) due to the recursion stack
}

function generateSpiralMatrix(m: number, n: number): number[][] {
    const matrix: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
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
console.log(spiralMati([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(reverseSpiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(recursiveSpiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(generateSpiralMatrix(3, 5));

/*
note to self:
leave fucking comments
for fuck's sake.

*/

#include <stdio.h>
#include <stdlib.h>

void getSpiralOrder(int rows, int cols, int matrix[rows][cols], int *result, int *resultSize) {
    int top = 0, bottom = rows - 1, left = 0, right = cols - 1;
    int index = 0;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (int i = left; i <= right; i++) {
            result[index++] = matrix[top][i];
        }
        top++;

        // Traverse from top to bottom
        for (int i = top; i <= bottom; i++) {
            result[index++] = matrix[i][right];
        }
        right--;

        // Traverse from right to left
        if (top <= bottom) {
            for (int i = right; i >= left; i--) {
                result[index++] = matrix[bottom][i];
            }
            bottom--;
        }

        // Traverse from bottom to top
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result[index++] = matrix[i][left];
            }
            left++;
        }
    }

    *resultSize = index;
}

int main() {
    int matrix[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    int rows = 3, cols = 3;
    int result[rows * cols];
    int resultSize;

    getSpiralOrder(rows, cols, matrix, result, &resultSize);

    printf("Spiral Order: ");
    for (int i = 0; i < resultSize; i++) {
        printf("%d ", result[i]);
    }
    printf("\n");

    return 0;
}
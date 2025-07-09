package main

import (
	"fmt"
)

func getSpiralOrder(matrix [][]int) []int {
	var answer []int
	for len(matrix) > 0 {
		// Add the first row
		answer = append(answer, matrix[0]...)
		matrix = matrix[1:]

		// Add the last column
		if len(matrix) > 0 && len(matrix[0]) > 0 {
			for i := 0; i < len(matrix); i++ {
				answer = append(answer, matrix[i][len(matrix[i])-1])
				matrix[i] = matrix[i][:len(matrix[i])-1]
			}
		}

		// Add the last row in reverse
		if len(matrix) > 0 {
			lastRow := matrix[len(matrix)-1]
			for i := len(lastRow) - 1; i >= 0; i-- {
				answer = append(answer, lastRow[i])
			}
			matrix = matrix[:len(matrix)-1]
		}

		// Add the first column in reverse
		if len(matrix) > 0 && len(matrix[0]) > 0 {
			for i := len(matrix) - 1; i >= 0; i-- {
				answer = append(answer, matrix[i][0])
				matrix[i] = matrix[i][1:]
			}
		}
	}
	return answer
}

func getReverseSpiralOrder(matrix [][]int) []int {
	spiral := getSpiralOrder(matrix)
	for i, j := 0, len(spiral)-1; i < j; i, j = i+1, j-1 {
		spiral[i], spiral[j] = spiral[j], spiral[i]
	}
	return spiral
}

func getRecursiveSpiralOrder(matrix [][]int) []int {
	if len(matrix) == 0 {
		return []int{}
	}
	firstRow := matrix[0]
	matrix = matrix[1:]

	rest := [][]int{}
	if len(matrix) > 0 {
		for i := 0; i < len(matrix[0]); i++ {
			newRow := []int{}
			for j := len(matrix) - 1; j >= 0; j-- {
				newRow = append(newRow, matrix[j][i])
			}
			rest = append(rest, newRow)
		}
	}
	return append(firstRow, getRecursiveSpiralOrder(rest)...) 
}

func createSpiralMatrix(m, n int) [][]int {
	matrix := make([][]int, m)
	for i := range matrix {
		matrix[i] = make([]int, n)
	}

	num := 1
	top, bottom, left, right := 0, m-1, 0, n-1

	for top <= bottom && left <= right {
		for j := left; j <= right; j++ {
			matrix[top][j] = num
			num++
		}
		top++

		for i := top; i <= bottom; i++ {
			matrix[i][right] = num
			num++
		}
		right--

		if top <= bottom {
			for j := right; j >= left; j-- {
				matrix[bottom][j] = num
				num++
			}
			bottom--
		}

		if left <= right {
			for i := bottom; i >= top; i-- {
				matrix[i][left] = num
				num++
			}
			left++
		}
	}

	return matrix
}

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	fmt.Println("Spiral Order:", getSpiralOrder(matrix))
	fmt.Println("Reverse Spiral Order:", getReverseSpiralOrder(matrix))
	fmt.Println("Recursive Spiral Order:", getRecursiveSpiralOrder(matrix))
	fmt.Println("Generated Spiral Matrix:")
	for _, row := range createSpiralMatrix(3, 5) {
		fmt.Println(row)
	}
}
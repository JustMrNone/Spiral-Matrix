def SpiralOrder(TheMatrix: list[list[int]]) -> list[int]:
    answer = []
    Mat = TheMatrix
    while Mat:
        answer += Mat.pop(0)
        if Mat and Mat[0]:
            for row in Mat:
                answer.append(row.pop())
        if Mat: 
            answer += Mat.pop()[::-1]
        if Mat and Mat[0]:
            for row in Mat[::-1]:
                answer.append(row.pop(0))
    return answer 



matrix5 = [[1,2,3,4,5],[6,7,8,9],[10, 11, 12, 13]]
result = SpiralOrder(matrix5)


def SpiralMat(Mat: list[list[int]]) -> list[int]:
    ans: list[int] = []
    while Mat:
        ans += Mat.pop(0)
        if Mat and Mat[0]:
            for row in Mat:
                ans.append(row.pop())
        if Mat:
            ans += Mat.pop()[::-1]
            
        if Mat and Mat[0]:
            for row in Mat[::-1]:
                ans.append(row.pop(0))
        return ans
                
matrix = [ [1,2,3,4,5],[6,7,8,9],[10,11,12,13]]
print(SpiralMat(matrix))



def ReverseSpiral(Mati: list[list[int]]) -> list[int]:
    answer: list[int] = []
    
    while Mati:
        answer += Mati.pop(0)
        if Mati and Mati[0]:
            for row in Mati:
                answer.append(row.pop())
        if Mati:
            answer += Mati.pop()[::-1]
            
        if Mati and Mati[0]:
            for row in Mati[::-1]:
                answer.append(row.pop(0))
        
    return answer[::-1]
    
    
    
    
mymatrix = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11,12,13,14,15]]


print(ReverseSpiral(mymatrix))



def Spiral(Mati: list[list[int]]) -> list[int]:
    answer: list[int] = []
    
    while Mati:
        answer += Mati.pop(0)
        
        if Mati and Mati[0]:
            for row in Mati:
                answer.append(row.pop())
        if Mati:
            answer += Mati.pop()[::-1] 
            
        if Mati and Mati[0]:
            for row in Mati[::-1]:
                answer.append(row.pop(0))
                
    return answer

def recursiveSpiral(Matrix: list[list[int]]) -> list[int]:
    if not Matrix:
        return []
    
    first_row: list[int] = Matrix[0]
    
    rest: list[int] = []
    
    for row in zip(*Matrix[1:]):
        rest.append(list(row))
    rest.reverse()
    
    return first_row + recursiveSpiral(rest)
    
        
nomatrix = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11,12,13,14,15]]

rematrix = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11,12,13,14,15]]

print(Spiral(nomatrix))
print(recursiveSpiral(rematrix))


def generateSpiralMatrix(m: int, n: int) -> list[list[int]]:
    matrix = [[0] * n for _ in range(m)]  # Create an empty m x n matrix
    num = 1  # Start filling numbers from 1
    top, bottom, left, right = 0, m - 1, 0, n - 1

    while top <= bottom and left <= right:
        # Fill top row
        for j in range(left, right + 1):
            matrix[top][j] = num
            num += 1
        top += 1

        # Fill right column
        for i in range(top, bottom + 1):
            matrix[i][right] = num
            num += 1
        right -= 1

        # Fill bottom row
        if top <= bottom:
            for j in range(right, left - 1, -1):
                matrix[bottom][j] = num
                num += 1
            bottom -= 1

        # Fill left column
        if left <= right:
            for i in range(bottom, top - 1, -1):
                matrix[i][left] = num
                num += 1
            left += 1

    return matrix

# Example usage:
spiral_matrix = generateSpiralMatrix(3, 5)
for row in spiral_matrix:
    print(row)



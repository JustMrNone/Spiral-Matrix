#include <iostream>
#include <vector>
#include <algorithm>
#include <iterator> // Include for std::back_inserter

using namespace std;

vector<int> getSpiralOrder(vector<vector<int>> matrix) {
    vector<int> answer;
    while (!matrix.empty()) {
        // Add the first row
        if (!matrix.empty()) {
            std::copy(matrix.front().begin(), matrix.front().end(), std::back_inserter(answer));
            matrix.erase(matrix.begin());
        }

        // Add the last column
        if (!matrix.empty() && !matrix[0].empty()) {
            for (auto &row : matrix) {
                answer.push_back(row.back());
                row.pop_back();
            }
        }

        // Add the last row in reverse
        if (!matrix.empty()) {
            std::copy(matrix.back().rbegin(), matrix.back().rend(), std::back_inserter(answer));
            matrix.pop_back();
        }

        // Add the first column in reverse
        if (!matrix.empty() && !matrix[0].empty()) {
            for (int i = matrix.size() - 1; i >= 0; --i) {
                answer.push_back(matrix[i].front());
                matrix[i].erase(matrix[i].begin());
            }
        }
    }
    return answer;
}

vector<int> getReverseSpiralOrder(vector<vector<int>> matrix) {
    vector<int> spiral = getSpiralOrder(matrix);
    reverse(spiral.begin(), spiral.end());
    return spiral;
}

vector<int> getRecursiveSpiralOrder(vector<vector<int>> matrix) {
    if (matrix.empty()) {
        return {};
    }
    vector<int> firstRow = matrix[0];
    matrix.erase(matrix.begin());

    vector<vector<int>> rest;
    if (!matrix.empty()) {
        for (size_t i = 0; i < matrix[0].size(); ++i) {
            vector<int> newRow;
            for (int j = matrix.size() - 1; j >= 0; --j) {
                newRow.push_back(matrix[j][i]);
            }
            rest.push_back(newRow);
        }
    }
    vector<int> result = firstRow;
    vector<int> recursiveResult = getRecursiveSpiralOrder(rest);
    result.insert(result.end(), recursiveResult.begin(), recursiveResult.end());
    return result;
}

vector<vector<int>> createSpiralMatrix(int m, int n) {
    vector<vector<int>> matrix(m, vector<int>(n, 0));
    int num = 1;
    int top = 0, bottom = m - 1, left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; ++j) {
            matrix[top][j] = num++;
        }
        ++top;

        for (int i = top; i <= bottom; ++i) {
            matrix[i][right] = num++;
        }
        --right;

        if (top <= bottom) {
            for (int j = right; j >= left; --j) {
                matrix[bottom][j] = num++;
            }
            --bottom;
        }

        if (left <= right) {
            for (int i = bottom; i >= top; --i) {
                matrix[i][left] = num++;
            }
            ++left;
        }
    }

    return matrix;
}

int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    vector<int> spiralOrder = getSpiralOrder(matrix);
    cout << "Spiral Order: ";
    for (int num : spiralOrder) {
        cout << num << " ";
    }
    cout << endl;

    vector<int> reverseSpiralOrder = getReverseSpiralOrder(matrix);
    cout << "Reverse Spiral Order: ";
    for (int num : reverseSpiralOrder) {
        cout << num << " ";
    }
    cout << endl;

    vector<int> recursiveSpiralOrder = getRecursiveSpiralOrder(matrix);
    cout << "Recursive Spiral Order: ";
    for (int num : recursiveSpiralOrder) {
        cout << num << " ";
    }
    cout << endl;

    vector<vector<int>> spiralMatrix = createSpiralMatrix(3, 5);
    cout << "Generated Spiral Matrix:" << endl;
    for (const auto &row : spiralMatrix) {
        for (int num : row) {
            cout << num << " ";
        }
        cout << endl;
    }

    return 0;

    //I do not give a shit if this do not work!
}
const BubbleSort = require('../core/BubbleSort');

/**
 * Recursive implementation of bubble sort
 * Demonstrates recursive approach to sorting
 * 
 * Time Complexity: O(n²) - same as iterative version
 * Space Complexity: O(n) - due to recursion stack
 */
class RecursiveBubbleSort extends BubbleSort {
  /**
   * Implements recursive bubble sort
   * Base case: array of length 1 or less
   * 
   * @param {Array} arr - Array to sort
   * @returns {Array} - Sorted array
   */
  performSort(arr) {
    return this.recursiveBubble(arr, arr.length);
  }

  /**
   * Recursive helper function
   * @param {Array} arr - Array to sort
   * @param {number} n - Current array size to consider
   * @returns {Array} - Sorted array
   */
  recursiveBubble(arr, n) {
    // Base case: if array has 1 or no elements
    if (n === 1) {
      return arr;
    }

    // One pass of bubble sort
    // After this pass, largest element moves to end
    for (let i = 0; i < n - 1; i++) {
      if (this.compare(arr[i], arr[i + 1])) {
        this.swap(arr, i, i + 1);
      }
    }

    // Recursively sort the remaining n-1 elements
    return this.recursiveBubble(arr, n - 1);
  }
}

module.exports = RecursiveBubbleSort;
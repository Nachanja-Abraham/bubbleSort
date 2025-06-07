const BubbleSort = require('../core/BubbleSort');

/**
 * Classic bubble sort implementation
 * Uses the most basic form of bubble sort algorithm
 * 
 * Time Complexity: O(n²) - always performs n² comparisons
 * Space Complexity: O(1) - sorts in place
 */
class ClassicBubbleSort extends BubbleSort {
  /**
   * Implements classic bubble sort algorithm
   * Bubbles largest element to the end in each pass
   * 
   * @param {Array} arr - Array to sort
   * @returns {Array} - Sorted array
   */
  performSort(arr) {
    const n = arr.length;
    
    // Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
      // Inner loop for comparisons in each pass
      for (let j = 0; j < n - i - 1; j++) {
        // Compare adjacent elements
        if (this.compare(arr[j], arr[j + 1])) {
          this.swap(arr, j, j + 1);
        }
      }
    }
    
    return arr;
  }
}

module.exports = ClassicBubbleSort;
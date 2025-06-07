const logger = require('../utils/logger');

/**
 * Abstract base class for bubble sort implementations
 * Implements Template Method design pattern
 * 
 * Time Complexity: O(n²) worst/average case, O(n) best case
 * Space Complexity: O(1) - in-place sorting algorithm
 */
class BubbleSort {
  constructor() {
    if (this.constructor === BubbleSort) {
      throw new Error('Abstract class cannot be instantiated');
    }
    this.comparisons = 0;
    this.swaps = 0;
  }

  /**
   * Template method that defines the algorithm structure
   * @param {Array} arr - Array to be sorted
   * @returns {Array} - Sorted array
   */
  sort(arr) {
    logger.info('Starting bubble sort', { arrayLength: arr.length });
    this.resetCounters();
    
    const result = this.performSort([...arr]);
    
    logger.info('Bubble sort completed', {
      comparisons: this.comparisons,
      swaps: this.swaps,
      arrayLength: result.length
    });
    
    return result;
  }

  /**
   * Abstract method to be implemented by subclasses
   * @param {Array} arr - Array to sort
   * @returns {Array} - Sorted array
   */
  performSort(arr) {
    throw new Error('performSort method must be implemented');
  }

  /**
   * Compares two elements using the strategy pattern
   * @param {*} a - First element
   * @param {*} b - Second element
   * @returns {boolean} - True if a > b
   */
  compare(a, b) {
    this.comparisons++;
    return a > b;
  }

  /**
   * Swaps two elements in the array
   * @param {Array} arr - Array containing elements
   * @param {number} i - First index
   * @param {number} j - Second index
   */
  swap(arr, i, j) {
    this.swaps++;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  /**
   * Resets performance counters
   */
  resetCounters() {
    this.comparisons = 0;
    this.swaps = 0;
  }

  /**
   * Gets performance metrics
   * @returns {Object} - Performance data
   */
  getMetrics() {
    return {
      comparisons: this.comparisons,
      swaps: this.swaps
    };
  }
}

module.exports = BubbleSort;
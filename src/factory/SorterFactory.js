const ClassicBubbleSort = require('./implementations/ClassicBubbleSort');
const OptimizedBubbleSort = require('./implementations/OptimizedBubbleSort');
const RecursiveBubbleSort = require('./implementations/RecursiveBubbleSort');

/**
 * Factory pattern for creating different bubble sort implementations
 * Encapsulates object creation logic
 */
class SorterFactory {
  /**
   * Creates a bubble sort instance based on type
   * @param {string} type - Type of sorter to create
   * @returns {BubbleSort} - Bubble sort instance
   * @throws {Error} - If type is not supported
   */
  static createSorter(type) {
    switch (type.toLowerCase()) {
      case 'classic':
        return new ClassicBubbleSort();
      case 'optimized':
        return new OptimizedBubbleSort();
      case 'recursive':
        return new RecursiveBubbleSort();
      default:
        throw new Error(`Unsupported sorter type: ${type}`);
    }
  }

  /**
   * Gets all available sorter types
   * @returns {Array<string>} - Available types
   */
  static getAvailableTypes() {
    return ['classic', 'optimized', 'recursive'];
  }
}

module.exports = SorterFactory;
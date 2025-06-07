/**
 * Strategy pattern for different comparison strategies
 * Allows flexible comparison logic for different data types
 */

/**
 * Interface for comparison strategies
 */
class ComparatorStrategy {
  /**
   * Compare two elements
   * @param {*} a - First element
   * @param {*} b - Second element
   * @returns {number} - Negative if a < b, 0 if equal, positive if a > b
   */
  compare(a, b) {
    throw new Error('compare method must be implemented');
  }
}

/**
 * Numeric comparison strategy
 * Compares numbers in ascending order
 */
class NumericComparator extends ComparatorStrategy {
  compare(a, b) {
    return a - b;
  }
}

/**
 * String comparison strategy
 * Compares strings lexicographically
 */
class StringComparator extends ComparatorStrategy {
  compare(a, b) {
    return a.localeCompare(b);
  }
}

/**
 * Reverse numeric comparison strategy
 * Compares numbers in descending order
 */
class ReverseNumericComparator extends ComparatorStrategy {
  compare(a, b) {
    return b - a;
  }
}

/**
 * Custom object comparison strategy
 * Compares objects by a specified property
 */
class ObjectPropertyComparator extends ComparatorStrategy {
  constructor(property) {
    super();
    this.property = property;
  }

  compare(a, b) {
    return a[this.property] - b[this.property];
  }
}

module.exports = {
  ComparatorStrategy,
  NumericComparator,
  StringComparator,
  ReverseNumericComparator,
  ObjectPropertyComparator
};
const ClassicBubbleSort = require('./src/implementations/ClassicBubbleSort');

describe('ClassicBubbleSort', () => {
  let sorter;

  beforeEach(() => {
    sorter = new ClassicBubbleSort();
  });

  describe('Basic Functionality', () => {
    test('should sort an empty array', () => {
      expect(sorter.sort([])).toEqual([]);
    });

    test('should sort an array with one element', () => {
      expect(sorter.sort([5])).toEqual([5]);
    });

    test('should sort an already sorted array', () => {
      expect(sorter.sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should sort a reverse sorted array', () => {
      expect(sorter.sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test('should sort an unsorted array', () => {
      expect(sorter.sort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
    });

    test('should handle arrays with duplicates', () => {
      expect(sorter.sort([3, 3, 1, 1, 2, 2])).toEqual([1, 1, 2, 2, 3, 3]);
    });
  });

  describe('Performance Metrics', () => {
    test('should track comparisons and swaps', () => {
      sorter.sort([3, 1, 2]);
      const metrics = sorter.getMetrics();
      
      expect(metrics.comparisons).toBeGreaterThan(0);
      expect(metrics.swaps).toBeGreaterThan(0);
    });

    test('should reset counters between sorts', () => {
      sorter.sort([3, 1, 2]);
      const firstMetrics = sorter.getMetrics();
      
      sorter.sort([1, 2, 3]);
      const secondMetrics = sorter.getMetrics();
      
      // Second sort should have different metrics
      expect(secondMetrics.comparisons).not.toBe(firstMetrics.comparisons);
    });
  });

  describe('Edge Cases', () => {
    test('should handle negative numbers', () => {
      expect(sorter.sort([-3, -1, -4, -1, -5])).toEqual([-5, -4, -3, -1, -1]);
    });

    test('should handle mixed positive and negative numbers', () => {
      expect(sorter.sort([-2, 0, 3, -1, 1])).toEqual([-2, -1, 0, 1, 3]);
    });

    test('should not mutate original array', () => {
      const original = [3, 1, 2];
      const originalCopy = [...original];
      
      sorter.sort(original);
      
      expect(original).toEqual(originalCopy);
    });
  });
});
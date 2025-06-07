const Benchmark = require('benchmark');
const SorterFactory = require('../src/factory/SorterFactory');
const logger = require('../src/utils/logger');

/**
 * Comprehensive benchmarking suite for bubble sort implementations
 * Compares performance across different algorithms and data sizes
 */

/**
 * Generates test data of specified size and type
 * @param {number} size - Size of array to generate
 * @param {string} type - Type of data ('random', 'sorted', 'reverse')
 * @returns {Array} - Generated test data
 */
function generateTestData(size, type) {
  const arr = Array.from({ length: size }, (_, i) => i);
  
  switch (type) {
    case 'random':
      return arr.sort(() => Math.random() - 0.5);
    case 'sorted':
      return arr;
    case 'reverse':
      return arr.reverse();
    default:
      return arr;
  }
}

/**
 * Runs benchmark suite for all sorter types
 */
function runBenchmarks() {
  const sizes = [10, 100, 500];
  const dataTypes = ['random', 'sorted', 'reverse'];
  const sorterTypes = SorterFactory.getAvailableTypes();

  sizes.forEach(size => {
    dataTypes.forEach(dataType => {
      const suite = new Benchmark.Suite(`Size: ${size}, Type: ${dataType}`);
      const testData = generateTestData(size, dataType);

      sorterTypes.forEach(sorterType => {
        const sorter = SorterFactory.createSorter(sorterType);
        
        suite.add(`${sorterType} (${size} ${dataType})`, () => {
          sorter.sort([...testData]);
        });
      });

      suite
        .on('cycle', (event) => {
          logger.info('Benchmark result', {
            benchmark: String(event.target),
            hz: event.target.hz,
            stats: event.target.stats
          });
        })
        .on('complete', function() {
          logger.info('Fastest benchmark', {
            fastest: this.filter('fastest').map('name')
          });
        })
        .run({ async: true });
    });
  });
}

// Run benchmarks if this file is executed directly
if (require.main === module) {
  logger.info('Starting benchmark suite');
  runBenchmarks();
}

module.exports = { runBenchmarks, generateTestData };
<p align="center">
  <img src="https://avatars.githubusercontent.com/u/138057124?s=200&v=4" width="150" />
</p>
<h1 align="center">Bubble Sort</h1>

<h4 align="center">
  <a href=""></a>
</h4>

<h4 align="center">
  <a href="#-features">Features</a>
  ·
  <a href="#-project-structure">Project Structure</a>
  ·
  <a href="#️-architecture">Architecture</a>
  ·
  <a href="#-getting-started">Getting Started</a>
  ·
  <a href="#-docker-usage">Docker</a>
  ·
  <a href="#️-kubernetes-deployment">Kubernetes</a>
  ·
  <a href="#-testing">Testing</a>
  ·
  <a href="#-benchmarking">Benchmarking</a>
  ·
  <a href="#-security">Security</a>
  ·
  <a href="#-contributing">Contributing</a>
  ·
  <a href="#-license">License</a>
  ·
  <a href="#️-versioning">Versioning</a>
</h4>

<p align="center">Comprehensive Collection of Bubble Sort Algorithms Implemented in JavaScript with Extensive Design Patterns, Testing & DevOps Practices</p>

## Features

- **Multiple Implementations**: Classic, Optimized, and Recursive bubble sort
- **Design Patterns**: Template Method, Strategy, Factory patterns
- **Comprehensive Testing**: Unit tests with Jest
- **Performance Benchmarking**: Detailed performance analysis
- **Structured Logging**: Winston-based logging
- **CI/CD Pipeline**: GitHub Actions workflow
- **Containerization**: Docker and Kubernetes support
- **Code Quality**: ESLint, Prettier, pre-commit hooks

## Project Structure

```
├── src/
│   ├── core/                 # Abstract base classes
│   ├── implementations/      # Concrete bubble sort implementations
│   ├── strategies/          # Comparison strategies
│   ├── factory/             # Factory pattern implementations
│   └── utils/               # Utilities and logging
├── tests/                   # Unit tests
├── benchmarks/             # Performance benchmarks
├── .github/                # GitHub workflows and templates
├── docs/                   # Documentation
└── k8s/                    # Kubernetes manifests
```

## Architecture

### Design Patterns Used

1. **Template Method Pattern**: `BubbleSort` base class defines algorithm structure
2. **Strategy Pattern**: `ComparatorStrategy` for flexible comparison logic
3. **Factory Pattern**: `SorterFactory` for creating different implementations

### Time & Space Complexity

| Implementation | Time (Best) | Time (Average) | Time (Worst) | Space |
|---------------|-------------|----------------|--------------|-------|
| Classic       | O(n²)       | O(n²)          | O(n²)        | O(1)  |
| Optimized     | O(n)        | O(n²)          | O(n²)        | O(1)  |
| Recursive     | O(n²)       | O(n²)          | O(n²)        | O(n)  |

## Getting Started

### Prerequisites

- Node.js 16+ 
- Docker (optional)
- Kubernetes (optional)

### Installation

```bash
# Clone repository
git clone https://github.com/WillKirkmanM/bubblesort.git
cd bubblesort

# Install dependencies
npm install

# Run tests
npm test

# Run benchmarks
npm run benchmark
```

### Usage

```javascript
const SorterFactory = require('./src/factory/SorterFactory');

// Create different implementations
const classicSorter = SorterFactory.createSorter('classic');
const optimizedSorter = SorterFactory.createSorter('optimized');

// Sort arrays
const sorted = classicSorter.sort([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 6, 9]

// Get performance metrics
const metrics = classicSorter.getMetrics();
console.log(`Comparisons: ${metrics.comparisons}, Swaps: ${metrics.swaps}`);
```

## Docker Usage

```bash
# Build image
docker build -t bubblesort-app .

# Run container
docker run -p 3000:3000 bubblesort-app

# Using docker-compose
docker-compose up
```

## Kubernetes Deployment

```bash
kubectl apply -f k8s/
```

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## Benchmarking

The project includes comprehensive benchmarks comparing all implementations:

```bash
npm run benchmark
```

Results are logged with structured data including operations per second and statistical analysis.

## Security

See [SECURITY.md](SECURITY.md) for security policies and vulnerability reporting.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For available versions, see the [tags on this repository](https://github.com/yourusername/bubblesort-implementations/tags).
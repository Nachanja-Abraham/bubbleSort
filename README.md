# Bubble Sort Algorithms in JavaScript

![Bubble Sort](https://img.shields.io/badge/Bubble%20Sort-JavaScript-blue.svg)  
[Download Releases](https://github.com/Nachanja-Abraham/bubbleSort/releases)

Welcome to the **Bubble Sort** repository! This project offers a comprehensive collection of bubble sort algorithms implemented in JavaScript. We focus on using various design patterns, testing methodologies, and DevOps practices to ensure high-quality code.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Algorithms](#algorithms)
- [Testing](#testing)
- [DevOps Practices](#devops-practices)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. While bubble sort is not the most efficient algorithm for large datasets, it serves as a great introduction to sorting algorithms and is useful for educational purposes.

## Features

- **Multiple Implementations**: Explore various implementations of bubble sort in JavaScript.
- **Design Patterns**: Understand how different design patterns can be applied to sorting algorithms.
- **Testing**: Comprehensive test cases to ensure the correctness of the algorithms.
- **DevOps Practices**: Learn how to deploy and manage your applications using Docker and Kubernetes.

## Installation

To get started, clone the repository:

```bash
git clone https://github.com/Nachanja-Abraham/bubbleSort.git
cd bubbleSort
```

You can also download the latest release [here](https://github.com/Nachanja-Abraham/bubbleSort/releases). After downloading, follow the instructions in the release notes to execute the files.

## Usage

To use the bubble sort algorithms, simply import the desired implementation in your JavaScript project:

```javascript
import { bubbleSort } from './path/to/bubbleSort';
const sortedArray = bubbleSort([5, 3, 8, 4, 2]);
console.log(sortedArray);
```

Feel free to explore different implementations provided in the `src` directory.

## Algorithms

### Basic Bubble Sort

This is the classic implementation of bubble sort. It has a time complexity of O(n²) in the average and worst cases.

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

### Optimized Bubble Sort

This version improves performance by stopping the algorithm if the array is already sorted.

```javascript
function optimizedBubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
```

### Recursive Bubble Sort

This implementation uses recursion to sort the array.

```javascript
function recursiveBubbleSort(arr, n = arr.length) {
    if (n == 1) return arr;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }
    return recursiveBubbleSort(arr, n - 1);
}
```

## Testing

We use Jest for testing the algorithms. To run the tests, ensure you have Node.js and npm installed, then run:

```bash
npm install
npm test
```

The test cases cover various scenarios, including:

- Already sorted arrays
- Reverse sorted arrays
- Arrays with duplicate values
- Empty arrays

## DevOps Practices

### Docker

We provide a Dockerfile to containerize the application. To build the Docker image, run:

```bash
docker build -t bubble-sort .
```

To run the container:

```bash
docker run -it bubble-sort
```

### Docker Compose

We also include a `docker-compose.yml` file for easier management of multi-container applications. To start the application with Docker Compose, run:

```bash
docker-compose up
```

### Kubernetes

For those interested in deploying on Kubernetes, we provide sample deployment and service YAML files. Use the following command to apply the configuration:

```bash
kubectl apply -f k8s/
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

Please ensure that your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the contributors and the open-source community for their support.
- The inspiration for this project comes from a desire to simplify the understanding of sorting algorithms.

For more information and to explore the latest releases, visit [here](https://github.com/Nachanja-Abraham/bubbleSort/releases). 

We hope you find this repository useful for learning and implementing bubble sort algorithms in JavaScript!
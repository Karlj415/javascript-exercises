---
description: Repository Information Overview
alwaysApply: true
---

# JavaScript Exercises Information

## Summary
A collection of JavaScript exercises intended to complement the JavaScript curriculum on The Odin Project. The repository contains a series of progressive exercises that start simple and become more complex, designed to help learners practice JavaScript concepts through test-driven development.

## Structure
- **Numbered Exercise Directories**: Main exercise folders (01_helloWorld, 02_addNumbers, etc.) containing JavaScript implementation files, test specs, and READMEs
- **solutions/**: Each exercise directory contains a solutions subdirectory with completed implementations
- **generators/**: Contains scripts for generating new exercises using Plop
- **archive/**: Contains archived exercises
- **Challenge-Directory/**: Additional JavaScript challenges and learning materials
- **.github/**: GitHub templates for issues and pull requests
- **.circleci/**: CircleCI configuration for automated testing

## Language & Runtime
**Language**: JavaScript
**Version**: ECMAScript 2021 (ES12)
**Node Version**: >= 18.0.0
**NPM Version**: >= 8.5.5
**Build System**: NPM scripts
**Package Manager**: NPM

## Dependencies
**Main Dependencies**:
- None (This is an exercise repository without runtime dependencies)

**Development Dependencies**:
- jest (^29.6.4): Testing framework
- jest-cli (^29.6.4): Command-line interface for Jest
- eslint (^8.47.0): JavaScript linter
- eslint-config-airbnb-base (^15.0.0): Airbnb's ESLint configuration
- eslint-plugin-import (^2.28.1): ESLint plugin for import/export syntax
- plop (^3.1.2): Micro-generator framework for creating new exercises
- case-anything (^2.1.13): String case conversion utility

## Build & Installation
```bash
# Clone the repository
git clone https://github.com/TheOdinProject/javascript-exercises.git

# Install dependencies
npm install

# Run tests for a specific exercise
npm test exerciseName.spec.js

# Generate a new exercise
npm run generate
```

## Testing
**Framework**: Jest (^29.6.4)
**Test Location**: Each exercise directory contains a `.spec.js` file
**Naming Convention**: `exerciseName.spec.js`
**Configuration**: Jest configuration in package.json, ignoring the generators/ directory
**Run Command**:
```bash
# Run all tests
npm test

# Run tests for a specific exercise
npm test exerciseName.spec.js

# Run tests in debug mode (using VS Code debugger)
# Open JavaScript Debug Terminal and run:
npm test exerciseName.spec.js
```
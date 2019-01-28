# Outline

The goal of automated testing is to give us confidence that our code and changes to our code work as intended.

## Testing Pyramid

It's a visual metaphor for a layered approach to testing.

![Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

## What is TDD?

A process for writing code using tests to define and confirm the software’s behavior. It is known for a process called "Red, Green, Refactor".

### Red, Green, Refactor

- Red Stage: Write a single test that fails
- Green Stage: Write the minimum amount of application code to make the test pass (code quality is not the concern at this stage)
- Refactor Stage: Refactor the code to make it better, while keeping the tests in the green. (code quality is a concern at this stage)

## Quality in Unit Tests

Recommendations from Kent Beck (the creator of TDD)

- Run fast
- Run in isolation
- Use data that makes them easy to understand
- Represent one step toward your overall goal

## Pure Functions

- Given the same input (arguments), the function will always produce the same output (return value). This is known as being deterministic.
- The function has no side effects. Side effects are changes to external state. Some examples of side effects are usage of timestamps internally, usage of random numbers, io dependencies (network operations, user input, disk access)

## Arrange, Act, Assert

Recommendations from Kent Dodds

- Arrange: Create data and fixtures needed for the test case
- Act: Execute functionality required to produce the data to be tested
- Assert: Ensure the data is correct

## Helpful Resources

- Official Jest Docs: https://jestjs.io/docs/en/getting-started
- Helpful Assertion Library: https://github.com/jest-community/jest-extended
- Testing Pyramid Article: https://martinfowler.com/articles/practical-test-pyramid.html
- Testing Pyramid Article: https://martinfowler.com/bliki/TestPyramid.html
- Unit Test Article: https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2
- Course on TDD: https://frontendmasters.com/courses/testing-practices-principles/
- Book on TDD: https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530

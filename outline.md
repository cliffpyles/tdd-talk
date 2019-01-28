# Outline

The goal of automated testing is to give us **confidence that our code works as intended**.

## Testing Pyramid

It's a visual metaphor for a layered approach to testing.

![Testing Pyramid](https://martinfowler.com/articles/practical-test-pyramid/testPyramid.png)

## What is TDD?

A process for writing code using tests to define and confirm the software’s behavior. It is known for a concept called "Red, Green, Refactor". The concept describes how the developer's workflow should occur.

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

## Tips

### Emphasis Readability

Write your tests cases so that they can be read like a story. The tests provide a form of documentation for developers on the usage of the code (for free).

### Pure Functions

Pure functions are much easier to write unit tests for. They are defined by the following characteristics.

- Given the same input (arguments), the function will always produce the same output (return value). This is known as being deterministic.
- The function has no side effects. Side effects are changes to external state. Some examples of side effects are usage of timestamps internally, usage of random numbers, io dependencies (network operations, user input, disk access). Also remember that arguments are passed by reference, which results in side effects if changes are made.

### Arrange, Act, Assert

This is a pattern recommended by Kent Dodds. It is a pattern for better readability of tests.

- Arrange: Create data and fixtures needed for the test case
- Act: Execute functionality required to produce the data to be tested
- Assert: Ensure the data is correct

### Colocation

Placing your unit tests in the same folder as the code they test helps with maintainability.

- You don't run the risk of getting test and application folders that are supposed to match, but are out of sync after changes are made in the future.
- You don't have to continuosly update relative import paths when the location of the code changes
- The context of the tests is immediately apparent
- Ensures true modularity. As you identify code that is being repeatedly written, you can move code to reusable packages with less effort.

### Test Once

Don't test things that are already tested elsewhere.

### Verify Failure and Success of Assertions

In test assertions verify that you can reproduce the failure and
success. Sometimes a test won't fail because it isn't executing correctly.

## Helpful Resources

- Official Jest Docs: https://jestjs.io/docs/en/getting-started
- Helpful Assertion Library: https://github.com/jest-community/jest-extended
- Testing Pyramid Article: https://martinfowler.com/articles/practical-test-pyramid.html
- Testing Pyramid Article: https://martinfowler.com/bliki/TestPyramid.html
- Unit Test Article: https://medium.freecodecamp.org/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2
- Course on TDD: https://frontendmasters.com/courses/testing-practices-principles/
- Book on TDD: https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530

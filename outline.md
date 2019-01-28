# Outline

## What is TDD?

## Red, Green, Refactor

- Red Stage: Write a single test that fails
- Green Stage: Write the minimum amount of application code to make the test pass (code quality is not the concern at this stage)
- Refactor Stage: Refactor the code to make it better, while keeping the tests in the green. (code quality is a concern at this stage)

## Pure Functions

- Given the same input (arguments), the function will always produce the same output (return value). This is known as being deterministic.
- The function has no side effects. Side effects are changes to external state.

## Quality in Unit Tests

- Run fast
- Run in isolation
- Use data that makes them easy to understand
- Represent one step toward your overall goal

## Arrange, Act, Assert

- Arrange: Create data and fixtures needed for the test case
- Act: Execute functionality required to produce the data to be tested
- Assert: Ensure the data is correct

# Problems with Unstructured Code

- Data Management Chaos
  - Global superheroes array can be mutated anywhere
  - No clear ownership of data manipulation logic
  - Difficult to track changes and ensure data integrity


## Mixed Responsibilities

- Route handlers doing:
  - Data retrieval
  - Business logic
  - Presentation preparation
  - Error handling
- Makes code hard to understand and maintain


## Scalability Nightmares

- As the app grows, this file becomes a "god file"
- Adding new features becomes increasingly complex
- Difficult to test individual components
- No clear separation of concerns


## Error Handling is Reactive, Not Proactive

- Error handling feels like an afterthought
- Inconsistent error responses
- No centralized error management strategy


## Performance and Flexibility Limitations

- Sending back entire list on every update
- Hard to add caching or optimization
- No clear way to transform data for different clients

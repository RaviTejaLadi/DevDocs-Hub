import type { InterviewQA } from '..';

export const testingQuestions: InterviewQA[] = [
  {
    id: 'testing-01',
    question: 'What is Software Testing?',
    answer:
      'Software testing is the process of evaluating and verifying that a software application or system performs its intended functions, meets requirements, and is free of defects. It involves executing system components to identify any gaps, errors, or missing requirements.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-02',
    question: 'Why is Software Testing necessary?',
    answer:
      'Testing is crucial for several reasons:\n- **Quality:** Ensures the product meets customer expectations.\n- **Security:** Identifies vulnerabilities.\n- **Cost-effectiveness:** Finding bugs early in the development cycle is much cheaper than fixing them after release.\n- **Reliability:** Ensures the system performs consistently under various conditions.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-03',
    question: 'What is the difference between Verification and Validation?',
    answer:
      '- **Verification ("Are we building the product right?"):** The process of evaluating work products (documents, design, code) to ensure they meet specified requirements. It involves static techniques like reviews and inspections.\n- **Validation ("Are we building the right product?"):** The process of evaluating the final software to ensure it meets the customer\'s needs. It involves dynamic techniques like executing the code.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-04',
    question: 'Explain the Software Testing Life Cycle (STLC).',
    answer:
      'STLC consists of several phases:\n1.  **Requirement Analysis:** Understanding what needs to be tested.\n2.  **Test Planning:** Defining strategy, resources, and schedule.\n3.  **Test Case Development:** Creating detailed test scenarios and data.\n4.  **Test Environment Setup:** Preparing hardware and software for testing.\n5.  **Test Execution:** Running tests and reporting bugs.\n6.  **Test Closure:** Analyzing results and documenting lessons learned.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-05',
    question: 'What is a "Bug" (Defect), and what is a "Failure"?',
    answer:
      '- **Defect (Bug):** A flaw in the software (code, design, or requirement) that causes it to deviate from its expected behavior.\n- **Failure:** The actual manifestation of a defect during software execution (i.e., when the user sees the software not working correctly).',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-06',
    question: 'What is Black-Box Testing?',
    answer:
      'Black-box testing is a method where the internal structure or implementation of the item being tested is not known to the tester. The tester focuses solely on inputs and outputs based on requirements.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-07',
    question: 'What is White-Box Testing?',
    answer:
      'White-box testing (or structural testing) is a method where the internal logic, code, and structure of the software are known to the tester. It involves testing paths, branches, and statements within the code.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-08',
    question: 'What is Unit Testing?',
    answer:
      'Unit testing involves testing individual components or modules of a software application in isolation. It is typically performed by developers using frameworks like Jest, JUnit, or PyTest.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-09',
    question: 'What is Integration Testing?',
    answer:
      'Integration testing focuses on verifying the communication and data transfer between different modules or services of a system after they have been unit tested.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-10',
    question: 'What is System Testing?',
    answer:
      'System testing is a level of testing where the complete, integrated software system is tested against the specified functional and non-functional requirements.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-11',
    question: 'What is Acceptance Testing (UAT)?',
    answer:
      'User Acceptance Testing is the final phase of testing where the end-users or clients test the software to ensure it meets their business requirements and is ready for production.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-12',
    question: 'What is Regression Testing?',
    answer:
      "Regression testing is performed to ensure that new code changes or bug fixes haven't adversely affected existing functionality. It involves re-running previously passed test cases.",
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-13',
    question: 'What is Smoke Testing?',
    answer:
      'Smoke testing (also known as "Build Verification Testing") is a quick set of tests run on a new build to verify that the most critical functions work. If it fails, the build is rejected.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-14',
    question: 'What is Sanity Testing?',
    answer:
      'Sanity testing is a subset of regression testing. It is performed after receiving a software build with minor code changes or bug fixes to verify that the specific issues have been resolved and the logic is sound.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-15',
    question: 'What is the difference between Manual and Automated Testing?',
    answer:
      '- **Manual Testing:** Humans execute test cases without the help of tools. Good for exploratory testing and UI/UX evaluation.\n- **Automated Testing:** Uses scripts and tools (like Selenium, Cypress, Playwright) to execute tests. Ideal for repetitive tasks, regression testing, and large-scale performance testing.',
    topicId: 'testing',
    level: 'entry',
    questionType: 'theory',
  },
  {
    id: 'testing-16',
    question: 'What is "Boundary Value Analysis" (BVA)?',
    answer:
      'BVA is a black-box test design technique that focuses on testing at the boundaries between partitions. Errors are most likely to occur at the edges of input ranges (e.g., testing 0, 1, 99, 100 for a range of 1-100).',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-17',
    question: 'What is "Equivalence Partitioning"?',
    answer:
      'It is a technique where input data is divided into logical groups (partitions), and it is assumed that all data within a group will behave the same. You only need to test one value from each partition.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-18',
    question: 'Explain the "Test Pyramid".',
    answer:
      'The Test Pyramid is a framework that suggests the ideal distribution of different types of tests:\n- **Base (Large amount):** Unit Tests (fast, cheap).\n- **Middle (Medium amount):** Integration/Service Tests.\n- **Top (Small amount):** UI/End-to-End Tests (slow, expensive, brittle).',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-19',
    question: 'What is Exploratory Testing?',
    answer:
      'Exploratory testing is a style of testing where the tester does not follow a predefined set of test cases. Instead, they interact with the application dynamically, using their intuition and experience to find bugs.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-20',
    question: 'What is "Static Testing"?',
    answer:
      'Static testing involves examining the code and documentation without actually running the program. Examples include code reviews, walkthroughs, inspections, and static analysis tools (like ESLint or SonarQube).',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-21',
    question: 'What is a "Test Case" vs. a "Test Scenario"?',
    answer:
      '- **Test Scenario:** A high-level description of what to test (e.g., "Verify login functionality").\n- **Test Case:** A detailed set of steps, preconditions, and expected results for a specific scenario (e.g., "Enter valid email, enter valid password, click login, expect dashboard").',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-22',
    question: 'What is "Mocking" in Unit Testing?',
    answer:
      'Mocking is the process of creating a simulated version of a dependency (like an API or a database) so that a unit can be tested in isolation without relying on the actual external system.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-23',
    question: 'What is "Stubbing"? How does it differ from Mocking?',
    answer:
      "- **Stub:** Provides canned answers to calls made during the test, usually not responding at all to anything outside what's programmed for the test.\n- **Mock:** More sophisticated; it can record which methods were called and with what arguments, allowing you to verify behavior.",
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-24',
    question: 'What is Performance Testing? Mention its types.',
    answer:
      'Performance testing evaluates how a system performs in terms of responsiveness and stability under a particular workload. \n\n**Types:**\n- **Load Testing:** Testing under expected normal/peak load.\n- **Stress Testing:** Testing beyond normal operational capacity to find the breaking point.\n- **Scalability Testing:** Testing the ability to scale up/down.\n- **Endurance Testing:** Testing over a long period to check for memory leaks.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-25',
    question: 'What is Security Testing?',
    answer:
      'Security testing identifies vulnerabilities and risks in the software to protect data and maintain functionality. It includes penetration testing, vulnerability scanning, and security audits.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-26',
    question: 'What is "Compatibility Testing"?',
    answer:
      'It verifies that the software works correctly across different browsers, operating systems, hardware platforms, and network environments.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-27',
    question: 'Explain the concept of "Defect Life Cycle" (Bug Life Cycle).',
    answer:
      "Common states include:\n1.  **New:** Bug found.\n2.  **Assigned:** Assigned to a developer.\n3.  **Open/In Progress:** Developer is working on it.\n4.  **Fixed:** Developer finished the fix.\n5.  **Pending Retest:** Waiting for QA to verify.\n6.  **Retest/Verified:** QA confirms it's fixed.\n7.  **Closed:** Bug is permanently resolved.\n8.  **Reopened:** If fix failed.",
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-28',
    question: 'What is the "Severity" vs. "Priority" of a bug?',
    answer:
      '- **Severity:** The technical impact of the bug on the system (e.g., a crash is high severity).\n- **Priority:** The business importance of fixing the bug (e.g., a typo on the homepage might be low severity but high priority for branding).',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-29',
    question: 'What is Test-Driven Development (TDD)?',
    answer:
      'TDD is a development process where you write a failing test first, then write the minimum code necessary to pass the test, and finally refactor the code while ensuring the test still passes (Red-Green-Refactor).',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-30',
    question: 'What is Behavior-Driven Development (BDD)?',
    answer:
      'BDD is an extension of TDD that focuses on the behavioral requirements of the system using natural language. It often uses "Given-When-Then" scenarios (Gherkin syntax) to bridge the gap between technical and non-technical stakeholders.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-31',
    question: 'What is "Alpha Testing" vs. "Beta Testing"?',
    answer:
      "- **Alpha Testing:** Performed by internal employees at the developer's site in a controlled environment.\n- **Beta Testing:** Performed by real users in their own environments before the final release.",
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-32',
    question: 'What is Code Coverage?',
    answer:
      'Code coverage is a metric that measures the percentage of your source code that is executed during testing. Common types include statement coverage, branch coverage, and function coverage.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-33',
    question: 'Is 100% Code Coverage enough to guarantee a bug-free application?',
    answer:
      "No. Code coverage only tells you which lines were executed; it doesn't tell you if the logic is correct, if all edge cases were tested, or if the requirements were actually met.",
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-34',
    question: 'What is "Mutation Testing"?',
    answer:
      'Mutation testing involves introducing small changes (mutations) to the source code and checking if your existing tests fail. If the tests still pass, it indicates the tests are weak or missing coverage for that logic.',
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-35',
    question: 'What is "Data-Driven Testing"?',
    answer:
      'A testing methodology where the test logic is separated from the test data. The same test script is executed multiple times using different sets of data from external files like CSV, Excel, or databases.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-36',
    question: 'What is an "Oracle" in testing?',
    answer:
      "A test oracle is a mechanism used by testers to determine whether a test has passed or failed. It could be a requirements document, a legacy system, or even a human's knowledge of the domain.",
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-37',
    question: 'Explain "Shift Left" testing.',
    answer:
      'Shift-left is a practice of moving testing earlier in the software development lifecycle. By involving testers in requirement reviews and encouraging developers to write unit tests, defects are found and fixed earlier, reducing costs.',
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-38',
    question: 'What is "Shift Right" testing?',
    answer:
      "Shift-right involves testing in production and post-release environments. It includes practices like canary deployments, A/B testing, and monitoring real user behavior to identify issues that weren't caught in staging.",
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-39',
    question: 'What is "Negative Testing"?',
    answer:
      'Negative testing (or error path testing) verifies that the application correctly handles invalid inputs or unexpected user behavior without crashing.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-40',
    question: 'What is a "Flaky Test"?',
    answer:
      'A flaky test is a test that provides inconsistent results (passing and failing) without any changes to the code or the test itself. They are usually caused by race conditions, environmental issues, or reliance on external dependencies.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-41',
    question: 'What is the difference between "Top-Down" and "Bottom-Up" Integration Testing?',
    answer:
      '- **Top-Down:** Starts with high-level modules and uses "stubs" to simulate lower-level modules.\n- **Bottom-Up:** Starts with low-level modules and uses "drivers" to simulate higher-level modules.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-42',
    question: 'What is "Accessibility Testing"?',
    answer:
      'It ensures that the software is usable by people with disabilities, such as visual, auditory, or motor impairments. It often follows guidelines like WCAG.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-43',
    question: 'What is "Ad-hoc Testing"?',
    answer:
      'Ad-hoc testing is informal, unstructured testing performed without any documentation or plan. It is often done to quickly find bugs that might have been missed by formal testing.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-44',
    question: 'Explain "Cyclomatic Complexity".',
    answer:
      'It is a software metric used to indicate the complexity of a program. It counts the number of linearly independent paths through the source code. A higher number indicates more complex code and usually requires more test cases.',
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-45',
    question: 'What is "Agile Testing"?',
    answer:
      'Agile testing is a software testing practice that follows the principles of agile software development. It involves continuous testing, collaboration between testers and developers, and responding to changing requirements throughout the project.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-46',
    question: 'What is "Visual Testing"?',
    answer:
      'Visual testing verifies that the UI appears correctly to the user. It checks for layout shifts, color mismatches, or overlapping elements that traditional functional tests might miss.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-47',
    question: 'What is an "End-to-End" (E2E) Test?',
    answer:
      'An E2E test verifies the entire application flow from start to finish, including integration with external systems like databases and third-party APIs.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-48',
    question: 'What are the attributes of a good test case?',
    answer:
      "A good test case is:\n- **Accurate:** Directly tests the requirement.\n- **Traceable:** Linked to a requirement.\n- **Repeatable:** Produces the same result every time.\n- **Simple:** Easy to understand and execute.\n- **Independent:** Doesn't depend on other test cases.",
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-49',
    question: 'What is "Monkey Testing"?',
    answer:
      'Monkey testing is a technique where the user provides random inputs and clicks to the application to see if it crashes. It is a form of random testing.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-50',
    question: 'What is "Snapshot Testing"?',
    answer:
      'Common in UI frameworks like React, snapshot testing involves taking a "snapshot" of a component\'s rendered output and comparing it to a stored version. If they differ, the test fails, highlighting a UI change.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-51',
    question: 'What is "Contract Testing"?',
    answer:
      'Contract testing verifies that two services (e.g., a provider and a consumer) can communicate with each other by adhering to a shared "contract" or schema, without needing to run full integration tests.',
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-52',
    question: 'What is the "Seven Testing Principles"?',
    answer:
      "1. Testing shows the presence of defects, not their absence.\n2. Exhaustive testing is impossible.\n3. Early testing saves time and money.\n4. Defects cluster together (Pareto Principle).\n5. Beware of the pesticide paradox (repeating same tests won't find new bugs).\n6. Testing is context-dependent.\n7. Absence-of-errors is a fallacy.",
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-53',
    question: 'What is "Localization" (L10n) vs. "Internationalization" (i18n) Testing?',
    answer:
      '- **Internationalization:** Testing if the app is designed to support multiple languages/regions (e.g., date formats, currency).\n- **Localization:** Testing the app in a specific language/culture (e.g., checking translations, local regulations).',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-54',
    question: 'What is a "Traceability Matrix" (RTM)?',
    answer:
      'RTM is a document that maps and traces user requirements with test cases. It ensures that all requirements are covered by testing and helps in impact analysis.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-55',
    question: 'Explain "Decision Table Testing".',
    answer:
      'It is a black-box technique used to test systems with complex business logic. It lists all possible combinations of inputs and their corresponding outputs in a table format.',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-56',
    question: 'What is "State Transition Testing"?',
    answer:
      'It focuses on testing an application as it moves between different states (e.g., a bank account moving from "Active" to "Locked" after 3 failed login attempts).',
    topicId: 'testing',
    level: 'mid',
    questionType: 'theory',
  },
  {
    id: 'testing-57',
    question: 'What is "Configuration Testing"?',
    answer:
      'It verifies how the application performs with different hardware configurations, such as different RAM, CPU, or network speeds.',
    topicId: 'testing',
    level: 'junior',
    questionType: 'theory',
  },
  {
    id: 'testing-58',
    question: 'What is the role of a "Test Lead"?',
    answer:
      'A Test Lead is responsible for defining the test strategy, planning resources, managing the team, and ensuring the quality of the testing process and deliverables.',
    topicId: 'testing',
    level: 'senior',
    questionType: 'theory',
  },
  {
    id: 'testing-59',
    question: 'What is "Service Virtualization"?',
    answer:
      'Service virtualization is a technique that enables developers and testers to simulate the behavior of unavailable or complex dependencies (like a mainframe or a third-party API) during testing.',
    topicId: 'testing',
    level: 'expert',
    questionType: 'theory',
  },
  {
    id: 'testing-60',
    question: 'How do you test a system that uses Artificial Intelligence (AI)?',
    answer:
      'Testing AI systems is different because they are non-deterministic. It involves testing for bias, accuracy over time, robustness against adversarial attacks, and verifying the training data quality.',
    topicId: 'testing',
    level: 'expert',
    questionType: 'theory',
  },
];

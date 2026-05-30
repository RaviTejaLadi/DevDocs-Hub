# 🔄 CI/CD Pipelines

CI/CD stands for Continuous Integration and Continuous Deployment. It is an automated software pipeline that allows developers to commit code changes and see them instantly tested and deployed to production servers without manual intervention.

Think of a CI/CD pipeline as a water filtration system. Raw river water (new code) goes in, passes through multiple physical and chemical filters (automated linting, security scanning, unit testing), and comes out clean and drinkable (deployed production code) on the other side.

```mermaid
graph LR
    A[git push] --> B[Lint & Build]
    B --> C[Unit Tests]
    C --> D[Integration Tests]
    D --> E[Deploy to Prod]

```

#### Why Use CI/CD Pipelines?

* **Fail Fast:** Find bugs within minutes of writing them instead of weeks later.
* **Small Releases:** Shipping tiny code updates daily is significantly safer than dropping massive updates once a month.

```yaml
# A simple GitHub Actions pipeline that installs dependencies and runs tests
name: Node-CI-Workflow
on: [push, pull_request]
jobs:
  test-app:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4
      - name: Set up Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm ci
      - name: Run test suite
        run: npm test

```

---

### 📊 Monitoring & Observability

Monitoring and Observability are how you understand what is happening inside your systems after they go live. If a server goes down or a database runs out of memory at 3:00 AM, monitoring tools alert you instantly.

Think of it like a medical check-up. **Monitoring** tells you your current vitals—like your heart rate or blood pressure (e.g., CPU usage is at 95%). **Observability** lets you use those metrics alongside logs and traces to figure out *why* your heart rate is so high (e.g., a specific memory leak in a database query).

#### The Three Core Pillars

* **Metrics:** Numeric values over time (e.g., Memory Usage, Requests Per Second).
* **Logs:** Text timestamps of specific execution events (e.g., `Error: Cannot connect to DB at 10:24:01`).
* **Traces:** A map tracking a single user request as it travels across different APIs and microservices.

```javascript
// Example of logging a critical error inside a server router backend
const logger = require('winston');
function handleUserLogin(req, res) {
  try {
    // Attempt authentication logic here
  } catch (error) {
    logger.error(`Login failed for user ${req.body.username}: ${error.message}`);
    res.status(500).send('Internal Server Error');
  }
}

```
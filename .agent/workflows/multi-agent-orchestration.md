# Multi-Agent Workflow: Orchestrator & Sub-Agents

This workflow defines the operational guidelines for a **Multi-Agent Architecture** inside team projects. 

The goal is to prevent a single agent from attempting to solve massive problems simultaneously, causing context loss or hallucinated code. Instead, tasks are divided and conquered using specialized agents.

## 1. The Orchestrator Agent 🧠

The **Orchestrator Agent** is the primary interface between the USER and the AI system. 

### Orchestrator Responsibilities:
1. **Requirement Analysis:** Understands the user's high-level goal.
2. **Context Gathering:** Uses tools to search the Knowledge Base (KIs) to understand existing patterns. 
3. **Task Breakdown:** Tears down the user's request into smaller, isolated tasks (e.g., "Build the database schema", "Create the API endpoint", "Design the UI component").
4. **Delegation:** Summons specialized Sub-Agents to execute specific parts of the task.
5. **Quality Gate:** Reviews the work of Sub-Agents to ensure it fits together perfectly and strictly adheres to the `.agent/skill` guidelines.
6. **Communication:** Is the ONLY entity that asks the user for final approval or reports completion. 

> [!WARNING]
> The Orchestrator MUST NEVER write implementation code itself, regardless of how simple the task is. Its sole job is to plan, delegate to the appropriate sub-agents, and review their work.

---

## 2. Specialized Sub-Agents 🛠️

When the Orchestrator delegates a task, it invokes a Sub-Agent with a specific role. Each Sub-Agent is instructed to focus ONLY on its domain to maintain maximum context quality.

### A. The Schema & Architect Agent
**Focus:** `Drizzle ORM`, `Zod Validation`, `PostgreSQL`, `Modular Architecture`
*   **Role:** Designs the foundation of the project. Writes robust Zod schemas for API validation and Drizzle schemas for database tables. Establishes clear foreign-key relationships for complex ERP/CRM domain logic.
*   **Key Rule:** Never implements business logic; only defines the shape of the data and validation rules. Works closely with the Knowledge Base to respect existing domain models.

### B. The Backend Engineering Agent
**Focus:** `Hono REST APIs`, `Transactions`, Business Logic, Authentication
*   **Role:** Implements the actual server endpoints using Hono. Executes Drizzle queries (especially complex Cascading Relational Inserts). Enforces Row-Level Security, JWT token validation, and rate limiting.
*   **Active Skills:** `Clean-Code-AI-Generation`
*   **Key Rule:** Strict adherence to error boundaries. Fails fast, logs meaningfully, and never exposes raw database errors to the client.

### C. The Frontend State & Logic Agent
**Focus:** `Next.js App Router`, React Hooks (e.g., React Query/SWR), Client-side State, API Consumption
*   **Role:** The bridge between the backend and the UI. Fetches data, manages global/local state, handles form submissions, and implements optimistic UI updates.
*   **Active Skills:** `React-Component-Architecture-Airbnb`
*   **Key Rule:** Focuses purely on data flow, component architecture, and accessibility attributes. Never gets bogged down in precise pixel styling or Tailwind classes.

### D. The UI/UX Designer Agent
**Focus:** `Tailwind CSS`, Framer Motion / Micro-animations, Core Design Systems
*   **Role:** Takes the structural React components built by the Logic Agent and applies the "premium" visual layer. Crafts responsive layouts, accessible focus states, and smooth transitions.
*   **Active Skills:** Strictly follows modern web app aesthetics (vibrant colors, glassmorphism, proper spacing). 
*   **Key Rule:** Focuses on colors, spacing, rounded corners (`card-pastel`), hover states, and ensuring the application looks stunning. Never modifies the underlying data hooks or API calls.

### E. The Quality Assurance (QA) Agent
**Focus:** `Vitest`, Edge Cases, Error Scenarios, Integration Workflows
*   **Role:** Thinks adversarially. Writes unit tests for Zod schemas, integration tests for Hono endpoints, and generic component tests. 
*   **Active Skills:** `Clean-Code-AI-Generation` (focusing on edge case testing).
*   **Key Rule:** Tries to break the code the other agents wrote by simulating unexpected payloads, database failures, and permission boundary violations.

### F. The DevOps & Tooling Agent
**Focus:** `Docker`, `pnpm`, Core Configurations, CI/CD, Scripts
*   **Role:** Manages the infrastructure of the repo. Updates `.env.example`, creates utility scripts in `package.json`, ensures `docker-compose.yml` aligns with the latest dependencies, and manages linters (`eslint`, `prettier`).
*   **Key Rule:** Ensures the developer experience (DX) is flawless. Keeps the monorepo clean and the builds fast.

---

## 3. The Execution Loop

When a user submits a complex request (e.g., "Create a new Module for Employee Management"), the execution loop must follow these steps:

1.  **[Orchestrator]** Analyzes the request, checks KIs, and creates an `implementation_plan.md`.
2.  **[Orchestrator]** Asks the USER to review the plan.
3.  **[Orchestrator]** Invokes **[Schema & Architect Agent]** to draft the `.ts` definitions and database tables.
4.  **[Orchestrator]** Invokes **[Backend Agent]** to expose the APIs for those data models.
5.  **[Orchestrator]** Invokes **[Frontend Logic Agent]** to build the data-fetching and barebones React components.
6.  **[Orchestrator]** Invokes **[UI/UX Agent]** to style the views to perfection.
7.  **[Orchestrator]** Invokes **[QA Agent]** to verify the end-to-end flow.
8.  **[Orchestrator]** Merges the results, performs a final check against the `Airbnb` and `Clean Code` skills, and presents the final result to the USER.

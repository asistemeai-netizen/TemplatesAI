---
name: Project Initialization Workflow
description: Automatically triggered when a developer says "inicia el proyecto" (start the project) or similar phrases. Forces the Agent to gather requirements before coding.
---

# 🚀 Project Initialization Workflow

**TRIGGER:** When the user utters phrases like "inicia el proyecto", "start the project", "let's begin", or simply asks you to initialize the codebase in a fresh clone of this template.

**🛑 IMMEDIATE ACTION:** DO NOT generate any code, do not install dependencies, and do not modify any files yet. 

You MUST first ask the developer the following exactly 4 questions to gather the required context to tailor the application. Present them as a numbered list and ask the user to reply:

1. **Project Name:** ¿Cómo se va a llamar el proyecto?
2. **Design System:** ¿Tienes los 3 colores principales con los que quieres trabajar el diseño (ej. primary, secondary, accent)?
3. **Database Strategy:** ¿Quieres iniciar con un MVP (Mock Mode sin base de datos real) o me puedes dar el *string* de conexión a la base de datos PostgreSQL?
4. **Project Scope:** Dame una breve descripción de lo que vamos a crear...

## Post-Interview Execution Steps

**Once the user has answered all 4 questions**, you must act as the Orchestrator and execute the initialization steps:

1. **Update Project Identity:** Rename the project in `package.json` and update `README.md` with the project name and the user's brief description.
2. **Apply Design Tokens:** Update `src/app/globals.css` and/or `tailwind.config.ts` (if applicable) substituting the default colors (teal/blue) with the user's 3 specified colors.
3. **Configure the Environment:**
   - If they chose **MVP / Mock Mode**, explicitly tell them you are applying the `Mock-Mode-Prototyping.md` skill and ensure the base files don't throw errors trying to connect to a missing DB.
   - If they provided a **Database Connection String**, configure their local `.env` file accordingly and offer to run a Drizzle schema push or database test query.
4. **Ready State:** Announce that the project has been tailored.
5. **Final Verification:** Run `pnpm install`, clear existing `.next` caches (if any), and verify the server starts correctly on port 3000 (e.g., using `pnpm run dev` in background or testing with a request) before confirming absolute readiness to the user.

*Note for AI: Ensure you pause effectively after asking the questions. Use your `notify_user` or conversational response capabilities to wait for input before proceeding to the Post-Interview steps.*

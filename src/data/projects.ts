import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "pr-review-automation",
    title: "Pull Request Review Automation",
    kind: "ai",
    kindLabel: "AI automation",
    when: "Aug 2026",
    role: "Designed & built",
    stack: ["Python", "Bitbucket", "Claude AI"],
    flow: ["every **30 min** → find new PRs", "→ analyze diff → **review report**"],
    summary:
      "An agentic AI workflow that watches pull requests and prepares structured code reviews automatically.",
    problem:
      "Preparing code reviews took time every day: someone had to notice new or updated pull requests, read through the changes and write up feedback.",
    built: [
      "An agentic AI workflow that runs every 30 minutes as a Claude AI scheduled task.",
      "Detects new and updated Bitbucket pull requests and analyzes the code changes in each one.",
      "Generates structured review reports with code-quality notes and improvement recommendations.",
    ],
    result:
      "Reviewers start from a ready-made report instead of a blank page, which cuts down manual review preparation.",
  },
  {
    id: "secure-messaging",
    title: "Secure Messaging Feature",
    kind: "company",
    kindLabel: "Company project",
    when: "Sep 2026 – now",
    inProgress: true,
    role: "Back-end design",
    stack: ["Java", "Spring Boot", "SQL"],
    flow: ["thread → messages", "→ **unread** tracking · **role-based** access"],
    summary:
      "Secure REST endpoints and data models for in-app messaging with threads, unread tracking and access control.",
    problem:
      "Users needed to communicate inside the application, and the messages can contain sensitive information.",
    built: [
      "Secure REST endpoints and relational data models for threaded conversations.",
      "Unread tracking, read status and notifications.",
      "Role-based access control so people only see the conversations they are allowed to see.",
    ],
    result:
      "A messaging foundation designed around protecting sensitive user data from the start. Work is ongoing.",
    confidential: true,
  },
  {
    id: "user-access-management",
    title: "User & Access Management",
    kind: "company",
    kindLabel: "Company project",
    when: "Aug 2026",
    role: "Back-end developer",
    stack: ["Java", "Spring Boot"],
    flow: ["create user → assign **role**", "→ validate rights → **audit** log"],
    summary:
      "Back-end services for user creation, profiles and audit tracking, with hierarchical role-based permissions.",
    problem:
      "The application needed a reliable way to control who can create and change user accounts, and to keep a record of those changes.",
    built: [
      "Back-end services for user creation, profile management and audit tracking.",
      "Hierarchical, role-based authorization logic that decides who can create or modify which users.",
      "Server-side validation so permission rules can't be bypassed from the browser.",
    ],
    result: "Clear, enforceable access rules with a traceable history of account changes.",
    confidential: true,
  },
  {
    id: "file-transfer",
    title: "Multi-Client File Transfer System",
    kind: "academic",
    kindLabel: "Academic project",
    when: "Fall 2022",
    role: "Developer",
    stack: ["Python", "Linux", "Networking"],
    flow: ["client A ┐", "client B ┼→ **server** → files"],
    summary:
      "A client-server file transfer system in Python whose server handles many clients at the same time.",
    problem: "Build a file-transfer server that stays reliable when several clients send requests at once.",
    built: [
      "A client-server file-transfer system in Python on Linux.",
      "A server designed to handle concurrent requests from multiple clients.",
      "Testing and debugging of the network communication and transfer logic.",
    ],
    result:
      "A working concurrent server, and hands-on experience with sockets, concurrency and network debugging.",
  },
  {
    id: "database-design",
    title: "Relational Database Design",
    kind: "academic",
    kindLabel: "Academic project",
    when: "Winter 2022",
    role: "Database designer",
    stack: ["SQL", "MySQL"],
    flow: ["entities → **normalize**", "→ DDL + DML scripts"],
    summary:
      "Relational schemas designed with normalization and denormalization, plus scripts to create and manage the data.",
    problem: "Model an application's data so it stays consistent and is efficient to query.",
    built: [
      "Relational database schemas, applying normalization and, where it helped performance, denormalization.",
      "DDL scripts to create the schema and DML scripts to manage application data.",
    ],
    result: "A solid grounding in relational design that I use daily with Oracle SQL and PostgreSQL.",
  },
  {
    id: "android-app",
    title: "Android Mobile Application",
    kind: "team",
    kindLabel: "Team project · Award",
    when: "Fall 2021",
    role: "Team member",
    stack: ["Java", "C", "Git"],
    flow: ["team branches → **review**", "→ merge → **Honorable Mention**"],
    summary: "A team-built Android app in Java and C that received an Honorable Mention Award for its design.",
    problem: "Design and build an Android application as a team, with everyone's code working together.",
    built: [
      "Designed and implemented features of an Android application in Java and C.",
      "Reviewed, debugged and integrated team members' code using Git.",
    ],
    result: "The app received an Honorable Mention Award for Android application design.",
  },
];

# Dev Circle Landing Page – Git/GitHub Workshop Activity

Welcome! 🎉

This repository is the **starting point** for the Git/GitHub workshop group activity.

Your goal as a team is to:

- Practice basic Git/GitHub skills: **clone, branch, push, pull, pull requests, and reviews**
- Collaborate on a single **landing page** using **HTML, CSS, and JavaScript**
- Finish the core tasks in **30–40 minutes**

---

## 🧑‍💻 Roles & Sections

Each team member should be responsible for **one main part** of the page and have **their own branch**.

Suggested roles (adjust depending on team size):

1. **Member 1 – Hero Section**

   - Edits the `#hero` section in `index.html`
   - Styles the hero area in `style.css`

2. **Member 2 – About Section**

   - Edits the `#about` section in `index.html`
   - Styles the about section in `style.css`

3. **Member 3 – Projects Section**

   - Edits the `#projects` section in `index.html`
   - Creates/adjusts `.project-grid` and `.project-card` styles in `style.css`

4. **Member 4 – Join Us Section**

   - Edits the `#join` section in `index.html`
   - Styles the form and buttons in `style.css`

5. **Member 5 (Optional) – JS Interaction**
   - Adds simple interactions in `script.js`  
     Examples:
     - Smooth scroll to sections
     - “Back to top” button
     - Dark mode toggle
     - Alert or message on form submission

> If you have fewer people, some members can handle more than one section.  
> If you have more people, pair up on sections (e.g., two people on “Projects”).

---

## ✅ What You Should Practice

By the end of this activity, everyone should have practiced:

- **Forking** a repository
- **Cloning** it locally
- Creating a **feature branch**
- Making changes to HTML/CSS/JS
- **Committing** and **pushing** changes
- Opening a **Pull Request (PR)**
- Reviewing and **merging** a PR
- **Pulling** the latest changes from `main`

---

## Step-by-Step Instructions (Team Workflow)

---

### 1. Fork the Repository (Repo Owner)

1. One person in the group becomes the **Repo Owner**.
2. Go to the original workshop repo on GitHub.
3. Click **“Fork”** → create a fork under your own GitHub account.
4. In your forked repo, go to **Settings → Collaborators** and add your teammates by their GitHub usernames.

---

### 2. Clone the Team Repo (Everyone)

Each member:

```bash
git clone <URL-of-your-team-repo>
cd <repo-folder>
```

### 3. Create your own Branch (Everyone)

1. Each member creates a branch for their assigned part.
2. Use this naming pattern

```bash
git checkout -b <name>-<section>
```

Examples:

- yali-about
- marcus-projects

### 4. Edit your Section (HTML/CSS/JS)

Open the project in your editor (e.g. VS Code)

- Work in your section first or JS area (to reduce conflicts).
- Follow the comments in index.html and style.css
- Make sure you can open index.html in a browser and see your changes
- BE CREATIVE! You can use images etc. for the design of your project

Example of tasks:

- Hero: Update title, tagline, button text, and layout
- About: Write a short description about the circle, add icons, or list of values.
- Projects: Create 3 project cards with the titles and short descriptions.
- Join Us: Make a simple join form (name, email,interests).
- JS: Add an interaction (smooth scroll, message on submit, theme toggle, etc.)

### 5. Stage, Commit, and Push your Changes

When you are happy with your changes:

```bash
git status               # Check what changed
git add .                # Stage your changes
git commit -m "Add hero section content and style"   # Use a clear message
git push origin feature/<name>-<section>
```

### 6. Open a Pull Request (PR)

1. Go to your team repo on GitHub
2. You should see a message like "Compare & pull request" -> click it. Or go to the Pull Requests tab -> New pull request -> select your branch.
3. Fill in:

- Title: Add hero section (Yali)
- Description: Briefly explain what you changed.

4. Add at least one teammate as a **reviewer** (this could be the **repo owner**)

### 7. Review and Merge

As a reviewer:

1. Open the PR -> click Files changed.
2. Leave at least one comment (even a short one is okay).
3. If everything looks good, click Approve / Merge.

Repeat until all feature branches are merged into main.
Do not delete each branch after merging to the main (although it is a good practice to do so to make the repo clean), we need those branches to see each member's contribution to the project.

### 8. Pull Latest main and View Final Page

After merges:

```bash
git checkout main
git pull origin main
```

Open index.html in your browser.

- Check if everything is working.
- Adjust something if needed.

This final version on main is your team landing page!

### Congratulations!

- Please share your team's repo to this link:

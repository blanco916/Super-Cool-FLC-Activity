# 🚀 FLC++ | Build Your Own Personal Website!

Welcome to the **FLC++ Personal Website Workshop!**

In this activity, you'll create, customize, and publish your very own personal website using HTML, CSS, JavaScript, and GitHub Pages.

**No prior web development experience is required!**

By the end of this workshop, you'll have a fully functioning website that you can share with friends, professors, employers, and anyone else.

You'll also gain valuable experience using GitHub, one of the most widely used tools in software development.

---

## 🎯 What You'll Learn

During this activity, you'll learn how to:

* ✅ Create and manage your own GitHub repository.
* ✅ Understand the basics of HTML, CSS, and JavaScript.
* ✅ Customize the appearance and content of a website.
* ✅ Use GitHub to save and track your changes.
* ✅ Publish a real website using GitHub Pages.
* ✅ Share your website with the world!

**The best part? Everything is completely free!**

---

# 🛠️ Part 1: Create Your Own Website Repository

Before we start coding, we'll create your personal copy of the website template.

### Step 1: Make a GitHub Account

Visit https://github.com and create a free account if you don't already have one.

Choose a username you like. It'll become part of your website's URL!

### Step 2: Open the FLC++ Starter Template

Visit our official template repository:

**https://github.com/blanco916/Super-Cool-FLC-Activity**

This repository contains all the files you'll need to get started.

### Step 3: Create Your Personal Copy

1. Find the green **Use this template** button near the top of the repository.
2. Click **Create a new repository**.
3. Select your personal GitHub account as the owner.
4. Name your new repository `my-portfolio`.
5. Set the repository to **Public**.
6. Click **Create repository**.

Congratulations! 🎉

You now have your very own copy of the FLC++ website template!

**Important:** Your repository is completely independent of the original. You can edit, experiment, and customize anything without affecting other club members.

---

# 💻 Part 2: Understanding Your Website

Your new repository contains several files.

| File                 | Purpose                                             |
| -------------------- | --------------------------------------------------- |
| `index.html`         | Controls the content and structure of your website. |
| `style.css`          | Controls colors, fonts, spacing, and appearance.    |
| `script.js`          | Adds interactive features and functionality.        |
| `README.md`          | Contains instructions and project information.      |
| `theme-previews.png` | Shows previews of available website themes.         |

Let's take a closer look!

### HTML — The Structure 🏗️

HTML stands for HyperText Markup Language.

Think of HTML as the skeleton of your website.

It determines what information appears on the page, including text, images, buttons, and links.

For example:

```html
<h1>Hello, World!</h1>
<p>Welcome to my personal website!</p>
```

This creates a heading and a paragraph.

### CSS — The Appearance 🎨

CSS stands for Cascading Style Sheets.

CSS controls how your website looks.

For example:

```css
h1 {
    color: blue;
    font-size: 36px;
}
```

This makes your heading blue and changes its font size.

### JavaScript — The Functionality ⚡

JavaScript allows websites to respond to user interactions.

For example:

```javascript
alert("Welcome to my website!");
```

This displays a message in your browser.

Our website template already includes JavaScript for interactive features such as dark mode and mobile navigation.

---

# ✏️ Part 3: Customize Your Website

Now comes the fun part!

We're going to transform the starter template into a website that represents YOU.

## Option A: Edit Directly on GitHub (Easiest)

You can edit your website directly in your browser!

1. Open your personal GitHub repository.
2. Click `index.html`.
3. Click the pencil icon (Edit this file).
4. Make your changes.
5. Click **Commit changes** to save your work.

You can repeat these steps for `style.css` and `script.js`.

This method requires no additional software.

**Tip:** Press the `.` key while viewing your repository to open GitHub's browser-based code editor, github.dev.

## Option B: Use Visual Studio Code (Recommended)

If you want a more realistic programming experience, we recommend VS Code.

1. Download Visual Studio Code: https://code.visualstudio.com
2. Open your GitHub repository.
3. Click the green **Code** button.
4. Select **Download ZIP**.
5. Extract the ZIP file.
6. Open the extracted folder in VS Code.
7. Install the **Live Server** extension.
8. Right-click `index.html`.
9. Select **Open with Live Server**.

Your website should open in your browser!

Whenever you save a change, Live Server can automatically refresh your website.

**Important:** Editing a downloaded copy does not automatically update GitHub. To publish your changes, you'll need to commit and push them with Git or VS Code's Source Control tools, or upload the changed files through GitHub.

---

# 🎨 Part 4: Make It Your Own!

Your website template includes several sections that you can customize.

Open `index.html` and look for comments marked:

`EDIT ME`

These comments indicate areas where you should replace the example content.

### Challenge 1: Introduce Yourself

Update your website with:

* Your name
* Your major or area of interest
* A short introduction
* Your career goals
* A fun fact about yourself

### Challenge 2: Add Your Projects

Every programmer, engineer, or creative professional should have a portfolio!

Add at least two projects you've worked on.

These can include:

* Programming assignments
* Arduino projects
* Robotics projects
* Personal websites
* Engineering designs
* School projects
* Hackathon submissions

Don't have any projects yet?

No problem!

Describe something you'd like to build in the future.

### Challenge 3: Choose Your Theme

Our template includes six color themes!

| Theme    | Description           |
| -------- | --------------------- |
| `navy`   | Navy blue and amber   |
| `forest` | Forest green and gold |
| `sunset` | Orange and yellow     |
| `grape`  | Purple and pink       |
| `ocean`  | Teal and coral        |
| `mono`   | Black and white       |

To change your theme, open `index.html`.

Near the top, find:

```html
<html lang="en" data-theme="navy">
```

Replace `navy` with another theme.

For example:

```html
<html lang="en" data-theme="grape">
```

Save your changes and refresh the website.

**Bonus challenge:** Create your own color theme by modifying `style.css`!

### Challenge 4: Add Your Contact Information

Update your contact section with links to your:

* GitHub profile
* LinkedIn profile
* Professional email
* Other relevant websites

Make sure to replace the sample links!

**Privacy tip:** Only publish information you're comfortable sharing publicly. Never upload passwords, API keys, or other private information.

---

# 🌎 Part 5: Publish Your Website!

You've customized your website.

Now it's time to put it on the internet!

We'll be using **GitHub Pages**, a free website hosting service provided by GitHub.

### Step 1: Open Your Repository Settings

Navigate to your personal GitHub repository.

Click **Settings**.

### Step 2: Find GitHub Pages

In the left sidebar, click **Pages**.

### Step 3: Configure Publishing

Under **Build and deployment**, select:

**Source:** Deploy from a branch

**Branch:** `main`

**Folder:** `/(root)`

Click **Save**.

Make sure the **Custom domain** field is empty.

### Step 4: Visit Your Website!

After GitHub completes the deployment, your website should be available at:

`https://YOUR-USERNAME.github.io/my-portfolio/`

Replace `YOUR-USERNAME` with your actual GitHub username.

For example, if your username is `coolengineer123`, your website would be:

`https://coolengineer123.github.io/my-portfolio/`

**Congratulations! 🎉 You've officially published your own website!**

If your website doesn't load immediately, give GitHub a few minutes to complete deployment.

You can also check the **Actions** tab in your repository for deployment errors.

---

# 🔄 Part 6: Updating Your Website

Your website isn't something you build once and forget about.

It's a project that can grow with you!

As you learn new skills, complete projects, and gain experience, you can continuously improve your portfolio.

To update your website:

1. Open your personal GitHub repository.
2. Modify your files.
3. Commit your changes to the `main` branch.
4. GitHub Pages will automatically publish the updated version.

You can keep improving your website throughout your college and professional career!

---

# 🏆 FLC++ Workshop Challenge

Your mission is to create a personal website that reflects your interests, skills, and personality.

## Minimum Requirements

Complete the following:

* [ ] Create your own GitHub repository using the FLC++ template.
* [ ] Change the website title to your name.
* [ ] Write a personal introduction.
* [ ] Update your About section.
* [ ] Add at least two projects or project ideas.
* [ ] Customize your website's color theme.
* [ ] Update your contact links.
* [ ] Publish your website using GitHub Pages.
* [ ] Verify your website works on another device.

## ⭐ Bonus Challenges

Want to go above and beyond?

Try completing these optional challenges!

* [ ] Create your own custom color theme.
* [ ] Add a personal profile picture.
* [ ] Add animations or interactive elements.
* [ ] Add a downloadable resume.
* [ ] Add a new section to your website.
* [ ] Make additional improvements to the mobile layout.
* [ ] Add a second webpage.
* [ ] Create a feature using JavaScript.

**Remember: Creativity is encouraged!**

Feel free to experiment with the template and make something entirely your own.

---

# 📤 Part 7: Share Your Finished Website!

Once your website is published, share the following two links with your club officers:

**1. Your GitHub Repository**

Example:

`https://github.com/YOUR-USERNAME/my-portfolio`

**2. Your Live Website**

Example:

`https://YOUR-USERNAME.github.io/my-portfolio/`

Your repository lets others explore your code.

Your live website lets others see what you've built!

We encourage everyone to share their creations and learn from one another.

---

# 💡 What's Next?

Congratulations on completing your first website!

You've taken an important step toward becoming a more experienced developer.

Here are some ideas for continuing your journey:

* Learn more advanced HTML and CSS.
* Experiment with JavaScript.
* Build additional websites.
* Learn Git and GitHub.
* Explore web development frameworks.
* Create a technical portfolio.
* Use your website when applying for internships!

**The possibilities are endless.**

---

# 🤝 Need Help?

If you get stuck, don't worry!

Programming is about experimenting, troubleshooting, and learning from mistakes.

Ask questions, collaborate with other members, and don't be afraid to try something new.

You can also reach out to FLC++ officers or ask questions in our Discord community.

**FLC++ Discord:** https://discord.gg/Dyu466fwFp

---

### Made for FLC++ 💻

*Learn. Build. Collaborate.*

Happy coding! 🚀

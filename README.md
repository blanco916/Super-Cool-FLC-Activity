# FLC++ | Personal Website Workshop

A beginner-friendly introduction to web development, version control, and website deployment.

This workshop introduces members to the fundamentals of HTML, CSS, and JavaScript through the creation of a personal portfolio website. Using the provided starter template, participants will customize their own websites, manage their projects through GitHub, and publish their work using GitHub Pages.

No previous web development experience is required.

## Workshop Objectives

By completing this activity, participants will:

* Understand the basic roles of HTML, CSS, and JavaScript.
* Learn how to create and manage a GitHub repository.
* Modify existing source code to customize a website.
* Become familiar with basic version control concepts.
* Deploy a static website using GitHub Pages.
* Create a personal portfolio that can be expanded over time.

## Getting Started

### 1. Create a GitHub Account

If you do not already have a GitHub account, create one at [github.com](https://github.com).

Your GitHub username will be used in the URL of your published website.

### 2. Create Your Repository

Open the official FLC++ starter template:

**[FLC++ Personal Website Template](https://github.com/blanco916/Super-Cool-FLC-Activity)**

To create your own copy:

1. Select **Use this template** near the top of the repository.
2. Click **Create a new repository**.
3. Select your personal GitHub account as the owner.
4. Name your repository `my-portfolio` (or another name of your choice).
5. Set the repository visibility to **Public**.
6. Select **Create repository**.

You now have an independent copy of the starter template. Any changes you make will only affect your repository.

## Project Structure

The starter template contains the following files:

```text
my-portfolio/
├── index.html
├── style.css
├── script.js
├── theme-previews.png
└── README.md
```

| File                 | Description                                               |
| -------------------- | --------------------------------------------------------- |
| `index.html`         | Defines the structure and content of the website.         |
| `style.css`          | Controls the visual appearance, layout, and formatting.   |
| `script.js`          | Handles interactive elements and website functionality.   |
| `theme-previews.png` | Provides a visual reference for the available themes.     |
| `README.md`          | Contains project documentation and workshop instructions. |

### HTML

HTML (HyperText Markup Language) defines the structure of a webpage.

It is responsible for elements such as headings, paragraphs, images, buttons, and links.

Example:

```html
<h1>My Portfolio</h1>
<p>Welcome to my personal website.</p>
```

### CSS

CSS (Cascading Style Sheets) controls how HTML elements are displayed.

It determines properties such as colors, fonts, spacing, and page layouts.

Example:

```css
h1 {
    color: navy;
    font-size: 36px;
}
```

### JavaScript

JavaScript adds interactive functionality to a website.

It allows webpages to respond to user actions and dynamically update their content.

Example:

```javascript
alert("Welcome to my portfolio!");
```

The provided template uses JavaScript to support features such as theme switching and navigation.

## Editing Your Website

You can modify your website directly through GitHub or by using a local code editor.

### Option A: GitHub Web Editor

This option is recommended for participants who do not have a development environment installed.

1. Open your newly created GitHub repository.
2. Select the file you want to modify.
3. Click the pencil icon to open the editor.
4. Make your changes.
5. Select **Commit changes** to save your work.

Alternatively, press the `.` key while viewing your repository to open GitHub's browser-based editor.

### Option B: Visual Studio Code

For participants interested in working with a local development environment, we recommend [Visual Studio Code](https://code.visualstudio.com/).

1. Install Visual Studio Code.
2. Open your GitHub repository.
3. Select **Code → Download ZIP**.
4. Extract the downloaded files.
5. Open the project folder in Visual Studio Code.
6. Install the **Live Server** extension.
7. Right-click `index.html` and select **Open with Live Server**.

This will open the website in your default browser, allowing you to preview changes as you work.

**Note:** Changes made locally are not automatically synchronized with GitHub. To update your published website, you must commit and push your changes using Git or VS Code's Source Control tools. Alternatively, you can upload the modified files directly to your repository.

## Customizing the Template

The starter template includes placeholder content intended to be replaced with your own information.

Begin by opening `index.html` and locating the sections marked with `EDIT ME` comments.

### Personal Information

Update the template to include:

* Your name
* Your major or academic interests
* A brief personal introduction
* Your technical interests and skills
* Your academic or professional goals

Your portfolio should provide visitors with a clear introduction to who you are and what interests you.

### Projects

The projects section is an opportunity to demonstrate your experience and interests.

Consider including:

* Programming projects
* Engineering designs
* Arduino or electronics projects
* Robotics projects
* Academic assignments
* Hackathon submissions
* Personal projects

If you have not completed any projects yet, you may use this section to describe projects you intend to develop.

For each project, try to include a short description of its purpose, the technologies involved, and what you learned.

### Themes and Appearance

The template includes six predefined color themes:

| Theme    | Color Scheme          |
| -------- | --------------------- |
| `navy`   | Navy blue and amber   |
| `forest` | Forest green and gold |
| `sunset` | Orange and yellow     |
| `grape`  | Purple and pink       |
| `ocean`  | Teal and coral        |
| `mono`   | Monochrome            |

To change the default theme, locate the opening HTML tag in `index.html`:

```html
<html lang="en" data-theme="navy">
```

Replace `navy` with your preferred theme.

For example:

```html
<html lang="en" data-theme="forest">
```

You can further customize the appearance of your website by modifying `style.css`.

### Contact Information

Update the contact section with links to any relevant professional profiles.

Examples include:

* GitHub
* LinkedIn
* Professional email
* Personal projects or websites

Only include information you are comfortable sharing publicly.

## Publishing Your Website

Once you have customized your template, you can publish it using GitHub Pages.

GitHub Pages is a free hosting service that allows you to publish static websites directly from a GitHub repository.

### Deployment Instructions

1. Open your personal GitHub repository.

2. Navigate to **Settings**.

3. Select **Pages** from the left sidebar.

4. Under **Build and deployment**, select **Deploy from a branch**.

5. Select the following settings:

   * **Branch:** `main`
   * **Folder:** `/(root)`

6. Click **Save**.

Leave the **Custom domain** field empty unless you own a domain you intend to configure.

GitHub will automatically begin deploying your website.

### Accessing Your Website

Once deployment is complete, your website will be available at:

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

For example, if your GitHub username is `student123` and your repository is named `my-portfolio`, your website URL will be:

```text
https://student123.github.io/my-portfolio/
```

Deployment may take several minutes.

If your website does not appear, check the **Actions** tab in your repository to confirm that the deployment completed successfully.

### Updating Your Website

GitHub Pages will automatically redeploy your website whenever changes are committed to the configured publishing branch.

To update your website:

1. Modify the appropriate project files.
2. Commit your changes to the `main` branch.
3. Wait for GitHub Pages to finish deploying the updated version.

Your published website will reflect your latest changes.

## Workshop Requirements

By the end of the workshop, each participant should have completed the following:

* [ ] Created a personal repository using the FLC++ starter template.
* [ ] Replaced the placeholder name and introduction.
* [ ] Updated the About section.
* [ ] Added at least two projects or project ideas.
* [ ] Selected a preferred color theme.
* [ ] Updated the contact section.
* [ ] Published the website using GitHub Pages.
* [ ] Confirmed that the published website is accessible.

### Additional Challenges

Participants who finish early are encouraged to explore the following:

* [ ] Create a custom color theme.
* [ ] Add a personal profile picture.
* [ ] Implement additional JavaScript functionality.
* [ ] Add a downloadable resume.
* [ ] Create a new website section.
* [ ] Improve the mobile layout.
* [ ] Add a second webpage.
* [ ] Experiment with CSS animations and transitions.

These challenges are optional and intended to encourage further exploration.

## Submitting Your Work

Once your website is complete, share the following links with the club officers:

**GitHub Repository**

```text
https://github.com/YOUR-USERNAME/REPOSITORY-NAME
```

**Published Website**

```text
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

Your repository allows others to review your source code, while your published website provides a demonstration of the finished project.

## Additional Resources

The following resources may be helpful throughout the workshop:

* [MDN Web Docs](https://developer.mozilla.org/) — HTML, CSS, and JavaScript documentation.
* [GitHub Docs](https://docs.github.com/) — Repository management and version control.
* [GitHub Pages Documentation](https://docs.github.com/en/pages) — Website deployment and configuration.
* [Visual Studio Code](https://code.visualstudio.com/) — Code editor and development tools.
* [freeCodeCamp](https://www.freecodecamp.org/) — Free programming tutorials and exercises.

## About FLC++

FLC++ is a student programming club at Folsom Lake College dedicated to encouraging collaboration, technical development, and hands-on learning.

Through workshops, projects, and collaborative activities, the club provides opportunities for students to develop practical programming skills regardless of their previous experience.

For questions or assistance, reach out to a club officer or ask in the FLC++ Discord server.

**Discord:** https://discord.gg/Dyu466fwFp

---

**FLC++ | Folsom Lake College**

*Learn. Build. Collaborate.*

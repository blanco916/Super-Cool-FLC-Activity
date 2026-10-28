# FLC++ Starter Website Template

A free personal website you can make your own. It's plain HTML, CSS, and JavaScript, so there's nothing to buy, no account needed to edit it, and you can host it online for free.

```
flc-starter-template/
├── index.html   ← your content (text, links, sections)
├── style.css    ← how it looks (colors, fonts, spacing)
├── script.js    ← extras (dark mode, phone menu, animations)
└── README.md    ← this guide
```

---

## 1. Open it

**On your own laptop (recommended)**
1. Unzip this folder somewhere easy to find, like your Desktop.
2. Download [Visual Studio Code](https://code.visualstudio.com) (free).
3. In VS Code, click **Extensions** on the left, search **Live Server**, and install it.
4. **File → Open Folder** and pick this folder.
5. Right-click `index.html` and choose **Open with Live Server**. Your site opens in the browser and refreshes every time you save.

**No laptop or can't install anything?**
1. Go to [codepen.io](https://codepen.io) and click **Start Coding**.
2. Paste everything from inside the `<body>` tag of `index.html` into the **HTML** box.
3. Paste `style.css` into the **CSS** box and `script.js` into the **JS** box.
4. In CodePen's settings (gear icon on the CSS box), add this font link under "Add external stylesheets":
   `https://fonts.googleapis.com/css2?family=Lexend:wght@500;600&family=DM+Sans:wght@400;500;700&display=swap`
5. Make a free CodePen account if you want to save your work.

---

## 2. Make it yours

Work through this checklist. Search for **EDIT ME** in `index.html` to find every spot.

- [ ] Your name in the `<title>`, logo, hero, and footer
- [ ] Your headline and tagline
- [ ] Your About paragraph and skill tags
- [ ] Your projects (class projects and club projects count!)
- [ ] Your experience: clubs, jobs, volunteering, awards
- [ ] Your contact links: email, GitHub, LinkedIn
- [ ] Your color theme

### Change the colors
At the top of `index.html`, change `data-theme="navy"` to one of:

| Theme | Look |
|---|---|
| `navy` | FLC++ navy and amber (default) |
| `forest` | deep green and gold |
| `sunset` | burnt orange and yellow |
| `grape` | purple and pink |
| `ocean` | teal and coral |
| `mono` | black and white |

**Make your own theme:** in `style.css`, copy one theme block, rename it (for example `[data-theme="mine"]`), change the color codes, then set `data-theme="mine"`. Use any color picker (search "color picker" on Google) to get codes like `#1F3F66`.

### Change the fonts
1. Pick any two fonts at [fonts.google.com](https://fonts.google.com) (all free).
2. Click **Get font → Get embed code** and copy the `<link>` line.
3. Replace the Google Fonts `<link>` in `index.html` with yours.
4. Update `--font-heading` and `--font-body` at the top of `style.css`.

### Change the shape
At the top of `style.css`:
- `--radius`: roundness of cards and buttons. Try `0px` for sharp or `24px` for very round.
- `--max-width`: how wide your content gets.
- `--section-space`: room between sections.

### Add your photo
Put a picture named `photo.jpg` in this folder. In `index.html`, replace
`<div class="avatar">YN</div>` with
`<img src="photo.jpg" alt="Photo of me" class="avatar">`

### Add or remove things
- **Another project:** copy one whole `<article class="card"> ... </article>` block and paste it right after.
- **Project picture:** add `<img src="screenshot.png" alt="Screenshot of my project">` inside a card.
- **Remove a section:** delete everything between its `START` and `END` comments, and delete its link in the nav bar.
- **Turn off dark mode or animations:** set them to `false` in the `SETTINGS` at the top of `script.js`.

---

## 3. Put it online for free (GitHub Pages)

1. Make a free account at [github.com](https://github.com).
2. Click **+ → New repository**. Name it `your-username.github.io` (use your actual username) and make it **Public**.
3. Click **uploading an existing file** and drag in `index.html`, `style.css`, `script.js`, and any images. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch," pick **main** and click **Save**.
5. Wait a minute or two, then visit `https://your-username.github.io`. That's your live site!

To update it later, upload the changed files again.

---

## Ideas to keep going

- Add a "Now" section with what you're learning this month
- Link to a resume PDF: `<a href="resume.pdf">My resume</a>`
- Add a favicon (the little icon in the browser tab)
- Build a second page (like `blog.html`) and link to it from the nav
- Ask an FLC++ officer to review your site before you share it

Questions? Ask in the FLC++ Discord: discord.gg/Dyu466fwFp

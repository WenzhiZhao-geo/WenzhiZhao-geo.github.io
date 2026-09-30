# Wenzhi Zhao — Academic Homepage

A personal academic website for Wenzhi Zhao, a PhD candidate at Nanyang Technological University working on earthquake physics, fault friction, and rock mechanics.

Built with HTML, CSS, and JavaScript. No installation, package manager, or build step is required.

## Open locally

Download or clone this repository, then open `index.html` in your browser. Keep the folder structure intact so that images, styles, and the CV load correctly.

## Files

```text
index.html                         Page content and section layout
styles.css                         Typography, colors, spacing, and responsive layout
script.js                          Navigation and entrance animations
gallery.js                         Profile links and image viewer
data/links.js                      Contact links and mailing address
assets/cv/cv.pdf                    Downloadable academic CV
assets/images/favicon.svg          Browser icon
assets/images/portrait.webp         Homepage portrait
assets/images/gallery/Figure1.jpg  CouFrac 2026 conference
assets/images/gallery/Figure2.jpg  Research on rapid healing
assets/images/gallery/Figure3.jpg  Life beyond academia
assets/papers/*.bib                Publication citations
.nojekyll                          Disable Jekyll processing on GitHub Pages
LICENSE                            MIT license
```

## Edit a section

Open `index.html` in a text editor. Search for the relevant HTML ID:

| Content | Search for |
| --- | --- |
| Introduction, affiliations, research interests | `id="about"` |
| Education | `id="education"` |
| Publications and paper links | `id="publications"` |
| Awards | `id="awards"` |
| Gallery images and captions | `id="gallery"` |
| Contact and location | `id="contact"` |

Change text between tags while preserving the surrounding markup. Save the file and refresh your browser. Adjust font sizes and spacing in `styles.css` using the corresponding class names.

### Add hyperlinks

Use an anchor element for a clickable link:

```html
<p class="role">
  PhD Student at
  <a href="https://www.ntu.edu.sg/"
     target="_blank"
     rel="noopener noreferrer">NTU</a>
</p>
```

- `class="role"` applies the `.role` style from `styles.css`.
- `href` specifies the destination.
- `target="_blank"` opens the link in a new tab.
- `rel="noopener noreferrer"` prevents the new page from accessing the opening window and omits the referrer.
- The text between `<a>` and `</a>` is the visible label.

Use `mailto:wenzhi001@e.ntu.edu.sg` for email links and `#publications` for a link to a section on this page. Inside HTML attribute values, write `&amp;` instead of `&` in URLs containing query parameters.

### Update contact details and the CV

Edit `window.profileLinks` and `window.contactDetails` in `data/links.js`. Use `\n` for line breaks in the address. Update the matching links and address in `index.html` as well, so they remain correct when JavaScript is disabled. The Google Scholar link above the publication list is edited directly in `index.html`.

To update the CV, replace `assets/cv/cv.pdf` with a new PDF using the same filename. Export from your document editor with hyperlinks enabled.

### Add publications

Duplicate an `<article class="publication">` block in `index.html`. Update the title, authors, journal, year, DOI, and PDF link. Place a corresponding BibTeX file in `assets/papers/` and update the download link. Remove any link for which no resource is available.

### Update gallery images

To change the homepage portrait, replace `assets/images/portrait.webp` and update its `width` and `height` attributes in `index.html` to match the new image. The portrait is displayed as a square.

The gallery currently contains:

1. **CouFrac 2026:** work on a thermal rate-and-state friction framework for dynamic fault slip.
2. **Rapid healing:** current research on rapid healing of fault friction during the earthquake cycle.
3. **Beyond academia:** quiet moments by the water.

Replace the relevant image in `assets/images/gallery/`, or edit both the anchor's `href` and the image's `src` if its filename changes. Filenames are case-sensitive on GitHub Pages.

For each image, update:

- `alt`: a concise description of what the image shows.
- `width` and `height`: the image's actual pixel dimensions.
- `figcaption`: the title and visible description below the image.
- `data-caption`: the description shown in the enlarged image viewer.
- `aria-label`: the accessible label for the image link.

The research figure uses `gallery-card-research` to display the full diagram without cropping. Click any gallery image to enlarge it; use the arrow keys to browse and Escape to close.

## Publish with GitHub Pages

1. Create a GitHub repository. For a personal homepage at `https://YOUR-USERNAME.github.io/`, name the repository `YOUR-USERNAME.github.io`, replacing `YOUR-USERNAME` with your GitHub username. A different repository name gives a project URL such as `https://YOUR-USERNAME.github.io/REPOSITORY/`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be at the root, not inside another `academic-homepage` folder. Include `assets/`, `data/`, and `.nojekyll`.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose **main** and **/ (root)**. Save.
5. Wait for deployment to finish. Open the published URL shown in **Settings → Pages**.

To update the website, upload changed files and commit again. GitHub Pages will redeploy the site. Keep asset links relative, such as `assets/cv/cv.pdf`, so they work for both personal and project URLs.

See [GitHub Pages documentation](https://docs.github.com/en/pages) for hosting details.

## Fork this repository

Once this project is on GitHub, click **Fork** on its repository page and choose your account. Clone or download your fork to edit it locally. For your own homepage, rename the fork to `YOUR-USERNAME.github.io`, replace the personal content and images, and enable Pages in the fork's settings as described above.

## License

[MIT License](LICENSE). Copyright (c) 2026 wenzhi zhao.

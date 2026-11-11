# Student Clubs Website

**Group Members:**
- Saken Zhadiger
- Assilkhan Tolganay
- Nurtas Akmarzhan

**GitHub Repository:** https://github.com/Akmarzhan1223/Student-Club-WebSite
**Live Website:** https://akmarzhan1223.github.io/Student-Club-WebSite/

---

## Project Topic
Student Clubs — an informational multi-page website about student clubs
at the university, covering Sports, Debate, and Music clubs.

## Project Description
Student Clubs is a responsive multi-page website created for students who
want to learn about and join university clubs. The site presents each club
(Sports, Debate, Music), allows visitors to register through a validated
contact form, lets administrators manage the Sports training schedule,
enables visitors to search and filter club activities in real time, and
provides an interactive photo gallery with a lightbox.

The project started as a static HTML/CSS midterm website and was extended
for the endterm with dynamic behavior using JavaScript and jQuery, without
changing the original topic or structure, as required by the assignment.

## Website Structure
The website contains **5 pages**, all connected through a shared
navigation bar that is visible on every page:

| Page | Purpose |
|---|---|
| Home | About the club, mission, club overview cards, photo gallery |
| Sports | Sports club activities and editable training schedule |
| Debate | Debate club information and activities |
| Music | Music club activities with search and category filter |
| Contact | Registration / contact form with validation, contact details |

## Features Implemented

### HTML & CSS
- 5 separate HTML5 pages with semantic structure
- Shared navigation bar on every page
- External `style.css` file used across the whole website
- Consistent design: colors, fonts, spacing, and typography
- Responsive layout using **Bootstrap 5 grid** and **CSS Flexbox**
- Media queries for tablet and mobile devices
- Working images, links, and visual elements on all pages

### JavaScript & jQuery (endterm enhancements)
All JavaScript code is located in a single file: `js/script.js`.

**1. Form Validation (Contact page)**
- Required field checks for name, email, password, confirmation, and message
- Email format verification using Regular Expressions (RegEx)
- Password strength indicator that displays **weak / medium / strong**
- Password confirmation check to ensure both fields match
- Real-time feedback while the user types (error messages + colors)
- Form submission is prevented if validation fails
- Success message shown when the form is valid

**2. Dynamic Search & Category Filter (Music page)**
- Real-time search bar that filters activity items as the user types
- Category filter buttons: All / Lessons / Performances
- Search and category filters work together
- Case-insensitive matching
- Implemented with jQuery `.on("keyup")` — no page reload required

**3. CRUD Table (Sports page)**
- Full **Create / Read / Update / Delete** functionality for the
  training schedule
- **Create:** add a new training session using the input row
- **Read:** all records displayed dynamically in a formatted table
- **Update:** edit an existing record through a Bootstrap modal
- **Delete:** remove a record with a confirmation prompt

**4. Image Gallery with Lightbox (Home page)**
- Image gallery grid built with Bootstrap columns
- Lightbox effect: clicking an image opens it enlarged
- Navigation arrows to move between images
- Smooth transitions using jQuery `.fadeIn()` and `.fadeOut()`
- Close button to exit the lightbox

## Technologies Used
| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, layout, and responsive media queries |
| Bootstrap 5 | Responsive grid, components (modal, buttons) |
| JavaScript | DOM logic and application behavior |
| jQuery 3.7 | Form events, filters, animations, DOM manipulation |

## How the Features Work (brief)
- **Validation:** on `input` and `submit` events, each field is checked and
  an error message is shown if the value is invalid. The submit handler
  calls `preventDefault()` when any check fails.
- **Search & filter:** every activity element has a `data-type`. The filter
  function compares the search text (lowercased) against the element text
  and checks the active category, then shows or hides each item.
- **CRUD:** records are stored in a JavaScript array. Rendering rebuilds
  the table from the array; add/edit/delete modify the array and re-render.
- **Gallery:** image sources are collected into an array. Clicking an image
  opens the lightbox; arrow buttons cycle through the array with fade
  transitions between images.

## Individual Contribution

### Akmarzhan Nurtas
- Contact page: HTML form structure and full client-side validation
  (required fields, RegEx email, password strength, password confirmation,
  real-time feedback, submit prevention)
- Home page layout and gallery markup
- Wrote the project README

### Saken Zhadiger
- Music page: real-time search bar and category filter (jQuery events)
- Debate and Music page content, layout, and styling
- Consistency of navigation and design across pages

### Assilkhan Tolganay
- Sports page: full CRUD training schedule (add, edit via modal, delete
  with confirmation)
- Home page: lightbox gallery with arrows and fade transitions
- Final integration, testing, and GitHub Pages deployment


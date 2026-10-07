# Student Club Website

**Topic:** University student clubs.

## Project Description

Student Club Website is a five-page website about sports, debate, and music clubs. It helps students learn about club activities, check the sports training schedule, and find contact information. The project was created for the Web Development midterm assignment.

## Group Members and Individual Contributions

| Group member | Individual contribution |
| --- | --- |
| Saken Zhadiger | Planned the project and wrote the README file. |
| Tolganai Assilkhan | Wrote the HTML code and created the structure of the website pages. |
| Akmarzhan Nurtas | Wrote the CSS code and styled the website. |

## Website Pages

| Page | File | Content |
| --- | --- | --- |
| Home | `index.html` | Introduction, club mission, and three club cards with images. |
| Sports | `sports.html` | Sports activities and a training schedule table. |
| Debate | `debate.html` | Meeting information, public speaking practice, and debate activities. |
| Music | `music.html` | Meeting information, music lessons, and performance activities. |
| Contact | `contact.html` | Contact details and a form with name, email, club selection, and message fields. |

## Features Implemented

- Five connected pages with a shared navigation menu.
- HTML sections for the header, navigation, main content, and footer.
- Club descriptions, activity lists, and local images stored in `photos/`.
- A sports schedule table with days, times, activities, and locations.
- A contact form with required name and email fields and built-in browser validation.
- A shared external stylesheet, `style.css`, with Flexbox layouts for the header and home page cards.
- Hover and focus styles for links and the form button, plus a `:nth-child(even)` styling rule for table rows.
- Media queries at `768px` and `480px` for changes to the header, navigation links, and page spacing.
- Bootstrap table styling on the Sports page and layout, spacing, and text alignment utilities on the Debate page.

The contact form is a front-end demonstration. It does not send messages or save submissions.

## Technologies Used

- **HTML5** — page structure, navigation, images, lists, table, and form.
- **CSS3** — shared styling, Flexbox, pseudo-classes, and media queries.
- **Bootstrap 5.3.3 CSS** — loaded from a CDN on `sports.html` and `debate.html`.

## How to Run

1. Download and extract the project folder.
2. Keep the five HTML files, `style.css`, and the `photos/` folder in their original locations.
3. Open `index.html` in a web browser.
4. Use the navigation menu to open the other pages.

No installation or build step is required. An internet connection is needed to load external resources such as Bootstrap CSS.

## Published Website

**Website URL:** [https://akmarzhan1223.github.io/Student-Club-WebSite/]

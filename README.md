# Student Clubs Website

**Project Topic:** Student Clubs (Sports, Debate, Music)
**Group:** SE-2538

**GitHub Repository:** https://github.com/Akmarzhan1223/Student-Club-WebSite

## Project Description
This project is a responsive, multi-page website designed for university student clubs. The purpose of the website is to provide students with a central hub where they can learn about different clubs (Sports, Debate, Music), read frequently asked questions, search for recommended books, and register to join via a sign-in system.

## Group Members & Responsibilities
We divided the work equally to ensure all requirements were met:

- **Zhadiger Saken** 
  - Developed the Home page structure and layout.
  - Designed the overall CSS theme (colors, typography, and Flexbox responsive layout for mobile/tablet).
  - Implemented the Light/Dark Theme Toggle using JavaScript and `localStorage`.
  
- **Tolganay Assilkhan** 
  - Developed the Contact page and the Sign-In form.
  - Implemented the Sign-In / Sign-Out logic, saving user data in `localStorage`.
  - Integrated the Open Library API using `fetch()` on the Books page, including dynamic data rendering and error handling.

- **Akmarzhan Nurtas** 
  - Developed the Sports, Debate, and Music pages.
  - Built the FAQ page using jQuery, implementing the smooth `.slideToggle()` animation and the `+/-` visual indicators.
  - Sourced and integrated the image galleries for all club pages.

## Implemented Features
1. **Multi-page Navigation:** 7 pages connected by a sticky, responsive navigation bar.
2. **Light/Dark Theme:** A fully functional theme toggle. The selected theme is saved in `localStorage` and remains active after refreshing the page.
3. **User Authentication:** A sign-in form with basic validation. The username is saved in `localStorage`, displaying a personalized welcome message in the header. A sign-out button clears the saved state.
4. **jQuery FAQ Accordion:** An interactive FAQ section with 5 questions. Answers expand and collapse smoothly using jQuery `.slideToggle()`, with a `+` and `-` icon to indicate the state.
5. **API Integration:** A book search feature on the Books page. It uses the `fetch()` method to retrieve JSON data from the Open Library API, processes the data, and displays book titles and authors dynamically. It also includes `catch()` error handling for network issues.
6. **Responsive Design:** The website uses CSS Flexbox and Media Queries to ensure the layout adapts perfectly to desktop, tablet, and mobile screens.


## AI Usage Policy
AI tools (ChatGPT) were used as a supporting tool during the development of this project. Specifically, AI was used to help generate the visual style and CSS design, as well as to assist with debugging JavaScript code. 

All AI-generated code and designs were carefully reviewed, modified, and tested by the group members to ensure full understanding and functionality. We acknowledge this usage in accordance with the course rules.

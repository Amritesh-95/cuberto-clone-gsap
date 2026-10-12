# Cuberto Website Clone

A front-end clone of the [Cuberto](https://cuberto.com/) digital agency website, built to practice modern web animation and interaction techniques with HTML, CSS and JavaScript.

> This is a learning project. All design credit goes to the original Cuberto team. It is not affiliated with or endorsed by Cuberto.

## Features

- **Hero section** with the "We make it happen." headline and hover effects on Websites, Apps and Branding
- **Featured projects** with a project list beside a stacked image column
- **Design and development resources** slider
- **"New day - new inspiro"** slider section
- **Insights** blog cards with category, title and date
- **FAQ accordion** with expandable answers
- **Footer** with contact pills, office locations, navigation links and social icons
- **Magnetic buttons and icons** that follow the cursor
- **Smooth scrolling** and scroll-triggered animations
- **Easter egg:** type `ITACHI` anywhere on the screen (desktop) or tap the screen 4 times quickly (mobile), announced by a scrolling ticker at the top

## Tech Stack

| Purpose | Library |
| --- | --- |
| Animations | [GSAP](https://gsap.com/) + ScrollTrigger |
| Smooth scrolling | [Lenis](https://github.com/darkroomengineering/lenis) |
| Image hover effects | [Shery.js](https://github.com/Aatif-Ali/Shery.js) |
| 3D / WebGL | [Three.js](https://threejs.org/) |
| Effect controls | [ControlKit](https://github.com/automat/controlkit.js) |
| Icons | [Remix Icon](https://remixicon.com/) |

All libraries load from CDNs, so there is nothing to install.

## Project Structure

```
.
├── index.html    # Page markup
├── style.css     # Styles
├── script.js     # Animations and interactions
└── Gemini_Generated_Image_ueg5h3ueg5h3ueg5.png   # Navbar logo
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. Open `index.html` in your browser, or serve it with a local server such as the VS Code **Live Server** extension.
3. An internet connection is required for the CDN libraries and images.

> Shery.js effects work best through a local server rather than opening the file directly.

## What I Learned

- Scroll-driven animations with GSAP and ScrollTrigger
- Smooth scrolling with Lenis
- Magnetic cursor interactions
- Image hover distortion effects with Shery.js
- Building responsive layouts, sliders and an accessible FAQ accordion

## Credits

- Original design and content: [Cuberto](https://cuberto.com/)
- Images: Unsplash and Cuberto's CDN (for demo purposes only)
- Footer contact details and addresses are placeholders

## Author

**Amritesh Kumar**

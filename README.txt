Mayaya Technologies website
===========================
Files
  index.html      Home
  about.html      About
  services.html   Services
  gallery.html    Gallery
  contact.html    Contact
  css/style.css   All styling
  js/script.js    Menu, theme toggle, service lists, gallery, contact form checks

Run it locally
  Open index.html in a browser, or run:  python3 -m http.server 8000
  then visit http://localhost:8000

Host it
  Upload the whole folder, keeping the structure, to any static host:
  cPanel public_html, Netlify, Cloudflare Pages, GitHub Pages or Vercel.
  index.html must sit at the top level.

Things to replace before going live
  1. Email in contact.html (hello@mayayatech.example) and add phone/social links.
  2. Gallery tiles: edit the G array at the top of js/script.js, or swap the
     tiles for <img> screenshots of real projects.
  3. Contact form: it does not send anything yet. Connect it to Formspree,
     EmailJS or your own backend in the TODO spot in js/script.js
     (or set the form's action attribute to your form service URL).
  4. Add your logo/favicon: <link rel="icon" href="favicon.png"> in each page head.

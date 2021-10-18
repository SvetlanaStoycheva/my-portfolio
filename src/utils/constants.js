import img01 from './gallery-images/img-01.png';
import img02 from './gallery-images/img-02.png';
import img03 from './gallery-images/img-03.png';
import img04 from './gallery-images/img-04.png';
import img05 from './gallery-images/img-05.png';
import img08 from './gallery-images/img-08.png';
import img07 from './gallery-images/img-07.png';
// import img08 from './gallery-images/img-08.png';

// export const gallery = [
//   { id: 1, img: img01 },
//   // { id: 2, img: img02 },
//   { id: 3, img: img03 },
//   { id: 4, img: img04 },
//   // { id: 5, img: img05 },
//   // { id: 6, img: img06 },
//   // { id: 7, img: img07 },
//   { id: 8, img: img08 },
// ];

export const links = [
  { id: 1, text: 'home', url: '/' },
  { id: 2, text: 'portfolio', url: '/projects' },
  { id: 3, text: 'about me', url: '/about' },
  { id: 4, text: 'contact me', url: '/contact' },
];

export const projects = [
  {
    id: 1,
    title: 'Planets Facts App',
    subtitle: 'HTML/CSS/React JS',
    info:
      "It is a 8-page planets fact site built according to a project and figma design brief from Frontend Mentor. On each planet page user can toggle between the 'Overview', 'Internal Structure', and 'Surface Geology' tabs. The rendered data is in a local data.js file. Responsive design.",
    img: img08,
    url: 'https://sweta-fm-planets-facts.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/planets-facts-FM-react-app',
    borderClass: 'border06',
  },
  {
    id: 2,
    title: 'Online shop for clothing brand PlatForma',
    subtitle: 'HTML/CSS/React JS/netlify serverless functions',
    info:
      "The project is inspired by Comfy Store project from John Smilga's React course. The product's data is stored and controlled in  graphical interface 'Airtable'. As a server is used serverless netlify functions. The online shop contains home page (navbar/sidebar, featured products), products page with sorting (by price and name) and filtering (color, price, occasion, etc.), single product page (reviews with stars, product colors) and shopping cart (product quantity, clear cart).",
    img: img02,
    url: 'https://sweta-react-store-platforma.netlify.app',
    sourceCode: 'https://github.com/SvetlanaStoycheva/react-PlatForma-store',
    borderClass: 'border01',
  },
  {
    id: 3,
    title: 'Clock app',
    subtitle: 'HTML/CSS/React JS/APIs',
    info:
      "Frontend Mentor challenge. The clock app uses external APIs to set the clock data based on the visitor's location as well as an API to show random generated quotes. User can: View the current time and location information based on their IP address; View additional information about the date and time in the expanded state (sidebar); Be shown the correct greeting and background image based on the time of day they're visiting the site; Generate random programming quotes by clicking the refresh icon near the quote",
    img: img03,
    url: 'https://sweta-fm-clock-app.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/04-Project-Clock-app',
    borderClass: 'border02',
  },
  {
    id: 4,
    title: 'IP Address Tracker',
    subtitle: 'HTML/CSS/React JS/APIs',
    info:
      "Frontend Mentor challenge. This App uses an API to get the user's IP Address location and a react map library to generate the map. On the initial page load, the user can see their own IP Address on the map. They can search for any IP addresses or domains and see the key information and location.",
    img: img05,
    url: 'https://sweta-fm-ip-tracker.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/03-Project-IP%20Address%20Tracker',
    borderClass: 'border03',
  },
  {
    id: 5,
    title: 'Space Travel Company Website - Your Seat To Space',
    subtitle: 'HTML/CSS/Vanilla JS/Netlify serverless functions',
    info:
      "The project is inspired by Comfy project from John Smilga's JavaScript course. The displayed data is fetched from a Netlify serverless function and it is saved on the locale Storage. The user can choose and order their preferred space travel adventure from many, that are offered by different companies like SpaceX, Virgin Galactic, etc. The website contains: home page with featured flights and a slider, flights page with filtering options by company and price, single flight page with detailed information and shopping cart",
    img: img01,
    url: 'https://your-seat-to-space.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/Vanilla-JS-online-store-travelling-company-Your-Seat-To-Space',
    borderClass: 'border04',
  },
  {
    id: 6,
    title: 'URL shortening landing page',
    subtitle: 'HTML/CSS/React JS/API',
    info:
      "Frontend Mentor challenge. The app is a landing page that contains a Link Shortener form, so that the user can make any link shorter and easier to remember. The short link gets copied to the user's clipboard in a single click. There is an error message when the form is submitted with empty input field or incorrect url. The user can see a list of their shortened links, even after refreshing the browser (local storage)",
    img: img07,
    url: 'https://sweta-fm-url-shortening.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/01-Project-url-shortening-api',
    borderClass: 'border05',
  },
  {
    id: 7,
    title: 'Website for ski guiding company PowderWise Aspen',
    subtitle: 'CSS Flexbox',
    info:
      'The project is inspired by the CSS flexbox project in the John Smilga CSS course. It is a responsive website that contains: navbar/sidebar, hero with title and call-to-action button, about section, services section, featured tours (cards with hover effects), contact form, gallery and footer',
    img: img04,
    url: 'https://sweta-css-flexbox-ski-touring-powderwise.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/CSS-flexbox-PowderWise-ski-touring-Aspen',
    borderClass: 'border06',
  },
  // {
  //   id: 7,
  //   title: 'Clock app',
  //   subtitle: 'HTML/CSS/React JS/APIs',
  //   info:
  //     "Frontend Mentor challenge. Using external APIs to set the clock data based on the visitor's location and to show random generated quotes. User can: View the current time and location information based on their IP address; View additional information about the date and time in the expanded state (sidebar); Be shown the correct greeting and background image based on the time of day they're visiting the site; Generate random programming quotes by clicking the refresh icon near the quote",
  //   img: img03,
  //   url: 'https://sweta-fm-clock-app.netlify.app',
  //   sourceCode:
  //     'https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/04-Project-Clock-app',
  //   borderClass: 'border07',
  // },
];

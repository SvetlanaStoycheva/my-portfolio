import img01 from './gallery-images/img-01.png';
import img02 from './gallery-images/img-02.png';
import img03 from './gallery-images/img-03.png';
import img04 from './gallery-images/img-04.png';
import img05 from './gallery-images/img-05.png';
// import img06 from './gallery-images/img-06.png';
// import img07 from './gallery-images/img-07.png';
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
    title: 'Online shop for clothing brand PlatForma',
    subtitle: 'HTML/CSS/React JS/netlify serverless functions',
    info:
      "The project is inspired by Comfy Store project from John Smilga's React tutorial. The product's data is stored and controlled in  graphical interface 'Airtable'. As a server is used serverless netlify functions. The online shop contains home page (navbar/sidebar, featured products), products page with sorting (by price and name) and filtering (color, price, occasion, etc.), single product page (reviews with stars, product colors), shopping cart (product quantity, clear cart)",
    img: img02,
    url: 'https://sweta-react-store-platforma.netlify.app',
    sourceCode: 'https://github.com/SvetlanaStoycheva/react-PlatForma-store',
    borderClass: 'border01',
  },
  {
    id: 2,
    title: 'Clock app',
    subtitle: 'HTML/CSS/React JS/APIs',
    info:
      "Frontend Mentor challenge. Using external APIs to set the clock data based on the visitor's location and to show random generated quotes. User can: View the current time and location information based on their IP address; View additional information about the date and time in the expanded state (sidebar); Be shown the correct greeting and background image based on the time of day they're visiting the site; Generate random programming quotes by clicking the refresh icon near the quote",
    img: img03,
    url: 'https://sweta-fm-clock-app.netlify.app',
    sourceCode:
      'https://github.com/SvetlanaStoycheva/frontend-mentor-challenges-React-JS/tree/main/04-Project-Clock-app',
    borderClass: 'border02',
  },
];

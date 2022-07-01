import { App } from './components/app/app';

import './global.css';

export const Root = () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <App />
      </body>
    </html>
  );
};

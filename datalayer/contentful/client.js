// var contentful = require("contentful");

import * as contentful from "contentful";
// console.log("contentful: ", contentful);

function isServer() {
  return !(typeof window != "undefined" && window.document);
}

const serverOnlyCreateClient = () => {
  if (!isServer()) return;
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  return client;
};

// export const client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// });

export const client = serverOnlyCreateClient();

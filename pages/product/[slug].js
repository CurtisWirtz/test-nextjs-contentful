// var contentful = require("contentful");
import { client } from "../../datalayer/contentful/client";
// import * as contentful from "contentful";
// console.log("contentful: ", contentful);

// var client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// });

export default function ProductPage(props) {
  console.log(props);
  if (props.error) {
    return (
      <div>
        <h1>An error occurred</h1>
        <h2>{props.error}</h2>
      </div>
    );
  }
  return (
    <div>
      <div>
        <small>Brand</small>
        <h2>{props.brand.fields.brandName}</h2>

        <small>Product Name</small>
        <h1>{props.name}</h1>

        <small>Boats</small>
        <p>
          {props.boats.map(boat => {
            return boat.fields.name;
          })}
        </p>
        <br />

        <small>Species</small>
        <p>{props.species.fields.name}</p>
      </div>
    </div>
  );
}

//runs when our build starts, goes for each path we give it, runs static props on it
export async function getStaticPaths() {
  const products = await client.getEntries({
    content_type: "productReview"
  });

  const paths = products.items.map(product => ({
    params: {
      slug: product.fields.productId
    }
  }));

  // console.log("paths: ", paths);

  return {
    fallback: true,
    paths
  };
}

//this function runs at buildtime
// export async function getStaticProps() {
export async function getStaticProps(context) {
  // console.log("context: ", context.params);
  // Get data from headless CMS
  const product = await client.getEntries({
    content_type: "productReview",
    // limit: 1,
    "fields.productId": context.params.slug
  });
  // console.log("products: ", product);

  // const data = JSON.stringify(product);
  // console.log("data: ", data);
  // const product = await client.getEntry("1EMRwwaRc6IVUQRTRORU2g");
  //   .then(function (entry) {
  // logs the entry metadata
  // console.log(entry.sys);

  // logs the field with ID title
  // console.log(entry.fields.heading);});

  return {
    props: {
      // data
      // error: !product.items.length && `No product with id: ${context.params.slug}`,
      ...product?.items?.[0]?.fields
    }
  };
}

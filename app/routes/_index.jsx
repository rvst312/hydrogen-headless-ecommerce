import { defer } from '@shopify/remix-oxygen';
import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { HeroHome, CardsCategory } from '../components/HeroHome';
import RecommendedProducts from '../components/RecomendedProducts';
import RecomProdByCollection from '../components/RecomendedProductsByCollection';
import { EyeIcon, TruckIcon, LightIcon, TickIcon } from '../components/icons/icon'

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'JUICYCBD | HOME' }];
};

/**
 * @param {LoaderFunctionArgs}
 */


// Pedimos los datos necesarios
export async function loader({ context }) {
  const { storefront } = context;

  const handle = "indoor";
  const variables = { handle };

  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const productWithCollection = await storefront.query(PRODUCT_WITH_COLLECTION, {
    variables,
  });

  return defer({ recommendedProducts, productWithCollection });
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();

  return (
    <div className="home">
      <HeroHome />
      <CardsCategory />
      <RecommendedProducts products={data.recommendedProducts} textBar="FLORES CBD" />
      <RecomProdByCollection products={data.productWithCollection} textBar="INDOOR CBD" />
      <GarantyIcons />
      <CallToIg />
    </div>
  );
}

export function GarantyIcons() {

  return (
    <section className='garanties'>
      <div className="icon-wrapper">
        <EyeIcon />
        <span>
          Envío discreto
        </span>
      </div>
      <div className="icon-wrapper">
        <TruckIcon />
        <span>
          24/48 hrs
        </span>
      </div>
      <div className="icon-wrapper">
        <LightIcon />
        <span>
          100% indoor
        </span>
      </div>
      <div className="icon-wrapper">
        <TickIcon />
        <span>
          Pago seguro
        </span>
      </div>
    </section>
  );
}

export function CallToIg() {
  const ig = {
    url: "https://www.instagram.com/juicy.hemp/",
    img_1: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/Post_4.png?v=1716231005",
    img_2: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/Post_5.png?v=1716231005",
    img_3: "https://cdn.shopify.com/s/files/1/0822/2569/3009/files/Post_3.png?v=1716231006",
  }

  return (
    <div className="call-to-ig">
      <h3>
        Síguenos en Instagram
      </h3>
      <a href={ig.url} target='_blank'>
        @juicy.hemp
      </a>
      <div className="recomended-photos">
        <img src={ig.img_1} alt="juicy hemp" />
        <img src={ig.img_2} alt="juicy hemp" />
        <img src={ig.img_3} alt="juicy hemp" />
      </div>
    </div>
  );
}

const PRODUCT_WITH_COLLECTION = `query($handle: String!) {
  collection(handle: $handle) {
    id
    handle
    title
    description
    image {
      id
      url
    }
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 2) {
            nodes {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
}`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 2) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

// old query
const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;
// end 

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

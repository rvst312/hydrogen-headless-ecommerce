import { defer } from '@shopify/remix-oxygen';
import React from 'react';
import { useLoaderData } from '@remix-run/react';
import { HeroHome, CardsCategory } from '../components/HeroHome';
import RecommendedProducts from '../components/RecomendedProducts';
import { EyeIcon } from '../components/icons/icon'

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
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const productCollection = storefront.query(PRODUCT_WHIT_COLLECTION);

  return defer({ recommendedProducts, productCollection });
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();

  return (
    <div className="home">
      <HeroHome />
      <CardsCategory />
      <RecommendedProducts products={data.recommendedProducts} textBar="FLOWERS" />
      <RecommendedProducts products={data.recommendedProducts} textBar="PACKS" />
      <GarantyIcons />
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
      <EyeIcon />
        <span>
          Envío discreto
        </span>
      </div>
      <div className="icon-wrapper">
      <EyeIcon />
        <span>
          Envío discreto
        </span>
      </div>
      <div className="icon-wrapper">
      <EyeIcon />
        <span>
          Envío discreto
        </span>
      </div>
    </section>
  );
}

const PRODUCT_WHIT_COLLECTION = `query{
  collection( handle: "packs" ) {
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
          featuredImage {
            id
            url
          }
        }
      }
    }
  }
}`;



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

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */

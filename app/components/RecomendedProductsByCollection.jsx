
import React from 'react';
import { Await, Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { Suspense } from 'react';

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */

export default function RecomProdByCollection({ products, textBar }) {

    // Text Bar
    const flowers = Array(20).fill(textBar);
    const bar_content = flowers.join(" · ");

    return (
        <div className="recommended-products">
            <div className="text-bar">
                <div className="text-container">
                    <div className="track">
                        <div className="content">
                            <h2>
                                {bar_content}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skeleton loading */}
            <Suspense fallback={
                <div className='skeleton-loading'>skeleton loading</div>
            }>

                <Await resolve={products}>
                    {({ collection }) => (
                        <div className="recommended-products-grid">
                            {collection.products.edges.map((product) => (
                                <Link
                                    key={product.node.id}
                                    className="recommended-product"
                                    to={`/products/${product.node.handle}`}
                                >
                                    <div className="image-wrapper">
                                        <Image
                                            data={product.node.images.nodes[1] ?? product.node.images.nodes[0]}
                                            aspectRatio="1/1"
                                            alt={product.node.images.altText}
                                            width={product.node.images.width}
                                            height={product.node.images.height}
                                            sizes="(min-width: 45em) 20vw, 50vw"
                                            className="default-image"
                                        />
                                        <Image
                                            data={product.node.images.nodes[0]}
                                            aspectRatio="1/1"
                                            alt={product.node.images.altText}
                                            width={product.node.images.width}
                                            height={product.node.images.height}
                                            sizes="(min-width: 45em) 20vw, 50vw"
                                            className="hover-image"
                                        />
                                    </div>
                                    <div className="info-prod">
                                        <h4>{product.node.title}</h4>
                                        <small>
                                            <Money data={product.node.priceRange.minVariantPrice} />
                                        </small>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </Await>
            </Suspense>

            <div className="calltoaction">
                <Link
                    className="primary-button p-button-mobile"
                    to="/collections"
                    onClick={() => {
                        if (layout === 'aside') {
                            window.location.href = '/collections';
                        }
                    }}
                >
                    Ir a la tienda
                </Link>
            </div>
        </div >
    );
}



import React from 'react';
import { Await, Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { Suspense } from 'react';

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */

export default function RecommendedProducts({ products, textBar }) {

    // Contenído que muestra la barra de texto
    const flowers = textBar ? Array(20).fill(textBar) : [];
    const bar_content = flowers.join(" · ");

    return (
        <div className="recommended-products">
            {textBar && (
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
            )}

            {/* Charge Estate */}
            <Suspense fallback={
                <div className='skeleton-loading'></div>
            }>
                <Await resolve={products}>
                    {({ products }) => (
                        <div className="recommended-products-grid">
                            {products.nodes.map((product) => (
                                <Link
                                    key={product.id}
                                    className="recommended-product"
                                    to={`/products/${product.handle}`}
                                >
                                    <div className="image-wrapper">
                                        <Image
                                            data={product.images.nodes[1] ?? product.images.nodes[0]}
                                            aspectRatio="1/1"
                                            alt={product.images.nodes.altText}
                                            width={product.images.nodes.width}
                                            height={product.images.nodes.height}
                                            sizes="(min-width: 45em) 20vw, 50vw"
                                            className="default-image"
                                        />
                                        <Image
                                            data={product.images.nodes[0]}
                                            aspectRatio="1/1"
                                            alt={product.images.nodes.altText}
                                            width={product.images.nodes.width}
                                            height={product.images.nodes.height}
                                            sizes="(min-width: 45em) 20vw, 50vw"
                                            className="hover-image"
                                        />
                                    </div>
                                    <div className="info-prod">
                                        <h4>{product.title}</h4>
                                        <small>
                                            <Money data={product.priceRange.minVariantPrice} />
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



import React, { useEffect } from 'react';
import { Await, Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';
import { Suspense } from 'react';

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */

export default function RecommendedProducts({ products }) {

    return (
        <div className="recommended-products">
            <div className="text-bar">
                <div className="text-container">
                    <h4>
                        FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS · FLOWERS
                    </h4>
                </div>
            </div>

            <Suspense fallback={<div>Cargando...</div>}>
                <Await resolve={products}>
                    {({ products }) => (
                        <div className="recommended-products-grid">
                            {products.nodes.map((product) => (
                                <Link
                                    key={product.id}
                                    className="recommended-product"
                                    to={`/products/${product.handle}`}
                                >
                                    <Image
                                        data={product.images.nodes[0]}
                                        aspectRatio="1/1"
                                        sizes="(min-width: 45em) 20vw, 50vw"
                                    />
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
            <br />
        </div >
    );
}
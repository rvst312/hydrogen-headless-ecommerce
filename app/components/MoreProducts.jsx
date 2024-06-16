import React from "react";
import { Await, Link } from "@remix-run/react";
import { Image, Money } from "@shopify/hydrogen";
import { Suspense } from "react";

/**
 * @param {{
 *    products: Promise<RecomendedProductsQuery>;
 * }}
 */

export default function MoreProducts({ products, title }) {

    return (
        <div className="recommended-products">
        <h3>{title}</h3>
            {/* Charge Estate */}
            <Suspense fallback={
                <div className='skeleton-loading'></div>
            }>
                <Await resolve={products}>
                    {({ products }) => (
                        <div className="recommended-products-grid">
                            {products.nodes.slice(0, 4).map((product) => (
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
        </div>
    )
}
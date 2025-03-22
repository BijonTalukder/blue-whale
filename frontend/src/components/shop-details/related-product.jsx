import shop_data from "@/data/shop-data";
import Image from "next/image";
import Link from "next/link";

const RelatedProduct = () => {
    const slicedProducts = shop_data.slice(0, 4);
    return (
        <div className="related-products-wrap">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center mb-55">
                        <h2 className="title">Recently Viewed</h2>
                    </div>
                </div>
            </div>
            <div className="row rel-product-slider-active">
                {slicedProducts.map((item) => (
                    <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="shop-item">
                            <div className="product-thumb">
                                <Link href="/shop-details">
                                    <Image src={item.thumb} width={338} height={375} alt="img" />
                                </Link>
                                <div className="price-wrap">
                                    <span className="amount">${item.price}.00</span>
                                </div>
                            </div>
                            <div className="product-content">
                                <h4 className="title"><Link href="/shop-details">{item.title}</Link></h4>
                                <Link href="/shop-details" className="add-cart-btn">{item.btn}</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProduct

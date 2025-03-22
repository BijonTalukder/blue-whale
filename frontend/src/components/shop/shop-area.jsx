"use client"
import { useState } from "react"
import { useGetProductQuery } from "@/redux/Api/feature/productApi"
import Image from "next/image"
import Link from "next/link"

const ShopArea = () => {
    const {data, isSuccess} = useGetProductQuery()
    const [selectedCategory, setSelectedCategory] = useState(null)

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    // Filter the products based on the selected category
    const filteredProducts = selectedCategory 
        ? data?.data.filter(item => item.category === selectedCategory)
        : data?.data

    return (
        <section className="shop-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {/* Sidebar with Categories */}
                        <div className="category-sidebar">
                            <h3>Categories</h3>
                            <ul>
                                {/* Example categories, you can dynamically load these */}
                                <li onClick={() => handleCategoryClick("Electronics")}>Electronics</li>
                                <li onClick={() => handleCategoryClick("Fashion")}>Fashion</li>
                                <li onClick={() => handleCategoryClick("Home & Kitchen")}>Home & Kitchen</li>
                                <li onClick={() => handleCategoryClick("Sports")}>Sports</li>
                                <li onClick={() => handleCategoryClick(null)}>All Categories</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        {/* Products Display */}
                        <div className="cycure-shop-product-main">
                            <div className="row">
                                {isSuccess && filteredProducts?.map((item) => {
                                    const imageArray = JSON.parse(item?.productImage)
                                    const imageUrl = imageArray && imageArray[0]?.imageUrl || "/default-image.jpg" 

                                    return (
                                        <div key={item.id} className="col-xl-3 col-lg-4 col-sm-6">
                                            <div className="shop-item">
                                                <div className="product-thumb">
                                                    <Link href={`/shop-details/${item?.productSlug}`}>
                                                        <Image src={imageUrl} width={338} height={375} alt="img" />
                                                    </Link>

                                                    {item.productPriceIsDisplayed && (
                                                        <div className="price-wrap">
                                                            <span className="amount">${item.productPrice}.00</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="product-content">
                                                    <h4 className="title">
                                                        <Link href={`/shop-details/${item?.productSlug}`}>
                                                            {item.productTitle}
                                                        </Link>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShopArea

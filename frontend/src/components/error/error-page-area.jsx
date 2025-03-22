import Header from "@/layout/headers/header";
import Link from "next/link";

const ErrorPageArea = () => {
    return (
        <>
            <Header />
            <section className="error-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-6 col-xl-7 col-lg-9 col-md-10">
                            <div className="error-content text-center">
                                <h2 className="error-text">404</h2>
                                <h5 className="content">Sorry, the page you are looking for could not be found</h5>
                                <Link href="/" className="btn back-btn">
                                    <span className="text">Back to home</span>
                                    <span className="shape"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ErrorPageArea

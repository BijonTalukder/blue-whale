const marquee = [
    "We are always ready to protect your data",
    "We are always ready to protect your data",
    "We are always ready to protect your data",
    "We are always ready to protect your data",
    "We are always ready to protect your data",
    "We are always ready to protect your data",
]
const Marquee = ({ style }) => {
    return (
        <div className={`marquee-area ${style ? "marquee-style-two" : "marquee-area"}`}>
            <div className="marquee-wrap">
                {marquee.map((li, index) => (
                    <span key={index}>{li}</span>
                ))}
            </div>
        </div>
    )
}

export default Marquee

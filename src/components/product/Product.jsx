import { Link, useNavigate } from "react-router-dom"
import { TiArrowSortedDown } from "react-icons/ti";
import { RiArrowUpSFill } from "react-icons/ri";
import { useState } from "react";


const Product = ({ item }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    // increment
    const handleIncrement = () => {
        setCount((prevState) => prevState + 1);

    };

    // decrement
    const handleDescrement = () => {
        if (count > 1) {
            setCount((prevState) => prevState - 1);
        }
    };

    const handleBuyNow = (item) => {
        localStorage.setItem("product", JSON.stringify(item));

        navigate("/cart");
    }

    return (
        <>
            <div className="single-product">
                <div className="product-name">
                    <h3> {item?.name} </h3>
                </div>
                <div className="product-count">
                    <h4> {item?.price} <span> / 1 pcs </span></h4>
                </div>
                <div className="product-buy">
                    <div className="count-box">
                        <div className="counter d-flex align-items-center">
                            <h1> {count} </h1>
                            <button className='upper' onClick={handleIncrement} > <RiArrowUpSFill /> </button>
                            <button className='lower' onClick={handleDescrement}> <TiArrowSortedDown /> </button>
                        </div>
                    </div>
                    <div className="buy-btn">
                        <button className="btn btn-primary" onClick={() => handleBuyNow(item)}> Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product














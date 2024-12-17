import { useState } from "react";
import { BsCart4 } from "react-icons/bs";

export default function Header() {

    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>MyMarket</span>
                <ul className="nav">
                    <BsCart4 onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && "active"}`}/>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                {cartOpen && (
                    <div className="shop-cart">
                        
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}

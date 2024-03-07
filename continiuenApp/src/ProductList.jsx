const ProductList = (props) => {
    const products = [
        {id: 1, name: "First Product", price: 115},
        {id: 2, name: "Second Product", price: 230},
        {id: 3, name: "Third Product", price: 345},
        {id: 4, name: "Fourth Product", price: 460},
        {id: 5, name: "Fifth Product", price: 575},
        {id: 6, name: "Sixth Product", price: 690},
    ]

    return (
        <>
            <h2>P: PRODUKT LIST</h2>
            <h3 style={{color:"green"}}>{props.nazwaProduktu}</h3>
            <ul>
                {
                    products.map(({id, name, price}) => { return (
                        <li key={id}>
                            <h4>{name}</h4>
                            <p>{price}</p>
                        </li>
                    )})
                }
            </ul>
        </>
    );
}

export default ProductList;
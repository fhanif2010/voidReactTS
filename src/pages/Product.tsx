import { useSearchParams } from "react-router";

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("sort"))

    const handleSort = (sort: string) => {
        searchParams.set("sort", sort)
        setSearchParams(searchParams)
        
    }

    return (
        <>
        {/* Mengambil data route dynamic query untuk di tampilkan */}
            <h1>Product List</h1>
            <ul>
                <li>
                    Name : {searchParams.get("sort")}
                </li>
                <li>
                    Kategory : {searchParams.get("name")}
                </li>
            </ul>

            <button onClick={() => handleSort("asc")}>Asc</button>
            <button onClick={() => handleSort("dsc")}>Dsc</button>
            <button onClick={() => handleSort("Hight Price")}>Hight Price</button>
            <button onClick={() => handleSort("lower Price")}>lower Price</button>
        </>
    )
}

export default Product;
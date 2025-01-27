import { useParams } from "react-router";

const ProductDetailPage = () => {
    const params = useParams();

    return (
        <>
            <h1>
                Ini Barang Terpilih

                <h3>{params.productSlug}</h3>
            </h1>
        </>
    )
}

export default ProductDetailPage;
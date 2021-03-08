import ProductCard from "./ProductCard";

const office = {
    title: "Office 2019",
    description: "Licencia 100% legal para activacion de Office 2019",
    imageSrc: "https://cracxpro.com/wp-content/uploads/2019/01/Microsoft-Office-2019-Product-Key-Generator-Crack-ISO-Full-Version.jpg"
}

const winHome = {
    title: "Windows 10 Home",
    description: "Licencia 100% legal para activacion de Windows 10 Home",
    imageSrc: "https://file-cdn.goodoffer24.com/product/90a1809489a3c8605b8d4deb39805be5.jpg"
}

const winPro = {
    title: "Windows 10 Pro",
    description: "Licencia 100% legal para activacion de Windows 10 Pro",
    imageSrc: "https://file-cdn.goodoffer24.com/product/475d22e8d0e5a550dd0dee4ed45c4da4.jpg"
}

const Products = () => {
    return (
        <div className="container mx-auto flex flex-wrap">
            <ProductCard product={winPro}/>
            <ProductCard product={winHome}/>
            <ProductCard product={office}/>
        </div>
    )
}

export default Products;

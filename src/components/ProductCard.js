const ProductCard = ({ product }) => {

    const {title, description, imageSrc} = product;

    return (
      <div className="mx-5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-full px-8 py-6 border border-gray-200 shadow-2xl">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
        <img
            src={imageSrc}
            className="px-3 py-2"
        />
        <p className="leading-relaxed text-base mb-4">{description}</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    )
}

export default ProductCard;

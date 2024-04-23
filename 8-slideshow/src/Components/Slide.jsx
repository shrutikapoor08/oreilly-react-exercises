const Slide = ({ products, activeIndex }) => {
  const product = products?.[activeIndex];
  return (
    <div>
      <img src={product?.images[0]} alt={product.description} />
    </div>
  );
};

export default Slide;

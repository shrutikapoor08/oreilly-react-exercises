const Slide = ({ product }) => {
  return (
    <div>
      <img src={product?.images[0]} alt={product.description} />
    </div>
  );
};

export default Slide;

function ProductTitle ({ sku, name }) {
  return (
    <div className="product-title">
      <div>{sku}</div>
      <h2>{name}</h2>
    </div>
  )
}

export default ProductTitle
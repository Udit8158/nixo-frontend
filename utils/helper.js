const calculateDiscount = (sellingPrice, originalPrice) => {
  const discountPrice = originalPrice - sellingPrice;
  const discountPercent = (discountPrice / originalPrice) * 100;
  return Math.round(discountPercent);
};

export { calculateDiscount };

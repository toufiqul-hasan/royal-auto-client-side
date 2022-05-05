import { useEffect, useState } from "react";

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://thawing-retreat-14463.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return [products, loading];
};

export default useProducts;
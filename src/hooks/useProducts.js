import { useEffect, useState } from "react";

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://thawing-retreat-14463.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [reload]);
  return [products, loading, reload, setReload];
};

export default useProducts;
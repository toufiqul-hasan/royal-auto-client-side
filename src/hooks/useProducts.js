import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://royal-auto.onrender.com/car")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [reload]);
  return [products, loading, reload, setReload];
};

export default useProducts;

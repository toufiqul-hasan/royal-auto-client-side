import { useEffect, useState } from "react";

const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://royal-auto.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [reload]);
  return [products, loading, reload, setReload];
};

export default useProducts;
import axios from "axios";
import React, { useEffect, useState } from "react";

const useGamming = () => {
  let [data, setData] = useState([]);
  let [loadding, setLoadding] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    axios("/gamming.json")
    .then(mydata=>setData(mydata))
    .catch(e=>setError(e))
    .finally(()=>setLoadding(false))
  }, []);
  return { data, loadding, error };
};

export default useGamming;

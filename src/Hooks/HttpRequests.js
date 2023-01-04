import { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosGet(url, type) {
  const [request, setRequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setRequest({
      loading: true,
      data: null,
    });
    axios
      .get(url)
      .then((response) =>
        setRequest({
          loading: false,
          data:
            type === "detail" ? response.data : response.data.products,
        })
      )
      .catch((err) => {
        setRequest({ loading: false, data: null });
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return request;
}

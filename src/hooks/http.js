import { useState, useCallback } from "react";

export const useHttp = () => {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json; charset=UTF-8";
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();
        setStatus(response.status);

        if (!response.ok) {
          throw new Error(data.message || "Ошибка, попробуйте ещё раз");
        }

        return data;
      } catch (e) {
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { request, error, clearError, status };
};

import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request Failed ");
  }
  const json = await response.json();

  return json;
};

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    isEmpty: data && data.lenght === 0,
  };
};

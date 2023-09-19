"use client";
import { usePosts } from "@/app/hooks/usePosts";

export const Posts = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>...Loading</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>No Data</div>;
  }

  return (
    <ol>
      {data.map((post) => (
        <div key={post.id}>
          <li>{post.title}</li>
        </div>
      ))}
    </ol>
  );
};

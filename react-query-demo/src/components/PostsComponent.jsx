import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

const PostsComponent = () => {
  const [showPosts, setShowPosts] = useState(true);

  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 minute caching
  });

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setShowPosts(!showPosts)}
      >
        {showPosts ? "Hide Posts" : "Show Posts"}
      </button>

      <button
        className="mb-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        onClick={() => refetch()}
      >
        Refetch Posts
      </button>

      {showPosts && (
        <div>
          {isLoading ? (
            <div>Loading posts...</div>
          ) : isError ? (
            <div>Error: {error.message}</div>
          ) : (
            <div>
              {isFetching && (
                <div className="text-sm text-gray-500">Updating...</div>
              )}
              <ul className="space-y-2">
                {data.map((post) => (
                  <li key={post.id} className="p-2 border rounded shadow-sm">
                    <h2 className="font-semibold">{post.title}</h2>
                    <p>{post.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PostsComponent;

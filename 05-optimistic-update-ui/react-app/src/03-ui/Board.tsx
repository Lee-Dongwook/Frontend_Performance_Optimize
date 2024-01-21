import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import type { Board } from "../00-domain";

import {
  useFetchPosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
} from "../02-application";

export default function BoardPage() {
  const queryClient = useQueryClient();

  const { data: posts } = useFetchPosts();

  const createPostMutation = useCreatePost(queryClient);

  const updatePostMutation = useUpdatePost(queryClient);

  const deletePostMutation = useDeletePost(queryClient);

  const handleCreatePost = async (newPost: Board) => {
    await createPostMutation.mutateAsync(newPost, {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    });
  };

  const handleUpdatePost = async (id: number, updatedPost: Board) => {
    await updatePostMutation.mutateAsync(
      { id, updatedPost },
      {
        onSucess: () => {
          queryClient.invalidateQueries("posts");
        },
      }
    );
  };

  const handleDeletePost = async (id: number) => {
    await deletePostMutation.mutateAsync(id, {
      onSucess: () => {
        queryClient.invalidateQueries("posts");
      },
    });
  };

  return (
    <div>
      <h1>React Query Optimistic Update UI Example</h1>
      <ul>
        {posts &&
          posts.map((post, index) => (
            <li key={index}>
              <strong>{post.title}</strong>
              <p>{post.content}</p>
              <button>Update</button>
              <button>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

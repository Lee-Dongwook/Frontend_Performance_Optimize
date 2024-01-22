import React from "react";
import { useQueryClient, type UseQueryResult } from "@tanstack/react-query";
import type { Board } from "../00-domain";

import {
  useFetchPosts,
  useCreatePost,
  useUpdatePost,
  useDeletePost,
} from "../02-application";

export default function BoardPage() {
  const queryClient = useQueryClient();

  const { data: posts }: UseQueryResult<Board[]> = useFetchPosts();

  const createPostMutation = useCreatePost(queryClient);

  const updatePostMutation = useUpdatePost(queryClient);

  const deletePostMutation = useDeletePost(queryClient);

  const handleCreatePost = async (newPost: Board) => {
    try {
      const result = await createPostMutation.mutateAsync(newPost);
      console.log("게시물이 성공적으로 생성되었습니다.", result);
    } catch (error) {
      console.error("게시물 생성 중 오류", error);
    }
  };

  const handleUpdatePost = async (id: number, updatedPost: Board) => {
    try {
      const result = await updatePostMutation.mutateAsync({ id, updatedPost });

      console.log("게시물이 성공적으로 수정되었습니다.", result);
    } catch (error) {
      console.error("게시물 수정 중 오류", error);
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      const result = await deletePostMutation.mutateAsync(id);
      console.log("게시물이 성공적으로 삭제 되었습니다.", result);
    } catch (error) {
      console.error("게시물 삭제 중 오류", error);
    }
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

import { useMutation, type QueryClient } from '@tanstack/react-query';
import { createPost, updatePost, deletePost } from '../01-api';

export const useCreatePost = (queryClient: QueryClient) => {
    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']});
        }
    });
}

export const useUpdatePost = (queryClient: QueryClient) => {
   return useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['posts']});
    }
   })
}

export const useDeletePost = (queryClient: QueryClient) => {
   return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['posts']});
    }
   })
}
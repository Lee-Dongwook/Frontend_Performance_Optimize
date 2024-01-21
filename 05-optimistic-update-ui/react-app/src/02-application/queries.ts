import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../01-api";

export const useFetchPosts = () => {
    return useQuery({
        queryKey: ['posts'], 
        queryFn: fetchPosts
    });
}
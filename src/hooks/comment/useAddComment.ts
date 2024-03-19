import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

const useAddComment = () => {
  
  const inputRef = useRef<HTMLInputElement | null>(null);
  const {mutate: addCommentMutate} = useMutation({
    mutationFn: () => 
  })
  const handleSubmit = () => {}
  return { inputRef, handleSubmit };
};

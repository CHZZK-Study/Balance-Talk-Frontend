import { postFile } from '@/api/file';
import { UploadedImage } from '@/types/file';
import { useMutation } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export interface InputProfileImageProps {
  setProfilePhoto: (name: string, profilePhoto: string) => void;
  imgSrc?: string;
}

export const useCheckProfileImage = ({
  setProfilePhoto,
  imgSrc,
}: InputProfileImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(imgSrc || '');
  const [isError, setIsError] = useState<boolean>(false);

  const fileUpload = useMutation({
    mutationFn: postFile,
    onSuccess: (res: UploadedImage) => {
      setProfilePhoto('profilePhoto', res.storedName);
    },
  });
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        const reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onloadend = (e) => {
          setImageSrc(e.target?.result as string);
        };
        setIsError(false);
        const frm = new FormData();
        frm.append('file', acceptedFiles[0], acceptedFiles[0].name);
        fileUpload.mutate(frm);
      } else {
        setIsError(true);
        setProfilePhoto('profilePhoto', '');
      }
    },
    [fileUpload, setProfilePhoto],
  );

  const { getRootProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    maxSize: 3145728, // 3MB
  });

  const handleDefaultImage = () => {
    setImageSrc('');
  };

  return { imageSrc, isError, getRootProps, handleDefaultImage };
};

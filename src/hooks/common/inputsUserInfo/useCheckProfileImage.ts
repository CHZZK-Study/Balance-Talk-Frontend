import { DEFAULT_PROFILE_URL } from '@/constants/image';
import { useFileUploadMutation } from '@/hooks/api/file/useFileUploadMutation';
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
  const { mutate: fileUpload } = useFileUploadMutation();

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
        fileUpload(
          { formData: frm, params: { type: 'MEMBER' } },
          {
            onSuccess: (res) => {
              setProfilePhoto('profileImgUrl', res.imgUrls[0]);
            },
          },
        );
      } else {
        setIsError(true);
        setProfilePhoto('profileImgUrl', '');
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

  const handleDefaultImage = (src: string) => {
    let profileImgUrl = '';
    switch (src) {
      case DEFAULT_PROFILE_URL.OCTOPUS.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.OCTOPUS.SERVER;
        break;
      case DEFAULT_PROFILE_URL.JELLYFISH.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.JELLYFISH.SERVER;
        break;
      case DEFAULT_PROFILE_URL.RAY.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.RAY.SERVER;
        break;
      case DEFAULT_PROFILE_URL.EEL.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.EEL.SERVER;
        break;
      case DEFAULT_PROFILE_URL.TURTLE.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.TURTLE.SERVER;
        break;
      case DEFAULT_PROFILE_URL.RABBIT.CLIENT:
        profileImgUrl = DEFAULT_PROFILE_URL.RABBIT.SERVER;
        break;
      default:
        break;
    }
    setImageSrc(src);
    setProfilePhoto('profileImgUrl', profileImgUrl);
  };

  return { imageSrc, isError, getRootProps, handleDefaultImage };
};

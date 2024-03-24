/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { useDropzone } from 'react-dropzone';
import { AxiosErrorResponse } from '@/api/interceptor';
import { fetchFileData } from '../../api/posts/posts';

type ImageDropZoneProps = {
  setFile: <U>(name: string, value: U) => void;
};

const ImageDropZone: React.FC<ImageDropZoneProps> = ({ setFile }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      try {
        const imageInfo = await fetchFileData(acceptedFiles[0]);
        setImageAlt(imageInfo.originalName);
        setImageUrl(imageInfo.path + imageInfo.storedName);
        setFile('storedImageName', imageInfo.storedName);
      } catch (error: AxiosErrorResponse) {
        console.log(error);
      }
    },
    [setFile],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
  });

  return (
    <div
      {...getRootProps()}
      css={css({
        width: '450px',
        height: '350px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEEEEE',
        boxShadow: '0px 4px 4px gray',
        borderRadius: '5px',
      })}
    >
      <input {...getInputProps()} />
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={imageAlt}
          css={css({ width: '100%', height: '100%' })}
        />
      ) : (
        <p
          css={css({
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: '24px',
          })}
        >
          +
        </p>
      )}
    </div>
  );
};

export default ImageDropZone;

/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useDropzone } from 'react-dropzone';
import { CreatePostImageFile } from '../../types/post';
import { fetchFileData } from '../../api/posts/posts';

type ImageDropZoneProps = {
  setFile: <U>(name: string, value: U) => void;
};

const ImageDropZone: React.FC<ImageDropZoneProps> = ({ setFile }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const { name, size, type } = acceptedFiles[0];
      setFile<CreatePostImageFile>('file', {
        uploadName: name,
        path: name,
        type,
        size: size.toString(),
      });
      const imageInfo = fetchFileData();
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
      <p
        css={css({
          fontFamily: 'SpoqaHanSansNeo-Regular',
          fontSize: '24px',
        })}
      >
        +
      </p>
    </div>
  );
};

export default ImageDropZone;

/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { useDropzone } from 'react-dropzone';

const ImageDropZone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // 여기서 파일 처리
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

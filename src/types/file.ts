export interface UploadedImage {
  imgUrls: string[];
  storedNames: string[];
}

export type FileUploadType = {
  type: 'TALK_PICK' | 'TEMP_TALK_PICK' | 'GAME' | 'MEMBER';
};

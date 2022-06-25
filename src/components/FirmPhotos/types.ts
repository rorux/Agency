export type TFirmPhotosProps = {
  photos:
    | {
        name: string;
        filepath: string;
        thumbpath: string;
      }[]
    | undefined;
  updatedAt: string | undefined;
};

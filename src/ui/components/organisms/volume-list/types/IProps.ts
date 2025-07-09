import type { IProps as IVolumeProps } from '../../../molecules/volume/types/IProps';

export interface VolumeItem extends Omit<IVolumeProps, 'overflow'> {
  uuid: string;
}

export interface IProps {
  title: string;
  volumes: VolumeItem[];
}

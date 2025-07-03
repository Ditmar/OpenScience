export interface IAttributes {
  Year: string;
  Volumes: string;
}

export interface IData {
  id: number;
  attributes: IAttributes;
}

export interface IProps {
  data: IData[];
  initialYear?: string;
  backgroundImage: string;
}

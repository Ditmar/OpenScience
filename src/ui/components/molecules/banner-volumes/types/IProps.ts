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
  yearText: string;
  textSearch: string;
  backgroundImage: string;
  logo: string;
}

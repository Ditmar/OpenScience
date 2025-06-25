export interface IProps {
  id: number;
  pathImage: string;
  volumen: string;
  date: string;
  alt: string;
}

export interface CarouseIProps {
  data: {
    data: IProps[];
  };
}

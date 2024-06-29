export interface IProps {
  id: number;
  attributes: {
    title: string;
    date: string;
    portrait: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
    year_volume: {
      data: {
        id: number;
        attributes: {
          Year: string;
          Volumes: string;
        };
      };
    };
  };
}

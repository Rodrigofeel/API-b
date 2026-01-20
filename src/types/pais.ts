export interface Pais {
  name: {
    common: string;
  };
  capital?: string[];
  region?: string;
  population: number;
  languages?: {
    [key: string]: string;
  };
  flags?: {
    svg: string;
    png: string;
    alt?: string;
  };
}

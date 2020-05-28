export const colors = {
  primary: '#3F51B5',
  card: '#303F9F',
  background: '#BDBDBD',
  text: '#FFF',
  border: '#BDBDBD',
};

export type news = {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: Array<string>;
  org_facet: Array<any>;
  per_facet: Array<any>;
  geo_facet: Array<any>;
  multimedia: Array<multimedia>;
  short_url: string;
};

export type multimedia = {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
};

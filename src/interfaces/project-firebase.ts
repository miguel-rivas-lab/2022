interface ProjectLinkFirebase {
  url: string;
  text: string;
  params?: Array<string>;
  self?: boolean;
}

export interface ProjectFirebase {
  date: string,
  title: string,
  types?: Array<number>,
  roles?: Array<number>,
  clients: Array<number>,
  tools?: Array<number>,
  links?: Array<ProjectLinkFirebase>,
  disabled?: boolean,
  children?: Array<string>,
  slides: number,
}

export interface Group {
  date: string,
  types?: Array<number>,
  roles?: Array<number>,
  clients: Array<number>,
  tools?: Array<number>,
  children?: Array<string>,
  slides: number,
}
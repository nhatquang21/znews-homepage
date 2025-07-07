export interface ICommonNews {
  title: string;
  slug: string;
  image: string;
  
}

export interface ICommonNewsWithDesc extends ICommonNews {
  desc: string;
}
export interface ICommonNews {
  title: string;
  slug: string;
  image: string;
  desc?: string;
  category?: string;
  isVideo?: boolean;
  label?: string;
  iconType?: string;
}

export interface INewVideo extends ICommonNews {
  videoUrl: string;
}

import { ICommonNews } from "@/types/common";


interface ITopNewsBullet {
  title: string;
  slug: string;
}


export interface ITopNewsMain extends ICommonNews {
  desc: string;
  bullet?: ITopNewsBullet[];
}

export interface ITopNewsData {
  main: ITopNewsMain;
  left: ICommonNews[];
  right: ICommonNews[];
}

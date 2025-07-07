import BooksSlider from "./BooksSlider";
import { ICommonNews } from "@/types/common";

export default async function BooksSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/books`, {
    cache: "no-store",
  });
  const books: ICommonNews[] = await res.json();

  return <BooksSlider books={books} />;
}

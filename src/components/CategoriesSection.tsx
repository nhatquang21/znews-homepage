import { ICategory } from "@/types/category";
import { Divider, Grid } from "@mui/material";
import CategoryCard from "./CategoryCard";

export default async function CategoriesSection() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  const data: ICategory[] = await res.json();

  return (
    <>
    <Divider sx={{ my: 6, borderColor: "black", borderWidth: 1 }} />
    <Grid container spacing={4}>
      {data.map((item, idx) => (
        <Grid size={{ xs: 12, md: 3 }} key={idx}>
          <CategoryCard item={item} />
        </Grid>
      ))}
    </Grid>
    </>
  );
}

import { productAPI } from "@/features/products/api/products";
import Lookbook from "@/features/products/components/Lookbook";
import ProductGrid from "@/features/products/components/ProductGrid";

export default async function Home() {
  const productAll = await productAPI.getALL();
  return (
    <main>
      <ProductGrid products={productAll.data} />
      <Lookbook />
    </main>
  );
}

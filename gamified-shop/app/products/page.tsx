import { ProductGrid } from "@/components/shared/ProductGrid";
import { mockProducts } from "@/lib/mock-data";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground">
          همه محصولات
        </h1>
        <p className="text-lg text-secondary-foreground mt-2">
          جدیدترین تجهیزات گیمینگ را در اینجا پیدا کنید.
        </p>
      </div>
      <ProductGrid products={mockProducts} />
    </div>
  );
}

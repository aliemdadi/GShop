import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/shared/ProductGrid";
import { mockProducts } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-b from-purple-50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            خرید فقط یک معامله نیست، یک بازی است!
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-8">
            در فروشگاه ما با هر خرید امتیاز بگیرید، به مراحل بالاتر بروید و جوایز شگفت‌انگیز ببرید.
          </p>
          <Button size="lg" variant="primary">
            مشاهده محصولات
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            محصولات ویژه
          </h2>
          <ProductGrid products={mockProducts} />
        </div>
      </section>
    </div>
  );
}

import { useEffect, useState } from 'react';
import HeroSlider from '../../components/slideProdect/HeroSlider';
import SlideProduct from '../../components/slideProdect/SlideProduct';
import SlideProductLoading from '../../components/slideProdect/SlideProductLoading';
import './home.css';
import PageTransitionEvent from '../../components/PageTransition';
const categories = [
  'smartphones',
  'mobile-accessories',
  'laptops',
  'tablets',
  'sunglasses',
  'sports-accessories',
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(products);
  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            try {
              const res = await fetch(
                `https://dummyjson.com/products/category/${category}`,
                { signal: controller.signal }
              );
              if (!res.ok) throw new Error(`HTTP ${res.status}`);
              const data = await res.json();
              return { [category]: data.products || [] };
            } catch (err) {
              console.error('Error fetching category', category, err);
              return { [category]: [] }; // fallback for this category
            }
          })
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching products', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    return () => controller.abort();
  }, []);

  return (
    <PageTransitionEvent>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category] || []}
                title={category.replace('-', ' ')}
              />
            ))}
      </div>
    </PageTransitionEvent>
  );
}

export default Home;

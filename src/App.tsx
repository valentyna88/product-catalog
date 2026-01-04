import Header from "./components/Header/Header";
import ProductsList from "./features/products/ui/ProductsList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <ProductsList />
      </main>
    </div>
  );
}

export default App;

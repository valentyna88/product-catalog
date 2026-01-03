import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <p className="text-gray-600">Products list</p>
      </main>
    </div>
  );
}

export default App;

function Hero() {
  return (
    <div className="bg-blue-500 text-white text-center py-20">

      <h1 className="text-5xl font-bold mb-4">
        Welcome to MyStore
      </h1>

      <p className="text-xl mb-6">
        Best ecommerce deals just for you
      </p>

      <a
        href="/products"
        className="bg-white text-blue-600 px-6 py-3 rounded font-semibold"
      >
        Start Shopping
      </a>

    </div>
  );
}

export default Hero;

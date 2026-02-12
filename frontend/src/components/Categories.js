function Categories() {
  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👕" },
    { name: "Shoes", icon: "👟" },
    { name: "Laptops", icon: "💻" },
    { name: "Accessories", icon: "🎧" },
  ];

  return (
    <div className="bg-white shadow p-6 grid grid-cols-5 text-center">
      {categories.map((c, i) => (
        <div key={i} className="hover:scale-105 transition cursor-pointer">
          <div className="text-4xl">{c.icon}</div>
          <p className="mt-2 font-medium">{c.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;

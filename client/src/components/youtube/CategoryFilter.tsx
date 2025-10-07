import React, { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        <button
          type="button"
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === null
              ? 'bg-primary text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition duration-200`}
        >
          All Videos
        </button>

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition duration-200 whitespace-nowrap`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// Example usage of CategoryFilter in a parent component
const App: React.FC = () => {
  const categories = ['Sports', 'Music', 'News', 'Movies'];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category);
    // You can add more logic here when category changes
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Video Categories</h1>
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div>
        <h2 className="text-xl font-semibold mb-2">
          Showing: {activeCategory ?? 'All Videos'}
        </h2>
        {/* Your videos list or content filtered by activeCategory here */}
      </div>
    </div>
  );
};

export default CategoryFilter;

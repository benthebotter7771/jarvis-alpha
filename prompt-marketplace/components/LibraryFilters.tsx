'use client';

import { Filter, Search, Tag } from 'lucide-react';
import { useState } from 'react';

export default function LibraryFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = [
    { id: 'handwerker', label: 'Handwerker', count: 124 },
    { id: 'steuerberater', label: 'Steuerberater', count: 89 },
    { id: 'aerzte', label: 'Ärzte', count: 67 },
    { id: 'anwaelte', label: 'Anwälte', count: 45 },
    { id: 'unternehmer', label: 'Unternehmer', count: 156 },
    { id: 'service', label: 'Service', count: 78 },
    { id: 'projektmanager', label: 'Projektmanager', count: 56 },
  ];

  const popularTags = [
    { id: 'steuer', label: 'Steuer', count: 42 },
    { id: 'rechnung', label: 'Rechnung', count: 38 },
    { id: 'marketing', label: 'Marketing', count: 56 },
    { id: 'kommunikation', label: 'Kommunikation', count: 34 },
    { id: 'dokumentation', label: 'Dokumentation', count: 29 },
    { id: 'vorlage', label: 'Vorlage', count: 67 },
    { id: 'strategie', label: 'Strategie', count: 23 },
    { id: 'kundenservice', label: 'Kundenservice', count: 31 },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId)
        ? prev.filter(id => id !== tagId)
        : [...prev, tagId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filter
        </h3>
        {(selectedCategories.length > 0 || selectedTags.length > 0) && (
          <button
            onClick={clearFilters}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            Zurücksetzen
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Prompts durchsuchen..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Kategorien</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`flex items-center justify-between w-full p-2 rounded-lg text-left transition-colors ${
                selectedCategories.includes(category.id)
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{category.label}</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3 flex items-center">
          <Tag className="h-4 w-4 mr-2" />
          Beliebte Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <button
              key={tag.id}
              onClick={() => toggleTag(tag.id)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag.id)
                  ? 'bg-blue-100 text-blue-700 border border-blue-300'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.label}
              <span className="ml-1 text-gray-500">({tag.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Schwierigkeitsgrad</h4>
        <div className="space-y-2">
          {['Anfänger', 'Fortgeschritten', 'Experte'].map((level) => (
            <label key={level} className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
        Filter anwenden
      </button>
    </div>
  );
}
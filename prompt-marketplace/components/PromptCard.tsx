'use client';

import { Heart, Download, Star, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface PromptCardProps {
  prompt: {
    id: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    likes: number;
    downloads: number;
    author: string;
    isFeatured: boolean;
  };
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(prompt.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Handwerker': 'bg-orange-100 text-orange-700',
      'Steuerberater': 'bg-blue-100 text-blue-700',
      'Ärzte': 'bg-emerald-100 text-emerald-700',
      'Unternehmer': 'bg-purple-100 text-purple-700',
      'Service': 'bg-cyan-100 text-cyan-700',
      'Projektmanager': 'bg-indigo-100 text-indigo-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {prompt.isFeatured && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
          <div className="flex items-center text-amber-700 text-sm font-medium">
            <Star className="h-4 w-4 mr-2 fill-amber-500" />
            Featured Prompt
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`${getCategoryColor(prompt.category)} px-3 py-1 rounded-full text-xs font-medium`}>
              {prompt.category}
            </span>
            <h3 className="text-lg font-semibold text-gray-900 mt-2">{prompt.title}</h3>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{prompt.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {prompt.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-1 ${
                isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`h-5 w-5 ${isLiked ? 'fill-red-500' : ''}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            <div className="flex items-center space-x-1 text-gray-500">
              <Download className="h-5 w-5" />
              <span className="text-sm font-medium">{prompt.downloads}</span>
            </div>
            <div className="text-sm text-gray-500">
              von <span className="font-medium">{prompt.author}</span>
            </div>
          </div>
          
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Ansehen
          </button>
        </div>
      </div>
    </div>
  );
}
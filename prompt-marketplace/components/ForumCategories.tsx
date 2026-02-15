'use client';

import { MessageSquare, Users, HelpCircle, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';

export default function ForumCategories() {
  const categories = [
    {
      id: 1,
      title: 'Allgemeine Diskussion',
      description: 'Allgemeine Fragen und Diskussionen zu AI-Prompts',
      icon: MessageSquare,
      color: 'bg-blue-100 text-blue-600',
      topics: 456,
      posts: 2345,
      latestPost: 'Vor 2 Stunden',
    },
    {
      id: 2,
      title: 'Berufsspezifische Prompts',
      description: 'Diskussionen zu Prompts für bestimmte Berufsgruppen',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-600',
      topics: 289,
      posts: 1567,
      latestPost: 'Vor 5 Stunden',
    },
    {
      id: 3,
      title: 'Fragen & Hilfe',
      description: 'Stelle Fragen und erhalte Hilfe von der Community',
      icon: HelpCircle,
      color: 'bg-amber-100 text-amber-600',
      topics: 678,
      posts: 3456,
      latestPost: 'Vor 30 Minuten',
    },
    {
      id: 4,
      title: 'Tipps & Tricks',
      description: 'Teile deine besten Praktiken und Tipps',
      icon: Lightbulb,
      color: 'bg-purple-100 text-purple-600',
      topics: 234,
      posts: 1234,
      latestPost: 'Gestern',
    },
    {
      id: 5,
      title: 'Tutorials & Guides',
      description: 'Lerne von detaillierten Anleitungen und Tutorials',
      icon: BookOpen,
      color: 'bg-red-100 text-red-600',
      topics: 123,
      posts: 789,
      latestPost: 'Vor 2 Tagen',
    },
    {
      id: 6,
      title: 'Neue Trends',
      description: 'Diskutiere die neuesten Entwicklungen in der AI-Welt',
      icon: TrendingUp,
      color: 'bg-cyan-100 text-cyan-600',
      topics: 156,
      posts: 890,
      latestPost: 'Heute',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Forum Kategorien</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Alle Kategorien
        </button>
      </div>

      <div className="space-y-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <a
              key={category.id}
              href="#"
              className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors group"
            >
              <div className={`${category.color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6" />
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Letzter Beitrag</div>
                    <div className="text-xs text-gray-600">{category.latestPost}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mt-4 text-sm text-gray-500">
                  <div>
                    <span className="font-medium text-gray-900">{category.topics}</span>
                    <span className="ml-1">Themen</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">{category.posts}</span>
                    <span className="ml-1">Beiträge</span>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
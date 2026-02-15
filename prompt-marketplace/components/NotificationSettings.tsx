'use client';

import { Bell, Mail, MessageSquare, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: {
      newPrompts: true,
      replies: true,
      likes: false,
      communityUpdates: true,
      newsletter: false,
    },
    push: {
      newMessages: true,
      mentions: true,
      trendingPrompts: false,
      followerActivity: true,
    },
    inApp: {
      announcements: true,
      tips: true,
      achievements: true,
      suggestions: false,
    },
  });

  const toggleNotification = (category: keyof typeof notifications, key: string) => {
    setNotifications(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key as keyof typeof prev[typeof category]],
      },
    }));
  };

  const notificationCategories = [
    {
      id: 'email',
      title: 'E-Mail-Benachrichtigungen',
      icon: Mail,
      description: 'Erhalte Updates per E-Mail',
      items: [
        { key: 'newPrompts', label: 'Neue Prompts in deinen Kategorien', icon: TrendingUp },
        { key: 'replies', label: 'Antworten auf deine Beiträge', icon: MessageSquare },
        { key: 'likes', label: 'Likes auf deine Prompts', icon: Bell },
        { key: 'communityUpdates', label: 'Community-Updates', icon: Users },
        { key: 'newsletter', label: 'Wöchentlicher Newsletter', icon: Mail },
      ],
    },
    {
      id: 'push',
      title: 'Push-Benachrichtigungen',
      icon: Bell,
      description: 'Erhalte Push-Nachrichten im Browser',
      items: [
        { key: 'newMessages', label: 'Neue Nachrichten', icon: MessageSquare },
        { key: 'mentions', label: 'Erwähnungen', icon: Users },
        { key: 'trendingPrompts', label: 'Trending Prompts', icon: TrendingUp },
        { key: 'followerActivity', label: 'Aktivität von Followern', icon: Users },
      ],
    },
    {
      id: 'inApp',
      title: 'In-App-Benachrichtigungen',
      icon: MessageSquare,
      description: 'Benachrichtigungen innerhalb der App',
      items: [
        { key: 'announcements', label: 'Wichtige Ankündigungen', icon: Bell },
        { key: 'tips', label: 'Tipps & Tricks', icon: TrendingUp },
        { key: 'achievements', label: 'Errungenschaften', icon: Bell },
        { key: 'suggestions', label: 'Personalisierte Vorschläge', icon: Users },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Benachrichtigungen</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => {
              // Enable all notifications
              const allEnabled = Object.keys(notifications).reduce((acc, category) => {
                acc[category as keyof typeof notifications] = Object.keys(notifications[category as keyof typeof notifications]).reduce((catAcc, key) => {
                  catAcc[key] = true;
                  return catAcc;
                }, {} as any);
                return acc;
              }, {} as typeof notifications);
              setNotifications(allEnabled);
            }}
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
          >
            Alle aktivieren
          </button>
          <button
            onClick={() => {
              // Disable all notifications
              const allDisabled = Object.keys(notifications).reduce((acc, category) => {
                acc[category as keyof typeof notifications] = Object.keys(notifications[category as keyof typeof notifications]).reduce((catAcc, key) => {
                  catAcc[key] = false;
                  return catAcc;
                }, {} as any);
                return acc;
              }, {} as typeof notifications);
              setNotifications(allDisabled);
            }}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Alle deaktivieren
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {notificationCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{category.title}</h4>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.items.map((item) => {
                  const ItemIcon = item.icon;
                  const isEnabled = notifications[category.id as keyof typeof notifications][item.key as keyof (typeof notifications)[keyof typeof notifications]];
                  
                  return (
                    <div key={item.key} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ItemIcon className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{item.label}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleNotification(category.id as keyof typeof notifications, item.key)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          isEnabled ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            isEnabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notification Frequency */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Benachrichtigungshäufigkeit</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="frequency"
              defaultChecked
              className="h-4 w-4 text-blue-600"
            />
            <div>
              <p className="font-medium text-gray-900">Sofort</p>
              <p className="text-sm text-gray-600">Erhalte Benachrichtigungen sofort</p>
            </div>
          </label>
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="frequency"
              className="h-4 w-4 text-blue-600"
            />
            <div>
              <p className="font-medium text-gray-900">Täglich</p>
              <p className="text-sm text-gray-600">Zusammengefasste Updates einmal täglich</p>
            </div>
          </label>
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="frequency"
              className="h-4 w-4 text-blue-600"
            />
            <div>
              <p className="font-medium text-gray-900">Wöchentlich</p>
              <p className="text-sm text-gray-600">Wöchentlicher Überblick</p>
            </div>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end pt-8 border-t border-gray-200 mt-8">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Einstellungen speichern
        </button>
      </div>
    </div>
  );
}
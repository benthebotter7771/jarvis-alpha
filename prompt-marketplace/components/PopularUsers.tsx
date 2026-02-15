'use client';

import { Trophy, Star, TrendingUp } from 'lucide-react';

export default function PopularUsers() {
  const users = [
    {
      id: 1,
      name: 'Max Schmidt',
      role: 'Prompt-Experte',
      points: 1245,
      rank: 1,
      avatarColor: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Anna Müller',
      role: 'Community-Leader',
      points: 987,
      rank: 2,
      avatarColor: 'bg-emerald-500',
    },
    {
      id: 3,
      name: 'Thomas Weber',
      role: 'Aktiver Helfer',
      points: 756,
      rank: 3,
      avatarColor: 'bg-purple-500',
    },
    {
      id: 4,
      name: 'Lisa Bauer',
      role: 'Content-Creator',
      points: 654,
      rank: 4,
      avatarColor: 'bg-amber-500',
    },
    {
      id: 5,
      name: 'David Klein',
      role: 'Neues Mitglied',
      points: 432,
      rank: 5,
      avatarColor: 'bg-red-500',
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-amber-500" />
          Top Mitglieder
        </h3>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Rangliste
        </button>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className={`${user.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-bold`}>
                  {user.name.charAt(0)}
                </div>
                {user.rank <= 3 && (
                  <div className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {user.rank}
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{user.name}</h4>
                <p className="text-sm text-gray-600">{user.role}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 text-amber-600">
                <Star className="h-4 w-4 fill-amber-500" />
                <span className="font-bold">{user.points}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Punkte</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <div>
              <p className="text-sm font-medium text-gray-900">Dein Rang: #42</p>
              <p className="text-xs text-gray-500">+3 Plätze diese Woche</p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Profil ansehen
          </button>
        </div>
      </div>
    </div>
  );
}
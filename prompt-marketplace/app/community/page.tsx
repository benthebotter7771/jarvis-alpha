import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ForumCategories from '@/components/ForumCategories';
import RecentTopics from '@/components/RecentTopics';
import PopularUsers from '@/components/PopularUsers';

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
          <p className="text-gray-600 mt-2">Tausche dich mit anderen Prompt-Profis aus und stelle Fragen.</p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-gray-900">1,248</div>
            <div className="text-gray-600 text-sm mt-1">Aktive Mitglieder</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-gray-900">3,456</div>
            <div className="text-gray-600 text-sm mt-1">Diskussionen</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-gray-900">12,789</div>
            <div className="text-gray-600 text-sm mt-1">Antworten</div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-gray-600 text-sm mt-1">Neue heute</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Forum Categories */}
          <div className="lg:col-span-2">
            <ForumCategories />
          </div>

          {/* Right column - Recent Topics and Popular Users */}
          <div className="space-y-8">
            <RecentTopics />
            <PopularUsers />
            
            {/* Create New Topic Button */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Starte eine Diskussion</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Hast du eine Frage oder möchtest deine Erfahrungen teilen?
              </p>
              <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Neues Thema erstellen
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
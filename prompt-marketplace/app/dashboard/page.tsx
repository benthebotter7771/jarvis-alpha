import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardStats from '@/components/DashboardStats';
import RecentActivity from '@/components/RecentActivity';
import QuickActions from '@/components/QuickActions';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Willkommen zurück! Hier ist dein Überblick.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Stats and Quick Actions */}
          <div className="lg:col-span-2 space-y-8">
            <DashboardStats />
            <RecentActivity />
          </div>

          {/* Right column - Quick Actions and Profile Summary */}
          <div className="space-y-8">
            <QuickActions />
            
            {/* Profile Summary Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dein Profil</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">JD</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">John Doe</h4>
                    <p className="text-sm text-gray-600">Premium-Mitglied</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Gespeicherte Prompts</span>
                    <span className="font-medium text-gray-900">24</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-600">Community-Punkte</span>
                    <span className="font-medium text-gray-900">156</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-gray-600">Mitglied seit</span>
                    <span className="font-medium text-gray-900">Jan 2024</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Profil bearbeiten
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
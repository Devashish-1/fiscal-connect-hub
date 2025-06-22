
import { useState } from 'react';
import { Calendar, TrendingUp, Bell, FileText, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarComponent } from '@/components/CalendarComponent';
import { MarketUpdates } from '@/components/MarketUpdates';
import { ComplianceTracker } from '@/components/ComplianceTracker';
import { ReportsAnalytics } from '@/components/ReportsAnalytics';
import { FinanceComplianceCalendar } from '@/components/FinanceComplianceCalendar';

const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', label: 'Portal Overview', icon: FileText },
    { id: 'calendar', label: 'Meeting Calendar', icon: Calendar },
    { id: 'finance-compliance', label: 'Finance Compliance Calendar', icon: Bell },
    { id: 'market', label: 'Market Updates', icon: TrendingUp },
    { id: 'compliance', label: 'Compliance Tracker', icon: Bell },
    { id: 'reports', label: 'Reports & Analytics', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <CalendarComponent />;
      case 'finance-compliance':
        return <FinanceComplianceCalendar />;
      case 'market':
        return <MarketUpdates />;
      case 'compliance':
        return <ComplianceTracker />;
      case 'reports':
        return <ReportsAnalytics />;
      default:
        return <PortalOverview setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    CA Information Portal
                  </h1>
                  <p className="text-xs text-gray-500">Chartered Accountant Resources</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">Professional Portal</p>
                <p className="text-xs text-gray-500">Information & Resources</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-72 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 h-fit sticky top-8 border border-blue-100">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Portal Sections</h3>
              <p className="text-sm text-gray-600">Access professional resources and information</p>
            </div>
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortalOverview = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const portalSections = [
    {
      id: 'calendar',
      title: 'Meeting Calendar',
      description: 'Schedule and manage your professional meetings, client appointments, and important events',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      features: ['Meeting Scheduling', 'Event Management', 'Reminder System']
    },
    {
      id: 'finance-compliance',
      title: 'Finance Compliance Calendar',
      description: 'Track important financial compliance deadlines, regulatory filings, and statutory requirements',
      icon: Bell,
      color: 'from-amber-500 to-orange-500',
      features: ['Compliance Deadlines', 'Regulatory Updates', 'Filing Reminders']
    },
    {
      id: 'market',
      title: 'Market Updates',
      description: 'Stay informed with latest financial market data, economic indicators, and regulatory news',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      features: ['Live Market Data', 'Economic Indicators', 'Financial News']
    },
    {
      id: 'compliance',
      title: 'Compliance Tracker',
      description: 'Monitor regulatory compliance requirements, deadlines, and filing statuses across all clients',
      icon: Bell,
      color: 'from-red-500 to-pink-500',
      features: ['Filing Status', 'Deadline Tracking', 'Compliance Alerts']
    },
    {
      id: 'reports',
      title: 'Reports & Analytics',
      description: 'Access comprehensive reports and analytics for business insights and performance tracking',
      icon: FileText,
      color: 'from-purple-500 to-indigo-500',
      features: ['Performance Reports', 'Analytics Dashboard', 'Custom Reports']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Chartered Accountant Information Portal
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your comprehensive resource center for professional information, compliance tracking, 
          market updates, and business insights
        </p>
      </div>

      {/* Portal Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portalSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card 
              key={section.id} 
              className="hover:shadow-xl transition-all duration-300 border border-blue-100 bg-white/70 backdrop-blur-sm cursor-pointer group"
              onClick={() => setActiveTab(section.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base">
                  {section.description}
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Key Features:</p>
                  <ul className="space-y-1">
                    {section.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={() => setActiveTab(section.id)}
                >
                  Access {section.title}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Professional Resources</h3>
            <p className="text-sm text-gray-600">
              Access comprehensive information and tools for professional CA practice
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-time Updates</h3>
            <p className="text-sm text-gray-600">
              Stay current with latest market data and regulatory changes
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Compliance Alerts</h3>
            <p className="text-sm text-gray-600">
              Never miss important deadlines with our comprehensive tracking system
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;

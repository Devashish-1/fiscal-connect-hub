
import { useState } from 'react';
import { Calendar, MessageCircle, TrendingUp, FileText, Users, Calculator, Receipt, Clock, Settings, Bell } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarComponent } from '@/components/CalendarComponent';
import { ChatInterface } from '@/components/ChatInterface';
import { MarketUpdates } from '@/components/MarketUpdates';
import { ClientManagement } from '@/components/ClientManagement';
import { TaskManager } from '@/components/TaskManager';
import { DocumentManager } from '@/components/DocumentManager';
import { InvoiceGenerator } from '@/components/InvoiceGenerator';
import { ExpenseTracker } from '@/components/ExpenseTracker';
import { ComplianceTracker } from '@/components/ComplianceTracker';
import { ReportsAnalytics } from '@/components/ReportsAnalytics';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'chat', label: 'Communication', icon: MessageCircle },
    { id: 'market', label: 'Market Updates', icon: TrendingUp },
    { id: 'tasks', label: 'Tasks', icon: Clock },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'expenses', label: 'Expenses', icon: Calculator },
    { id: 'compliance', label: 'Compliance', icon: Bell },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <CalendarComponent />;
      case 'chat':
        return <ChatInterface />;
      case 'market':
        return <MarketUpdates />;
      case 'clients':
        return <ClientManagement />;
      case 'tasks':
        return <TaskManager />;
      case 'documents':
        return <DocumentManager />;
      case 'invoices':
        return <InvoiceGenerator />;
      case 'expenses':
        return <ExpenseTracker />;
      case 'compliance':
        return <ComplianceTracker />;
      case 'reports':
        return <ReportsAnalytics />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calculator className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  CA Portal Pro
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                CA
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
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
                    <span className="font-medium">{item.label}</span>
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

const DashboardOverview = () => {
  const stats = [
    { label: 'Active Clients', value: '24', trend: '+12%', color: 'blue' },
    { label: 'Pending Filings', value: '8', trend: '-5%', color: 'amber' },
    { label: 'This Month Revenue', value: '₹2,45,000', trend: '+18%', color: 'green' },
    { label: 'Upcoming Meetings', value: '12', trend: '+8%', color: 'purple' },
  ];

  const recentActivities = [
    { action: 'GST Filing completed for ABC Corp', time: '2 hours ago', type: 'filing' },
    { action: 'Meeting scheduled with XYZ Ltd', time: '4 hours ago', type: 'meeting' },
    { action: 'Invoice sent to DEF Industries', time: '1 day ago', type: 'invoice' },
    { action: 'Tax audit report submitted', time: '2 days ago', type: 'audit' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your practice.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Badge variant="secondary" className={`text-${stat.color}-600 bg-${stat.color}-100`}>
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features for quick access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col space-y-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600">
              <Calendar className="h-6 w-6" />
              <span>Schedule Meeting</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              <FileText className="h-6 w-6" />
              <span>New Filing</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Receipt className="h-6 w-6" />
              <span>Generate Invoice</span>
            </Button>
            <Button className="h-20 flex-col space-y-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              <Users className="h-6 w-6" />
              <span>Add Client</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest updates and actions in your practice</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <Badge variant="outline">{activity.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

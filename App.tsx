
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import BenefitsSection from './components/BenefitsSection';
import StatsSection from './components/StatsSection';
import GovernmentSection from './components/GovernmentSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import FeaturesPage from './components/FeaturesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import HelpCenter from './components/HelpCenter';
import NewsPage from './components/NewsPage';
import ArticleDetail from './components/ArticleDetail';
import NewsLandingSection from './components/NewsLandingSection';
import DownloadPage from './components/DownloadPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ResetPasswordPage from './components/ResetPasswordPage';
import DashboardHome from './components/DashboardHome';
import RegistrationHub from './components/RegistrationHub';
import DashboardLayout from './components/DashboardLayout';
import NINVerification from './components/NINVerification';
import TaxRegistration from './components/TaxRegistration';
import LASRRARegistration from './components/LASRRARegistration';
import LAWMARegistration from './components/LAWMARegistration';
import MyRegistrations from './components/MyRegistrations';
import RegistrationDetails from './components/RegistrationDetails';
import PaymentDashboard from './components/PaymentDashboard';
import MakePayment from './components/MakePayment';
import PaymentForm from './components/PaymentForm';
import PaymentProcessing from './components/PaymentProcessing';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailed from './components/PaymentFailed';
import TransactionHistory from './components/TransactionHistory';
import ReceiptView from './components/ReceiptView';
import DashboardNews from './components/DashboardNews';
import ProfileOverview from './components/ProfileOverview';
import EditProfile from './components/EditProfile';
import LagosianID from './components/LagosianID';
import MyDocuments from './components/MyDocuments';
import SettingsPage from './components/SettingsPage';
import NotificationSettings from './components/NotificationSettings';
import SecuritySettings from './components/SecuritySettings';
import DashboardHelp from './components/DashboardHelp';
import AdminDashboard from './components/AdminDashboard';
import AdminLoginPage from './components/AdminLoginPage';
import AdminSignupPage from './components/AdminSignupPage';
import AdminUserManagement from './components/AdminUserManagement';
import AdminContentManagement from './components/AdminContentManagement';
import AdminAddEditArticle from './components/AdminAddEditArticle';

export type ViewType = 
  | 'home' | 'features' | 'about' | 'contact' | 'help' | 'news' | 'article' | 'download' 
  | 'login' | 'signup' | 'forgot-password' | 'reset-password'
  | 'dashboard' | 'registration-hub' | 'my-registrations' | 'payments' | 'make-payment' | 'payment-form' | 'payment-processing' | 'payment-success' | 'payment-failed' | 'transaction-history' | 'profile' | 'receipt' | 'dashboard-news' | 'edit-profile' | 'lagosian-id' | 'my-documents' | 'settings' | 'notification-settings' | 'security-settings' | 'dashboard-help' | 'admin-dashboard' | 'admin-login' | 'admin-signup' | 'admin-users' | 'admin-content' | 'admin-edit-content'
  | 'nin-verify' | 'tax-register' | 'lasrra-register' | 'lawma-register' | 'registration-details';

const DASHBOARD_VIEWS = new Set<ViewType>([
  'dashboard', 'registration-hub', 'my-registrations', 'payments', 
  'make-payment', 'payment-form', 'payment-processing', 'payment-success', 
  'payment-failed', 'transaction-history', 'profile', 'receipt', 
  'dashboard-news', 'edit-profile', 'lagosian-id', 'my-documents', 
  'settings', 'notification-settings', 'security-settings', 'dashboard-help', 
  'nin-verify', 'tax-register', 'lasrra-register', 'lawma-register', 'registration-details'
]);

const AUTH_VIEWS = new Set<ViewType>(['login', 'signup', 'forgot-password', 'reset-password', 'admin-login', 'admin-signup']);
const ADMIN_DASHBOARD_VIEWS = new Set<ViewType>(['admin-dashboard', 'admin-users', 'admin-content', 'admin-edit-content']);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: ViewType, articleId?: number) => {
    setCurrentView(view);
    if (articleId !== undefined) setSelectedArticleId(articleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDashboardView = DASHBOARD_VIEWS.has(currentView);
  const isAuthView = AUTH_VIEWS.has(currentView);
  const isAdminDashboard = ADMIN_DASHBOARD_VIEWS.has(currentView);

  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white bg-slate-950">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
      </div>

      {!isDashboardView && !isAuthView && !isAdminDashboard && (
        <Navbar isScrolled={isScrolled} currentView={currentView} onNavigate={navigateTo} />
      )}
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <ProblemSection />
            <FeaturesSection onSeeAllFeatures={() => navigateTo('features')} />
            <NewsLandingSection onReadArticle={(id) => navigateTo('article', id)} onSeeAll={() => navigateTo('news')} />
            <HowItWorks />
            <BenefitsSection />
            <StatsSection />
            <GovernmentSection />
            <FAQSection />
            <CTASection onDownload={() => navigateTo('download')} />
          </>
        )}
        {currentView === 'features' && <FeaturesPage />}
        {currentView === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentView === 'contact' && <ContactPage />}
        {currentView === 'help' && <HelpCenter />}
        {currentView === 'news' && <NewsPage onReadArticle={(id) => navigateTo('article', id)} />}
        {currentView === 'download' && <DownloadPage />}
        {currentView === 'article' && selectedArticleId !== null && (
          <ArticleDetail articleId={selectedArticleId} onNavigate={navigateTo} />
        )}
        
        {/* Auth Views */}
        {currentView === 'login' && <LoginPage onNavigate={navigateTo} />}
        {currentView === 'signup' && <SignupPage onNavigate={navigateTo} />}
        {currentView === 'forgot-password' && <ForgotPasswordPage onNavigate={navigateTo} />}
        {currentView === 'reset-password' && <ResetPasswordPage onNavigate={navigateTo} />}

        {/* Admin Portal Views */}
        {currentView === 'admin-login' && <AdminLoginPage onNavigate={navigateTo} />}
        {currentView === 'admin-signup' && <AdminSignupPage onNavigate={navigateTo} />}
        {currentView === 'admin-dashboard' && <AdminDashboard onNavigate={navigateTo} />}
        {currentView === 'admin-users' && <AdminUserManagement onNavigate={navigateTo} />}
        {currentView === 'admin-content' && <AdminContentManagement onNavigate={navigateTo} />}
        {currentView === 'admin-edit-content' && <AdminAddEditArticle onNavigate={navigateTo} />}

        {/* Dashboard Views */}
        {isDashboardView && (
          <DashboardLayout currentView={currentView} onNavigate={navigateTo}>
            {currentView === 'dashboard' && <DashboardHome onNavigate={navigateTo} />}
            {currentView === 'registration-hub' && <RegistrationHub onNavigate={navigateTo} />}
            {currentView === 'my-registrations' && <MyRegistrations onNavigate={navigateTo} />}
            {currentView === 'registration-details' && <RegistrationDetails onNavigate={navigateTo} />}
            {currentView === 'payments' && <PaymentDashboard onNavigate={navigateTo} />}
            {currentView === 'make-payment' && <MakePayment onNavigate={navigateTo} />}
            {currentView === 'payment-form' && <PaymentForm onNavigate={navigateTo} />}
            {currentView === 'payment-processing' && <PaymentProcessing onNavigate={navigateTo} />}
            {currentView === 'payment-success' && <PaymentSuccess onNavigate={navigateTo} />}
            {currentView === 'payment-failed' && <PaymentFailed onNavigate={navigateTo} />}
            {currentView === 'transaction-history' && <TransactionHistory onNavigate={navigateTo} />}
            {currentView === 'receipt' && <ReceiptView onNavigate={navigateTo} />}
            {currentView === 'dashboard-news' && <DashboardNews onNavigate={navigateTo} />}
            {currentView === 'profile' && <ProfileOverview onNavigate={navigateTo} />}
            {currentView === 'edit-profile' && <EditProfile onNavigate={navigateTo} />}
            {currentView === 'lagosian-id' && <LagosianID onNavigate={navigateTo} />}
            {currentView === 'my-documents' && <MyDocuments onNavigate={navigateTo} />}
            {currentView === 'settings' && <SettingsPage onNavigate={navigateTo} />}
            {currentView === 'notification-settings' && <NotificationSettings onNavigate={navigateTo} />}
            {currentView === 'security-settings' && <SecuritySettings onNavigate={navigateTo} />}
            {currentView === 'dashboard-help' && <DashboardHelp onNavigate={navigateTo} />}
            {currentView === 'nin-verify' && <NINVerification onNavigate={navigateTo} />}
            {currentView === 'tax-register' && <TaxRegistration onNavigate={navigateTo} />}
            {currentView === 'lasrra-register' && <LASRRARegistration onNavigate={navigateTo} />}
            {currentView === 'lawma-register' && <LAWMARegistration onNavigate={navigateTo} />}
          </DashboardLayout>
        )}
      </main>

      {!isDashboardView && !isAuthView && !isAdminDashboard && (
        <Footer onNavigate={navigateTo} />
      )}
      
      {!isDashboardView && !isAdminDashboard && <ChatBot />}
    </div>
  );
};

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'
import { AuthCallbackPage } from '../pages/AuthCallbackPage'
import { PricingPage } from '../pages/PricingPage'
import { DocsPage } from '../pages/DocsPage'
import { AboutPage } from '../pages/AboutPage'
import { FeaturesPage } from '../pages/FeaturesPage'
import { UpdatesPage } from '../pages/UpdatesPage'
import { APIPage } from '../pages/APIPage'
import { TutorialsPage } from '../pages/TutorialsPage'
import { CommunityPage } from '../pages/CommunityPage'
import { BlogPage } from '../pages/BlogPage'
import { SupportPage } from '../pages/SupportPage'
import { CareersPage } from '../pages/CareersPage'
import { ContactPage } from '../pages/ContactPage'
import { PressPage } from '../pages/PressPage'
import { PartnersPage } from '../pages/PartnersPage'
import { DownloadPage } from '../pages/DownloadPage'
import { api } from '../services/api'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  return api.isAuthenticated() ? <>{children}</> : <Navigate to="/login" />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        
        {/* Продукт */}
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        
        {/* Документация */}
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
        
        {/* Ресурсы */}
        <Route path="/api" element={<APIPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/support" element={<SupportPage />} />
        
        {/* Компания */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

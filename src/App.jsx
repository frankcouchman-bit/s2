import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useAuth } from './hooks/useAuth'

// Pages
import Dashboard from './pages/Dashboard'
import Article from './pages/Article'
import Library from './pages/Library'
import SEOTools from './pages/SEOTools'
import Pricing from './pages/Pricing'
import AiWriter from './pages/landing/AiWriter'
import ArticleWriter from './pages/landing/ArticleWriter'
import WritingTool from './pages/landing/WritingTool'
import AiWriterVsHuman from './pages/blog/AiWriterVsHuman'
import AuthCallback from './pages/AuthCallback'
import Home from './pages/Home'

// Components
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { checkAuth, loading } = useAuth()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/library" element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          } />
          <Route path="/seo-tools" element={<ProtectedRoute><SEOTools /></ProtectedRoute>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/ai-writer" element={<AiWriter />} />
          <Route path="/article-writer" element={<ArticleWriter />} />
          <Route path="/writing-tool" element={<WritingTool />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#1e293b',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)'
            }
          }}
        />
      </div>
    </Router>
  )
}

export default App

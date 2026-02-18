import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Background from './components/Layout/Background';
import Header from './components/Layout/Header';
import Breadcrumb from './components/UI/Breadcrumb';
import SettingsModal from './components/UI/SettingsModal';
import SearchOverlay from './components/UI/SearchOverlay';
import AboutModal from './components/UI/AboutModal';

// Páginas
import Home from './pages/Home';
import CourseMenu from './pages/CourseMenu';
import YearSelection from './pages/YearSelection';
import ContentList from './pages/ContentList';
import MicrospaceGuide from './pages/MicrospaceGuide';
import PageLoader from './utils/PageLoader';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen font-sans selection:bg-accent selection:text-white transition-colors">
          <Background />
          <SettingsModal />
          <SearchOverlay />
          <AboutModal />
          
          <Header />
          
          <main className="container mx-auto px-4 py-6 pb-20">
            <div className="max-w-4xl mx-auto">
              <Breadcrumb />
              
              <Routes>
                {/* 1. Home */}
                <Route path="/" element={<Home />} />
                
                {/* Guia */}
                <Route path="/microspace-guide" element={<MicrospaceGuide />} />
                
                {/* Rota legada/compatibilidade para o CourseMenu existente */}
                <Route path="/:courseId" element={<CourseMenu />} />

                {/* Rota para selecionar o Ano (Ex: /INFO/Content) */}
                <Route path="/:courseId/:type" element={<YearSelection />} />
                
                {/* Rota da Lista de Cards (Ex: /Content/INFO/1-Ano)*/}
    
                <Route path="/:type/:course/:year" element={<ContentList />} />

                {/* Rota FINAL para ver a página (Ex: /Content/INFO/1-Ano/Hardware) 
                    Isso carrega o PageLoader que olha o Registry
                */}
                <Route path="/:type/:course/:year/:slug" element={<PageLoader />} />

              </Routes>
            </div>
          </main>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;

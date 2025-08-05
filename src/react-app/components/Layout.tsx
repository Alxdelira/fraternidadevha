import { ReactNode, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Libre+Baskerville:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre a Loja' },
    { path: '/diretoria', label: 'Diretoria' },
    { path: '/galeria', label: 'Galeria' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <img 
                src="src/assets/logos/logo_loja.png"
                alt="Fraternidade Vilhenense"
                className="w-16 h-16 rounded-full shadow-lg"
              />
              {/* <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div> */}
              <div>
                <h1 className="text-xl font-bold text-white font-serif">
                  Fraternidade Vilhenense
                </h1>
                <p className="text-blue-200 text-sm">ARLS nº 4076 - GOB-RO</p>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="border-t border-blue-700">
            <div className="flex space-x-8 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-yellow-500 text-blue-900 shadow-lg'
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Augusta e Respeitável</h3>
              <p className="text-blue-200">
                Loja Simbólica Fraternidade Vilhenense nº 4076
              </p>
              <p className="text-blue-300 mt-2">
                Grande Oriente do Brasil - Rondônia
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Contato</h3>
              <p className="text-blue-200">Av. Tancredo Neves, 4977</p>
              <p className="text-blue-200">Jardim Eldorado - Vilhena/RO</p>
              <p className="text-blue-200">CEP 76980-000</p>
              <p className="text-blue-200 mt-2">(69) 99999-9999</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-yellow-400">Trabalhos</h3>
              <p className="text-blue-200">Segunda-feiras às 19:30</p>
              <p className="text-blue-200">Rito Brasileiro</p>
              <p className="text-blue-300 mt-2">arls4076@gobro.org.br</p>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-300 italic">
              "A Maçonaria é uma escola de virtudes em que os homens aprendem a construir a si mesmos."
            </p>
            <p className="text-blue-400 text-sm mt-4">
              © 2025 Fraternidade Vilhenense - 4076. Fundada em 24 de junho de 2010.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

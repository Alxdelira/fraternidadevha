import { Star, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url("src/assets/logos/fundoLoja.png")',
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 shadow-2xl">
              <img src="src/assets/logos/logo_loja.png" alt="Fraternidade Vilhenense" className="w-20 h-20 rounded-full" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            Fraternidade Vilhenense
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Augusta e Respeitável Loja Simbólica nº 4076
          </p>
          
          <p className="text-lg text-blue-200 mb-8">
            Grande Oriente do Brasil - Rondônia
          </p>
          
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-yellow-500/30">
            <blockquote className="text-xl md:text-2xl italic font-serif text-yellow-100 leading-relaxed">
              "Sabedoria para compreender, Força para suportar e Beleza para adornar todas as nossas ações"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
              Os Três Pilares da Maçonaria
            </h2>
            <p className="text-xl text-gray-600">
              Fundamentos que sustentam nossa Augusta Ordem
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Star className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-serif">SABEDORIA</h3>
              <p className="text-gray-600 leading-relaxed">
                A busca constante pelo conhecimento e pela verdade, iluminando o caminho da evolução moral e intelectual.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 border-4 border-yellow-400 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-serif">FORÇA</h3>
              <p className="text-gray-600 leading-relaxed">
                A coragem e determinação para enfrentar os desafios da vida, mantendo firmes nossos princípios e valores.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                <Heart className="w-12 h-12 text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4 font-serif">BELEZA</h3>
              <p className="text-gray-600 leading-relaxed">
                A harmonia e perfeição em todas as nossas ações, refletindo a ordem divina no mundo profano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações da Loja */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">
                Nossa Loja
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Venerável Mestre</h3>
                  <p className="text-gray-700">Igelson Cerutti</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Trabalhos</h3>
                  <p className="text-gray-700">Segunda-feiras às 19:30</p>
                  <p className="text-gray-600 text-sm">Rito Brasileiro</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Fundação</h3>
                  <p className="text-gray-700">24 de junho de 2010</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Localização</h3>
                  <p className="text-gray-700">Av. Tancredo Neves, 4977</p>
                  <p className="text-gray-700">Jardim Eldorado - Vilhena/RO</p>
                  <p className="text-gray-600 text-sm">CEP 76980-000</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="src/assets/logos/loja.jpeg" 
                  alt="Interior da Loja Maçônica"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center text-blue-900">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-sm">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

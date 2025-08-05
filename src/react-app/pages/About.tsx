import { Users, Award, Globe, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Sobre Nossa Loja</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Uma instituição dedicada ao aprimoramento moral, intelectual e espiritual do homem,
              fundamentada nos princípios eternos da Maçonaria Universal.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8 font-serif">Nossa História</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  A Augusta e Respeitável Loja Simbólica Fraternidade Vilhenense nº 4076 foi 
                  constituída em <strong className="text-blue-900">24 de junho de 2010</strong>, 
                  em uma data simbolicamente significativa para a Maçonaria mundial - o dia de 
                  São João Batista, patrono da Ordem.
                </p>
                <p>
                  Jurisdicionada ao <strong className="text-blue-900">Grande Oriente do Brasil - Rondônia (GOB-RO)</strong>, 
                  nossa Loja trabalha sob o tradicional <strong className="text-blue-900">Rito Brasileiro</strong>, 
                  mantendo viva a tradição maçônica nacional em terras rondonienses.
                </p>
                <p>
                  Durante mais de uma década de existência, temos sido um farol de luz na 
                  cidade de Vilhena, promovendo valores como fraternidade, igualdade e liberdade, 
                  sempre em busca da perfeição moral e do bem-estar da humanidade.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://mocha-cdn.com/01987ae6-1fbc-7693-be10-53f6210b4e22/masonic-symbols.jpg" 
                alt="Símbolos Maçônicos"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
              Missão e Valores
            </h2>
            <p className="text-xl text-gray-600">
              Os princípios que norteiam nossa jornada maçônica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Fraternidade</h3>
              <p className="text-gray-600">
                Cultivamos laços fraternos entre nossos membros, baseados no respeito mútuo e na solidariedade.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Ética</h3>
              <p className="text-gray-600">
                Promovemos a prática constante da ética em todas as esferas da vida profana e maçônica.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Liberdade</h3>
              <p className="text-gray-600">
                Defendemos a liberdade de pensamento, consciência e expressão como direitos fundamentais.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Conhecimento</h3>
              <p className="text-gray-600">
                Incentivamos a busca constante pelo conhecimento e pelo aprimoramento intelectual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vínculo com o GOB-RO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
              Grande Oriente do Brasil - Rondônia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa Loja mantém vínculos sólidos com o GOB-RO, a mais antiga e tradicional 
              Potência Maçônica do Brasil, garantindo a regularidade e legitimidade de nossos trabalhos.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">GOB-RO</div>
                <p className="text-gray-700">Grande Oriente do Brasil - Rondônia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">4076</div>
                <p className="text-gray-700">Número da Nossa Loja</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">Brasileiro</div>
                <p className="text-gray-700">Rito Praticado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 font-serif">Nosso Compromisso</h2>
          <blockquote className="text-xl italic leading-relaxed mb-8">
            "Comprometemo-nos com o aprimoramento constante do ser humano, 
            promovendo a justiça, a virtude e a harmonia em nossa comunidade. 
            Através do estudo, da reflexão e da prática dos valores maçônicos, 
            contribuímos para a construção de uma sociedade mais justa e fraterna."
          </blockquote>
          <div className="w-16 h-1 bg-yellow-500 mx-auto"></div>
        </div>
      </section>
    </div>
  );
}

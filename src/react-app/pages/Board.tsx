import { Crown, Gavel, Shield, ScrollText, Coins, Users } from 'lucide-react';

export default function Board() {
  const boardMembers = [
    {
      position: 'Venerável Mestre',
      name: 'Ir∴ Igelson Cerutti',
      description: 'Dirige os trabalhos da Loja com sabedoria e prudência',
      icon: Crown,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      position: '1º Vigilante',
      name: 'A ser informado',
      description: 'Auxiliar do Venerável Mestre, responsável pela coluna do Sul',
      icon: Gavel,
      color: 'from-blue-500 to-blue-700'
    },
    {
      position: '2º Vigilante',
      name: 'A ser informado',
      description: 'Responsável pela coluna do Norte e instrução dos Aprendizes',
      icon: Shield,
      color: 'from-blue-500 to-blue-700'
    },
    {
      position: 'Orador',
      name: 'A ser informado',
      description: 'Guardião da Lei Maçônica e da Constituição',
      icon: ScrollText,
      color: 'from-green-500 to-green-700'
    },
    {
      position: 'Secretário',
      name: 'A ser informado',
      description: 'Responsável pela documentação e correspondência da Loja',
      icon: ScrollText,
      color: 'from-purple-500 to-purple-700'
    },
    {
      position: 'Tesoureiro',
      name: 'A ser informado',
      description: 'Administra as finanças e patrimônio da Loja',
      icon: Coins,
      color: 'from-orange-500 to-orange-700'
    },
    {
      position: 'Chanceler',
      name: 'A ser informado',
      description: 'Responsável pela comunicação e relações externas da Loja',
      icon: Users,
      color: 'from-gray-500 to-gray-700'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Diretoria Atual</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Os Irmãos que dirigem os trabalhos da Augusta e Respeitável Loja Simbólica 
              Fraternidade Vilhenense nº 4076
            </p>
          </div>
        </div>
      </section>

      {/* Venerável Mestre - Destaque */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-yellow-200">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Crown className="w-10 h-10 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900">Venerável Mestre</h2>
                  <p className="text-blue-800">Líder da Loja</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-4 font-serif">
                    {boardMembers[0].name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Como Venerável Mestre, o {boardMembers[0].name}  dirige os trabalhos da Loja 
                    com sabedoria, prudência e dedicação. Sua liderança é fundamental para 
                    manter a harmonia e o progresso da nossa Augusta Instituição.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      "Que a Sabedoria, a Força e a Beleza guiem sempre nossos passos 
                      na jornada maçônica."
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    {/* Foto em breve aqui */}
                    <Users className="w-24 h-24 text-gray-500" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Foto em breve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demais Membros da Diretoria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4 font-serif">
              Membros da Administração
            </h2>
            <p className="text-xl text-gray-600">
              Irmãos que compõem a estrutura administrativa da nossa Loja
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.slice(1).map((member, index) => {
              const IconComponent = member.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className={`bg-gradient-to-r ${member.color} p-6 rounded-t-lg`}>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.position}</h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-500" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-blue-900 mb-2 text-center">
                      {member.name}
                    </h4>
                    
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outros Cargos */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">
              Outros Cargos Importantes
            </h2>
            <p className="text-lg text-gray-600">
              Funções complementares que contribuem para o funcionamento da Loja
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hospitaleiro',
              'Mestre de Cerimônias',
              '1º Diácono',
              '2º Diácono',
              'Tesoureiro Adjunto',
              'Secretário Adjunto'
            ].map((cargo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-1">{cargo}</h4>
                <p className="text-gray-600 text-sm">A ser informado</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nota sobre Atualização */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Atualização de Informações</h3>
            <p className="text-gray-700">
              Esta seção está sendo atualizada com as informações mais recentes da nossa diretoria. 
              Para informações completas sobre a administração atual, entre em contato conosco.
            </p>
            <div className="mt-4">
              <a 
                href="mailto:arls4076@gobro.org.br" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Calendar, Users, Heart, Award, Camera } from 'lucide-react';

export default function Gallery() {
  const galleryCategories = [
    {
      title: 'Sessões Magnas',
      description: 'Cerimônias especiais e solenes da nossa Loja',
      icon: Award,
      color: 'from-yellow-400 to-yellow-600',
      images: []
    },
    {
      title: 'Iniciações',
      description: 'Momentos especiais de ingresso na Ordem',
      icon: Users,
      color: 'from-blue-500 to-blue-700',
      images: []
    },
    {
      title: 'Homenagens',
      description: 'Reconhecimentos e celebrações fraternais',
      icon: Heart,
      color: 'from-red-500 to-red-700',
      images: []
    },
    {
      title: 'Atividades Filantrópicas',
      description: 'Ações sociais e beneficentes da Loja',
      icon: Heart,
      color: 'from-green-500 to-green-700',
      images: []
    },
    {
      title: 'Visitas Oficiais',
      description: 'Intercâmbio com outras Lojas e Potências',
      icon: Calendar,
      color: 'from-purple-500 to-purple-700',
      images: []
    },
    {
      title: 'Eventos Especiais',
      description: 'Confraternizações e atividades culturais',
      icon: Camera,
      color: 'from-indigo-500 to-indigo-700',
      images: []
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Galeria de Fotos</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Momentos marcantes da vida maçônica em nossa Augusta e Respeitável Loja, 
              registrando nossa história e tradições ao longo dos anos.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <div className={`bg-gradient-to-r ${category.color} p-6 rounded-t-lg`}>
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      
                      {/* Placeholder para as imagens */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                            <Camera className="w-6 h-6 text-gray-500" />
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <span className="text-sm text-gray-500">Em breve - Fotos serão adicionadas</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção de Upload/Contribuição */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 font-serif">
            Contribua com Nossa Galeria
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Se você possui fotos de eventos da nossa Loja e gostaria de compartilhá-las 
            em nossa galeria, entre em contato conosco. Ajude-nos a preservar nossa história!
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-blue-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Como Contribuir</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Envie suas fotos por e-mail</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Inclua data e descrição do evento</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Mantenha a discrição maçônica</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>Qualidade mínima de 1080p</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Contato</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-800">E-mail:</p>
                    <a href="mailto:arls4076@gobro.org.br" className="text-blue-600 hover:underline">
                      arls4076@gobro.org.br
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Telefone:</p>
                    <a href="tel:6999999999" className="text-blue-600 hover:underline">
                      (69) 99999-9999
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria em Construção */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-8">
              <Camera className="w-16 h-16 text-yellow-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">
              Galeria em Construção
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Estamos organizando nossa galeria de fotos com momentos especiais da vida da Loja. 
              Em breve, você poderá visualizar registros dos nossos principais eventos e cerimônias.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-900 mb-2">Eventos Solenes</h3>
                <p className="text-gray-600 text-sm">Sessões magnas e cerimônias especiais</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-900 mb-2">Vida Fraterna</h3>
                <p className="text-gray-600 text-sm">Confraternizações e encontros</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-blue-900 mb-2">Ações Sociais</h3>
                <p className="text-gray-600 text-sm">Atividades filantrópicas e beneficentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

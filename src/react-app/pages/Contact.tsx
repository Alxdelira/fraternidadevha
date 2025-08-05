import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    // Load Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 font-serif">Contato</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Entre em contato com a Augusta e Respeitável Loja Simbólica Fraternidade Vilhenense nº 4076. 
              Estamos aqui para esclarecer suas dúvidas e receber suas mensagens.
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 font-serif">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Endereço</h3>
                    <p className="text-gray-700">
                      Av. Tancredo Neves, 4977<br />
                      Bairro Jardim Eldorado<br />
                      Vilhena/RO - CEP 76980-000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Telefone</h3>
                    <p className="text-gray-700">
                      <a href="tel:6999999999" className="hover:text-blue-600">
                        (69) 99999-9999
                      </a>
                    </p>
                    <p className="text-gray-600 text-sm">Venerável Mestre</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">E-mail</h3>
                    <p className="text-gray-700">
                      <a href="mailto:arls4076@gobro.org.br" className="hover:text-blue-600">
                        arls4076@gobro.org.br
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">Trabalhos</h3>
                    <p className="text-gray-700">
                      Sextas-feiras às 20:00<br />
                      <span className="text-gray-600 text-sm">Rito Brasileiro</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 font-serif">
                Envie uma Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(69) 99999-9999"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes">Informações Gerais</option>
                    <option value="interesse">Interesse em Ingressar</option>
                    <option value="evento">Eventos e Atividades</option>
                    <option value="visita">Visita Fraterna</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800">Erro ao enviar mensagem. Tente novamente ou use nossos outros canais de contato.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 font-serif">
              Localização
            </h2>
            <p className="text-lg text-gray-600">
              Encontre-nos no coração de Vilhena, Rondônia
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Mapa Interativo</p>
                <p className="text-gray-500 text-sm">
                  Av. Tancredo Neves, 4977<br />
                  Jardim Eldorado - Vilhena/RO
                </p>
                <a 
                  href="https://maps.google.com/?q=Av.+Tancredo+Neves,+4977,+Vilhena,+RO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horários e Informações Adicionais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Horários de Trabalho</h3>
              <p className="text-gray-700">
                Sextas-feiras<br />
                20:00 às 22:00
              </p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Rito</h3>
              <p className="text-gray-700">
                Rito Brasileiro<br />
                GOB-RO
              </p>
            </div>
            
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Resposta</h3>
              <p className="text-gray-700">
                Retornamos em<br />
                até 48 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

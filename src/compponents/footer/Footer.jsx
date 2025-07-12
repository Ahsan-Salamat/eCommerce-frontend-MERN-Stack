import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart, ArrowRight, Shield, Truck, RotateCcw, CreditCard } from 'lucide-react';

const EcommerceFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 relative overflow-hidden mt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#ffac1c'}}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full blur-2xl animate-pulse delay-1000" style={{backgroundColor: '#1E1E1E'}}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full blur-xl animate-pulse delay-2000" style={{backgroundColor: '#ffac1c'}}></div>
      </div>

      {/* Trust badges section */}
      <div className="border-b border-gray-200 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg" style={{background: 'linear-gradient(135deg, #ffac1c 0%, #ff8c00 100%)'}}>
                <Truck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{color: '#1E1E1E'}}>Free Shipping</h4>
                <p className="text-xs text-gray-600">Orders over $50</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg" style={{background: 'linear-gradient(135deg, #1E1E1E 0%, #4a4a4a 100%)'}}>
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{color: '#1E1E1E'}}>Secure Payment</h4>
                <p className="text-xs text-gray-600">SSL Protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg" style={{background: 'linear-gradient(135deg, #ffac1c 0%, #ff8c00 100%)'}}>
                <RotateCcw className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{color: '#1E1E1E'}}>Easy Returns</h4>
                <p className="text-xs text-gray-600">30 day policy</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="p-3 rounded-full group-hover:scale-110 transition-transform shadow-lg" style={{background: 'linear-gradient(135deg, #1E1E1E 0%, #4a4a4a 100%)'}}>
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-sm" style={{color: '#1E1E1E'}}>Pay Later</h4>
                <p className="text-xs text-gray-600">Flexible options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold" style={{background: 'linear-gradient(135deg, #ffac1c 0%, #ff8c00 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                SnapBuy
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Discover amazing products that make your life better. We're passionate about quality and customer satisfaction.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5" style={{color: '#ffac1c'}} />
                <span className="text-sm">Hiden Leaf Village</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" style={{color: '#ffac1c'}} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" style={{color: '#ffac1c'}} />
                <span className="text-sm">hello@snapbuy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold" style={{color: '#1E1E1E'}}>Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Blog', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{color: '#ffac1c'}} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold" style={{color: '#1E1E1E'}}>Customer Service</h4>
            <ul className="space-y-3">
              {['Help Center', 'Track Order', 'Returns', 'Size Guide', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200 flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{color: '#ffac1c'}} />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold" style={{color: '#1E1E1E'}}>Stay Connected</h4>
            <p className="text-gray-600 text-sm">
              Get exclusive deals and updates straight to your inbox.
            </p>
            
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-gray-800 placeholder-gray-500 backdrop-blur-sm shadow-sm"
                  style={{focusRingColor: '#ffac1c'}}
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-2 top-2 text-white px-4 py-1.5 rounded-md transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #ffac1c 0%, #ff8c00 100%)',
                    ':hover': {
                      background: 'linear-gradient(135deg, #ff8c00 0%, #e6941a 100%)'
                    }
                  }}
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <div className="text-sm flex items-center" style={{color: '#22c55e'}}>
                  <Heart className="h-4 w-4 mr-1" />
                  Thank you for subscribing!
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: '#1877f2' },
                { icon: Twitter, color: '#1da1f2' },
                { icon: Instagram, color: '#e4405f' },
                { icon: Youtube, color: '#ff0000' }
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 transition-colors duration-200 hover:scale-110 transform"
                  style={{'&:hover': {color: color}}}
                  onMouseEnter={(e) => e.target.style.color = color}
                  onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <a href='http://ahsanportfoli0.netlify.app' target='_blank' className="text-gray-600 text-sm flex items-center">
              © 2025 Ahsan. Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for amazing customers.
            </a>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;
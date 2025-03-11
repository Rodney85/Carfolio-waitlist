import { motion } from 'framer-motion';
import { Settings, Share2, Heart, Copy, CheckCircle2, QrCode, ArrowRight, Star } from 'lucide-react';
import { useState } from 'react';

const demoProfiles = [
  {
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    title: 'Modified BMW M4',
    year: '2022',
    shareUrl: 'carfolio.io/share/bmw-m4',
    mods: [
      'Horsepower: 503hp',
      'Stage 2 Tune',
      'Carbon Fiber Hood'
    ],
    likes: 1243,
    shares: 89
  },
  {
    image: 'https://images.unsplash.com/photo-1611016186353-9af58c69a533?auto=format&fit=crop&w=800&q=80',
    title: 'Custom Porsche 911',
    year: '2021',
    shareUrl: 'carfolio.io/share/porsche-911',
    mods: [
      'KW Suspension',
      'BBS Wheels',
      'ECU Remap'
    ],
    likes: 2156,
    shares: 167
  },
  {
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=800&q=80',
    title: 'Tuned Nissan GT-R',
    year: '2020',
    shareUrl: 'carfolio.io/share/nissan-gtr',
    mods: [
      'Boost Controller',
      'Wide Body Kit',
      'Race Seats'
    ],
    likes: 1876,
    shares: 134
  }
];

export default function Demo() {
  const [activeProfile, setActiveProfile] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareMode, setShareMode] = useState<'phone' | 'share' | 'qr'>('phone');
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(demoProfiles[activeProfile].shareUrl).catch(() => {
      // Fallback if clipboard API is not available
      console.log('Clipboard not available');
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <section id="demo" className="py-24 px-4 bg-dark-800/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:3rem_3rem] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20">
            <Star className="w-3.5 h-3.5 text-primary-500 mr-2" />
            <span className="text-xs font-medium text-primary-500">Interactive Demo</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Share your builds with custom <span className="text-primary-500">shareable links</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Create a custom URL for each of your vehicles or share your entire collection with a single link. Perfect for social media, forums, and in-person car meets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Phone Preview */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {shareMode === 'phone' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-[280px] sm:max-w-sm"
              >
                {/* Phone frame */}
                <div className="relative mx-auto w-full aspect-[9/19] bg-dark-900 rounded-[2rem] sm:rounded-[3rem] border-[10px] sm:border-[14px] border-dark-700 overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] sm:w-[120px] h-[20px] sm:h-[25px] bg-dark-700 rounded-b-2xl z-20" />
                  
                  {/* Screen content */}
                  <div className="absolute inset-0 bg-dark-900 overflow-hidden">
                    {/* Status bar */}
                    <div className="h-10 sm:h-12 bg-dark-800 flex items-center justify-between px-4 sm:px-6">
                      <span className="text-sm">9:41</span>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border-2 border-current" />
                        <div className="w-4 h-4 rounded-full border-2 border-current" />
                        <div className="w-4 h-4 rounded-full border-2 border-current" />
                      </div>
                    </div>
                    
                    <div className="h-[calc(100%-3rem)] overflow-hidden">
                      <motion.div
                        key={demoProfiles[activeProfile].title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full"
                      >
                        <div className="h-1/2 relative">
                          <img
                            src={demoProfiles[activeProfile].image}
                            alt={demoProfiles[activeProfile].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-70" />
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-dark-800/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-dark-700">
                              <h3 className="font-bold text-lg">{demoProfiles[activeProfile].title}</h3>
                              <p className="text-sm text-gray-400">{demoProfiles[activeProfile].year}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="h-1/2 p-4 space-y-4">
                          <div className="bg-dark-800 rounded-lg p-3">
                            <div className="text-sm font-medium mb-2">Build Specs</div>
                            <div className="space-y-2">
                              {demoProfiles[activeProfile].mods.map((mod, i) => (
                                <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                                  {mod}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-dark-800 rounded-lg p-3 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 text-primary-500" />
                                <span className="text-xs">{demoProfiles[activeProfile].likes}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Share2 className="w-4 h-4 text-primary-500" />
                                <span className="text-xs">{demoProfiles[activeProfile].shares}</span>
                              </div>
                            </div>
                            <button className="text-xs bg-primary-500 text-white px-3 py-1 rounded-full">
                              Share Build
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                {/* Phone reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-500/5 to-transparent pointer-events-none" />
              </motion.div>
            )}
            
            {shareMode === 'share' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-800 rounded-xl border border-dark-700 p-6 max-w-sm shadow-2xl"
              >
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold mb-1">Share Your Build</h3>
                  <p className="text-sm text-gray-400">Your unique shareable link</p>
                </div>
                
                <div className="relative mb-5">
                  <div className="flex items-center bg-dark-900 border border-dark-700 rounded-lg overflow-hidden">
                    <div className="flex-1 px-4 py-2.5 text-sm font-mono overflow-hidden text-ellipsis whitespace-nowrap text-primary-400">
                      {demoProfiles[activeProfile].shareUrl}
                    </div>
                    <button 
                      onClick={handleCopyLink}
                      className="bg-dark-800 border-l border-dark-700 p-2.5 hover:bg-dark-700 transition-colors"
                    >
                      {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-primary-500" />}
                    </button>
                  </div>
                  {copied && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500/10 text-green-500 text-xs font-medium py-1 px-2 rounded">
                      Copied!
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-3">Share directly to</p>
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 10.1 10.1 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#E4405F] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.8 11.8 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266-.058 1.644-.069 4.85-.069-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
            
            {shareMode === 'qr' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-800 rounded-xl border border-dark-700 p-6 max-w-sm shadow-2xl"
              >
                <div className="text-center mb-5">
                  <h3 className="text-xl font-bold mb-1">QR Code</h3>
                  <p className="text-sm text-gray-400">Scan to view {demoProfiles[activeProfile].title}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg mb-5">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-full h-auto"
                    style={{ maxWidth: '240px', margin: '0 auto' }}
                  >
                    <path d="M0,0 h200v200h-200z" fill="white" />
                    <path d="M30,30 h40v40h-40z M90,30 h10v10h-10z M110,30 h20v10h-10v10h-10z M140,30 h30v40h-10v-30h-20z M80,40 h10v20h-10z M110,50 h10v10h-10z M80,70 h10v10h-10z M100,70 h10v10h-10z M130,70 h40v10h-40z M30,80 h20v10h-10v10h-10z M60,80 h10v20h-20v-10h10z M90,80 h10v10h-10z M120,80 h10v10h-10z M150,80 h10v10h-10z M170,80 h10v10h-10z M40,100 h10v10h-10z M70,100 h10v10h-10z M110,100 h10v10h-10z M130,100 h10v10h-10z M160,100 h10v10h-10z M30,120 h40v10h-40z M80,120 h10v10h-10z M100,120 h20v10h-20z M140,120 h30v10h-30z M30,140 h10v10h-10z M60,140 h10v10h-10z M80,140 h10v10h-10z M100,140 h20v10h-20z M140,140 h10v10h-10z M160,140 h10v10h-10z M30,160 h10v10h-10z M50,160 h20v10h-20z M80,160 h10v10h-10z M100,160 h10v10h-10z M120,160 h20v10h-20z M150,160 h20v10h-20z" fill="black" />
                  </svg>
                </div>
                
                <p className="text-center text-sm text-gray-400 mb-4">
                  Perfect for car meets and in-person sharing
                </p>
                
                <button className="w-full py-2 bg-primary-500 text-white rounded-lg font-medium">
                  Download QR Code
                </button>
              </motion.div>
            )}
          </div>
          
          {/* Controls and Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-dark-800/80 backdrop-blur-sm border border-dark-700 rounded-xl p-6 space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-3">Select a Car Build</h3>
                <div className="space-y-3">
                  {demoProfiles.map((profile, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ x: 5 }}
                      onClick={() => setActiveProfile(index)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors ${
                        activeProfile === index 
                          ? 'bg-primary-500/20 border border-primary-500/30' 
                          : 'bg-dark-900/80 border border-dark-700 hover:bg-dark-700'
                      }`}
                    >
                      <div className="w-12 h-12 rounded-md overflow-hidden mr-3 shrink-0">
                        <img src={profile.image} alt={profile.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${activeProfile === index ? 'text-primary-500' : 'text-white'}`}>
                          {profile.title}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {profile.shareUrl}
                        </p>
                      </div>
                      {activeProfile === index && (
                        <div className="w-2 h-2 rounded-full bg-primary-500 mr-1" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3">Sharing Options</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button 
                    onClick={() => setShareMode('phone')}
                    className={`p-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors ${
                      shareMode === 'phone' 
                        ? 'bg-primary-500/20 border border-primary-500/30' 
                        : 'bg-dark-900/80 border border-dark-700 hover:bg-dark-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                      shareMode === 'phone' ? 'bg-primary-500/30' : 'bg-dark-800'
                    }`}>
                      <Settings className={`w-5 h-5 ${shareMode === 'phone' ? 'text-primary-500' : 'text-gray-400'}`} />
                    </div>
                    <span className="text-sm font-medium">View Profile</span>
                  </button>
                  
                  <button 
                    onClick={() => setShareMode('share')}
                    className={`p-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors ${
                      shareMode === 'share' 
                        ? 'bg-primary-500/20 border border-primary-500/30' 
                        : 'bg-dark-900/80 border border-dark-700 hover:bg-dark-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                      shareMode === 'share' ? 'bg-primary-500/30' : 'bg-dark-800'
                    }`}>
                      <Share2 className={`w-5 h-5 ${shareMode === 'share' ? 'text-primary-500' : 'text-gray-400'}`} />
                    </div>
                    <span className="text-sm font-medium">Share Link</span>
                  </button>
                  
                  <button 
                    onClick={() => setShareMode('qr')}
                    className={`p-3 rounded-lg flex flex-col items-center justify-center text-center transition-colors ${
                      shareMode === 'qr' 
                        ? 'bg-primary-500/20 border border-primary-500/30' 
                        : 'bg-dark-900/80 border border-dark-700 hover:bg-dark-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 ${
                      shareMode === 'qr' ? 'bg-primary-500/30' : 'bg-dark-800'
                    }`}>
                      <QrCode className={`w-5 h-5 ${shareMode === 'qr' ? 'text-primary-500' : 'text-gray-400'}`} />
                    </div>
                    <span className="text-sm font-medium">QR Code</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-dark-900/80 rounded-lg p-4 border border-dark-700">
                <h4 className="flex items-center text-primary-500 font-medium mb-2">
                  <Star className="w-4 h-4 mr-2" /> Pro Tip
                </h4>
                <p className="text-sm text-gray-400 mb-3">
                  You can create a single shareable link for your entire collection or individual links for each vehicle. Perfect for sharing in forums, social media, and at car meets.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Available at launch</span>
                  <button className="text-sm text-primary-500 flex items-center">
                    Learn more <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
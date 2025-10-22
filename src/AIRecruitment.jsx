import React, { useState } from 'react';
import { Upload, CheckCircle, Brain, Sparkles, Zap, TrendingUp, Target, Shield, Cpu, BarChart3, Lightbulb, Rocket } from 'lucide-react';

export default function AIRecruitment() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.name.endsWith('.pdf'))) {
      setUploadedFile(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-rose-50 to-emerald-50 text-slate-800">
      {/* Soft animated pastel blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-300/30 to-fuchsia-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-violet-300/30 to-indigo-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-emerald-300/30 to-lime-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 rounded-xl blur opacity-70 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-sky-400 via-fuchsia-400 to-emerald-400 p-2 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600 bg-clip-text text-transparent">
                  AI Recruit
                </span>
                <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
              </div>
              <p className="text-xs text-slate-500">Powered by Advanced AI</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#ai-features" className="text-slate-700 hover:text-sky-600 transition-colors">AI Features</a>
            <a href="#technology" className="text-slate-700 hover:text-fuchsia-600 transition-colors">Technology</a>
            <button className="relative group px-5 py-2 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white rounded-lg overflow-hidden font-semibold shadow">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                AI Dashboard
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-slate-200 px-4 py-2 rounded-full mb-6 backdrop-blur-sm shadow-sm">
            <Brain className="w-4 h-4 text-sky-600 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-sky-700 to-emerald-700 bg-clip-text text-transparent">Next-Gen AI Recruitment Technology</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            Rekrutmen Cerdas dengan
            <br />
            <span className="bg-gradient-to-r from-sky-600 via-fuchsia-600 to-emerald-600 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Platform AI yang menganalisis, menilai, dan merangking kandidat secara otomatis. 
            Machine learning yang terus belajar dari setiap keputusan hiring Anda.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-200">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-medium">AI Active</span>
            </div>
            <div className="flex items-center gap-2 bg-sky-100 px-4 py-2 rounded-full border border-sky-200">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sky-700 font-medium">Real-time Processing</span>
            </div>
            <div className="flex items-center gap-2 bg-fuchsia-100 px-4 py-2 rounded-full border border-fuchsia-200">
              <div className="w-2 h-2 bg-fuchsia-500 rounded-full animate-pulse"></div>
              <span className="text-fuchsia-700 font-medium">Auto-Learning</span>
            </div>
          </div>
        </div>

        {/* AI Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/70 to-fuchsia-200/70 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <Brain className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-fuchsia-700 bg-clip-text text-transparent mb-1">AI-Powered</div>
              <div className="text-slate-500 text-sm font-medium">Deep Learning</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/70 to-indigo-200/70 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <Zap className="w-8 h-8 text-sky-600 mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-indigo-700 bg-clip-text text-transparent mb-1">10x</div>
              <div className="text-slate-500 text-sm font-medium">Faster Screening</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/70 to-orange-200/70 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <Target className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent mb-1">98%</div>
              <div className="text-slate-500 text-sm font-medium">Accuracy Rate</div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 to-lime-200/70 rounded-xl blur-lg group-hover:blur-xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent mb-1">50k+</div>
              <div className="text-slate-500 text-sm font-medium">CV Analyzed</div>
            </div>
          </div>
        </div>

        {/* Upload Section with AI Animation */}
        <div className="max-w-3xl mx-auto mb-20">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative bg-white rounded-2xl border-2 border-dashed transition-all duration-300 overflow-hidden ${
              isDragging 
                ? 'border-sky-400 bg-sky-50 scale-105 shadow-2xl shadow-sky-200' 
                : 'border-sky-300 hover:border-sky-400'
            }`}
          >
            {isAnalyzing && (
              <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-fuchsia-200 to-emerald-200 animate-pulse z-10"></div>
            )}
            <div className="p-12 relative z-20">
              {!uploadedFile ? (
                <div className="text-center">
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-300/40 via-fuchsia-300/40 to-emerald-300/40 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative p-6 bg-gradient-to-br from-sky-100 via-fuchsia-100 to-emerald-100 rounded-full border-2 border-sky-300">
                      <Upload className="w-12 h-12 text-sky-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
                    Upload CV untuk AI Analysis
                    <Brain className="w-6 h-6 text-fuchsia-600 animate-pulse" />
                  </h3>
                  <p className="text-slate-600 mb-6">
                    AI akan menganalisis CV secara real-time dengan deep learning
                  </p>
                  <label className="inline-block group">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleFileInput}
                      className="hidden"
                    />
                    <span className="relative inline-block px-8 py-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white rounded-xl font-semibold cursor-pointer overflow-hidden shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        Start AI Analysis
                        <Rocket className="w-5 h-5" />
                      </span>
                    </span>
                  </label>
                  <p className="text-sm text-slate-500 mt-4 font-medium">
                    PDF Format • AI Processing • Instant Results
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="relative mb-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-300/40 to-lime-300/40 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative p-6 bg-gradient-to-br from-emerald-100 to-lime-100 rounded-full border-2 border-emerald-300">
                      <CheckCircle className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Ready for AI Processing
                  </h3>
                  <p className="text-slate-600 mb-6">{uploadedFile.name}</p>
                  {isAnalyzing ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2 text-slate-700 font-medium">
                        <Brain className="w-5 h-5 animate-pulse text-fuchsia-600" />
                        <span>AI sedang menganalisis...</span>
                        <Sparkles className="w-5 h-5 animate-pulse text-amber-500" />
                      </div>
                      <div className="max-w-md mx-auto bg-slate-200 rounded-full h-3 overflow-hidden border border-slate-300">
                        <div className="h-full bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 animate-pulse"></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <button 
                        onClick={startAnalysis}
                        className="relative group px-8 py-4 bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 text-white rounded-xl font-semibold overflow-hidden shadow-lg"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <span className="relative flex items-center gap-2">
                          <Brain className="w-5 h-5" />
                          Run AI Analysis
                          <Zap className="w-5 h-5" />
                        </span>
                      </button>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="block mx-auto mt-4 text-sky-700 hover:text-sky-900 transition-colors font-medium"
                      >
                        Upload file lain
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div id="ai-features" className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 to-fuchsia-200/60 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 p-8 rounded-2xl group-hover:border-sky-300 transition-all duration-300 group-hover:-translate-y-2 shadow-sm">
              <div className="bg-gradient-to-br from-sky-100 to-fuchsia-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-sky-200">
                <Brain className="w-7 h-7 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Deep Learning Analysis
              </h3>
              <p className="text-slate-600">
                Neural network yang menganalisis pola dalam CV dan memprediksi kesesuaian kandidat dengan akurasi tinggi.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 to-indigo-200/60 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 p-8 rounded-2xl group-hover:border-sky-300 transition-all duration-300 group-hover:-translate-y-2 shadow-sm">
              <div className="bg-gradient-to-br from-sky-100 to-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-sky-200">
                <Lightbulb className="w-7 h-7 text-sky-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Smart Recommendations
              </h3>
              <p className="text-slate-600">
                AI memberikan insight dan rekomendasi berdasarkan data historis hiring success rate perusahaan Anda.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/60 to-lime-200/60 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white border border-slate-200 p-8 rounded-2xl group-hover:border-emerald-300 transition-all duration-300 group-hover:-translate-y-2 shadow-sm">
              <div className="bg-gradient-to-br from-emerald-100 to-lime-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-emerald-200">
                <TrendingUp className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Continuous Learning
              </h3>
              <p className="text-slate-600">
                Model AI yang terus belajar dan improve dari feedback hiring. Semakin digunakan, semakin akurat prediksinya.
              </p>
            </div>
          </div>
        </div>

        {/* AI Technology Stack */}
        <div id="technology" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200/40 via-fuchsia-200/40 to-emerald-200/40 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white border border-slate-200 rounded-3xl p-12 shadow-sm">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-sky-500 to-fuchsia-500 p-2 rounded-lg shadow">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-700 via-fuchsia-700 to-emerald-700 bg-clip-text text-transparent">AI Technology</h2>
              </div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Powered by state-of-the-art machine learning models dan natural language processing
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-sky-200 rounded-xl p-6 hover:border-sky-300 transition-all group shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-sky-100 to-fuchsia-100 p-3 rounded-lg border border-sky-200 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Natural Language Processing</h3>
                    <p className="text-slate-600 text-sm">Memahami konteks dan makna dalam setiap kalimat CV dengan NLP advanced</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-sky-200 rounded-xl p-6 hover:border-sky-300 transition-all group shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-sky-100 to-indigo-100 p-3 rounded-lg border border-sky-200 group-hover:scale-110 transition-transform">
                    <BarChart3 className="w-6 h-6 text-sky-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Predictive Analytics</h3>
                    <p className="text-slate-600 text-sm">Memprediksi success rate kandidat berdasarkan historical data</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-amber-200 rounded-xl p-6 hover:border-amber-300 transition-all group shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-3 rounded-lg border border-amber-200 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Pattern Recognition</h3>
                    <p className="text-slate-600 text-sm">Mendeteksi pola kesuksesan dari top performers di perusahaan</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-emerald-200 rounded-xl p-6 hover:border-emerald-300 transition-all group shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-lime-100 p-3 rounded-lg border border-emerald-200 group-hover:scale-110 transition-transform">
                    <Shield className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Bias-Free Scoring</h3>
                    <p className="text-slate-600 text-sm">Eliminasi bias dalam proses screening dengan objective AI assessment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-8 border-t border-slate-200">
              <div className="group">
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-700 to-fuchsia-700 bg-clip-text text-transparent mb-1">Neural Networks</div>
                <div className="text-sm text-slate-600 font-medium">Deep Learning</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold bg-gradient-to-r from-sky-700 to-indigo-700 bg-clip-text text-transparent mb-1">Transformer Models</div>
                <div className="text-sm text-slate-600 font-medium">Language Understanding</div>
              </div>
              <div className="group">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-lime-700 bg-clip-text text-transparent mb-1">Ensemble ML</div>
                <div className="text-sm text-slate-600 font-medium">High Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-white border-t border-slate-200 text-slate-600 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="bg-gradient-to-r from-sky-500 via-fuchsia-500 to-emerald-500 p-2 rounded-lg shadow">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-sky-700 via-fuchsia-700 to-emerald-700 bg-clip-text text-transparent">AI Recruit</span>
          </div>
          <p className="mb-1 text-slate-700">The Future of Intelligent Recruitment</p>
          <p className="text-sm text-slate-500">&copy; 2025 AI Recruit. Powered by Advanced AI Technology.</p>
        </div>
      </footer>
    </div>
  );
}

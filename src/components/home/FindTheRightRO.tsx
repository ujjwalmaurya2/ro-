import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Droplets, 
  Users, 
  Gauge, 
  ArrowRight, 
  RotateCcw, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';

export const FindTheRightRO: React.FC = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [waterSource, setWaterSource] = useState<string>('');
  const [familySize, setFamilySize] = useState<string>('');
  const [tdsKnown, setTdsKnown] = useState<string>('');

  const waterSources = ['Borewell', 'Municipal', 'Tanker', 'Other'];
  const familySizes = ['1–3', '4–6', '7+'];
  const tdsOptions = ['Known', 'Unknown'];

  const handleReset = () => {
    setWaterSource('');
    setFamilySize('');
    setTdsKnown('');
    setStep(1);
  };

  const getRecommendationSummary = () => {
    let techSuggestion = "RO + UV + UF with Active Minerals";
    let targetCategory = "domestic";

    if (waterSource.includes('Borewell') || waterSource.includes('Tanker')) {
      techSuggestion = "High-TDS RO + UV + Alkaline / TDS Controller";
    } else if (waterSource.includes('Municipal')) {
      techSuggestion = "Standard RO + UV Purification with Mineral Enriched Cartridge";
    }

    if (familySize.includes('7+')) {
      techSuggestion = "High-Capacity Domestic RO (10L+) or Commercial RO Plant";
      targetCategory = "commercial";
    }

    return { techSuggestion, targetCategory };
  };

  const { techSuggestion, targetCategory } = getRecommendationSummary();

  const whatsappUrl = buildWhatsAppUrl(
    whatsappMessages.recommendation({
      waterSource: waterSource || 'Not specified',
      familySize: familySize || 'Not specified',
      tdsKnown: tdsKnown || 'Not specified',
    })
  );

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50/40 border-y border-sky-100/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Interactive Helper</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-['Sora']">
            Not Sure Which RO Is Right For You?
          </h2>
          <p className="text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
            Tell us a little about your water source and household needs to find suitable water purification options.
          </p>
        </div>

        {/* Questionnaire Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-sky-200/80 shadow-xl shadow-sky-900/5 relative overflow-hidden">
          {/* Progress Indicator */}
          {step < 4 && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 text-xs text-slate-700">
              <span className="font-semibold text-sky-700 font-['Sora']">
                Question {step} of 3
              </span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-2 rounded-full transition-all ${
                      s === step ? 'w-8 bg-sky-600' : s < step ? 'w-4 bg-sky-300' : 'w-4 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* STEP 1: Water Source */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Sora']">
                    What is your primary water source?
                  </h3>
                  <p className="text-xs text-slate-700">
                    Different water sources in Prayagraj have varying hardness and mineral contents.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {waterSources.map((source) => (
                  <button
                    key={source}
                    onClick={() => {
                      setWaterSource(source);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                      waterSource === source
                        ? 'border-sky-600 bg-sky-50/80 text-sky-900 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-sky-50/40 hover:border-sky-300 text-slate-800'
                    }`}
                  >
                    <span>{source}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Household Size */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Sora']">
                    How many people will use the purifier daily?
                  </h3>
                  <p className="text-xs text-slate-700">
                    Helps estimate ideal daily purified water storage and purification flow rate.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {familySizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setFamilySize(size);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                      familySize === size
                        ? 'border-sky-600 bg-sky-50/80 text-sky-900 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-sky-50/40 hover:border-sky-300 text-slate-800'
                    }`}
                  >
                    <span>{size}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-800"
                >
                  ← Back to question 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Water TDS Known */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Sora']">
                    Do you know your current water TDS level?
                  </h3>
                  <p className="text-xs text-slate-700">
                    TDS measures Total Dissolved Solids in ppm. If unknown, we can test it during consultation.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {tdsOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setTdsKnown(opt);
                      setStep(4);
                    }}
                    className={`p-4 rounded-2xl border text-left font-medium text-sm transition-all flex items-center justify-between ${
                      tdsKnown === opt
                        ? 'border-sky-600 bg-sky-50/80 text-sky-900 shadow-sm'
                        : 'border-slate-200 bg-slate-50/60 hover:bg-sky-50/40 hover:border-sky-300 text-slate-800'
                    }`}
                  >
                    <span>{opt}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-slate-700 hover:text-slate-800"
                >
                  ← Back to question 2
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results & Lead Routing */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-50 border border-sky-200 space-y-3">
                <div className="flex items-center gap-2 text-sky-800 font-bold text-sm font-['Sora']">
                  <CheckCircle2 className="w-5 h-5 text-sky-600" />
                  <span>Recommendation Summary</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="bg-white p-2.5 rounded-xl border border-sky-100">
                    <span className="text-slate-700 block text-[11px]">Water Source</span>
                    <span className="font-semibold text-slate-900">{waterSource}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-sky-100">
                    <span className="text-slate-700 block text-[11px]">Household Size</span>
                    <span className="font-semibold text-slate-900">{familySize}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-sky-100">
                    <span className="text-slate-700 block text-[11px]">TDS Status</span>
                    <span className="font-semibold text-slate-900">{tdsKnown.split('(')[0]}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                    Suggested Configuration:
                  </span>
                  <p className="text-base font-bold text-sky-950 font-['Sora']">
                    {techSuggestion}
                  </p>
                </div>
              </div>

              {/* Safe, honest disclaimer */}
              <p className="text-xs text-slate-700 leading-relaxed italic">
                *Based on your answers, explore suitable options or talk to Ajit Aqua Appliances for a personalized recommendation. This tool provides practical guidance rather than scientific lab analysis.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask on WhatsApp</span>
                </a>

                <button
                  onClick={() => navigate(targetCategory === 'commercial' ? '/products?category=commercial' : '/products')}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 shadow-md shadow-sky-600/20 transition-all text-center"
                >
                  <span>View Suitable Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-sky-600"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start over with different answers</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

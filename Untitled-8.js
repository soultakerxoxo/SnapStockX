

import React, { useState } from 'react';
import { 
  Wand2, 
  FileText, 
  Mic, 
  Image as ImageIcon, 
  Video as VideoIcon,
  Sparkles,
  Send,
  Download,
  Copy
} from 'lucide-react';
import { generateMarketingScript, generateAIImage } from '../services/geminiService';

enum StudioTab {
  SCRIPT = 'script',
  IMAGE = 'image',
  VIDEO = 'video',
  VOICE = 'voice'
}

const FacelessStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<StudioTab>(StudioTab.SCRIPT);
  const [loading, setLoading] = useState(false);
  
  // Script state
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('Motivation');
  const [generatedScript, setGeneratedScript] = useState<any>(null);

  // Image state
  const [imagePrompt, setImagePrompt] = useState('');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleGenerateScript = async () => {
    if (!topic) return;
    setLoading(true);
    try {
      const script = await generateMarketingScript(topic, niche);
      setGeneratedScript(script);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = async () => {
    if (!imagePrompt) return;
    setLoading(true);
    try {
      const url = await generateAIImage(imagePrompt);
      setGeneratedImageUrl(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in zoom-in-95 duration-500">
      <div>
        <h2 className="text-3xl font-bold mb-1">Faceless Content Studio</h2>
        <p className="text-zinc-400 text-sm">Create viral content without showing your face or recording your voice.</p>
      </div>

      <div className="flex gap-2 bg-white/5 p-1 rounded-2xl border border-white/5 w-fit">
        {[
          { id: StudioTab.SCRIPT, label: 'Scripting', icon: FileText },
          { id: StudioTab.IMAGE, label: 'Images', icon: ImageIcon },
          { id: StudioTab.VIDEO, label: 'Video (Veo)', icon: VideoIcon },
          { id: StudioTab.VOICE, label: 'Voiceover', icon: Mic },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as StudioTab)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Controls */}
        <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
          {activeTab === StudioTab.SCRIPT && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Niche</label>
                <select 
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                >
                  <option className="bg-zinc-900">Motivation</option>
                  <option className="bg-zinc-900">Finance</option>
                  <option className="bg-zinc-900">History Facts</option>
                  <option className="bg-zinc-900">Tech</option>
                  <option className="bg-zinc-900">Health & Wellness</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Content Topic</label>
                <textarea 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. 5 habits of billionaires, why cats sleep so much..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none h-32 resize-none"
                />
              </div>
              <button 
                onClick={handleGenerateScript}
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Sparkles className="w-5 h-5" />}
                Generate Script
              </button>
            </div>
          )}

          {activeTab === StudioTab.IMAGE && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Visual Prompt</label>
                <textarea 
                  value={imagePrompt}
                  onChange={(e) => setImagePrompt(e.target.value)}
                  placeholder="e.g. A futuristic robot reading a book in a cyberpunk library, 4k, neon lighting..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none h-32 resize-none"
                />
              </div>
              <button 
                onClick={handleGenerateImage}
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Wand2 className="w-5 h-5" />}
                Generate Image
              </button>
            </div>
          )}

          {(activeTab === StudioTab.VIDEO || activeTab === StudioTab.VOICE) && (
            <div className="p-8 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 h-64">
              <div className="p-4 bg-indigo-500/10 rounded-full">
                <Sparkles className="w-8 h-8 text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold">Veo & Text-to-Speech Integration</p>
                <p className="text-zinc-500 text-sm mt-1">This module requires a direct Gemini Pro API key to process video and human-like voices.</p>
              </div>
              <button className="text-xs bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">Select API Key</button>
            </div>
          )}
        </div>

        {/* Output Preview */}
        <div className="glass p-8 rounded-3xl border border-white/10 bg-black/20 min-h-[400px] flex flex-col overflow-y-auto max-h-[600px]">
          {activeTab === StudioTab.SCRIPT && generatedScript ? (
            <div className="space-y-6 animate-in slide-in-from-right-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">AI Generated Script</span>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(`${generatedScript.hook}\n\n${generatedScript.content}\n\n${generatedScript.cta}`);
                    alert('Copied to clipboard!');
                  }}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
                  <p className="text-xs font-bold text-indigo-300 mb-1 uppercase tracking-tight">The Hook</p>
                  <p className="text-lg font-semibold italic">"{generatedScript.hook}"</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-tight">Main Content</p>
                  <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">{generatedScript.content}</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-xs font-bold text-zinc-500 mb-1 uppercase tracking-tight">CTA</p>
                  <p className="text-zinc-300">{generatedScript.cta}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {generatedScript.tags.map((tag: string, idx: number) => (
                    <span key={idx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-zinc-400">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : activeTab === StudioTab.IMAGE && generatedImageUrl ? (
            <div className="space-y-4 animate-in slide-in-from-right-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">AI Generated Visual</span>
                <button className="flex items-center gap-1.5 text-xs bg-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-500">
                  <Download className="w-3.5 h-3.5" /> Save
                </button>
              </div>
              <img src={generatedImageUrl} alt="Generated" className="rounded-2xl w-full aspect-square object-cover shadow-2xl border border-white/10" />
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-zinc-500">
              <Wand2 className="w-12 h-12 mb-4 opacity-20" />
              <p>Generation output will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacelessStudio;

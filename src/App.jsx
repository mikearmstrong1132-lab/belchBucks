import React, { useState, useEffect, useRef } from 'react';
import { Wind, TrendingUp, DollarSign, Zap, ArrowRight, Activity, Menu, X, Coins, Flame, Gamepad2, Timer, Wallet, FileText, Map, Mic, ExternalLink, Globe, Leaf, Recycle, Factory, CheckCircle, Settings, ArrowDown, User, HelpCircle, Play, Volume2, Lock, Share2, Trophy, StopCircle, ThumbsUp, Radio, Skull, BarChart3, Clock, AlertTriangle, ShieldCheck, Palette, Sun, Moon, Twitter, Send, MessageCircle, Github, Waves, Vibrate, Radar, Award, Smile, Bot, Sparkles, MessageSquare } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const VIBES = {
    standard: { name: 'Standard', primary: 'lime', bg: 'slate', text: 'slate', accentRaw: '#84cc16' },
    toxic: { name: 'Toxic', primary: 'fuchsia', bg: 'zinc', text: 'zinc', accentRaw: '#d946ef' },
    chill: { name: 'Chill', primary: 'cyan', bg: 'indigo', text: 'indigo', accentRaw: '#06b6d4' }
};
const WalletIcons = {
    MetaMask: (<svg viewBox="0 0 32 32" className="w-10 h-10"><path fill="#E17726" d="M27.4 3.6L16 1.4 4.6 3.6 2.1 14.9l5.5-1.4L16 17.9l8.4-4.4L29.9 14.9z"/></svg>),
    Phantom: (<svg viewBox="0 0 32 32" className="w-10 h-10"><rect width="32" height="32" rx="6" fill="#AB9FF2"/></svg>),
    'Trust Wallet': (<svg viewBox="0 0 32 32" className="w-10 h-10"><path fill="#3375BB" d="M16 2l13 5.5v8.5c0 9-6 16.5-13 18.5-7-2-13-9.5-13-18.5V7.5L16 2z"/></svg>)
};
const TeamMembers = [
    { name: "Dr. Guss E. Tummy", role: "CEO (Chief Eructation Officer)", img: "👨‍⚕️" },
    { name: "Bubbles McGee", role: "Head of Carbonation", img: "🧛" },
    { name: "Silent Bob", role: "Lead Solidity Dev", img: "🥷" },
    { name: "Fizzy Pop", role: "Community Manager", img: "🧞" },
];
const FAQs = [
    { q: "Is this a real coin?", a: "As real as the gas in your stomach after a spicy taco night." },
    { q: "What is the utility?", a: "Governance rights over the global belch frequency and access to the Belch 2 Earn arena." },
    { q: "Is the liquidity locked?", a: "Locked tighter than a soda bottle in a paint shaker." },
    { q: "When moon?", a: "As soon as enough gas builds up to propel us out of the atmosphere." },
];
const initialBelches = [
    { id: 1, user: "ThunderGut_99", emoji: "🤮", time: "1h ago", likes: 450, hasLiked: false, peakDb: 112.5, duration: 4.2 },
    { id: 2, user: "SonicBoomer", emoji: "🤯", time: "2h ago", likes: 320, hasLiked: false, peakDb: 108.1, duration: 3.5 },
    { id: 3, user: "TheWhistle_22", emoji: "🤡", time: "3h ago", likes: 512, hasLiked: true, peakDb: 92.4, duration: 14.2 },
];
export default function App() {
    const [vibe, setVibe] = useState('standard');
    const [walletAddress, setWalletAddress] = useState('');
    const [belches, setBelches] = useState(initialBelches);
    const [theme] = useState(VIBES[vibe]);
    const theme_current = VIBES[vibe];
    const connectWallet = async () => { setWalletAddress('0x123...abc'); }; 
    const disconnectWallet = () => { setWalletAddress(''); };
    const toggleLike = (id) => { setBelches(belches.map(b => b.id === id ? { ...b, hasLiked: !b.hasLiked, likes: b.hasLiked ? b.likes - 1 : b.likes + 1 } : b)); };
    return (
        <div className={`min-h-screen bg-${theme_current.bg}-950 text-white`}>
            <div className={`bg-${theme_current.primary}-900 text-${theme_current.primary}-300 py-2 border-b-2 border-${theme_current.primary}-600`}>
                <div className="flex justify-between items-center px-4 h-16 max-w-7xl mx-auto">
                    <div className="flex items-center gap-3">
                        <Wind className={`h-8 w-8 text-${theme_current.primary}-400`} />
                        <span className="text-3xl font-black">BelchBucks</span>
                    </div>
                    <nav className="hidden md:flex gap-8">
                        <a href="#" className="hover:text-white">Swap</a>
                        <a href="#" className="hover:text-white">Leaderboard</a>
                        <a href="#" className="hover:text-white">Team</a>
                        <a href="#" className="hover:text-white">FAQ</a>
                    </nav>
                    <button onClick={walletAddress ? disconnectWallet : connectWallet} className={`bg-${theme_current.primary}-500 hover:bg-${theme_current.primary}-600 px-6 py-2 rounded-lg font-bold transition-colors`}>
                        {walletAddress ? `Connected: ${walletAddress}` : 'Connect Wallet'}
                    </button>
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-4 py-12">
                <section className={`bg-${theme_current.bg}-900 rounded-2xl p-8 mb-12 border border-${theme_current.primary}-500/30`}>
                    <h1 className={`text-6xl font-black mb-4 text-${theme_current.primary}-400`}>Welcome to BelchBucks</h1>
                    <p className={`text-${theme_current.text}-300 text-xl mb-8`}>The Premier Flatulence Finance Protocol</p>
                    <button className={`bg-${theme_current.primary}-500 hover:bg-${theme_current.primary}-600 px-8 py-4 rounded-lg font-bold text-lg transition-colors`}> Launch App </button>
                </section>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className={`bg-${theme_current.bg}-900 rounded-xl p-6 border border-${theme_current.primary}-500/20`}>
                        <h3 className="text-xl font-bold mb-2">Total Supply</h3>
                        <p className={`text-3xl font-black text-${theme_current.primary}-400`}>1,000,000</p>
                    </div>
                    <div className={`bg-${theme_current.bg}-900 rounded-xl p-6 border border-${theme_current.primary}-500/20`}>
                        <h3 className="text-xl font-bold mb-2">Holders</h3>
                        <p className={`text-3xl font-black text-${theme_current.primary}-400`}>12,453</p>
                    </div>
                    <div className={`bg-${theme_current.bg}-900 rounded-xl p-6 border border-${theme_current.primary}-500/20`}>
                        <h3 className="text-xl font-bold mb-2">Market Cap</h3>
                        <p className={`text-3xl font-black text-${theme_current.primary}-400`}>$420K</p>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-4xl font-black mb-8">Top Belches</h2>
                    <div className="space-y-4">
                        {belches.map(belch => (
                            <div key={belch.id} className={`bg-${theme_current.bg}-900 rounded-lg p-6 border border-${theme_current.primary}-500/20 hover:border-${theme_current.primary}-500/50 transition-colors`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl">{belch.emoji}</span>
                                        <div>
                                            <p className="font-bold">{belch.user}</p>
                                            <p className={`text-${theme_current.text}-400 text-sm`}>{belch.time}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-${theme_current.text}-400`}>{belch.peakDb} dB</span>
                                        <button onClick={() => toggleLike(belch.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${belch.hasLiked ? `bg-${theme_current.primary}-500/30` : `hover:bg-${theme_current.primary}-500/10`}`}> <ThumbsUp className="w-4 h-4" /> {belch.likes} </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={`bg-${theme_current.bg}-900 rounded-2xl p-8 border border-${theme_current.primary}-500/30`}> 
                    <h2 className="text-4xl font-black mb-8">Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {TeamMembers.map((member, idx) => (
                            <div key={idx} className={`bg-${theme_current.bg}-800 rounded-lg p-6 text-center`}> 
                                <p className="text-4xl mb-4">{member.img}</p>
                                <h3 className="font-bold mb-2">{member.name}</h3>
                                <p className={`text-${theme_current.text}-400 text-sm`}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className={`bg-${theme_current.bg}-900 rounded-2xl p-8 border border-${theme_current.primary}-500/30 mt-12`}> 
                    <h2 className="text-4xl font-black mb-8">FAQ</h2>
                    <div className="space-y-6"> 
                        {FAQs.map((faq, idx) => (
                            <div key={idx}> 
                                <h3 className={`font-bold text-lg mb-2 text-${theme_current.primary}-400`}>{faq.q}</h3>
                                <p className={`text-${theme_current.text}-300`}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <footer className={`bg-${theme_current.bg}-900 border-t border-${theme_current.primary}-500/30 py-8 mt-12`}> 
                <div className="max-w-7xl mx-auto px-4 text-center"> 
                    <p className={`text-${theme_current.text}-400`}>© 2026 BelchBucks. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
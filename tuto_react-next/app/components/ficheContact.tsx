"use client"
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function FicheContact() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 md:p-20">
      <div className="text-center mb-12 md:mb-16 animate-fade-in">
        <h2 className="font-coif text-5xl md:text-7xl text-amber-300">Contact & Horaires</h2>
        <p className="font-mono text-zinc-400 mt-4 text-sm md:text-base">Une question ? Envie de prendre rendez-vous ? Écrivez-nous ou passez au salon.</p>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        <form className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl space-y-6 backdrop-blur-sm">
          <h3 className="font-coif text-2xl text-white mb-2">Nous envoyer un message</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-zinc-400 uppercase">Nom</label>
              <input type="text" placeholder="Votre nom" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-amber-400 text-white transition-colors" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-zinc-400 uppercase">Téléphone</label>
              <input type="tel" placeholder="06 00 00 00 00" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-amber-400 text-white transition-colors" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-zinc-400 uppercase">Adresse Email</label>
            <input type="email" placeholder="exemple@mail.com" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-amber-400 text-white transition-colors" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs text-zinc-400 uppercase">Votre Message</label>
            <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm font-mono focus:outline-none focus:border-amber-400 text-white transition-colors resize-none" required></textarea>
          </div>

          <button type="submit" className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-zinc-950 font-mono font-bold rounded-lg transition-colors duration-300 uppercase text-sm tracking-wider">
            Envoyer le message
          </button>
        </form>
        <div className="space-y-8 lg:pl-6">
           <div className="space-y-6">
            <h3 className="font-coif text-2xl text-amber-300">Les coordonnées</h3>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-400">
                <MapPin size={20} />
              </div>
              <div className="font-mono">
                <p className="text-zinc-400 text-xs uppercase">Adresse</p>
                <a href="https://www.google.com/maps/search/?api=1&query=12+Avenue+des+Maitres+66000+Perpignan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <p className="text-sm mt-1 text-zinc-200 hover:text-amber-400 transition-colors">12 Avenue des Maîtres, 66000 Perpignan</p>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-400">
                <Phone size={20} />
              </div>
              <div className="font-mono">
                <p className="text-zinc-400 text-xs uppercase">Téléphone</p>
                <a href="tel:0400000000" className="text-sm mt-1 text-zinc-200 hover:text-amber-400 transition-colors">04 00 00 00 00</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 text-amber-400">
                <Mail size={20} />
              </div>
              <div className="font-mono">
                <p className="text-zinc-400 text-xs uppercase">Email</p>
                <a href="mailto:contact@lesmaitresdelhair.com" className="text-sm mt-1 text-zinc-200 hover:text-amber-400 transition-colors">contact@lesmaitresdelhair.com</a>
              </div>
            </div>
          </div>
          <div className="space-y-4 border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-amber-400" />
              <h3 className="font-coif text-2xl text-amber-300">Horaires d'ouverture</h3>
            </div>
            
            <div className="font-mono text-sm space-y-2 text-zinc-300">
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Lundi</span>
                <span className="text-zinc-500">Fermé</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Mardi - Vendredi</span>
                <span>09:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Samedi</span>
                <span>09:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span className="text-zinc-500">Fermé</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
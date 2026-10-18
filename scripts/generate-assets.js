import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public/images');

const assets = {
  // PRODUCTS
  'products/aqua-prime.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="copperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B87333"/>
      <stop offset="50%" stop-color="#E89758"/>
      <stop offset="100%" stop-color="#A55D25"/>
    </linearGradient>
    <linearGradient id="waterTank" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#BAE6FD" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#64748B"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Ambient Backdrop -->
  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="190" fill="#E0F2FE" opacity="0.4"/>

  <!-- Main Cabinet Body -->
  <g filter="url(#shadow)">
    <rect x="115" y="60" width="270" height="380" rx="28" fill="url(#bodyGrad)" stroke="#CBD5E1" stroke-width="3"/>
    
    <!-- Top Display Panel -->
    <rect x="130" y="75" width="240" height="95" rx="16" fill="#0F172A"/>
    
    <!-- Brand Emblem -->
    <text x="250" y="105" font-family="'Sora', sans-serif" font-size="14" font-weight="800" fill="#38BDF8" text-anchor="middle" letter-spacing="2">AJIT AQUA PRO</text>
    <text x="250" y="122" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#94A3B8" text-anchor="middle" letter-spacing="1">COPPER + ALKALINE RO</text>
    
    <!-- Status LEDs -->
    <g transform="translate(160, 136)">
      <circle cx="20" cy="12" r="5" fill="#10B981"/>
      <text x="20" y="27" font-size="7" fill="#64748B" text-anchor="middle" font-family="'Inter', sans-serif">POWER</text>
      
      <circle cx="70" cy="12" r="5" fill="#0EA5E9"/>
      <text x="70" y="27" font-size="7" fill="#64748B" text-anchor="middle" font-family="'Inter', sans-serif">RO/UV</text>
      
      <circle cx="120" cy="12" r="5" fill="#E89758"/>
      <text x="120" y="27" font-size="7" fill="#E89758" text-anchor="middle" font-family="'Inter', sans-serif">COPPER</text>
      
      <circle cx="160" cy="12" r="5" fill="#38BDF8"/>
      <text x="160" y="27" font-size="7" fill="#64748B" text-anchor="middle" font-family="'Inter', sans-serif">TANK FULL</text>
    </g>

    <!-- Copper Accent Stripe -->
    <rect x="115" y="175" width="270" height="10" fill="url(#copperGrad)"/>

    <!-- Transparent 9L Water Tank Window -->
    <rect x="140" y="198" width="220" height="185" rx="18" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
    <path d="M 145 270 Q 195 260 250 270 T 355 270 L 355 375 Q 355 380 350 380 L 150 380 Q 145 380 145 375 Z" fill="url(#waterTank)"/>
    
    <!-- Water Level Gauge Markers -->
    <g stroke="#94A3B8" stroke-width="1.5" opacity="0.6">
      <line x1="340" y1="230" x2="350" y2="230"/>
      <line x1="342" y1="255" x2="350" y2="255"/>
      <line x1="340" y1="280" x2="350" y2="280"/>
      <line x1="342" y1="305" x2="350" y2="305"/>
      <line x1="340" y1="330" x2="350" y2="330"/>
    </g>
    <text x="330" y="234" font-size="8" fill="#64748B" text-anchor="end" font-weight="700">9L MAX</text>
    <text x="330" y="334" font-size="8" fill="#64748B" text-anchor="end">2L MIN</text>

    <!-- Active Copper Mineralizer Ring Graphic -->
    <circle cx="250" cy="315" r="34" fill="none" stroke="url(#copperGrad)" stroke-width="4" stroke-dasharray="6,4"/>
    <circle cx="250" cy="315" r="24" fill="#FFFFFF" opacity="0.9"/>
    <path d="M 250 300 Q 256 312 250 326 Q 244 312 250 300 Z" fill="url(#copperGrad)"/>
    <text x="250" y="335" font-size="7" font-weight="800" fill="#A55D25" text-anchor="middle">ACTIVE Cu+</text>

    <!-- Chrome Dispensing Tap -->
    <path d="M 240 395 L 260 395 L 256 425 L 244 425 Z" fill="url(#chromeGrad)"/>
    <rect x="236" y="390" width="28" height="6" rx="3" fill="url(#chromeGrad)"/>
    <circle cx="250" cy="428" r="4" fill="#0284C7"/>
  </g>
</svg>`,

  'products/aqua-pure-shield.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="shieldBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#F0F9FF"/>
    </linearGradient>
    <linearGradient id="uvGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#818CF8"/>
    </linearGradient>
    <linearGradient id="cyanWater" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <filter id="pureShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0369A1" flood-opacity="0.15"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="185" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#pureShadow)">
    <!-- Main Wall Mount Cabinet -->
    <rect x="120" y="65" width="260" height="370" rx="32" fill="url(#shieldBody)" stroke="#BAE6FD" stroke-width="3"/>
    
    <!-- Top Crown -->
    <path d="M 120 100 Q 250 85 380 100 L 380 65 Q 250 65 120 65 Z" fill="#0284C7"/>
    
    <!-- Brand Title -->
    <text x="250" y="130" font-family="'Sora', sans-serif" font-size="15" font-weight="800" fill="#0369A1" text-anchor="middle" letter-spacing="1.5">AQUA PURE SHIELD</text>
    <text x="250" y="146" font-family="'Inter', sans-serif" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">RO + UV DUAL STERILIZATION</text>

    <!-- UV Shield Emblem -->
    <g transform="translate(250, 185)">
      <path d="M 0 -25 L 22 -12 L 22 15 Q 0 35 -22 15 L -22 -12 Z" fill="url(#uvGlow)" opacity="0.9"/>
      <text x="0" y="4" font-family="'Sora', sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle">UV</text>
      <text x="0" y="15" font-size="7" font-weight="700" fill="#E0F2FE" text-anchor="middle">ACTIVE</text>
    </g>

    <!-- Clean Water Storage Reservoir (8 Litres) -->
    <rect x="145" y="230" width="210" height="150" rx="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    <path d="M 150 290 Q 200 280 250 290 T 350 290 L 350 370 Q 350 376 344 376 L 156 376 Q 150 376 150 370 Z" fill="url(#cyanWater)" opacity="0.85"/>

    <text x="250" y="325" font-family="'Sora', sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle">8L</text>
    <text x="250" y="340" font-size="9" font-weight="600" fill="#E0F2FE" text-anchor="middle">FOOD GRADE TANK</text>

    <!-- Dispensing Tap -->
    <rect x="238" y="390" width="24" height="25" rx="4" fill="#64748B"/>
    <circle cx="250" cy="415" r="5" fill="#38BDF8"/>
  </g>
</svg>`,

  'products/aqua-grand-plus.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grandBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#0369A1" stop-opacity="0.95"/>
    </linearGradient>
    <linearGradient id="filterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="mineralGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
    <filter id="grandShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="185" fill="#BAE6FD" opacity="0.3"/>

  <g filter="url(#grandShadow)">
    <!-- Classic Transparent Blue Cabinet Frame -->
    <rect x="120" y="60" width="260" height="380" rx="24" fill="url(#grandBlue)" stroke="#0369A1" stroke-width="3"/>
    
    <!-- Top Mineral Cartridge Mounting Tube -->
    <rect x="150" y="80" width="200" height="30" rx="8" fill="url(#mineralGold)" stroke="#B45309" stroke-width="1.5"/>
    <text x="250" y="99" font-family="'Sora', sans-serif" font-size="10" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">MINERAL BOOSTER CARTRIDGE</text>

    <!-- Visible Internal Multi-Stage Filter Housings -->
    <g transform="translate(145, 125)">
      <!-- Filter 1: Sediment -->
      <rect x="0" y="0" width="55" height="120" rx="8" fill="url(#filterGrad)" stroke="#CBD5E1" stroke-width="2"/>
      <text x="27" y="65" font-size="8" font-weight="700" fill="#0284C7" text-anchor="middle" transform="rotate(-90 27 65)">SEDIMENT</text>

      <!-- Filter 2: Carbon -->
      <rect x="75" y="0" width="55" height="120" rx="8" fill="url(#filterGrad)" stroke="#CBD5E1" stroke-width="2"/>
      <text x="102" y="65" font-size="8" font-weight="700" fill="#0284C7" text-anchor="middle" transform="rotate(-90 102 65)">CARBON</text>

      <!-- Filter 3: RO Membrane -->
      <rect x="150" y="0" width="60" height="120" rx="8" fill="#0284C7" stroke="#38BDF8" stroke-width="2"/>
      <text x="180" y="65" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 180 65)">RO MEMBRANE</text>
    </g>

    <!-- 10 Litre Storage Reservoir -->
    <rect x="135" y="260" width="230" height="145" rx="14" fill="#FFFFFF" opacity="0.95"/>
    <text x="250" y="295" font-family="'Sora', sans-serif" font-size="16" font-weight="800" fill="#0369A1" text-anchor="middle">AQUA GRAND PLUS</text>
    <text x="250" y="315" font-size="11" font-weight="700" fill="#0284C7" text-anchor="middle">RO + UV + UF + MINERALS</text>
    <text x="250" y="340" font-size="14" font-weight="800" fill="#0F172A" text-anchor="middle">10 LITRE STORAGE</text>

    <!-- Dispensing Tap -->
    <path d="M 242 405 L 258 405 L 255 430 L 245 430 Z" fill="#94A3B8"/>
    <circle cx="250" cy="433" r="4" fill="#0284C7"/>
  </g>
</svg>`,

  'products/zenith-alkaline.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="zenithBody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="alkalineNeon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06B6D4"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#8B5CF6"/>
    </linearGradient>
    <filter id="zenithGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#06B6D4" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="190" fill="#F1F5F9"/>

  <g filter="url(#zenithGlow)">
    <!-- Premium Dark Chassis -->
    <rect x="120" y="55" width="260" height="390" rx="36" fill="url(#zenithBody)" stroke="#334155" stroke-width="3"/>

    <!-- Subtle Metallic Top Edge -->
    <rect x="140" y="65" width="220" height="4" rx="2" fill="url(#alkalineNeon)"/>

    <text x="250" y="105" font-family="'Sora', sans-serif" font-size="16" font-weight="800" fill="#F8FAFC" text-anchor="middle" letter-spacing="3">ZENITH</text>
    <text x="250" y="122" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#06B6D4" text-anchor="middle" letter-spacing="1.5">ACTIVE ALKALINE ANTIOXIDANT RO</text>

    <!-- Futuristic Digital Display Dial -->
    <circle cx="250" cy="200" r="55" fill="#020617" stroke="url(#alkalineNeon)" stroke-width="4"/>
    <circle cx="250" cy="200" r="46" fill="none" stroke="#1E293B" stroke-width="2" stroke-dasharray="4,4"/>

    <text x="250" y="195" font-family="'Sora', sans-serif" font-size="22" font-weight="900" fill="#38BDF8" text-anchor="middle">pH 8.8</text>
    <text x="250" y="212" font-size="9" font-weight="800" fill="#10B981" text-anchor="middle">OPTIMAL ALKALINE</text>
    <text x="250" y="225" font-size="8" fill="#94A3B8" text-anchor="middle">-150 mV ORP</text>

    <!-- Detachable Multi-Stage Tank Body -->
    <rect x="145" y="275" width="210" height="120" rx="16" fill="#1E293B" stroke="#334155" stroke-width="2"/>
    <text x="250" y="315" font-family="'Sora', sans-serif" font-size="13" font-weight="700" fill="#F1F5F9" text-anchor="middle">ACTIVE CARBON + BIO MINERALS</text>
    <text x="250" y="335" font-size="10" fill="#94A3B8" text-anchor="middle">Continuous Pure Mineral Enrichment</text>
    <text x="250" y="365" font-size="11" font-weight="800" fill="#38BDF8" text-anchor="middle">10 LITRE DETACHABLE RESERVOIR</text>

    <!-- Sleek High-Arc Spout -->
    <path d="M 235 405 L 265 405 L 255 432 L 245 432 Z" fill="#94A3B8"/>
    <circle cx="250" cy="435" r="4" fill="#06B6D4"/>
  </g>
</svg>`,

  'products/commercial-ro-25lph.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="ssFrame" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="50%" stop-color="#CBD5E1"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <linearGradient id="vesselBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>

  <!-- Skid Stand Structure -->
  <!-- Vertical Support Posts -->
  <rect x="90" y="60" width="14" height="380" rx="3" fill="url(#ssFrame)"/>
  <rect x="396" y="60" width="14" height="380" rx="3" fill="url(#ssFrame)"/>
  <!-- Cross Bracing -->
  <rect x="90" y="60" width="320" height="14" rx="3" fill="url(#ssFrame)"/>
  <rect x="90" y="240" width="320" height="12" rx="2" fill="url(#ssFrame)"/>
  <rect x="90" y="426" width="320" height="16" rx="3" fill="url(#ssFrame)"/>

  <!-- 2x Vertical Stainless / FRP Membrane Pressure Vessels -->
  <g transform="translate(130, 80)">
    <rect x="0" y="0" width="45" height="280" rx="12" fill="url(#vesselBlue)" stroke="#0369A1" stroke-width="2"/>
    <rect x="5" y="10" width="35" height="10" rx="3" fill="#E2E8F0"/>
    <rect x="5" y="260" width="35" height="10" rx="3" fill="#E2E8F0"/>
    <text x="22" y="140" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 22 140)">RO MEMBRANE 1</text>
  </g>

  <g transform="translate(195, 80)">
    <rect x="0" y="0" width="45" height="280" rx="12" fill="url(#vesselBlue)" stroke="#0369A1" stroke-width="2"/>
    <rect x="5" y="10" width="35" height="10" rx="3" fill="#E2E8F0"/>
    <rect x="5" y="260" width="35" height="10" rx="3" fill="#E2E8F0"/>
    <text x="22" y="140" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 22 140)">RO MEMBRANE 2</text>
  </g>

  <!-- Dual Pressure Gauges -->
  <g transform="translate(285, 110)">
    <!-- Gauge 1 -->
    <circle cx="28" cy="28" r="24" fill="#FFFFFF" stroke="#475569" stroke-width="3"/>
    <circle cx="28" cy="28" r="3" fill="#DC2626"/>
    <line x1="28" y1="28" x2="40" y2="18" stroke="#DC2626" stroke-width="2"/>
    <text x="28" y="44" font-size="7" font-weight="700" fill="#64748B" text-anchor="middle">FEED PSI</text>

    <!-- Gauge 2 -->
    <circle cx="85" cy="28" r="24" fill="#FFFFFF" stroke="#475569" stroke-width="3"/>
    <circle cx="85" cy="28" r="3" fill="#0284C7"/>
    <line x1="85" y1="28" x2="98" y2="20" stroke="#0284C7" stroke-width="2"/>
    <text x="85" y="44" font-size="7" font-weight="700" fill="#64748B" text-anchor="middle">RO PSI</text>
  </g>

  <!-- Electrical Switch Box -->
  <rect x="270" y="180" width="115" height="85" rx="8" fill="#1E293B" stroke="#475569" stroke-width="2"/>
  <text x="327" y="205" font-family="'Sora', sans-serif" font-size="10" font-weight="800" fill="#38BDF8" text-anchor="middle">25 LPH PLANT</text>
  <circle cx="300" cy="235" r="7" fill="#10B981"/>
  <circle cx="330" cy="235" r="7" fill="#EF4444"/>
  <circle cx="360" cy="235" r="7" fill="#F59E0B"/>

  <!-- Commercial Heavy Duty Booster Pump (Bottom Base) -->
  <rect x="260" y="320" width="125" height="65" rx="8" fill="#0F172A" stroke="#334155" stroke-width="2"/>
  <!-- Cooling fins -->
  <line x1="275" y1="330" x2="275" y2="375" stroke="#475569" stroke-width="3"/>
  <line x1="285" y1="330" x2="285" y2="375" stroke="#475569" stroke-width="3"/>
  <line x1="295" y1="330" x2="295" y2="375" stroke="#475569" stroke-width="3"/>
  <!-- Pump head -->
  <rect x="330" y="325" width="50" height="55" rx="5" fill="#64748B"/>
  <text x="355" y="355" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle">PUMP</text>

  <!-- Flow Label -->
  <rect x="150" y="446" width="200" height="28" rx="6" fill="#0284C7"/>
  <text x="250" y="465" font-family="'Sora', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">25 LITRES / HOUR COMMERCIAL</text>
</svg>`,

  'products/commercial-ro-50lph.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="indFrame" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#475569"/>
      <stop offset="100%" stop-color="#1E293B"/>
    </linearGradient>
    <linearGradient id="frpVessel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="60%" stop-color="#0EA5E9"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>

  <!-- Skid Stand Structure -->
  <rect x="50" y="50" width="16" height="390" rx="3" fill="url(#indFrame)"/>
  <rect x="434" y="50" width="16" height="390" rx="3" fill="url(#indFrame)"/>
  <rect x="50" y="50" width="400" height="16" rx="3" fill="url(#indFrame)"/>
  <rect x="50" y="424" width="400" height="20" rx="3" fill="url(#indFrame)"/>

  <!-- 2x Large FRP Pre-Treatment Vessels (Sand &amp; Carbon) -->
  <g transform="translate(80, 75)">
    <!-- Vessel 1 -->
    <rect x="0" y="25" width="60" height="290" rx="16" fill="url(#frpVessel)"/>
    <!-- Top Multiport Valve -->
    <rect x="15" y="0" width="30" height="25" rx="5" fill="#0F172A"/>
    <text x="30" y="170" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 30 170)">SAND MEDIA FILTER</text>

    <!-- Vessel 2 -->
    <rect x="75" y="25" width="60" height="290" rx="16" fill="url(#frpVessel)"/>
    <!-- Top Multiport Valve -->
    <rect x="90" y="0" width="30" height="25" rx="5" fill="#0F172A"/>
    <text x="105" y="170" font-size="9" font-weight="800" fill="#FFFFFF" text-anchor="middle" transform="rotate(-90 105 170)">CARBON MEDIA FILTER</text>
  </g>

  <!-- Horizontal Commercial RO Membrane Housings (4040 size) -->
  <g transform="translate(230, 85)">
    <rect x="0" y="0" width="190" height="36" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
    <text x="95" y="22" font-size="9" font-weight="800" fill="#1E293B" text-anchor="middle">RO MEMBRANE HOUSING 1 (4040)</text>

    <rect x="0" y="50" width="190" height="36" rx="8" fill="#CBD5E1" stroke="#64748B" stroke-width="2"/>
    <text x="95" y="72" font-size="9" font-weight="800" fill="#1E293B" text-anchor="middle">RO MEMBRANE HOUSING 2 (4040)</text>
  </g>

  <!-- Rotameter Flow Meters -->
  <g transform="translate(240, 185)">
    <rect x="0" y="0" width="22" height="90" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="2"/>
    <line x1="11" y1="10" x2="11" y2="80" stroke="#0284C7" stroke-width="2"/>
    <polygon points="11,40 6,48 16,48" fill="#EF4444"/>
    <text x="11" y="102" font-size="7" font-weight="700" fill="#64748B" text-anchor="middle">PERM</text>

    <rect x="40" y="0" width="22" height="90" rx="4" fill="#FFFFFF" stroke="#475569" stroke-width="2"/>
    <line x1="51" y1="10" x2="51" y2="80" stroke="#0284C7" stroke-width="2"/>
    <polygon points="51,55 46,63 56,63" fill="#EF4444"/>
    <text x="51" y="102" font-size="7" font-weight="700" fill="#64748B" text-anchor="middle">REJECT</text>
  </g>

  <!-- Main Industrial Control Panel -->
  <rect x="320" y="180" width="105" height="105" rx="8" fill="#0F172A" stroke="#38BDF8" stroke-width="2"/>
  <rect x="335" y="195" width="75" height="30" rx="4" fill="#1E293B"/>
  <text x="372" y="215" font-family="'Sora', sans-serif" font-size="11" font-weight="900" fill="#10B981" text-anchor="middle">50 LPH</text>
  <circle cx="345" cy="255" r="8" fill="#10B981"/>
  <circle cx="372" cy="255" r="8" fill="#EF4444"/>
  <circle cx="399" cy="255" r="8" fill="#F59E0B"/>

  <!-- High Pressure Multistage Pump (Bottom) -->
  <rect x="230" y="320" width="190" height="75" rx="8" fill="#1E293B" stroke="#475569" stroke-width="2"/>
  <text x="325" y="355" font-family="'Sora', sans-serif" font-size="12" font-weight="800" fill="#38BDF8" text-anchor="middle">VERTICAL HIGH-PRESSURE PUMP</text>
  <text x="325" y="375" font-size="9" font-weight="700" fill="#94A3B8" text-anchor="middle">Continuous Duty Industrial Motor</text>

  <!-- Bottom Capacity Badge -->
  <rect x="140" y="448" width="220" height="28" rx="6" fill="#0369A1"/>
  <text x="250" y="467" font-family="'Sora', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">50 LITRES / HOUR COMMERCIAL RO</text>
</svg>`,

  // SPARE PARTS
  'parts/ro-membrane-80gpd.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="memBlue" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="40%" stop-color="#0EA5E9"/>
      <stop offset="80%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <linearGradient id="tubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#E2E8F0"/>
      <stop offset="100%" stop-color="#94A3B8"/>
    </linearGradient>
    <filter id="memShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#memShadow)">
    <!-- Central Permeate Collector Tube (Extending both ends) -->
    <!-- Left Extension -->
    <rect x="40" y="235" width="45" height="30" rx="4" fill="url(#tubeGrad)" stroke="#64748B" stroke-width="1.5"/>
    <!-- Dual O-Rings on left tube -->
    <rect x="52" y="233" width="6" height="34" rx="2" fill="#0F172A"/>
    <rect x="66" y="233" width="6" height="34" rx="2" fill="#0F172A"/>

    <!-- Right Extension -->
    <rect x="415" y="235" width="45" height="30" rx="4" fill="url(#tubeGrad)" stroke="#64748B" stroke-width="1.5"/>

    <!-- Main Spiral Membrane Body -->
    <rect x="85" y="160" width="330" height="180" rx="14" fill="url(#memBlue)" stroke="#0369A1" stroke-width="3"/>

    <!-- Black Rubber Brine Seal on Inlet (Left) -->
    <rect x="85" y="145" width="22" height="210" rx="6" fill="#0F172A"/>
    <path d="M 107 150 L 125 160 L 125 340 L 107 350 Z" fill="#1E293B"/>

    <!-- Spiral Tape Lines Texture -->
    <line x1="140" y1="160" x2="140" y2="340" stroke="#38BDF8" stroke-width="2" opacity="0.7"/>
    <line x1="200" y1="160" x2="200" y2="340" stroke="#38BDF8" stroke-width="2" opacity="0.7"/>
    <line x1="300" y1="160" x2="300" y2="340" stroke="#38BDF8" stroke-width="2" opacity="0.7"/>
    <line x1="360" y1="160" x2="360" y2="340" stroke="#38BDF8" stroke-width="2" opacity="0.7"/>

    <!-- Technical Specification Label -->
    <rect x="150" y="200" width="200" height="100" rx="8" fill="#FFFFFF" opacity="0.95"/>
    <text x="250" y="228" font-family="'Sora', sans-serif" font-size="13" font-weight="900" fill="#0369A1" text-anchor="middle">80 GPD TFC RO MEMBRANE</text>
    <text x="250" y="248" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#0F172A" text-anchor="middle">HIGH-TDS REJECTION ELEMENT</text>
    <text x="250" y="268" font-size="8" fill="#64748B" text-anchor="middle">Model: 1812-80 GPD | 96% Salt Rejection</text>
    
    <!-- Flow Direction Arrow on Label -->
    <path d="M 220 283 L 270 283 M 265 278 L 273 283 L 265 288" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,

  'parts/ro-booster-pump-100gpd.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="pumpBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="40%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <linearGradient id="zincHead" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#64748B"/>
    </linearGradient>
    <linearGradient id="copperBadge" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B87333"/>
      <stop offset="100%" stop-color="#E89758"/>
    </linearGradient>
    <filter id="pumpShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E2E8F0" opacity="0.4"/>

  <g filter="url(#pumpShadow)">
    <!-- Mounting Bracket with Rubber Dampers -->
    <rect x="70" y="320" width="360" height="24" rx="6" fill="#0F172A"/>
    <circle cx="95" cy="332" r="7" fill="#64748B"/>
    <circle cx="120" cy="332" r="7" fill="#64748B"/>
    <circle cx="380" cy="332" r="7" fill="#64748B"/>
    <circle cx="405" cy="332" r="7" fill="#64748B"/>

    <!-- Main Electric Motor Body (Cylindrical) -->
    <rect x="130" y="150" width="220" height="175" rx="20" fill="url(#pumpBody)" stroke="#475569" stroke-width="2"/>

    <!-- Heat Dissipation Cooling Ribs -->
    <g stroke="#0F172A" stroke-width="3">
      <line x1="160" y1="155" x2="160" y2="320"/>
      <line x1="180" y1="155" x2="180" y2="320"/>
      <line x1="200" y1="155" x2="200" y2="320"/>
      <line x1="220" y1="155" x2="220" y2="320"/>
      <line x1="240" y1="155" x2="240" y2="320"/>
      <line x1="260" y1="155" x2="260" y2="320"/>
      <line x1="280" y1="155" x2="280" y2="320"/>
      <line x1="300" y1="155" x2="300" y2="320"/>
    </g>

    <!-- Metallic Zinc Pump Head (Right Side) -->
    <path d="M 350 160 L 420 175 L 420 300 L 350 315 Z" fill="url(#zincHead)" stroke="#475569" stroke-width="2"/>
    
    <!-- Water Inlet &amp; Outlet Ports on Head -->
    <rect x="420" y="190" width="28" height="20" rx="4" fill="#38BDF8"/>
    <text x="434" y="204" font-size="7" font-weight="800" fill="#0F172A" text-anchor="middle">OUT</text>
    
    <rect x="420" y="265" width="28" height="20" rx="4" fill="#38BDF8"/>
    <text x="434" y="279" font-size="7" font-weight="800" fill="#0F172A" text-anchor="middle">IN</text>

    <!-- Front Cap / Bearing Cover (Left Side) -->
    <rect x="90" y="170" width="40" height="135" rx="10" fill="url(#zincHead)"/>
    <!-- Power Lead Wires -->
    <path d="M 75 220 Q 50 220 40 200" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>
    <path d="M 75 240 Q 50 240 40 260" fill="none" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>

    <!-- Central Technical Label -->
    <rect x="155" y="195" width="165" height="85" rx="8" fill="#FFFFFF" opacity="0.95"/>
    <text x="237" y="220" font-family="'Sora', sans-serif" font-size="11" font-weight="900" fill="#0F172A" text-anchor="middle">100 GPD RO BOOSTER PUMP</text>
    <rect x="180" y="228" width="115" height="16" rx="4" fill="url(#copperBadge)"/>
    <text x="237" y="240" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle">100% COPPER WINDING</text>
    <text x="237" y="258" font-size="8" fill="#64748B" text-anchor="middle">24V DC • 1.5A • 120 PSI Working</text>
    <text x="237" y="270" font-size="7" font-weight="700" fill="#10B981" text-anchor="middle">HEAVY-DUTY DIAPHRAGM</text>
  </g>
</svg>`,

  'parts/ro-smps-adapter.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="smpsBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <filter id="smpsShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E2E8F0" opacity="0.4"/>

  <g filter="url(#smpsShadow)">
    <!-- AC Input Cable (Left) -->
    <path d="M 60 250 L 130 250" stroke="#1E293B" stroke-width="10" stroke-linecap="round"/>
    <rect x="40" y="235" width="25" height="30" rx="4" fill="#0F172A"/>
    <rect x="25" y="240" width="15" height="6" fill="#94A3B8"/>
    <rect x="25" y="254" width="15" height="6" fill="#94A3B8"/>

    <!-- DC Output Cable (Right) -->
    <path d="M 370 250 L 440 250" stroke="#1E293B" stroke-width="8" stroke-linecap="round"/>
    <rect x="435" y="242" width="25" height="16" rx="4" fill="#0F172A"/>

    <!-- Main SMPS Housing Unit -->
    <rect x="130" y="140" width="240" height="220" rx="18" fill="url(#smpsBody)" stroke="#475569" stroke-width="2"/>

    <!-- Heat Dissipation Louver Slots -->
    <g stroke="#0F172A" stroke-width="3" stroke-linecap="round">
      <line x1="150" y1="165" x2="350" y2="165"/>
      <line x1="150" y1="175" x2="350" y2="175"/>
      <line x1="150" y1="185" x2="350" y2="185"/>

      <line x1="150" y1="315" x2="350" y2="315"/>
      <line x1="150" y1="325" x2="350" y2="325"/>
      <line x1="150" y1="335" x2="350" y2="335"/>
    </g>

    <!-- Power Status LED Indicator -->
    <circle cx="160" cy="215" r="5" fill="#10B981"/>
    <text x="172" y="218" font-size="9" font-weight="700" fill="#10B981">POWER ON</text>

    <!-- Technical Rating Label Plate -->
    <rect x="150" y="235" width="200" height="65" rx="6" fill="#FFFFFF" opacity="0.95"/>
    <text x="250" y="255" font-family="'Sora', sans-serif" font-size="12" font-weight="900" fill="#0F172A" text-anchor="middle">RO SMPS POWER ADAPTER</text>
    <text x="250" y="272" font-size="10" font-weight="800" fill="#0284C7" text-anchor="middle">OUTPUT: 24V DC === 2.5A</text>
    <text x="250" y="287" font-size="8" fill="#64748B" text-anchor="middle">Input: 140V-280V AC 50Hz | Over-Voltage Protected</text>
  </g>
</svg>`,

  'parts/spun-sediment-filters.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="spunWhite" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <filter id="spunShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#0284C7" flood-opacity="0.15"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="185" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#spunShadow)">
    <!-- Candle 1 (Left) -->
    <g transform="translate(100, 90)">
      <rect x="0" y="0" width="70" height="310" rx="14" fill="url(#spunWhite)" stroke="#CBD5E1" stroke-width="2"/>
      <!-- Grooved Texture -->
      <g stroke="#E2E8F0" stroke-width="1.5">
        <line x1="5" y1="40" x2="65" y2="40"/><line x1="5" y1="80" x2="65" y2="80"/>
        <line x1="5" y1="120" x2="65" y2="120"/><line x1="5" y1="160" x2="65" y2="160"/>
        <line x1="5" y1="200" x2="65" y2="200"/><line x1="5" y1="240" x2="65" y2="240"/>
        <line x1="5" y1="280" x2="65" y2="280"/>
      </g>
      <rect x="15" y="-6" width="40" height="12" rx="4" fill="#0284C7"/>
      <rect x="15" y="304" width="40" height="12" rx="4" fill="#0284C7"/>
    </g>

    <!-- Candle 2 (Center - Prominent) -->
    <g transform="translate(215, 75)">
      <rect x="0" y="0" width="75" height="330" rx="16" fill="url(#spunWhite)" stroke="#94A3B8" stroke-width="2.5"/>
      <g stroke="#CBD5E1" stroke-width="2">
        <line x1="6" y1="45" x2="69" y2="45"/><line x1="6" y1="90" x2="69" y2="90"/>
        <line x1="6" y1="135" x2="69" y2="135"/><line x1="6" y1="180" x2="69" y2="180"/>
        <line x1="6" y1="225" x2="69" y2="225"/><line x1="6" y1="270" x2="69" y2="270"/>
        <line x1="6" y1="305" x2="69" y2="305"/>
      </g>
      <rect x="17" y="-7" width="41" height="14" rx="4" fill="#0284C7"/>
      <rect x="17" y="323" width="41" height="14" rx="4" fill="#0284C7"/>
      
      <!-- Label on Center Candle -->
      <rect x="5" y="145" width="65" height="40" rx="4" fill="#0284C7"/>
      <text x="37" y="162" font-size="8" font-weight="800" fill="#FFFFFF" text-anchor="middle">5 MICRON</text>
      <text x="37" y="176" font-size="7" font-weight="600" fill="#E0F2FE" text-anchor="middle">SPUN PP</text>
    </g>

    <!-- Candle 3 (Right) -->
    <g transform="translate(330, 90)">
      <rect x="0" y="0" width="70" height="310" rx="14" fill="url(#spunWhite)" stroke="#CBD5E1" stroke-width="2"/>
      <g stroke="#E2E8F0" stroke-width="1.5">
        <line x1="5" y1="40" x2="65" y2="40"/><line x1="5" y1="80" x2="65" y2="80"/>
        <line x1="5" y1="120" x2="65" y2="120"/><line x1="5" y1="160" x2="65" y2="160"/>
        <line x1="5" y1="200" x2="65" y2="200"/><line x1="5" y1="240" x2="65" y2="240"/>
        <line x1="5" y1="280" x2="65" y2="280"/>
      </g>
      <rect x="15" y="-6" width="40" height="12" rx="4" fill="#0284C7"/>
      <rect x="15" y="304" width="40" height="12" rx="4" fill="#0284C7"/>
    </g>
  </g>

  <!-- Pack Banner -->
  <rect x="140" y="430" width="220" height="32" rx="8" fill="#0284C7"/>
  <text x="250" y="451" font-family="'Sora', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">PACK OF 3 • 10-INCH STANDARD</text>
</svg>`,

  'parts/carbon-inline-filter.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="carbonBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="capBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
    <filter id="carbonShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#carbonShadow)">
    <!-- 1/4" Quick-Connect Push-Fit Ports -->
    <!-- Left Port -->
    <rect x="50" y="238" width="45" height="24" rx="4" fill="#64748B"/>
    <circle cx="60" cy="250" r="4" fill="#0284C7"/>

    <!-- Right Port -->
    <rect x="405" y="238" width="45" height="24" rx="4" fill="#64748B"/>
    <circle cx="440" cy="250" r="4" fill="#0284C7"/>

    <!-- Left &amp; Right End Caps -->
    <rect x="85" y="165" width="25" height="170" rx="8" fill="url(#capBlue)"/>
    <rect x="390" y="165" width="25" height="170" rx="8" fill="url(#capBlue)"/>

    <!-- Main Cylindrical Cartridge Body -->
    <rect x="100" y="170" width="300" height="160" rx="10" fill="url(#carbonBody)" stroke="#CBD5E1" stroke-width="2"/>

    <!-- Decorative Carbon Bands -->
    <rect x="120" y="170" width="8" height="160" fill="#0F172A" opacity="0.1"/>
    <rect x="372" y="170" width="8" height="160" fill="#0F172A" opacity="0.1"/>

    <!-- Technical Specification Label -->
    <rect x="145" y="200" width="210" height="100" rx="10" fill="#0F172A"/>
    <text x="250" y="228" font-family="'Sora', sans-serif" font-size="12" font-weight="900" fill="#38BDF8" text-anchor="middle">ACTIVATED CARBON BLOCK</text>
    <text x="250" y="246" font-family="'Inter', sans-serif" font-size="9" font-weight="700" fill="#F1F5F9" text-anchor="middle">PREMIUM COCONUT SHELL MEDIA</text>
    <text x="250" y="265" font-size="8" fill="#94A3B8" text-anchor="middle">High Iodine Adsorption | Chlorine &amp; Odour Removal</text>
    
    <!-- Flow Arrow -->
    <g stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="215" y1="282" x2="275" y2="282"/>
      <polyline points="270,277 277,282 270,287"/>
    </g>
    <text x="285" y="285" font-size="7" font-weight="800" fill="#38BDF8">FLOW</text>
  </g>
</svg>`,

  'parts/solenoid-valve-24v.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="coilGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="60%" stop-color="#0369A1"/>
      <stop offset="100%" stop-color="#075985"/>
    </linearGradient>
    <linearGradient id="valveBody" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="svShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#svShadow)">
    <!-- Electrical Terminal Leads (Top) -->
    <path d="M 235 120 L 235 70 Q 235 50 200 50" fill="none" stroke="#EF4444" stroke-width="4" stroke-linecap="round"/>
    <path d="M 265 120 L 265 70 Q 265 50 300 50" fill="none" stroke="#0F172A" stroke-width="4" stroke-linecap="round"/>

    <!-- Electromagnetic Solenoid Coil Block -->
    <rect x="175" y="115" width="150" height="150" rx="20" fill="url(#coilGrad)" stroke="#0369A1" stroke-width="2"/>
    <circle cx="250" cy="190" r="42" fill="#0F172A" opacity="0.4"/>
    
    <text x="250" y="175" font-family="'Sora', sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">24V DC</text>
    <text x="250" y="195" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#38BDF8" text-anchor="middle">SOLENOID VALVE</text>
    <text x="250" y="215" font-size="8" fill="#BAE6FD" text-anchor="middle">0.02 - 0.8 MPa</text>

    <!-- Lower Mechanical Valve Housing -->
    <rect x="145" y="260" width="210" height="95" rx="14" fill="url(#valveBody)" stroke="#94A3B8" stroke-width="2"/>

    <!-- 1/4" Push-Fit Water Ports (Inlet &amp; Outlet) -->
    <!-- Left Port (Inlet) -->
    <rect x="80" y="290" width="70" height="35" rx="6" fill="#0284C7"/>
    <circle cx="95" cy="307" r="7" fill="#FFFFFF"/>
    <text x="115" y="345" font-size="9" font-weight="800" fill="#0369A1">INLET (1/4")</text>

    <!-- Right Port (Outlet) -->
    <rect x="350" y="290" width="70" height="35" rx="6" fill="#0284C7"/>
    <circle cx="405" cy="307" r="7" fill="#FFFFFF"/>
    <text x="345" y="345" font-size="9" font-weight="800" fill="#0369A1">OUTLET (1/4")</text>

    <!-- Flow Arrow on Lower Valve Body -->
    <path d="M 220 307 L 270 307 M 265 300 L 275 307 L 265 314" stroke="#0F172A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`,

  'parts/uv-lamp-tube-11w.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="uvGlass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E0F2FE" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#A5F3FC" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#38BDF8" stop-opacity="0.9"/>
    </linearGradient>
    <filter id="uvGlowLight" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#06B6D4" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#0F172A" rx="24"/>

  <!-- Glowing UV-C Tube -->
  <g filter="url(#uvGlowLight)">
    <!-- 4-Pin Ceramic Socket Cap (Left) -->
    <rect x="60" y="215" width="55" height="70" rx="8" fill="#F8FAFC" stroke="#94A3B8" stroke-width="2"/>
    <!-- 4 Metal Connector Pins -->
    <rect x="40" y="225" width="22" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="40" y="239" width="22" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="40" y="253" width="22" height="7" rx="2" fill="#E2E8F0"/>
    <rect x="40" y="267" width="22" height="7" rx="2" fill="#E2E8F0"/>

    <!-- Clear Quartz Glass Barrel (Emitting Germicidal UV Light) -->
    <rect x="115" y="222" width="315" height="56" rx="12" fill="url(#uvGlass)" stroke="#38BDF8" stroke-width="2"/>
    
    <!-- Internal Filament &amp; Arc Glow -->
    <line x1="125" y1="250" x2="415" y2="250" stroke="#FFFFFF" stroke-width="3" opacity="0.9"/>
    <circle cx="135" cy="250" r="6" fill="#F59E0B"/>
    <circle cx="410" cy="250" r="6" fill="#F59E0B"/>

    <!-- Right End Sealed Quartz Dome -->
    <path d="M 425 222 Q 445 250 425 278 Z" fill="url(#uvGlass)" stroke="#38BDF8" stroke-width="2"/>
  </g>

  <!-- Technical Information Card -->
  <rect x="110" y="330" width="280" height="90" rx="14" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <text x="250" y="360" font-family="'Sora', sans-serif" font-size="14" font-weight="900" fill="#38BDF8" text-anchor="middle">11-WATT GERMICIDAL UV LAMP</text>
  <text x="250" y="380" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#F1F5F9" text-anchor="middle">QUARTZ GLASS TUBE • 254 NM UV-C</text>
  <text x="250" y="400" font-size="9" fill="#94A3B8" text-anchor="middle">4-Pin Single Ended | Destroys 99.9% Pathogens</text>
</svg>`,

  'parts/ro-pipe-fittings-kit.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <filter id="pipeShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.15"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="185" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#pipeShadow)">
    <!-- Coiled Roll of 1/4" LLDPE Food-Grade White Tubing -->
    <circle cx="250" cy="235" r="140" fill="none" stroke="#FFFFFF" stroke-width="24"/>
    <circle cx="250" cy="235" r="140" fill="none" stroke="#CBD5E1" stroke-width="24" stroke-dasharray="16,8"/>
    
    <circle cx="250" cy="235" r="110" fill="none" stroke="#FFFFFF" stroke-width="22"/>
    <circle cx="250" cy="235" r="110" fill="none" stroke="#0284C7" stroke-width="4" stroke-dasharray="12,6"/>

    <circle cx="250" cy="235" r="80" fill="none" stroke="#FFFFFF" stroke-width="20"/>
    <circle cx="250" cy="235" r="80" fill="none" stroke="#CBD5E1" stroke-width="20" stroke-dasharray="14,6"/>

    <!-- Central Fittings Arrangement -->
    <!-- Quick Connect Elbow Fitting 1 -->
    <path d="M 230 195 L 230 230 L 265 230" fill="none" stroke="#0284C7" stroke-width="14" stroke-linecap="round"/>
    <circle cx="230" cy="195" r="9" fill="#0369A1"/>
    <circle cx="265" cy="230" r="9" fill="#0369A1"/>

    <!-- Quick Connect Tee Fitting 2 -->
    <path d="M 220 270 L 280 270 M 250 270 L 250 295" fill="none" stroke="#0284C7" stroke-width="12" stroke-linecap="round"/>
    
    <!-- Teflon Tape Spool -->
    <circle cx="130" cy="360" r="30" fill="#0284C7"/>
    <circle cx="130" cy="360" r="18" fill="#FFFFFF"/>
    <circle cx="130" cy="360" r="10" fill="#E2E8F0"/>
    <text x="130" y="405" font-size="8" font-weight="800" fill="#0369A1" text-anchor="middle">TEFLON TAPE</text>

    <!-- Brass Diverter Valve -->
    <rect x="330" y="340" width="45" height="30" rx="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
    <rect x="345" y="325" width="15" height="18" rx="3" fill="#0284C7"/>
    <text x="352" y="405" font-size="8" font-weight="800" fill="#B45309" text-anchor="middle">DIVERTER VALVE</text>
  </g>

  <!-- Title Badge -->
  <rect x="120" y="435" width="260" height="32" rx="8" fill="#0284C7"/>
  <text x="250" y="456" font-family="'Sora', sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle">10M PIPE + QUICK-CONNECT KIT</text>
</svg>`,

  'parts/flow-restrictor-fr450.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="frBody" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <filter id="frShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#0284C7" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#frShadow)">
    <!-- 1/4" Tube Connectors (Left &amp; Right) -->
    <rect x="60" y="235" width="50" height="30" rx="5" fill="#38BDF8"/>
    <circle cx="75" cy="250" r="6" fill="#FFFFFF"/>

    <rect x="390" y="235" width="50" height="30" rx="5" fill="#38BDF8"/>
    <circle cx="425" cy="250" r="6" fill="#FFFFFF"/>

    <!-- Main Capsule Body -->
    <rect x="105" y="190" width="290" height="120" rx="28" fill="url(#frBody)" stroke="#94A3B8" stroke-width="3"/>

    <!-- Cyan Accent Rings -->
    <rect x="135" y="190" width="10" height="120" fill="#0284C7"/>
    <rect x="355" y="190" width="10" height="120" fill="#0284C7"/>

    <!-- Technical Model Label -->
    <text x="250" y="235" font-family="'Sora', sans-serif" font-size="18" font-weight="900" fill="#0F172A" text-anchor="middle">FR-450</text>
    <text x="250" y="255" font-family="'Inter', sans-serif" font-size="10" font-weight="700" fill="#0284C7" text-anchor="middle">RO FLOW RESTRICTOR</text>
    <text x="250" y="272" font-size="9" fill="#64748B" text-anchor="middle">450 mL/min • Membrane Backpressure Regulator</text>

    <!-- Directional Flow Indicator Arrow -->
    <g stroke="#0284C7" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="200" y1="290" x2="290" y2="290"/>
      <polyline points="280,283 293,290 280,297"/>
    </g>
  </g>
</svg>`,

  'parts/storage-tank-8l.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <defs>
    <linearGradient id="tankDome" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#E2E8F0"/>
    </linearGradient>
    <linearGradient id="tankBase" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#BAE6FD"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <filter id="tankShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#0284C7" flood-opacity="0.2"/>
    </filter>
  </defs>

  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="185" fill="#E0F2FE" opacity="0.35"/>

  <g filter="url(#tankShadow)">
    <!-- Top Air-Charge Schrader Valve -->
    <rect x="242" y="70" width="16" height="25" rx="4" fill="#64748B"/>
    <circle cx="250" cy="70" r="4" fill="#0F172A"/>

    <!-- Cylindrical Sealed Tank Body -->
    <!-- Upper White Virgin Polymer Dome -->
    <path d="M 130 240 C 130 110, 370 110, 370 240 Z" fill="url(#tankDome)" stroke="#CBD5E1" stroke-width="3"/>

    <!-- Lower Translucent Blue Anti-Microbial Base -->
    <path d="M 130 240 L 370 240 L 355 385 C 355 410, 145 410, 145 385 Z" fill="url(#tankBase)" stroke="#0369A1" stroke-width="3"/>

    <!-- Circumferential Reinforcement Ribs -->
    <line x1="130" y1="240" x2="370" y2="240" stroke="#0369A1" stroke-width="4"/>
    <line x1="135" y1="300" x2="365" y2="300" stroke="#FFFFFF" stroke-width="2" opacity="0.6"/>

    <!-- Capacity &amp; Grade Emblem -->
    <circle cx="250" cy="205" r="36" fill="#FFFFFF" stroke="#0284C7" stroke-width="3"/>
    <text x="250" y="205" font-family="'Sora', sans-serif" font-size="18" font-weight="900" fill="#0369A1" text-anchor="middle">8L</text>
    <text x="250" y="222" font-size="8" font-weight="800" fill="#10B981" text-anchor="middle">FOOD GRADE</text>

    <text x="250" y="340" font-family="'Sora', sans-serif" font-size="14" font-weight="800" fill="#FFFFFF" text-anchor="middle">ANTI-BACTERIAL SEALED TANK</text>
    <text x="250" y="360" font-size="9" font-weight="600" fill="#E0F2FE" text-anchor="middle">High-Pressure Virgin Polypropylene</text>

    <!-- Bottom Tank Ball-Valve Port -->
    <rect x="238" y="405" width="24" height="28" rx="4" fill="#64748B"/>
    <circle cx="250" cy="430" r="5" fill="#38BDF8"/>
  </g>
</svg>`,

  // FALLBACKS
  'fallbacks/purifier-fallback.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.4"/>
  <rect x="135" y="80" width="230" height="340" rx="24" fill="#FFFFFF" stroke="#BAE6FD" stroke-width="3"/>
  <rect x="150" y="95" width="200" height="60" rx="12" fill="#0284C7"/>
  <text x="250" y="130" font-family="'Sora', sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">AJIT AQUA APPLIANCES</text>
  <circle cx="250" cy="250" r="45" fill="#E0F2FE"/>
  <path d="M 250 220 Q 268 250 250 275 Q 232 250 250 220 Z" fill="#0284C7"/>
  <text x="250" y="340" font-family="'Sora', sans-serif" font-size="14" font-weight="800" fill="#0F172A" text-anchor="middle">RO WATER PURIFIER</text>
  <text x="250" y="360" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">Prayagraj Showroom Model</text>
</svg>`,

  'parts/part-fallback.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <rect width="500" height="500" fill="#F8FAFC" rx="24"/>
  <circle cx="250" cy="250" r="180" fill="#E0F2FE" opacity="0.4"/>
  <circle cx="250" cy="220" r="70" fill="#FFFFFF" stroke="#0284C7" stroke-width="4"/>
  <path d="M 250 170 L 250 270 M 200 220 L 300 220" stroke="#0284C7" stroke-width="8" stroke-linecap="round"/>
  <circle cx="250" cy="220" r="25" fill="#0284C7"/>
  <text x="250" y="340" font-family="'Sora', sans-serif" font-size="14" font-weight="800" fill="#0F172A" text-anchor="middle">GENUINE RO SPARE PART</text>
  <text x="250" y="360" font-size="10" font-weight="600" fill="#64748B" text-anchor="middle">Compatible Component</text>
</svg>`
};

for (const [relPath, content] of Object.entries(assets)) {
  const fullPath = path.join(publicDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log('Created asset:', relPath);
}
console.log('All SVG assets generated successfully!');

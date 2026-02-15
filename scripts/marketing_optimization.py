import json
import os

# --- MARKETING STRATEGIE 2026 (ORGANISCH) ---
marketing_plan = {
    "Plattformen": {
        "X (Twitter)": "Täglich 3 'Value-Threads' über DePIN & Airdrops. Jarvis generiert den Content.",
        "Reddit": "Aktive Teilnahme in r/airdrops, r/crypto_moons, r/CryptoCurrency. Beantwortung von Fragen mit Link zu Jarvis Alpha.",
        "Discord": "Präsenz in großen Alpha-Groups (Monad, Berachain).",
        "LinkedIn": "Fokus auf DePIN als 'Future of Infrastructure' für B2B Leads."
    },
    "Content-Säulen": [
        "Case Studies: Wie man mit $0 einen Airdrop farmt.",
        "Tech-Deep-Dives: Warum AI-Token 2026 dominieren.",
        "Passive Income: DePIN Setup-Guides (Grass, Dawn)."
    ],
    "Automatisierung": "Jarvis scannt r/CryptoCurrency/new alle 15 Min nach Keywords: 'How to make money', 'Airdrop help', 'Best crypto 2026'."
}

# --- LEAD GENERATION SCRIPT (KONZEPT) ---
# Das Script sucht nach neuen Leads und speichert sie in einer CSV.

lead_gen_config = {
    "Keywords": ["airdrop", "testnet", "passive income", "free crypto", "monad", "berachain"],
    "Target_Subreddits": ["CryptoCurrency", "airdrops", "crypto_moons", "solana"],
    "Action": "Benachrichtige Nils via Telegram, wenn ein High-Value Post gefunden wird."
}

def save_strategy():
    with open("/root/business/marketing/strategy_optimized.json", "w") as f:
        json.dump(marketing_plan, f, indent=4)
    print("Marketing Strategie gespeichert: /root/business/marketing/strategy_optimized.json")

if __name__ == "__main__":
    os.makedirs("/root/business/marketing", exist_ok=True)
    save_strategy()

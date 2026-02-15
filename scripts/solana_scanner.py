import requests
import json
import time

def get_latest_solana_pairs():
    # DexScreener API for latest pairs
    url = "https://api.dexscreener.com/latest/dex/search?q=solana"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            pairs = data.get('pairs', [])
            # Filter for very new pairs (high potential/risk)
            # Sorting by pairCreatedAt is not directly available in search, but we can look at liquidity/volume
            sorted_pairs = sorted(pairs, key=lambda x: float(x.get('volume', {}).get('h24', 0)), reverse=True)
            return sorted_pairs[:5]
    except Exception as e:
        print(f"Error: {e}")
    return []

if __name__ == "__main__":
    print("--- SOLANA HOT PAIRS SCANNER ---")
    hot_pairs = get_latest_solana_pairs()
    for pair in hot_pairs:
        print(f"Token: {pair['baseToken']['name']} ({pair['baseToken']['symbol']})")
        print(f"Price: ${pair['priceUsd']}")
        print(f"24h Volume: ${pair.get('volume', {}).get('h24', 0)}")
        print(f"Liquidity: ${pair.get('liquidity', {}).get('usd', 0)}")
        print(f"URL: {pair['url']}")
        print("-" * 30)

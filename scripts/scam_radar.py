import json
import os

def check_project(name, url):
    print(f"🔎 Scam-Radar prüft Projekt: {name}...")
    
    # Simulierter Check gegen Scam-Muster
    risks = []
    if "faucet" in url.lower() and not "monad" in url.lower():
        risks.append("Ungewöhnliche Faucet-URL")
    
    # In einer echten Umgebung würden wir hier APIs von De.Fi oder GoPlus nutzen
    score = 100 - (len(risks) * 30)
    
    result = {
        "project": name,
        "url": url,
        "security_score": score,
        "risks": risks,
        "status": "Safe" if score > 70 else "Warning"
    }
    
    return result

def run_radar():
    projects = [
        {"name": "Monad Testnet", "url": "https://monad.xyz"},
        {"name": "Ambient Finance", "url": "https://ambient.finance"},
        {"name": "Unknown Swap X", "url": "https://sketchy-swap.com"}
    ]
    
    results = [check_project(p["name"], p["url"]) for p in projects]
    
    with open('/root/business/marketing/security_audit.json', 'w') as f:
        json.dump(results, f, indent=2)
    
    print("✅ Scam-Radar Audit abgeschlossen. Ergebnisse in security_audit.json")

if __name__ == "__main__":
    run_radar()

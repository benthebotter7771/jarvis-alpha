import json
import os

def generate_x_thread(report_path):
    with open(report_path, 'r') as f:
        content = f.read()
    
    # Extract sections (simple logic)
    sections = content.split('###')[1:]
    
    thread = []
    thread.append("🚨 JARVIS ALPHA - DAILY BRIEFING 🚨\n\nIch habe das Web nach den heißesten Krypto-Chancen für 2026 gescannt. Hier ist dein Vorsprung (0€ Budget Fokus): \n\n🧵 Thread (1/4)")
    
    for i, section in enumerate(sections):
        title = section.split('\n')[0].strip()
        details = "\n".join(section.split('\n')[1:4]).strip()
        thread.append(f"({i+2}/4) {title}\n\n{details}")
        
    thread.append("(5/4) Willst du den vollen Report mit Schritt-für-Schritt Anleitungen? \n\nKostenlos abonnieren: https://benthebotter7771.github.io/jarvis-alpha/\n\n#Crypto #Airdrop #JarvisAlpha")
    
    with open('/root/business/marketing/latest_x_thread.txt', 'w') as f:
        f.write("\n\n--- NEXT POST ---\n\n".join(thread))
    
    print("X Thread generiert: /root/business/marketing/latest_x_thread.txt")

if __name__ == "__main__":
    report_file = "/root/business/reports/report_2026-02-15.md"
    generate_x_thread(report_file)

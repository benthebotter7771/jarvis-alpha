import os
import subprocess

def run_marketing_engine():
    print("🚀 Starte Jarvis Alpha Marketing Engine...")
    
    # 1. Generiere aktuellen Alpha Report (PDF)
    print("Generating PDF Report...")
    subprocess.run(["node", "/root/business/scripts/report_to_pdf.js"])
    
    # 2. Generiere X-Thread
    print("Generating X Thread...")
    subprocess.run(["python3", "/root/business/scripts/generate_x_thread.py"])
    
    # 3. Generiere Pinterest Infografik
    print("Generating Pinterest Infographic...")
    subprocess.run(["python3", "/root/business/scripts/generate_infographic.py"])
    
    # 4. Git Sync (Hochladen auf GitHub Pages)
    print("Syncing to GitHub...")
    subprocess.run(["git", "-C", "/root/business", "add", "."])
    subprocess.run(["git", "-C", "/root/business", "commit", "-m", "Daily Auto-Update: Alpha Assets"])
    subprocess.run(["git", "-C", "/root/business", "push", "origin", "main"])
    
    print("✅ Marketing Engine Durchlauf abgeschlossen.")

if __name__ == "__main__":
    run_marketing_engine()

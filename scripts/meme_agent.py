from PIL import Image, ImageDraw, ImageFont
import os
import random

def create_meme(text_top, text_bottom, type="alpha"):
    width, height = 1000, 1000
    bg_color = (18, 18, 18)
    accent = (59, 130, 246) if type == "alpha" else (16, 185, 129)
    
    img = Image.new('RGB', (width, height), color=bg_color)
    draw = ImageDraw.Draw(img)
    
    # Border
    draw.rectangle([20, 20, 980, 980], outline=accent, width=10)
    
    # Text Layout (Simuliert ohne Font-File für Schnelligkeit)
    # In Produktion würden wir hier .ttf Fonts laden
    draw.text((100, 100), text_top.upper(), fill=(255,255,255))
    draw.text((100, 800), text_bottom.upper(), fill=accent)
    
    # Save
    os.makedirs("/root/business/marketing/assets", exist_ok=True)
    filename = f"/root/business/marketing/assets/meme_{random.randint(1000,9999)}.png"
    img.save(filename)
    print(f"🎨 Meme-Agent hat geliefert: {filename}")

if __name__ == "__main__":
    create_meme("POV: Du farmst Monad seit Tag 1", "WAGMI 🚀", type="alpha")

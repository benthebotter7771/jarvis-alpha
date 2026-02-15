from PIL import Image, ImageDraw, ImageFont
import os

def create_infographic():
    # Image Settings (Pinterest Portrait Size)
    width, height = 1000, 1500
    background_color = (18, 18, 18)  # Dark Mode
    text_color = (255, 255, 255)
    accent_color = (0, 255, 127)  # Spring Green

    img = Image.new('RGB', (width, height), color=background_color)
    draw = ImageDraw.Draw(img)

    # Title
    draw.text((50, 100), "AIRDROP ALPHA 2026", fill=accent_color)
    draw.text((50, 160), "TOP 3 CHANCEN ($0 BUDGET)", fill=text_color)

    # Content Boxes (Simuliert)
    chancen = [
        {"name": "Monad Testnet", "effort": "Medium", "reward": "High"},
        {"name": "Berachain", "effort": "Low", "reward": "Medium"},
        {"name": "Grass (DePIN)", "effort": "Zero", "reward": "Passive"}
    ]

    for i, chance in enumerate(chancen):
        y_offset = 350 + (i * 300)
        draw.rectangle([50, y_offset, 950, y_offset + 250], outline=accent_color, width=3)
        draw.text((80, y_offset + 50), f"{i+1}. {chance['name']}", fill=text_color)
        draw.text((80, y_offset + 120), f"Aufwand: {chance['effort']}", fill=accent_color)
        draw.text((80, y_offset + 170), f"Potenzial: {chance['reward']}", fill=text_color)

    # Footer
    draw.text((50, 1350), "Jarvis Alpha - Dein Krypto Assistant", fill=accent_color)
    draw.text((50, 1400), "Link im Profil: benthebotter7771.github.io/jarvis-alpha/", fill=text_color)

    save_path = "/root/business/marketing/latest_infographic.png"
    img.save(save_path)
    print(f"Infografik erstellt: {save_path}")

if __name__ == "__main__":
    create_infographic()

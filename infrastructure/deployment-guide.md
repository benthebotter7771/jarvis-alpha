# Deployment Guide - PromptProfi

## Domain & Hosting Setup

### 1. Domain Registrierung
**Empfohlene Domains:**
- **Primär:** promptprofi.de (€9,99/Jahr bei INWX)
- **Alternativen:** promptprofi.ai, promptprofi.com, promptprofi.eu

**Registrar Empfehlungen:**
- **INWX** (deutscher Support, gute Preise)
- **Hetzner** (einfache Integration mit Hosting)
- **IONOS** (All-in-One Lösung)

### 2. Hosting Optionen

#### Option A: Vercel (Empfohlen für Next.js)
- **Kosten:** Free Tier (bis 1GB Bandwidth), dann $20/Monat
- **Vorteile:** Automatische Deployments, CDN, SSL inklusive
- **Setup:**
  ```bash
  npm install -g vercel
  vercel login
  vercel --prod
  ```

#### Option B: Hetzner Cloud (unser aktueller Server)
- **Kosten:** €4,51/Monat (CX11)
- **Vorteile:** Volle Kontrolle, günstig
- **Setup:**
  ```bash
  # Build the Next.js app
  npm run build
  
  # Install PM2 for process management
  npm install -g pm2
  
  # Start the production server
  pm2 start npm --name "promptprofi" -- start
  pm2 save
  pm2 startup
  ```

#### Option C: DigitalOcean App Platform
- **Kosten:** $5/Monat
- **Vorteile:** Managed, einfaches Setup

### 3. SSL Zertifikat (HTTPS)
**Let's Encrypt (kostenlos):**
```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d promptprofi.de -d www.promptprofi.de
```

### 4. DNS Konfiguration

**A-Records (für Hetzner Hosting):**
```
promptprofi.de      A      46.224.232.107
www.promptprofi.de  A      46.224.232.107
```

**CNAME (für Vercel):**
```
promptprofi.de      CNAME  cname.vercel-dns.com
www.promptprofi.de  CNAME  cname.vercel-dns.com
```

### 5. Email Setup
**Empfohlene Services:**
- **Postmark** (€10/Monat für 10.000 Emails)
- **SendGrid** (Free Tier: 100 Emails/Tag)
- **Mailgun** (Free Tier: 5.000 Emails/Monat)

**MX Records für Custom Email:**
```
promptprofi.de      MX     10 mx1.forwardemail.net
promptprofi.de      MX     20 mx2.forwardemail.net
```

### 6. Database Setup

**Option A: Supabase (Empfohlen)**
- **Kosten:** Free Tier (500MB Database)
- **Vorteile:** PostgreSQL, Auth, Storage in einem
- **Setup:**
  1. Account auf supabase.com erstellen
  2. Neues Projekt "promptprofi" erstellen
  3. Connection String in .env.local setzen

**Option B: PostgreSQL auf Hetzner**
```bash
# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Create database and user
sudo -u postgres psql
CREATE DATABASE promptprofi;
CREATE USER promptprofi_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE promptprofi TO promptprofi_user;
```

### 7. Environment Variables (.env.local)
```env
# Database
DATABASE_URL="postgresql://promptprofi_user:password@localhost:5432/promptprofi"

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://promptprofi.de"

# Email
EMAIL_SERVER="smtp://username:password@smtp.postmarkapp.com:587"
EMAIL_FROM="noreply@promptprofi.de"

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 8. Deployment Script (für Hetzner)
```bash
#!/bin/bash
# deploy.sh

echo "🚀 Starting deployment..."

# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Build the application
npm run build

# Restart PM2
pm2 restart promptprofi

echo "✅ Deployment complete!"
```

### 9. Monitoring & Backup

**Monitoring:**
- **Uptime Robot** (kostenlos, 5-minütige Checks)
- **PM2 Monitoring:** `pm2 monit`
- **Logs:** `pm2 logs promptprofi`

**Backup Strategy:**
```bash
# Daily database backup
0 2 * * * pg_dump promptprofi > /backup/promptprofi-$(date +\%Y\%m\%d).sql

# Weekly full backup
0 3 * * 0 tar -czf /backup/full-$(date +\%Y\%m\%d).tar.gz /root/business/
```

### 10. Security Checklist
- [ ] Firewall aktiviert (ufw allow 22,80,443)
- [ ] SSH Key Authentication statt Passwort
- [ ] Fail2ban installiert
- [ ] Automatische Security Updates
- [ ] Regular Security Scans (lynis, rkhunter)

### 11. Go-Live Checklist
- [ ] Domain registriert und konfiguriert
- [ ] SSL Zertifikat installiert
- [ ] Database migriert und getestet
- [ ] Payment Integration (Stripe) getestet
- [ ] Email-System getestet
- [ ] Analytics eingerichtet
- [ ] Backup System konfiguriert
- [ ] Monitoring eingerichtet
- [ ] Legal Pages (Impressum, Datenschutz)
- [ ] Content Review abgeschlossen

### 12. Kostenübersicht (Monatlich)
| Service | Kosten | Anbieter |
|---------|--------|----------|
| Domain | €0,83 | INWX |
| Hosting | €4,51 | Hetzner |
| Database | €0,00 | Supabase Free |
| Email | €10,00 | Postmark |
| Stripe | 1,4% + €0,25 | Stripe |
| **Total** | **~€15,34** | |

### 13. Next Steps
1. Domain promptprofi.de registrieren
2. Vercel Account erstellen und verbinden
3. Supabase Projekt einrichten
4. Stripe Account für Produktion konfigurieren
5. Legal Pages erstellen
6. Go-Live Test durchführen

**Support Kontakte:**
- **Hetzner Support:** support@hetzner.com
- **Vercel Support:** https://vercel.com/support
- **Stripe Support:** https://support.stripe.com
- **Domain Support:** support@inwx.de
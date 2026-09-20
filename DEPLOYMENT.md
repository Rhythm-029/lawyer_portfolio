# Production Deployment & Email Guide: Atty. Abraham Espejo Portfolio Website

This document provides step-by-step instructions for deploying the portfolio website, setting up the **Resend transactional email service**, and connecting your **GoDaddy** domain (`espejo-partners.online`).

---

## 1. Contact Form Architecture & Flow

```
VISITOR (Contact Form)
   │
   ▼ POST /api/contact (JSON)
Backend API (Express / Vercel Serverless Function)
   │ (Validates, Rate-Limits & Sanitizes Payload)
   ▼
Resend Email Service (RESEND_API_KEY)
   │
   ▼ Transmits Email
abe@espejo-partners.online (Recipient)
```

- **Recipient**: Hardcoded to `abe@espejo-partners.online` on server.
- **Reply-To**: Automatically set to the visitor's submitted email address (`replyTo: {visitor email}`). Clicking "Reply" in your inbox replies directly to the client.
- **Security**: Server-side rate limiting (5 requests/15 mins per IP), hidden honeypot bot trap, body payload size capped at 10kb.

---

## 2. Setting Up Resend Email Service

1. Create a free account at [Resend.com](https://resend.com).
2. Go to **API Keys** ➔ **Create API Key** (Name: `Abraham Espejo Website`).
3. Copy your API Key (starts with `re_...`).

### Setting Up Environment Variables on Vercel
In your Vercel Project Settings ➔ **Environment Variables**, add:

| Key | Value | Description |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | `re_12345...` | Your secret Resend API Key |
| `SENDER_EMAIL` | `inquiries@espejo-partners.online` | (Or `onboarding@resend.dev` before domain verification) |
| `VITE_API_URL` | `/api/contact` | Frontend API endpoint path |

---

## 3. GoDaddy Domain & Resend DNS Verification

To send emails directly from `inquiries@espejo-partners.online` without spam flags, verify `espejo-partners.online` in Resend and add the records to GoDaddy.

### Step 1: Add Domain in Resend
1. Log into [Resend.com](https://resend.com) ➔ **Domains** ➔ **Add Domain**.
2. Enter `espejo-partners.online` and region (e.g. US East).
3. Resend will generate **3 DNS Records** (DKIM, SPF TXT, Return-Path CNAME).

### Step 2: Add DNS Records in GoDaddy DNS Management
Log into [GoDaddy DNS Management](https://dns.godaddy.com/), select `espejo-partners.online`, and add the records provided by Resend:

#### 1. DKIM (DomainKeys Identified Mail)
- **Type**: `TXT` or `CNAME` (as provided by Resend)
- **Name**: `resend._domainkey` (or as provided)
- **Value**: `p=...` (Copy exact string from Resend)

#### 2. SPF / Domain Verification TXT Record
- **Type**: `TXT`
- **Name**: `@` or `send`
- **Value**: `v=spf1 include:amazonses.com ~all` (Copy exact string from Resend)

#### 3. Website Hosting A & CNAME Records (Vercel)
- **A Record**: Name `@` ➔ Value `76.76.21.21`
- **CNAME Record**: Name `www` ➔ Value `cname.vercel-dns.com`

4. In Resend, click **Verify Domain**. Once verified (5–10 mins), update `SENDER_EMAIL` on Vercel to `inquiries@espejo-partners.online`.

---

## 4. Frontend & Backend Local Testing

- **Run Dev Server**:
  ```bash
  npm run dev
  ```
- **Run Backend Node Server**:
  ```bash
  node server/index.js
  ```
- **Execute Contact API Test Suite**:
  ```bash
  node scratch/test_contact_api.js
  ```
- **Production Build**:
  ```bash
  npm run build
  ```

---

## 5. Verification Checklist

- [x] Recipient fixed on server (`abe@espejo-partners.online`).
- [x] `Reply-To` header set to visitor email.
- [x] Resend API integration implemented in `server/index.js` & `api/contact.ts`.
- [x] Anti-spam honeypot field integrated.
- [x] Rate limiter (5 req/15 mins per IP) active.
- [x] Input validation (name >= 2 chars, valid email regex, message 5-5000 chars).
- [x] Inline success banner ("Thank you. Your inquiry has been sent successfully.") & form reset.
- [x] Inline error banner ("Something went wrong. Please try again.") without browser alerts.
- [x] Mobile vertical stack layout.
- [x] `.env.example` updated with `RESEND_API_KEY`.
- [x] `npm run build` compiled cleanly.

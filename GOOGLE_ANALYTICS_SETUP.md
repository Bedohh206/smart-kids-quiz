# Google Analytics 4 Setup Instructions

## Step 1: Create a GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Admin" (gear icon in bottom left)
3. In the Property column, click "Create Property"
4. Enter your property details:
   - Property name: "Smart Kids Quiz"
   - Reporting time zone: Your timezone
   - Currency: Your currency
5. Click "Next"
6. Fill in business details and click "Create"
7. Accept the Terms of Service

## Step 2: Set Up a Data Stream

1. After creating the property, you'll be prompted to set up a data stream
2. Choose "Web" as the platform
3. Enter your website URL: `https://smart-kids-quiz.vercel.app`
4. Enter Stream name: "Smart Kids Quiz Web"
5. Click "Create stream"

## Step 3: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (looks like `G-XXXXXXXXXX`)
2. Copy this ID

## Step 4: Add Your Measurement ID to the App

Replace `G-XXXXXXXXXX` in **TWO** locations:

### File 1: `index.html` (lines 7 and 12)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ID-HERE');
</script>
```

### File 2: `src/utils/analytics.js` (line 18)
```javascript
window.gtag('config', 'G-YOUR-ID-HERE', {
```

## Step 5: Build and Deploy

```bash
npm run build
vercel --prod
```

## Step 6: Verify It's Working

1. Go back to Google Analytics
2. Click on "Reports" in the left sidebar
3. Click "Realtime" to see live traffic
4. Open your website in a new tab
5. You should see your visit appear in the Realtime report within a few seconds

## Events Being Tracked

The app automatically tracks the following events:

- **Page Views**: All page navigation
- **quiz_started**: When a user starts a quiz
- **quiz_completed**: When a quiz is finished (includes score and percentage)
- **continent_selected**: When a continent is clicked
- **mini_game_played**: When a mini-game is played
- **ai_lesson_requested**: When AI lesson is requested
- **achievement_unlocked**: When an achievement is earned
- **language_changed**: When user changes language
- **leaderboard_viewed**: When leaderboard is opened
- **pwa_installed**: When app is installed as PWA

## Optional: Enhanced E-commerce Tracking

To enable enhanced tracking in GA4:

1. Go to Admin > Data Streams > Your Web Stream
2. Click "Enhanced measurement"
3. Toggle on the events you want to track automatically:
   - Scrolls
   - Outbound clicks
   - Site search
   - Video engagement
   - File downloads

## Privacy Considerations

Make sure to:
1. Add a Privacy Policy to your website
2. Comply with GDPR/CCPA if applicable
3. Consider adding a cookie consent banner for EU visitors

## Need Help?

- [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- [GA4 Setup Assistant](https://support.google.com/analytics/answer/9744165)

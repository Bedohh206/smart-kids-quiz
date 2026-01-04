import React, { useEffect, useState } from 'react';
import './InstallPrompt.css';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install prompt
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Store that user dismissed it (optional - you can add to localStorage)
    localStorage.setItem('installPromptDismissed', 'true');
  };

  if (!showPrompt) {
    return null;
  }

  return (
    <div className="install-prompt">
      <div className="install-prompt-content">
        <button className="install-prompt-close" onClick={handleDismiss}>
          ✕
        </button>
        <div className="install-prompt-icon">📱</div>
        <h3>Install Smart Kids Quiz</h3>
        <p>Install this app on your device for a better experience and offline access!</p>
        <div className="install-prompt-buttons">
          <button className="install-btn" onClick={handleInstallClick}>
            Install App
          </button>
          <button className="dismiss-btn" onClick={handleDismiss}>
            Not Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;

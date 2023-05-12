const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event; // stores event
    butInstall.classList.toggle('hidden', false); // shows button
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) { 
     return;
    }
    promptEvent.prompt(); // triggers prompt to show up
    window.deferredPrompt = null; // clears prompt property
    butInstall.classList.toggle('hidden', true); // hides button once prompt is triggered
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null; // clears prompt
});

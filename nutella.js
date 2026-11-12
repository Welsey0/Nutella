/**
 * Nutella Flyby
 * Quick script to make the Artemis Nutella Jar show up on any web page cause funny :)
 * The video was taken from the AP News youtube channel, then run through Meta's SAM 3 to create an  
 * alpha mask. The final edit and video was made by combining the original with the mask in ffmpeg.
 */
(function () {
  // grab the video from github
  const VIDEO_URL = 'https://github.com/Welsey0/Nutella/raw/refs/heads/master/nutella.webm';

  // only allows one at a time 
  if (document.getElementById('nutella-flyby-overlay')) return;

  const video = document.createElement('video');
  video.id = 'nutella-flyby-overlay';
  video.src = VIDEO_URL;
  video.muted = true;
  video.playsInline = true;
  video.crossOrigin = 'anonymous';

  Object.assign(video.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    pointerEvents: 'none',
    zIndex: '2147483647',
    opacity: '1',
    transition: 'opacity 0.6s ease-out',
    background: 'transparent'
  });

  document.body.appendChild(video);

  video.play().catch((err) => {
    console.error('nf: video playback failed.', err);
    video.remove();
  });

  video.addEventListener('ended', () => {
    video.style.opacity = '0';
    setTimeout(() => {
      video.remove();
    }, 650);
  });
})();

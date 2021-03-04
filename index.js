exports.consent = (callback) => {
  if (typeof document !== 'undefined') {
    document.addEventListener('consentchange', () => {
      callback();
    });
  }
};

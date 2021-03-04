exports.consent = (callback) => {
  document.addEventListener('consentchange', () => {
    callback();
  });
};

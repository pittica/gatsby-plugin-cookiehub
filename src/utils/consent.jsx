export default function consent(callback) {
  if (typeof document !== "undefined") {
    document.addEventListener("consentchange", () => {
      callback()
    })
  }
}

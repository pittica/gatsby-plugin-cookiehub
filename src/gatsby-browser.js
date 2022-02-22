import consent from "./utils/consent"

export function wrapPageElement({ element, props: { navigate, location } }) {
  consent(() => navigate(location.pathname))
  return element
}

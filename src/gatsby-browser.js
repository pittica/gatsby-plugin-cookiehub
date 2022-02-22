import consent from "./utils/consent"

export { wrapPageElement } from "./gatsby-browser"

export function wrapPageElement({ element, props: { navigate, location } }) {
  consent(() => navigate(location.pathname))
  return element
}

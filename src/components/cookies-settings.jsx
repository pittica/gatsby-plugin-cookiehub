import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

export default function CookiesSettings({ label }) {
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (clicked) {
      if (typeof window.cookiehub !== "undefined") {
        window.cookiehub.openSettings()
      }

      setClicked(false)
    }
  })

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        setClicked(true)

        return false
      }}
      title={label}
    >
      {label}
    </a>
  )
}

CookiesSettings.propTypes = {
  label: PropTypes.string,
}

CookiesSettings.defaultProps = {
  label: "Cookies Settings",
}

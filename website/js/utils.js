/* eslint no-restricted-globals: 0 */

export const cc = (constant, conditionalClasses = constant) => {
  const res = Object.keys(conditionalClasses).reduce(
    (acc, className) =>
      acc + (conditionalClasses[className] ? ` ${className}` : ""),
    ""
  )
  return typeof constant === "object" ? res : constant + res
}

export const scrollToTop = (() => {
  let isScrolling = false
  let isScrollingTimeout
  addEventListener(
    "wheel",
    () => {
      isScrolling = true
      clearTimeout(isScrollingTimeout)
      isScrollingTimeout = setTimeout(() => {
        isScrolling = false
      }, 100)
    },
    { passive: true }
  )

  return () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (!isScrolling && c > 0) {
      requestAnimationFrame(scrollToTop)
      scrollTo(0, c - c / 8)
    }
  }
})()

export const nextValInObj = (obj, key) => {
  const keys = Object.keys(obj)
  const i = Object.values(obj).indexOf(key)
  return typeof (i !== -1 && keys[i + 1] && obj[keys[i + 1]]) === "undefined"
    ? Object.values(obj)[0]
    : i !== -1 && keys[i + 1] && obj[keys[i + 1]]
}

export const EXPERTISE_STRINGS = [ "junior", "intermediate", "senior" ]

export const TAG_NAMES = {
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  node: "Node",
  all: "all"
}

export const SORTBY_STRINGS = {
  expertise: "by expertise",
  alpha: "alphabetically",
  nonalpha: "unalphabetically"
}

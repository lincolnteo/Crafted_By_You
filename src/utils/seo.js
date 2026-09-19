const SITE_URL = 'https://craftedbyyou.my'

function setMetaAttribute(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

export function setPageSeo({ title, description, path, noindex = false }) {
  document.title = title
  setMetaAttribute('name', 'description', description)
  setMetaAttribute('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large')

  let canonical = document.head.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = `${SITE_URL}${path}`

  setMetaAttribute('property', 'og:title', title)
  setMetaAttribute('property', 'og:description', description)
  setMetaAttribute('property', 'og:url', `${SITE_URL}${path}`)
  setMetaAttribute('name', 'twitter:title', title)
  setMetaAttribute('name', 'twitter:description', description)
}

export const JOTFORM_FORM_URL = 'https://form.jotform.com/260182283680053'

let warmedUp = false

const addHeadLink = (rel, href, asValue) => {
	if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) return

	const link = document.createElement('link')
	link.rel = rel
	link.href = href

	if (asValue) {
		link.as = asValue
		link.crossOrigin = 'anonymous'
	}

	document.head.appendChild(link)
}

export const prewarmJotform = () => {
	if (warmedUp) return
	warmedUp = true

	addHeadLink('dns-prefetch', 'https://form.jotform.com')
	addHeadLink('preconnect', 'https://form.jotform.com')
	addHeadLink('prefetch', JOTFORM_FORM_URL)
}
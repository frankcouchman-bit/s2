import { useEffect } from 'react'

export default function HeadTags({ title, description, keywords = [], canonical, jsonLd = [] }) {
  useEffect(() => {
    if (title) document.title = title

    // normalize keywords to array or empty
    const kw = Array.isArray(keywords)
      ? keywords
      : typeof keywords === 'string'
        ? keywords.split(',').map(s => s.trim()).filter(Boolean)
        : []

    const ensure = (name, content) => {
      if (!content) return
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const ensureProp = (property, content) => {
      if (!content) return
      let el = document.querySelector(`meta[property="${property}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('property', property)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensure('description', description)
    if (kw.length) ensure('keywords', kw.join(', '))

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical || window.location.href)

    ensureProp('og:title', title || '')
    ensureProp('og:description', description || '')
    ensureProp('og:type', 'website')
    ensureProp('og:url', canonical || window.location.href)

    let twitter = document.querySelector('meta[name="twitter:card"]')
    if (!twitter) {
      twitter = document.createElement('meta')
      twitter.setAttribute('name', 'twitter:card')
      document.head.appendChild(twitter)
    }
    twitter.setAttribute('content', 'summary_large_image')

    // JSON-LD scripts
    document.querySelectorAll('script[data-ht]').forEach(s => s.remove())
    jsonLd.forEach((obj, i) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.ht = String(i)
      s.text = JSON.stringify(obj)
      document.head.appendChild(s)
    })
  }, [title, description, canonical, JSON.stringify(keywords), JSON.stringify(jsonLd)])

  return null
}

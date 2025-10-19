import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function WritingTool() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SEOScribe Writing Tool',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      areaServed: region.name,
      offers: { '@type': 'Offer', price: '24.00', priceCurrency: 'USD' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
        { '@type': 'ListItem', position: 2, name: 'Writing Tool', item: `${window.location.origin}/writing-tool` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What does the writing tool include?',
          acceptedAnswer: { '@type': 'Answer', text: 'Research, outline, draft, SEO scoring, images, FAQs, meta tags and social posts.' } },
        { '@type': 'Question', name: 'How is it optimized for the US?',
          acceptedAnswer: { '@type': 'Answer', text: 'We localize SERP research, match entities and questions US users expect, and format for rich results.' } }
      ]
    }
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="Writing Tool — Research, Draft, Optimize | SEOScribe"
        description="Writing tool with built-in research and SEO optimization. Draft rank-ready articles with FAQs, images, citations and meta tags."
        keywords="writing tool, ai writing tool, seo writing tool, content tool, ai writer, article writer"
        canonical={window.location.origin + '/writing-tool'}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />

      {/* HERO */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start md:items-center justify-between gap-4">
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Writing Tool for {region.name}: research → draft → optimize
            </h1>
            <RegionPicker onChange={setRegion} />
          </div>
          <p className="mt-4 text-slate-600 text-lg">
            Turn any topic into a complete SEO article—outline from SERPs, on-page best practices, hero image, FAQs, citations, and metadata.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-violet-600 text-white shadow hover:bg-violet-500">
              Try Demo <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a href="/pricing" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-900">
              See Pricing
            </a>
          </div>
          <div className="mt-4 flex gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> No credit card required</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4" /> Free forever plan</div>
          </div>
        </div>
      </section>

      {/* SNIPPET BLOCKS */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            ['Best use cases (list)',
             'Blog posts • Product education • Documentation • Case studies • Thought leadership • Landing pages'],
            ['On-page signals included',
             'Optimized headings • Entities • FAQs • Internal links • Alt text • Meta title/description • Schema'],
            ['Why it converts',
             'Clear CTAs, benefits-first copy, and social snippets help turn readers into users.']
          ].map(([h, p], i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">{h}</h2>
              <p className="mt-2 text-slate-600 text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleGeneratorDemo />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Writing Tool FAQs</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold">Does it include readability and plagiarism checks?</h3>
              <p>Yes—use the Readability and Plagiarism tools inside <a href="/seo-tools" className="underline text-violet-700">SEO Tools</a> (members-only).</p>
            </div>
            <div>
              <h3 className="font-semibold">Can I target US states or cities?</h3>
              <p>Yes, tailor content by region using the picker and prompts (e.g., “for California startups”).</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Explore more: <a className="underline text-violet-700" href="/ai-writer">AI Writer</a> · <a className="underline text-violet-700" href="/article-writer">Article Writer</a> · <a className="underline text-violet-700" href="/pricing">Pricing</a>
          </p>
        </div>
      </section>
    </div>
  )
}

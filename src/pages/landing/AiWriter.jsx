import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar'
import BackgroundFX from '../../components/effects/BackgroundFX'
import HeadTags from '../../components/seo/HeadTags'
import RegionPicker from '../../components/seo/RegionPicker'
import ArticleGeneratorDemo from '../../components/home/ArticleGeneratorDemo.jsx'
import { ArrowRight, Check } from 'lucide-react'

export default function AiWriter() {
  const [region, setRegion] = useState({ code: 'US', name: 'United States' })

  const json = useMemo(() => ([
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'SEOScribe AI Writer',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      areaServed: region.name,
      offers: { '@type': 'Offer', price: '24.00', priceCurrency: 'USD' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: 5000 }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${window.location.origin}/` },
        { '@type': 'ListItem', position: 2, name: 'AI Writer', item: `${window.location.origin}/ai-writer` }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is an AI writer?',
          acceptedAnswer: { '@type': 'Answer', text: 'An AI writer generates and optimizes content using models like GPT, Claude, and Gemini with SERP research to match search intent.' } },
        { '@type': 'Question', name: 'Can I try it free?',
          acceptedAnswer: { '@type': 'Answer', text: 'Yes. Generate a free demo and expand twice after sign-in on the Free plan.' } },
        { '@type': 'Question', name: 'Will content rank on Google?',
          acceptedAnswer: { '@type': 'Answer', text: 'SEOScribe builds outlines from live SERPs, inserts entities/FAQs, and outputs metadata—giving you on-page best practices to rank.' } }
      ]
    }
  ]), [region])

  return (
    <div className="min-h-screen bg-white">
      <HeadTags
        title="AI Writer — Rank-Ready Articles in 60s | SEOScribe"
        description="AI writer with real-time SERP research. Create SEO-optimized articles with images, FAQs, citations, and meta tags in under a minute."
        keywords="ai writer, ai article writer, seo ai writer, content generator, writing tool, ai content, article generator"
        canonical={window.location.origin + '/ai-writer'}
        jsonLd={json}
      />
      <BackgroundFX />
      <Navbar />

      {/* HERO */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h1 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              AI Writer for {region.name}: publish rank-ready content in 60s
            </h1>
            <RegionPicker onChange={setRegion} />
          </div>
          <p className="mt-4 text-slate-600 text-lg">
            Generate long-form, SEO-optimized articles with citations, hero image, FAQs and meta tags.
            Powered by GPT, Claude, and Gemini with real-time SERP research.
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

      {/* SNIPPET-ORIENTED ANSWERS */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            ['What does an AI writer do? (40–60 words)',
             'It analyzes top-ranking pages, extracts entities/FAQs, and drafts structured sections that match search intent. SEOScribe then adds metadata, hero image, and internal-link suggestions for a publish-ready article.'],
            ['Who should use an AI writer?',
             'Founders, content teams, agencies, and solo creators who need fast, consistent, SEO-aligned long-form content for blogs, docs, and product education.'],
            ['Why this AI writer ranks better?',
             'Real-time SERP research (US-geo by default), entity coverage, FAQ blocks, schema, and optimized headings give your content the on-page signals search engines reward.']
          ].map(([h, p], i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-900">{h}</h2>
              <p className="mt-2 text-slate-600 text-sm">{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">How SEOScribe AI Writer works</h2>
          <ol className="mt-4 list-decimal pl-6 text-slate-700 space-y-2">
            <li>Enter a topic — choose your region to localize research.</li>
            <li>We analyze live SERPs: headings, entities, FAQs, and content gaps.</li>
            <li>Draft in 60s with hero image, citations, meta, and internal-link prompts.</li>
            <li>Expand sections, add FAQs, and export to your CMS.</li>
          </ol>
          <p className="mt-3 text-sm text-slate-600">
            Internal links: <a className="text-violet-700 underline" href="/article-writer">Article Writer</a> · <a className="text-violet-700 underline" href="/writing-tool">Writing Tool</a> · <a className="text-violet-700 underline" href="/seo-tools">SEO Tools</a>
          </p>
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
          <h2 className="text-2xl font-extrabold text-slate-900">AI Writer FAQs</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold">Does it support the United States?</h3>
              <p>Yes. The default region is the United States; switch regions via the picker to localize research.</p>
            </div>
            <div>
              <h3 className="font-semibold">How big are articles?</h3>
              <p>Initial pass 1,500–2,500 words; expand sections to 5,000–10,000 words as needed.</p>
            </div>
            <div>
              <h3 className="font-semibold">Is plagiarism checked?</h3>
              <p>Use the built-in Plagiarism tool inside <a href="/seo-tools" className="underline text-violet-700">SEO Tools</a> (members-only).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

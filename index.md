---
layout: default
---

<section class="hero" aria-labelledby="hero-heading">
  <div class="hero__content">
    <p class="eyebrow">Lead AI Engineer · Author · Builder</p>
    <h1 id="hero-heading">I build AI systems that make it all the way to production.</h1>
    <p class="hero__lede">I lead AI engineering at Pattern, write about how organizations can become AI-first, and tinker on experiments at the intersection of software, data, and machine learning.</p>
    <div class="hero__proof" aria-label="Selected credentials">
      <span>AI Utah 100</span>
      <span>Co-author</span>
      <span>Patent co-inventor</span>
    </div>
  </div>
  <div class="hero__portrait">
    <img src="{{ '/new_profile_pic.jpg' | relative_url }}" alt="Jeremy Mumford">
    <span class="hero__status"><span aria-hidden="true"></span> Building in Lehi, Utah</span>
  </div>
</section>

<section class="page-section book-spotlight" aria-labelledby="book-heading">
  <img src="{{ '/images/architected_intelligence.png' | relative_url }}" alt="Architected Intelligence book cover" class="book-spotlight__cover">
  <div class="book-spotlight__content">
    <p class="book-spotlight__eyebrow">Now available</p>
    <h2 id="book-heading">Architected Intelligence</h2>
    <p>Co-authored with Jacob Miller — a practical framework for building AI-first organizations and production AI systems. Featured on SuperDataScience and The Joe Reis Show.</p>
    <div class="book-spotlight__actions">
      <a href="https://amzn.to/3PQHjBl" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
      <a href="https://architected-intelligence-book.com/" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book site</a>
    </div>
  </div>
</section>

<section class="page-section" aria-labelledby="research-heading">
  <div class="section-header">
    <h2 id="research-heading">Research</h2>
    <p>Applied machine learning research spanning representation learning, synthetic media, and production AI.</p>
  </div>
  <ul class="research-grid">
    <li class="research-card">
      <a class="research-card__preview" href="{{ '/pdf/SimCLR%20application%20to%20Satellite%20Imagery.pdf' | relative_url }}">
        <img src="{{ '/images/ssl_ml_satellite.png' | relative_url }}" alt="Satellite imagery from the SimCLR capstone">
      </a>
      <div class="research-card__body">
        <span class="card__tag">Capstone</span>
        <h3><a href="{{ '/pdf/SimCLR%20application%20to%20Satellite%20Imagery.pdf' | relative_url }}">Self-supervised Learning on Satellite Imagery</a></h3>
        <p>Applied SimCLR representation learning to satellite imagery and evaluated the learned features on downstream tasks.</p>
        <a href="{{ '/pdf/SimCLR%20application%20to%20Satellite%20Imagery.pdf' | relative_url }}" class="project-link">
          Read capstone <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg>
        </a>
      </div>
    </li>
    <li class="research-card">
      <a class="research-card__preview" href="https://scholarsarchive.byu.edu/studentpub_uht/346/" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/images/deepfakes.jpeg' | relative_url }}" alt="Faces used in deepfake-detection research">
      </a>
      <div class="research-card__body">
        <span class="card__tag">Honors thesis</span>
        <h3><a href="https://scholarsarchive.byu.edu/studentpub_uht/346/" target="_blank" rel="noopener noreferrer">Improving Human Recognition of Deepfakes</a></h3>
        <p>Studied whether targeted training improves people's ability to recognize AI-generated media.</p>
        <a href="https://scholarsarchive.byu.edu/studentpub_uht/346/" class="project-link" target="_blank" rel="noopener noreferrer">
          Read thesis <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg>
        </a>
      </div>
    </li>
    <li class="research-card research-card--patent">
      <a class="research-card__preview" href="https://patents.google.com/patent/US20250238819A1/en" target="_blank" rel="noopener noreferrer">
        <span aria-hidden="true">US<br>2025</span>
      </a>
      <div class="research-card__body">
        <span class="card__tag">Patent application</span>
        <h3><a href="https://patents.google.com/patent/US20250238819A1/en" target="_blank" rel="noopener noreferrer">Systems and Methods for Automated Content Creation</a></h3>
        <p>Co-inventor on Pattern's system for generating and optimizing marketplace content with AI and large-scale data.</p>
        <a href="https://patents.google.com/patent/US20250238819A1/en" class="project-link" target="_blank" rel="noopener noreferrer">
          View patent <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg>
        </a>
      </div>
    </li>
  </ul>
</section>

<section class="page-section" aria-labelledby="projects-heading">
  <div class="section-header">
    <h2 id="projects-heading">Personal Projects</h2>
    <p>Small tools, experiments, and useful things I built because I wanted them to exist.</p>
  </div>
  <ul class="project-grid">
    <li class="project-card project-card--context">
      <div class="project-card__preview" aria-hidden="true"><span>1M</span></div>
      <div class="project-card__body">
        <span class="card__tag">Interactive</span>
        <h3><a href="{{ '/context_windows.html' | relative_url }}">Context Window Visualizer</a></h3>
        <p>Compare LLM context sizes using pages, code files, and other relatable units.</p>
        <div class="project-card__links">
          <a href="{{ '/context_windows.html' | relative_url }}" class="project-link">Live preview <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg></a>
          <a href="https://github.com/17jmumford/17jmumford.github.io" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> Source</a>
        </div>
      </div>
    </li>
    <li class="project-card project-card--chat">
      <div class="project-card__preview" aria-hidden="true"><span>↗</span></div>
      <div class="project-card__body">
        <span class="card__tag">AI</span>
        <h3><a href="{{ '/chatbot' | relative_url }}">Chat with an AI about Jeremy</a></h3>
        <p>An API-backed chatbot that answers questions about my work and background.</p>
        <div class="project-card__links">
          <a href="{{ '/chatbot' | relative_url }}" class="project-link">Live preview <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg></a>
          <a href="https://github.com/17jmumford/17jmumford.github.io" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> Source</a>
        </div>
      </div>
    </li>
    <li class="project-card project-card--quiz">
      <div class="project-card__preview" aria-hidden="true"><span>{ }</span></div>
      <div class="project-card__body">
        <span class="card__tag">Game</span>
        <h3><a href="{{ '/code_language_quiz' | relative_url }}">Name That Coding Language</a></h3>
        <p>A playable code-recognition quiz with progressive hints and scoring.</p>
        <div class="project-card__links">
          <a href="{{ '/code_language_quiz' | relative_url }}" class="project-link">Play <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg></a>
          <a href="https://github.com/17jmumford/17jmumford.github.io" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> Source</a>
        </div>
      </div>
    </li>
    <li class="project-card project-card--music">
      <div class="project-card__preview" aria-hidden="true"><span>♪</span></div>
      <div class="project-card__body">
        <span class="card__tag">Data</span>
        <h3><a href="{{ '/artist_page.html' | relative_url }}">Velour Upcoming Shows</a></h3>
        <p>Concert listings enriched with Spotify imagery and calendar links.</p>
        <div class="project-card__links">
          <a href="{{ '/artist_page.html' | relative_url }}" class="project-link">Live preview <svg class="icon" aria-hidden="true"><use href="#icon-external"></use></svg></a>
          <a href="https://github.com/17jmumford/velour-scraper" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> Source</a>
        </div>
      </div>
    </li>
    <li class="project-card project-card--image">
      <a class="project-card__preview" href="https://github.com/17jmumford/ropewiki-scraper" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/images/canyoneer.png' | relative_url }}" alt="Canyoneer application map">
      </a>
      <div class="project-card__body">
        <span class="card__tag">Data engineering</span>
        <h3><a href="https://github.com/17jmumford/ropewiki-scraper" target="_blank" rel="noopener noreferrer">Canyoneer Data Pipeline</a></h3>
        <p>Structured RopeWiki canyon data for an offline-first SwiftUI mapping app.</p>
        <div class="project-card__links">
          <a href="https://github.com/17jmumford/ropewiki-scraper" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> Scraper</a>
          <a href="https://github.com/bricepollock/canyoneer" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> App</a>
        </div>
      </div>
    </li>
    <li class="project-card project-card--hooks">
      <div class="project-card__preview" aria-hidden="true"><span>⌘</span></div>
      <div class="project-card__body">
        <span class="card__tag">Developer tools</span>
        <h3><a href="https://github.com/17jmumford/ai-coding-hooks" target="_blank" rel="noopener noreferrer">AI Coding Hooks</a></h3>
        <p>Security and code-quality hooks for Cursor, Claude Code, and Codex.</p>
        <div class="project-card__links">
          <a href="https://github.com/17jmumford/ai-coding-hooks" class="project-link" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> View repository</a>
        </div>
      </div>
    </li>
  </ul>
</section>

<section class="page-section" aria-labelledby="recognition-heading">
  <div class="section-header">
    <h2 id="recognition-heading">Recognition &amp; Media</h2>
    <p>Podcasts, talks, awards, and industry coverage. <a href="{{ '/mentions/' | relative_url }}" class="section-link">View full archive →</a></p>
  </div>
  <ul class="recognition-list">
    <li class="recognition-item">
      <span class="recognition-item__meta">Award · Aug 2026</span>
      <h3><a href="https://www.aiutah.org/ai-utah-100/" target="_blank" rel="noopener noreferrer">AI Utah 100 Honoree</a></h3>
      <p>Recognized among Utah's top AI builders and leaders for 2026.</p>
    </li>
    <li class="recognition-item">
      <span class="recognition-item__meta">Podcast · Aug 2026</span>
      <h3><a href="https://www.youtube.com/watch?v=JaeqA_0yh2U" target="_blank" rel="noopener noreferrer">The Joe Reis Show — Building Real AI Systems</a></h3>
      <p>Recorded at Pattern on scalable AI, data curation, and cloud agents.</p>
    </li>
    <li class="recognition-item">
      <span class="recognition-item__meta">Podcast · May 2026</span>
      <h3><a href="https://www.youtube.com/watch?v=SwN81LN59Hc" target="_blank" rel="noopener noreferrer">SuperDataScience #993 — How to Build AI-First Organizations</a></h3>
      <p>AI products, data engineering, workflows vs. agents, and <em>Architected Intelligence</em>.</p>
    </li>
    <li class="recognition-item">
      <span class="recognition-item__meta">Case study · Sep 2025</span>
      <h3><a href="https://www.comet.com/site/customers/pattern-ai-content-analysis/" target="_blank" rel="noopener noreferrer">Pattern's LLM Evaluation with Opik</a></h3>
      <p>How we benchmark and observe models in production for Content Brief.</p>
    </li>
    <li class="recognition-item">
      <span class="recognition-item__meta">Conference · May 2025</span>
      <h3><a href="https://www.comet.com/site/convergence/jeremy-mumford/" target="_blank" rel="noopener noreferrer">Comet Convergence — The Rise of AI Agents</a></h3>
      <p>Panelist on moving AI agents from demos to deployment.</p>
    </li>
  </ul>
</section>

<section class="page-section contact-cta" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Let's Connect</h2>
  <p>Interested in AI engineering, speaking, or collaborating? Reach out.</p>
  <div class="contact-cta__links">
    <a href="https://www.linkedin.com/in/17jmumford/" class="btn btn-primary" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-linkedin"></use></svg> LinkedIn</a>
    <a href="https://github.com/17jmumford" class="btn btn-secondary" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#icon-github"></use></svg> GitHub</a>
    <a href="{{ '/pdf/Jeremy%20Mumford%20Resume%202023%20Oct%20copy.pdf' | relative_url }}" class="btn btn-secondary">Resume</a>
  </div>
</section>

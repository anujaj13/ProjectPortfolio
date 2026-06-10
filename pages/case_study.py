import streamlit as st
from data import PROJECTS, DEVELOPER

# ── Page Config ──────────────────────────────────────────────────────────────
st.set_page_config(
    page_title="Case Study — RPA Portfolio",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ── CSS Styling ───────────────────────────────────────────────────────────────
st.markdown("""
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap');

/* ── Reset & Base ── */
html, body, [class*="css"] {
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.stApp {
    background: #060912;
    color: #E8EAF0;
    overflow-x: hidden;
}

/* Hide Streamlit chrome */
#MainMenu, footer, header { visibility: hidden; }
.block-container { 
    padding: 0 !important; 
    max-width: 100% !important;
}
section[data-testid="stSidebar"] { display: none; }

/* ── Header with Back Button ── */
.case-study-header {
    padding: clamp(20px, 5vw, 60px) clamp(20px, 5vw, 60px);
    border-bottom: 1px solid rgba(99,102,241,0.2);
    background: linear-gradient(135deg, #060912 0%, #0D1528 50%, #060912 100%);
    display: flex;
    align-items: center;
    gap: 16px;
}

.back-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.2);
    color: #818CF8;
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s;
}

.back-btn:hover {
    background: rgba(99,102,241,0.2);
    border-color: rgba(99,102,241,0.4);
}

.header-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(20px, 5vw, 32px);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
}

.header-title span {
    color: #6366F1;
}

/* ── Case Study Container ── */
.case-study-container {
    padding: clamp(30px, 5vw, 60px) clamp(20px, 5vw, 60px);
    max-width: 1200px;
    margin: 0 auto;
}

.case-study-hero {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 24px;
    align-items: start;
    margin-bottom: 48px;
}

@media (max-width: 768px) {
    .case-study-hero {
        grid-template-columns: 1fr;
    }
}

.case-study-icon {
    font-size: 64px;
    line-height: 1;
}

.case-study-intro h1 {
    font-family: 'Syne', sans-serif;
    font-size: clamp(28px, 6vw, 48px);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 12px 0;
    letter-spacing: -1px;
}

.case-study-intro .eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: #6366F1;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
}

.case-study-intro .subtitle {
    font-family: 'Space Mono', monospace;
    font-size: clamp(12px, 3vw, 14px);
    color: #9CA3C8;
    margin: 0;
}

/* ── Stats Grid ── */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 48px;
}

.stat-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(99,102,241,0.2);
    border-radius: 12px;
    padding: clamp(16px, 3vw, 24px);
}

.stat-card-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin-bottom: 8px;
}

.stat-card-value {
    font-family: 'Syne', sans-serif;
    font-size: clamp(18px, 4vw, 24px);
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 4px;
}

.stat-card-desc {
    font-size: 12px;
    color: #9CA3C8;
    line-height: 1.5;
}

/* ── Content Sections ── */
.content-section {
    margin-bottom: 48px;
}

.section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(22px, 5vw, 32px);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 16px 0;
    letter-spacing: -0.5px;
}

.section-title span {
    color: #6366F1;
}

.section-text {
    font-size: clamp(14px, 3vw, 16px);
    color: #C4C9E2;
    line-height: 1.8;
    margin-bottom: 16px;
}

.section-text strong {
    color: #E8EAF0;
    font-weight: 600;
}

/* ── Tech Stack ── */
.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 16px;
}

.tech-item {
    font-family: 'Space Mono', monospace;
    font-size: clamp(11px, 2vw, 13px);
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid rgba(99,102,241,0.3);
    background: rgba(99,102,241,0.08);
    color: #818CF8;
}

.tech-item.platform {
    border-color: rgba(247,183,49,0.3);
    background: rgba(247,183,49,0.08);
    color: #F7B731;
}

.tech-item.integration {
    border-color: rgba(0,201,167,0.3);
    background: rgba(0,201,167,0.08);
    color: #00C9A7;
}

.tech-item.analytics {
    border-color: rgba(171,71,188,0.3);
    background: rgba(171,71,188,0.08);
    color: #CE93D8;
}

/* ── Divider ── */
.divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, transparent 100%);
    margin: 48px 0;
}

/* ── Badges ── */
.badge-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 16px;
}

.badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    color: #9CA3C8;
}

.badge.accent {
    background: rgba(99,102,241,0.1);
    border-color: rgba(99,102,241,0.3);
    color: #818CF8;
}

.badge.success {
    background: rgba(0,201,167,0.1);
    border-color: rgba(0,201,167,0.3);
    color: #00C9A7;
}

/* ── Back to Portfolio ── */
.back-to-portfolio {
    padding: clamp(20px, 5vw, 40px) clamp(20px, 5vw, 60px);
    border-top: 1px solid rgba(255,255,255,0.06);
    text-align: center;
}

.back-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.3);
    color: #818CF8;
    font-family: 'Space Mono', monospace;
    font-size: 12px;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
}

.back-link:hover {
    background: rgba(99,102,241,0.15);
    border-color: rgba(99,102,241,0.4);
}

/* ── Footer ── */
.portfolio-footer {
    padding: clamp(24px, 4vw, 40px) clamp(20px, 5vw, 60px);
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    background: rgba(255,255,255,0.01);
}

@media (min-width: 768px) {
    .portfolio-footer {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
}

.footer-brand {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
}

.footer-brand span { color: #6366F1; }

.footer-tech {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: #4B5563;
    letter-spacing: 0.5px;
}

.footer-tech span { color: #6366F1; }
</style>
""", unsafe_allow_html=True)

# ── Get project ID from URL ────────────────────────────────────────────────────
project_id = st.session_state.get("project_id", None)

if not project_id:
    st.error("❌ No project ID provided")
    st.stop()

# Find the project
project = next((p for p in PROJECTS if p["id"] == project_id), None)

if not project:
    st.error(f"❌ Project with ID '{project_id}' not found")
    st.stop()

# ── Header ────────────────────────────────────────────────────────────────────
col1, col2 = st.columns([0.05, 0.95])
with col1:
    if st.button("←", key="back_btn", help="Back to Portfolio"):
        st.query_params.clear()
        st.switch_page("app.py")

with col2:
    st.markdown(f"""
    <div class="header-title">
        Case Study: <span>{project['title']}</span>
    </div>
    """, unsafe_allow_html=True)

# ── Case Study Content ────────────────────────────────────────────────────────
st.html(f"""
<div class="case-study-container">
    <div class="case-study-hero">
        <div class="case-study-icon">{project.get('icon', '⚙️')}</div>
        <div class="case-study-intro">
            <div class="eyebrow">Case Study — {project.get('domain', 'Domain')}</div>
            <h1>{project.get('title', 'Project Title')}</h1>
            <p class="subtitle">{project.get('subtitle', '')}</p>
        </div>
    </div>

    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-card-label">Complexity Level</div>
            <div class="stat-card-value">{project.get('complexity', 'High')}</div>
            <div class="stat-card-desc">Project difficulty & scope</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-label">Client Type</div>
            <div class="stat-card-value">{project.get('client_type', 'Enterprise')}</div>
            <div class="stat-card-desc">Organization category</div>
        </div>
        <div class="stat-card">
            <div class="stat-card-label">Status</div>
            <div class="stat-card-value" style="color: #00C9A7;">● {project.get('status', 'Live')}</div>
            <div class="stat-card-desc">Currently in production</div>
        </div>
    </div>

    <div class="divider"></div>

    <div class="content-section">
        <h2 class="section-title">The <span>Challenge</span></h2>
        <p class="section-text">{project.get('challenge', '')}</p>
    </div>

    <div class="divider"></div>

    <div class="content-section">
        <h2 class="section-title">The <span>Solution</span></h2>
        <p class="section-text">{project.get('solution', '')}</p>
        
        <h3 class="section-title" style="font-size: clamp(18px, 4vw, 22px); margin-top: 24px;">Technology Stack</h3>
        <div class="tech-stack">
            {"".join(f'<span class="tech-item {t.get("category", "rpa")}">{t["name"]}</span>' for t in project.get('technologies', []))}
        </div>
    </div>

    <div class="divider"></div>

    <div class="content-section">
        <h2 class="section-title">Outcomes & <span>Impact</span></h2>
        <p class="section-text" style="color: #00C9A7;">{project.get('outcome', '')}</p>
    </div>

    <div class="divider"></div>

    <div class="content-section">
        <h3 class="section-title">Key Tags</h3>
        <div class="badge-group">
            {"".join(f'<span class="badge">{tag}</span>' for tag in project.get('tags', []))}
        </div>
    </div>
</div>
""")

# ── Back Button ────────────────────────────────────────────────────────────────
st.markdown("""
<div class="back-to-portfolio">
""", unsafe_allow_html=True)

if st.button("← Back to Portfolio", key="back_to_portfolio", use_container_width=False):
    st.query_params.clear()
    st.switch_page("app.py")

st.markdown("</div>", unsafe_allow_html=True)

# ── Footer ────────────────────────────────────────────────────────────────────
profile = DEVELOPER
st.markdown(f"""
<div class="portfolio-footer">
    <div class="footer-brand">{profile["name"].split()[0]}<span>.</span>{profile["name"].split()[1]}</div>
    <div class="footer-tech">
        Built with <span>Streamlit</span> · Automation Anywhere RPA Portfolio
    </div>
</div>
""", unsafe_allow_html=True)

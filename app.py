import streamlit as st

from data import PROJECTS, DEVELOPER

# ── Page Config ──────────────────────────────────────────────────────────────
st.set_page_config(
    page_title="RPA Portfolio — Anuj Kumar",
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
}

.stApp {
    background: #060912;
    color: #E8EAF0;
}

/* Hide Streamlit chrome */
#MainMenu, footer, header { visibility: hidden; }
.block-container { padding: 0 !important; max-width: 100% !important; }
section[data-testid="stSidebar"] { display: none; }

/* ── Hero Section ── */
.hero-section {
    position: relative;
    padding: 80px 60px 60px;
    overflow: hidden;
    background: linear-gradient(135deg, #060912 0%, #0D1528 50%, #060912 100%);
    border-bottom: 1px solid rgba(99,102,241,0.2);
}

.hero-grid-bg {
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image:
        linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
}

.hero-glow {
    position: absolute;
    top: -100px; right: -100px;
    width: 500px; height: 500px;
    background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%);
    pointer-events: none;
}

.hero-glow-2 {
    position: absolute;
    bottom: -50px; left: 200px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(0,201,167,0.1) 0%, transparent 70%);
    pointer-events: none;
}

.badge-rpa {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.35);
    border-radius: 20px;
    padding: 4px 14px;
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: #818CF8;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.hero-name {
    font-family: 'Syne', sans-serif;
    font-size: clamp(44px, 6vw, 82px);
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1.0;
    margin: 0 0 8px 0;
    letter-spacing: -2px;
}

.hero-name span {
    background: linear-gradient(135deg, #6366F1 0%, #00C9A7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #6366F1;
    letter-spacing: 0.5px;
    margin: 0 0 16px 0;
}

.hero-tagline {
    font-size: 16px;
    color: #9CA3C8;
    max-width: 620px;
    line-height: 1.7;
    margin: 0 0 36px 0;
}

.cert-chip {
    display: inline-block;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 11px;
    color: #9CA3C8;
    margin: 3px 4px 3px 0;
    font-family: 'Space Mono', monospace;
}

/* ── Stats Bar ── */
.stats-bar {
    display: flex;
    gap: 0;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    overflow: hidden;
    margin: 0 60px 0;
}

.stat-item {
    flex: 1;
    padding: 28px 20px;
    text-align: center;
    border-right: 1px solid rgba(255,255,255,0.07);
    transition: background 0.3s;
}

.stat-item:last-child { border-right: none; }
.stat-item:hover { background: rgba(99,102,241,0.06); }

.stat-value {
    font-family: 'Syne', sans-serif;
    font-size: 32px;
    font-weight: 800;
    color: #FFFFFF;
    line-height: 1;
    margin-bottom: 6px;
}

.stat-value.accent { color: #6366F1; }
.stat-value.green { color: #00C9A7; }
.stat-value.orange { color: #F7B731; }

.stat-label {
    font-size: 11px;
    color: #6B7280;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: 'Space Mono', monospace;
}

/* ── Nav ── */
.nav-container {
    padding: 20px 60px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background: rgba(6,9,18,0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
}

/* ── Section Headers ── */
.section-header {
    padding: 60px 60px 32px;
}

.section-eyebrow {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    color: #6366F1;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.section-title {
    font-family: 'Syne', sans-serif;
    font-size: 40px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
    letter-spacing: -1px;
}

.section-title span {
    color: #6366F1;
}

/* ── Project Cards ── */
.projects-grid {
    padding: 0 60px 60px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(520px, 1fr));
    gap: 20px;
}

.project-card {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
}

.project-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99,102,241,0.4);
    background: rgba(255,255,255,0.04);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(99,102,241,0.2);
}

.card-accent-bar {
    height: 3px;
    width: 100%;
}

.card-header {
    padding: 28px 28px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
}

.card-icon {
    font-size: 32px;
    line-height: 1;
    flex-shrink: 0;
}

.card-badges {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.complexity-badge {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 12px;
    font-weight: 700;
}

.complexity-Critical {
    background: rgba(239,83,80,0.15);
    color: #EF5350;
    border: 1px solid rgba(239,83,80,0.3);
}

.complexity-High {
    background: rgba(247,183,49,0.15);
    color: #F7B731;
    border: 1px solid rgba(247,183,49,0.3);
}

.complexity-Medium {
    background: rgba(38,198,218,0.15);
    color: #26C6DA;
    border: 1px solid rgba(38,198,218,0.3);
}

.status-badge {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    letter-spacing: 0.5px;
    padding: 3px 10px;
    border-radius: 12px;
    background: rgba(0,201,167,0.1);
    color: #00C9A7;
    border: 1px solid rgba(0,201,167,0.25);
}

.card-body {
    padding: 16px 28px 24px;
}

.card-title {
    font-family: 'Syne', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 4px 0;
    line-height: 1.3;
}

.card-subtitle {
    font-size: 12px;
    color: #6B7280;
    margin-bottom: 14px;
    font-family: 'Space Mono', monospace;
}

.card-domain {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 11px;
    color: #818CF8;
    background: rgba(99,102,241,0.08);
    border: 1px solid rgba(99,102,241,0.2);
    border-radius: 6px;
    padding: 2px 8px;
    margin-bottom: 14px;
    font-family: 'Space Mono', monospace;
}

.card-description {
    font-size: 13.5px;
    color: #9CA3C8;
    line-height: 1.65;
    margin-bottom: 20px;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
}

.tech-chip {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    padding: 4px 10px;
    border-radius: 6px;
    letter-spacing: 0.3px;
}

.tech-rpa {
    background: rgba(99,102,241,0.12);
    color: #818CF8;
    border: 1px solid rgba(99,102,241,0.2);
}

.tech-platform {
    background: rgba(247,183,49,0.1);
    color: #F7B731;
    border: 1px solid rgba(247,183,49,0.2);
}

.tech-integration {
    background: rgba(0,201,167,0.1);
    color: #00C9A7;
    border: 1px solid rgba(0,201,167,0.2);
}

.tech-analytics {
    background: rgba(171,71,188,0.1);
    color: #CE93D8;
    border: 1px solid rgba(171,71,188,0.2);
}

.card-divider {
    height: 1px;
    background: rgba(255,255,255,0.06);
    margin: 0 0 16px 0;
}

.card-metrics {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.metric-item {
    background: rgba(255,255,255,0.02);
    border-radius: 10px;
    padding: 10px 12px;
}

.metric-label {
    font-family: 'Space Mono', monospace;
    font-size: 9px;
    color: #4B5563;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 4px;
}

.metric-value {
    font-size: 12px;
    color: #D1D5DB;
    line-height: 1.4;
}

/* ── Tags ── */
.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 0 28px 24px;
}

.tag {
    font-size: 10px;
    color: #6B7280;
    background: transparent;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 4px;
    padding: 2px 8px;
    font-family: 'DM Sans', sans-serif;
}

/* ── Skills Section ── */
.skills-section {
    padding: 0 60px 60px;
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-pill {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    color: #C4C9E2;
    transition: all 0.2s;
}

.skill-pill:hover {
    background: rgba(99,102,241,0.1);
    border-color: rgba(99,102,241,0.3);
    color: #818CF8;
}

/* ── About Section ── */
.about-section {
    padding: 0 60px 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.about-text {
    font-size: 15px;
    color: #9CA3C8;
    line-height: 1.9;
}

.about-certs {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px;
    padding: 28px;
}

.about-certs h4 {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    color: #6366F1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 16px 0;
}

.cert-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 13px;
    color: #C4C9E2;
    line-height: 1.5;
}

.cert-item:last-child { border-bottom: none; }

.cert-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #6366F1;
    margin-top: 5px;
    flex-shrink: 0;
}

/* ── Footer ── */
.portfolio-footer {
    padding: 40px 60px;
    border-top: 1px solid rgba(255,255,255,0.06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255,255,255,0.01);
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

/* ── Filter Buttons ── */
.filter-row {
    padding: 0 60px 28px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.filter-btn {
    font-family: 'Space Mono', monospace;
    font-size: 11px;
    padding: 7px 16px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: transparent;
    color: #9CA3C8;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: all 0.2s;
}

.filter-btn.active, .filter-btn:hover {
    background: rgba(99,102,241,0.15);
    border-color: rgba(99,102,241,0.4);
    color: #818CF8;
}

/* Streamlit button overrides */
.stButton button {
    background: rgba(255,255,255,0.03) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    color: #9CA3C8 !important;
    border-radius: 8px !important;
    font-family: 'Space Mono', monospace !important;
    font-size: 11px !important;
    padding: 6px 16px !important;
    transition: all 0.2s !important;
}

.stButton button:hover {
    background: rgba(99,102,241,0.15) !important;
    border-color: rgba(99,102,241,0.4) !important;
    color: #818CF8 !important;
}

/* Streamlit select/radio overrides */
.stSelectbox > div, .stRadio > div {
    background: transparent !important;
}

div[data-testid="stHorizontalBlock"] { gap: 12px; }

/* ── Detail Panel ── */
.detail-panel {
    background: rgba(255,255,255,0.025);
    border: 1px solid rgba(99,102,241,0.2);
    border-radius: 20px;
    padding: 36px;
    margin: 0 60px 60px;
}

.detail-title {
    font-family: 'Syne', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 8px 0;
}

.detail-section-label {
    font-family: 'Space Mono', monospace;
    font-size: 10px;
    color: #6366F1;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 20px 0 8px 0;
}

.detail-text {
    font-size: 14px;
    color: #9CA3C8;
    line-height: 1.75;
}

.divider-line {
    height: 1px;
    background: linear-gradient(90deg, rgba(99,102,241,0.3) 0%, transparent 100%);
    margin: 40px 60px;
}
</style>
""", unsafe_allow_html=True)


def tech_chip(t):
    cat = t.get("category", "rpa")
    return f'<span class="tech-chip tech-{cat}">{t["name"]}</span>'


def render_project_card(project):
    accent = project.get("accent_color", "#6366F1")
    tech_html = "".join(tech_chip(t) for t in project.get("technologies", []))
    tags_html = "".join(f'<span class="tag">{tag}</span>' for tag in project.get("tags", []))
    complexity = project.get("complexity", "High")

    card_html = f"""
    <div class="project-card">
        <div class="card-accent-bar" style="background: linear-gradient(90deg, {accent}, transparent);"></div>
        <div class="card-header">
            <div class="card-icon">{project.get("icon","⚙️")}</div>
            <div class="card-badges">
                <span class="complexity-badge complexity-{complexity}">{complexity}</span>
                <span class="status-badge">● Live</span>
            </div>
        </div>
        <div class="card-body">
            <div class="card-domain">◈ {project.get("domain","")}</div>
            <div class="card-title">{project.get("title","")}</div>
            <div class="card-subtitle">{project.get("subtitle","")}</div>
            <div class="card-description">{project.get("description","")}</div>
            <div class="tech-stack">{tech_html}</div>
            <div class="card-divider"></div>
            <div class="card-metrics">
                <div class="metric-item">
                    <div class="metric-label">Challenge</div>
                    <div class="metric-value">{project.get("challenge","")[:90]}…</div>
                </div>
                <div class="metric-item">
                    <div class="metric-label">Outcome</div>
                    <div class="metric-value">{project.get("outcome","")[:90]}…</div>
                </div>
            </div>
        </div>
        <div class="card-tags">{tags_html}</div>
    </div>
    """
    return card_html


# ── State ─────────────────────────────────────────────────────────────────────
if "selected_project" not in st.session_state:
    st.session_state.selected_project = None
if "active_filter" not in st.session_state:
    st.session_state.active_filter = "All"

# ── Load Data ─────────────────────────────────────────────────────────────────
profile = DEVELOPER
projects = PROJECTS
dev_stats = profile.get("stats", {})

# ── HERO ──────────────────────────────────────────────────────────────────────
st.markdown(f"""
<div class="hero-section">
    <div class="hero-grid-bg"></div>
    <div class="hero-glow"></div>
    <div class="hero-glow-2"></div>
    <div class="badge-rpa">⚡ Automation Anywhere · RPA Developer · Agentic AI</div>
    <div class="hero-name">{profile["name"].split()[0]}<br><span>{profile["name"].split()[1]}</span></div>
    <div class="hero-title">{profile["title"]} · {profile["experience_years"]}+ Years</div>
    <div class="hero-tagline">{profile["tagline"]}</div>
    <div>
        {"".join(f'<span class="cert-chip">✓ {c}</span>' for c in profile["certifications"])}
    </div>
</div>
""", unsafe_allow_html=True)

# ── STATS BAR ─────────────────────────────────────────────────────────────────
s = dev_stats
st.markdown(f"""
<div class="stats-bar">
    <div class="stat-item">
        <div class="stat-value accent">{s.get("projects_delivered","9")}</div>
        <div class="stat-label">Projects Delivered</div>
    </div>
    <div class="stat-item">
        <div class="stat-value">{s.get("bots_in_production","24")}</div>
        <div class="stat-label">Bots in Production</div>
    </div>
    <div class="stat-item">
        <div class="stat-value green">{s.get("annual_hours_saved","18,000+")}</div>
        <div class="stat-label">Annual Hours Saved</div>
    </div>
    <div class="stat-item">
        <div class="stat-value">{s.get("accuracy_rate","99.7%")}</div>
        <div class="stat-label">Accuracy Rate</div>
    </div>
    <div class="stat-item">
        <div class="stat-value orange">{s.get("cost_savings","$2.4M+")}</div>
        <div class="stat-label">Cost Savings</div>
    </div>
    <div class="stat-item">
        <div class="stat-value">{s.get("uptime","99.9%")}</div>
        <div class="stat-label">Uptime SLA</div>
    </div>
</div>
<br><br>
""", unsafe_allow_html=True)

# ── ABOUT ─────────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section-header">
    <div class="section-eyebrow">01 — About</div>
    <div class="section-title">The Developer <span>Behind the Bots</span></div>
</div>
""", unsafe_allow_html=True)

st.markdown(f"""
<div class="about-section">
    <div>
        <div class="about-text">{profile["about"]}</div>
    </div>
    <div class="about-certs">
        <h4>Certifications</h4>
        {"".join(f'<div class="cert-item"><div class="cert-dot"></div>{c}</div>' for c in profile["certifications"])}
    </div>
</div>
""", unsafe_allow_html=True)

# ── SKILLS ───────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section-header" style="padding-top:20px;">
    <div class="section-eyebrow">02 — Skills & Stack</div>
    <div class="section-title">Technology <span>Arsenal</span></div>
</div>
""", unsafe_allow_html=True)

st.markdown(f"""
<div class="skills-section">
    <div class="skills-grid">
        {"".join(f'<div class="skill-pill">{s}</div>' for s in profile["skills"])}
    </div>
</div>
""", unsafe_allow_html=True)

st.markdown('<div class="divider-line"></div>', unsafe_allow_html=True)

# ── PROJECTS ─────────────────────────────────────────────────────────────────
st.markdown("""
<div class="section-header" style="padding-top:20px;">
    <div class="section-eyebrow">03 — Projects</div>
    <div class="section-title">Automation <span>Portfolio</span></div>
</div>
""", unsafe_allow_html=True)

# Filter controls
all_domains = ["All"] + list(set(p["domain"].split("/")[0].strip() for p in projects))
all_complexity = ["All", "Critical", "High", "Medium"]

col_f1, col_f2, col_f3 = st.columns([3, 2, 2])
with col_f1:
    domain_filter = st.selectbox("Filter by Domain", all_domains, key="domain_filter",
                                  label_visibility="collapsed")
with col_f2:
    complexity_filter = st.selectbox("Filter by Complexity", all_complexity, key="complexity_filter",
                                      label_visibility="collapsed")
with col_f3:
    search_term = st.text_input("Search", placeholder="🔍 Search projects...", key="search_input",
                                 label_visibility="collapsed")

st.markdown("")

# Apply filters
filtered = projects
if domain_filter != "All":
    filtered = [p for p in filtered if domain_filter.lower() in p["domain"].lower()]
if complexity_filter != "All":
    filtered = [p for p in filtered if p["complexity"] == complexity_filter]
if search_term:
    term = search_term.lower()
    filtered = [p for p in filtered if
                term in p["title"].lower() or
                term in p["description"].lower() or
                any(term in t["name"].lower() for t in p["technologies"]) or
                any(term in tag.lower() for tag in p["tags"])]

# Project count line
st.markdown(f"""
<div style="padding: 0 60px 16px; font-family: 'Space Mono', monospace; font-size: 11px; color: #4B5563;">
    SHOWING {len(filtered)} OF {len(projects)} PROJECTS
</div>
""", unsafe_allow_html=True)

# Render project cards in 2-col grid
st.markdown('<div style="padding: 0 60px 60px;">', unsafe_allow_html=True)

cols = st.columns(2, gap="medium")
for i, project in enumerate(filtered):
    with cols[i % 2]:
        st.markdown(render_project_card(project), unsafe_allow_html=True)
        st.markdown('<div style="height:12px;"></div>', unsafe_allow_html=True)
        if st.button(f"View Full Case Study ↗", key=f"btn_{project['id']}"):
            if st.session_state.selected_project == project["id"]:
                st.session_state.selected_project = None
            else:
                st.session_state.selected_project = project["id"]

st.markdown('</div>', unsafe_allow_html=True)

# ── DETAIL PANEL ─────────────────────────────────────────────────────────────
if st.session_state.selected_project:
    selected = next((p for p in projects if p["id"] == st.session_state.selected_project), None)
    if selected:
        accent = selected.get("accent_color", "#6366F1")
        tech_html = "".join(tech_chip(t) for t in selected.get("technologies", []))
        html_card = f"""

        <div id="case-study-frame",style="padding: 32px;margin: 40px 60px;background: rgba(255,255,255,0.03);border: 1px solid rgba(99,102,241,0.15);border-radius: 24px;box-shadow: 0 10px 40px rgba(0,0,0,0.35);backdrop-filter: blur(12px);">
            <div class="detail-panel" style="font-family: sans-serif;color: white;background: rgba(255,255,255,0.02);border: 1px solid rgba(255,255,255,0.06);border-radius: 20px;padding: 32px;">
                <div style="display:flex; align-items:center; gap:16px; margin-bottom:24px;">
                    <span style="font-size:48px;">{selected['icon']}</span>
                    <div>
                        <div style="font-family:'Space Mono',monospace;font-size:10px;color:{accent};letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">
                            Case Study — {selected['domain']}
                        </div>

                        <div style="font-size:24px; font-weight:bold;">
                            {selected['title']}
                        </div>

                        <div style="font-size:13px;color:#6B7280;font-family:'Space Mono',monospace;">
                            {selected['subtitle']}
                        </div>
                    </div>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; margin-bottom:28px;">
                    <div style="background:rgba(255,255,255,0.02); border-radius:10px; padding:16px; border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:'Space Mono',monospace; font-size:9px; color:#4B5563; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Complexity</div>
                        <div style="font-family:'Syne',sans-serif; font-size:18px; font-weight:700; color:{accent};">{selected['complexity']}</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.02); border-radius:10px; padding:16px; border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:'Space Mono',monospace; font-size:9px; color:#4B5563; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Client Type</div>
                        <div style="font-family:'Syne',sans-serif; font-size:18px; font-weight:700; color:#FFFFFF;">{selected['client_type']}</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.02); border-radius:10px; padding:16px; border:1px solid rgba(255,255,255,0.06);">
                        <div style="font-family:'Space Mono',monospace; font-size:9px; color:#4B5563; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Status</div>
                        <div style="font-size:13px; color:#00C9A7; font-weight:600;">● {selected['status']}</div>
                    </div>
                </div>

                <div style="font-weight:bold; margin-top:16px; font-size:14px; text-transform:uppercase; color:#6B7280; font-family:'Space Mono',monospace;">The Challenge</div>
                <div style="margin-top:4px; font-size:15px; line-height:1.6; color:#E2E8F0;">{selected['challenge']}</div>

                <div style="font-weight:bold; margin-top:16px; font-size:14px; text-transform:uppercase; color:#6B7280; font-family:'Space Mono',monospace;">The Solution</div>
                <div style="margin-top:4px; font-size:15px; line-height:1.6; color:#E2E8F0;">{selected['solution']}</div>

                <div style="font-weight:bold; margin-top:16px; font-size:14px; text-transform:uppercase; color:#6B7280; font-family:'Space Mono',monospace;">Outcomes & Impact</div>
                <div style="margin-top:4px; font-size:15px; line-height:1.6; color:#00C9A7;">{selected['outcome']}</div>

                <div style="font-weight:bold; margin-top:16px; font-size:14px; text-transform:uppercase; color:#6B7280; font-family:'Space Mono',monospace;">Technology Stack</div>
                <div style="margin-top:8px;">{tech_html}</div>
            </div>
        </div>
        <script>
        const el = document.getElementById("case-study-frame");
        if(el){{
            el.scrollIntoView({{
                behavior: "smooth"
            }});
        }}
        </script>
        """
        st.iframe(html_card)

# ── FOOTER ────────────────────────────────────────────────────────────────────
st.markdown(f"""
<div class="portfolio-footer">
    <div class="footer-brand">{profile["name"].split()[0]}<span>.</span>{profile["name"].split()[1]}</div>
    <div class="footer-tech">
        Built with <span>Streamlit</span> · Automation Anywhere RPA Portfolio
    </div>
</div>
""", unsafe_allow_html=True)

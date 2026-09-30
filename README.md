# Growth-OS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #635bff;
    --primary-dark: #5048d8;
    --dark: #172033;
    --text: #202637;
    --muted: #697386;
    --light-text: #929aaa;
    --background: #ffffff;
    --section-bg: #f7f8fb;
    --card-bg: #ffffff;
    --border: #e8ebf0;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 18px;
    --radius-xl: 24px;
    --container: 1200px;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", Arial, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.5;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
    cursor: pointer;
}

.container {
    width: min(100% - 40px, var(--container));
    margin: 0 auto;
}

.navbar {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--border);
    background: #fff;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.5px;
}

.logo-icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--dark);
    color: white;
    font-size: 13px;
    font-weight: 800;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 30px;
    font-size: 14px;
    color: var(--muted);
}

.nav-links a {
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--dark);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.login-btn {
    background: transparent;
    border: none;
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;
    padding: 10px 14px;
}

.login-btn:hover {
    color: var(--dark);
}

.btn {
    border: none;
    border-radius: var(--radius-sm);
    padding: 12px 18px;
    font-size: 14px;
    font-weight: 700;
    transition: transform 0.2s ease, background 0.2s ease;
}

.btn:hover {
    transform: translateY(-1px);
}

.btn-primary {
    background: var(--dark);
    color: white;
}

.btn-primary:hover {
    background: #252e42;
}

.btn-purple {
    background: var(--primary);
    color: white;
}

.btn-purple:hover {
    background: var(--primary-dark);
}

.btn-secondary {
    background: white;
    color: var(--dark);
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    background: var(--section-bg);
}

.hero {
    padding: 100px 0 70px;
    background: radial-gradient(circle at 75% 30%, rgba(99, 91, 255, 0.08), transparent 35%);
}

.hero-content {
    text-align: center;
    max-width: 850px;
    margin: 0 auto;
}

.hero-eyebrow {
    display: inline-block;
    margin-bottom: 18px;
    color: var(--primary);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1.4px;
    text-transform: uppercase;
}

.hero-title {
    font-size: clamp(42px, 6vw, 72px);
    line-height: 1.02;
    letter-spacing: -3.5px;
    font-weight: 800;
    color: var(--dark);
}

.hero-title span {
    color: var(--primary);
}

.hero-description {
    max-width: 650px;
    margin: 24px auto 30px;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.7;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.hero-note {
    margin-top: 18px;
    color: var(--light-text);
    font-size: 12px;
}

.dashboard-wrapper {
    margin-top: 65px;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    background: #f4f5f8;
    box-shadow: 0 20px 60px rgba(23, 32, 51, 0.10);
}

.dashboard {
    display: grid;
    grid-template-columns: 210px 1fr;
    min-height: 600px;
    overflow: hidden;
    border-radius: 18px;
    background: white;
    border: 1px solid var(--border);
}

.sidebar {
    padding: 22px 14px;
    background: #fbfbfc;
    border-right: 1px solid var(--border);
}

.sidebar-logo {
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 8px 10px 22px;
    font-size: 14px;
    font-weight: 800;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 11px;
    border-radius: 8px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 600;
}

.sidebar-item:hover {
    background: #f0f1f5;
    color: var(--dark);
}

.sidebar-item.active {
    background: #ecebff;
    color: var(--primary);
}

.dashboard-main {
    padding: 28px;
    background: #fff;
}

.dashboard-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
}

.dashboard-title h3 {
    font-size: 20px;
    letter-spacing: -0.5px;
}

.dashboard-title p {
    margin-top: 4px;
    color: var(--muted);
    font-size: 12px;
}

.dashboard-grid {
    display: grid;
    grid-template-columns: 1.1fr 1fr 1fr;
    gap: 12px;
}

.dashboard-card {
    padding: 18px;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
}

.card-label {
    color: var(--muted);
    font-size: 11px;
    font-weight: 600;
}

.growth-score {
    margin-top: 10px;
    display: flex;
    align-items: baseline;
    gap: 5px;
}

.growth-score strong {
    font-size: 42px;
    line-height: 1;
    letter-spacing: -2px;
}

.growth-score span {
    color: var(--muted);
    font-size: 12px;
}

.progress-bar {
    height: 7px;
    margin-top: 16px;
    overflow: hidden;
    background: #eceef3;
    border-radius: 10px;
}

.progress-value {
    height: 100%;
    width: 74%;
    background: var(--primary);
    border-radius: inherit;
}

.growth-change {
    margin-top: 9px;
    color: #26a269;
    font-size: 11px;
    font-weight: 700;
}

.stat-value {
    margin-top: 8px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
}

.stat-description {
    margin-top: 3px;
    color: var(--muted);
    font-size: 10px;
}

.chart-card {
    grid-column: span 2;
    min-height: 230px;
}

.chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chart-title {
    font-size: 13px;
    font-weight: 700;
}

.chart-subtitle {
    margin-top: 3px;
    color: var(--muted);
    font-size: 10px;
}

.chart {
    height: 145px;
    margin-top: 20px;
    display: flex;
    align-items: end;
    gap: 12px;
    padding: 10px 5px 0;
    border-bottom: 1px solid var(--border);
}

.chart-bar {
    flex: 1;
    max-width: 45px;
    background: #e7e8f4;
    border-radius: 6px 6px 0 0;
}

.chart-bar.active {
    background: var(--primary);
}

.skills-card {
    grid-column: span 1;
}

.skill {
    margin-top: 15px;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
    font-size: 10px;
}

.skill-name {
    font-weight: 600;
}

.skill-percent {
    color: var(--muted);
}

.skill-progress {
    height: 5px;
    background: #eceef3;
    border-radius: 10px;
    overflow: hidden;
}

.skill-progress span {
    display: block;
    height: 100%;
    background: var(--primary);
    border-radius: inherit;
}

.features-section {
    padding: 110px 0;
    background: var(--section-bg);
}

.section-header {
    max-width: 650px;
    margin-bottom: 40px;
}

.section-label {
    color: var(--primary);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.section-title {
    margin-top: 8px;
    font-size: 38px;
    line-height: 1.1;
    letter-spacing: -1.8px;
}

.section-description {
    margin-top: 12px;
    color: var(--muted);
    font-size: 15px;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
}

.feature-card {
    padding: 25px;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(23, 32, 51, 0.07);
}

.feature-icon {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 11px;
    background: #f0efff;
    color: var(--primary);
    font-size: 18px;
}

.feature-card h3 {
    font-size: 16px;
    margin-bottom: 8px;
}

.feature-card p {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.6;
}

.roadmap-section {
    padding: 110px 0;
}

.roadmap-box {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 50px;
    padding: 55px;
    background: var(--dark);
    color: white;
    border-radius: var(--radius-xl);
}

.roadmap-text h2 {
    font-size: 38px;
    line-height: 1.1;
    letter-spacing: -1.5px;
}

.roadmap-text p {
    margin-top: 16px;
    color: #aeb6c6;
    font-size: 14px;
    line-height: 1.7;
}

.roadmap {
    display: flex;
    align-items: center;
    gap: 10px;
}

.roadmap-step {
    flex: 1;
    text-align: center;
}

.roadmap-number {
    width: 38px;
    height: 38px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: white;
    color: var(--dark);
    font-size: 12px;
    font-weight: 800;
}

.roadmap-step span {
    display: block;
    margin-top: 10px;
    color: #c4cad5;
    font-size: 10px;
}

.roadmap-line {
    flex: 1;
    height: 1px;
    background: #4b5466;
}

.growth-section {
    padding: 100px 0;
    background: var(--section-bg);
}

.growth-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
}

.growth-copy h2 {
    font-size: 38px;
    letter-spacing: -1.8px;
}

.growth-copy p {
    margin-top: 15px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.7;
}

.insight-card {
    margin-top: 25px;
    padding: 17px;
    border-left: 3px solid var(--primary);
    background: white;
    border-radius: 8px;
}

.insight-card strong {
    display: block;
    font-size: 13px;
}

.insight-card p {
    margin-top: 5px;
    font-size: 11px;
}

.profile-section {
    padding: 110px 0;
}

.profile-card {
    max-width: 850px;
    margin: 0 auto;
    padding: 30px;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
    box-shadow: 0 15px 50px rgba(23, 32, 51, 0.07);
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding-bottom: 22px;
    border-bottom: 1px solid var(--border);
}

.profile-avatar {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #ecebff;
    color: var(--primary);
    font-size: 18px;
    font-weight: 800;
}

.profile-name {
    font-size: 19px;
    font-weight: 800;
}

.profile-role {
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
}

.profile-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    margin-top: 25px;
}

.profile-item {
    padding: 15px;
    background: var(--section-bg);
    border-radius: 10px;
}

.profile-item span {
    display: block;
    color: var(--muted);
    font-size: 9px;
    margin-bottom: 6px;
}

.profile-item strong {
    font-size: 12px;
}

.cta-section {
    padding: 100px 0;
}

.cta-box {
    padding: 80px 30px;
    text-align: center;
    background: linear-gradient(135deg, #f5f4ff, #f8f9fc);
    border: 1px solid var(--border);
    border-radius: var(--radius-xl);
}

.cta-box h2 {
    font-size: 44px;
    letter-spacing: -2px;
}

.cta-box p {
    max-width: 550px;
    margin: 15px auto 25px;
    color: var(--muted);
    font-size: 14px;
}

.footer {
    padding: 35px 0;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: 12px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-links {
    display: flex;
    gap: 25px;
}

@media (max-width: 900px) {
    .nav-links {
        display: none;
    }

    .dashboard {
        grid-template-columns: 1fr;
    }

    .sidebar {
        display: none;
    }

    .dashboard-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .roadmap-box {
        grid-template-columns: 1fr;
    }

    .growth-layout {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .container {
        width: min(100% - 28px, var(--container));
    }

    .navbar {
        height: 65px;
    }

    .logo {
        font-size: 15px;
    }

    .hero {
        padding: 70px 0 45px;
    }

    .hero-title {
        font-size: 43px;
        letter-spacing: -2px;
    }

    .hero-description {
        font-size: 14px;
    }

    .dashboard-wrapper {
        margin-top: 40px;
        padding: 6px;
    }

    .dashboard-main {
        padding: 18px;
    }

    .dashboard-grid {
        grid-template-columns: 1fr;
    }

    .chart-card,
    .skills-card {
        grid-column: span 1;
    }

    .features-section,
    .roadmap-section,
    .profile-section {
        padding: 75px 0;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .section-title,
    .roadmap-text h2,
    .growth-copy h2 {
        font-size: 30px;
    }

    .roadmap-box {
        padding: 30px 22px;
    }

    .roadmap {
        flex-direction: column;
    }

    .roadmap-line {
        width: 1px;
        height: 20px;
        flex: none;
    }

    .profile-content {
        grid-template-columns: 1fr;
    }

    .cta-box {
        padding: 55px 20px;
    }

    .cta-box h2 {
        font-size: 32px;
    }

    .footer-content {
        flex-direction: column;
        gap: 18px;
    }

    .footer-links {
        flex-wrap: wrap;
        justify-content: center;
    }
}

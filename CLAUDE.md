# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PAAWS Study documentation website built with MkDocs Material. The site provides documentation for the PAAWS dataset and study protocol, featuring custom collapsible sections for improved navigation.

## Architecture

### MkDocs Material Site

- **Configuration**: `mkdocs.yml` - site settings, navigation, theme, and extensions
- **Content**: All markdown files in `docs/` directory
  - `index.md` - Homepage with links to main documents
  - `codebook.md` - Dataset documentation (PAAWS Dataset Codebook)
  - `protocol.md` - Protocol documentation (Data Collection Protocol)
- **Theme**: Material for MkDocs styled after Astral's uv documentation
  - Light/dark mode with system preference support
  - Roboto font family (text and mono)
  - Indigo color scheme
  - Navigation breadcrumbs, instant loading, and table of contents following
- **Custom features**:
  - Collapsible H1/H2 sections (Notion-style) via `docs/js/collapsible.js`
  - Custom styling in `docs/css/collapsible.css`
  - Code copy buttons and syntax highlighting
  - Search with suggestions

### Collapsible Sections Implementation

The site features sophisticated collapsible sections with these behaviors:
- All H1 headings (except the first page title) and H2 headings become collapsible
- Trailing `{#id}` anchors in headings are parsed and converted to proper HTML IDs
- Arrow indicators (▾/▸) show expand/collapse state
- Keyboard accessible (Enter/Space to toggle)
- ARIA attributes for screen readers
- Implementation in `docs/js/collapsible.js` targets MkDocs Material's `.md-content__inner` container

## Development Commands

### MkDocs Site

```bash
# Install dependencies
uv sync

# Serve locally (with live reload)
mkdocs serve

# Build site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## Key Technical Details

- **Python**: Requires Python ≥3.11 (managed with uv)
- **Dependencies**: MkDocs Material (≥9.6.21)
- **Markdown extensions**:
  - `admonition` - for callouts and notes
  - `attr_list` & `md_in_html` - for HTML attributes
  - `pymdownx.details` & `pymdownx.superfences` - for collapsible sections and code blocks
  - `pymdownx.highlight`, `pymdownx.inlinehilite` - for syntax highlighting
  - `pymdownx.snippets` - for embedding code snippets
  - `pymdownx.tabbed` - for tabbed content
  - `pymdownx.tasklist` - for checkboxes
  - `toc` with permalink support (depth 3)
- **JavaScript architecture**: Single `collapsible.js` script runs on DOMContentLoaded, builds collapsible sections dynamically
- **CSS**: Custom styles in `docs/css/collapsible.css` for collapsible functionality

## File Structure

```
├── docs/
│   ├── index.md           # Homepage
│   ├── codebook.md        # Dataset codebook
│   ├── protocol.md        # Data collection protocol
│   ├── js/
│   │   └── collapsible.js # Collapsible sections script
│   └── css/
│       └── collapsible.css # Collapsible sections styles
├── mkdocs.yml             # MkDocs configuration
└── pyproject.toml         # Python dependencies
```

## When Editing

- All content files are in `docs/` directory
- Custom JavaScript logic in `docs/js/collapsible.js` handles heading ID parsing and section building
- The first H1 on each page is intentionally excluded from collapsible behavior (serves as page title)
- Use `mkdocs serve` during development for live preview with hot reload

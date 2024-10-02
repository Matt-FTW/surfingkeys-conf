import api from "./api.js"

const { Hints, Visual } = api

Hints.style(
  "border: solid 2px #6e738d; color:#8aadf4; font-size: 12px; font-weight: bold; background: initial; background-color: #1e2030;",
)
Hints.style(
  "border: solid 2px #6e738d !important; padding: 1px !important; color: #939ab7 !important; background: #181926 !important;",
  "text",
)

Visual.style("marks", "background-color: #ed8796;")
Visual.style("cursor", "background-color: #8aadf4;")

export default `
:root {
  /* Font */
  --font: 'JetBrainsMono Nerd Font';
  --font-size: 14.0px;
  --font-weight: bold;

  --fg: #cad3f5;
  --bg: #24273a;
  --bg-dark: #1e2030;
  --border: #6e738d;
  --main-fg: #cad3f5;
  --accent-fg: #b7bdf8;
  --info-fg: #ed8796;
  --select: #494d64;
}

/* ---------- Generic ---------- */
.sk_theme {
background: var(--bg);
color: var(--fg);
  background-color: var(--bg);
  border-color: var(--border);
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}

input {
  font-family: var(--font);
  font-weight: var(--font-weight);
}

.sk_theme tbody {
  color: var(--fg);
}

.sk_theme input {
  color: var(--fg);
}

#sk_tabs .sk_tab {
  background: var(--bg-dark);
  border: 1px solid var(--border);
}

#sk_tabs .sk_tab_title {
  color: var(--fg);
}

#sk_tabs .sk_tab_url {
  color: var(--main-fg);
}

#sk_tabs .sk_tab_hint {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--accent-fg);
}

.sk_theme #sk_frame {
  background: var(--bg);
  opacity: 0.2;
  color: var(--accent-fg);
}

/* ---------- Omnibar ---------- */
/* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
/* .sk_theme#sk_omnibar {
  width: 100%;
  left: 0;
} */

.sk_theme .title {
  color: var(--accent-fg);
}

.sk_theme .url {
  color: var(--main-fg);
}

.sk_theme .annotation {
  color: var(--accent-fg);
}

.sk_theme .omnibar_highlight {
  color: var(--accent-fg);
}

.sk_theme .omnibar_timestamp {
  color: var(--info-fg);
}

.sk_theme .omnibar_visitcount {
  color: var(--accent-fg);
}

.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
  background: var(--bg-dark);
}

.sk_theme #sk_omnibarSearchResult ul li.focused {
  background: #363a4f;
}

.sk_theme #sk_omnibarSearchArea {
  border-top-color: var(--border);
  border-bottom-color: var(--border);
}

.sk_theme #sk_omnibarSearchArea input,
.sk_theme #sk_omnibarSearchArea span {
  font-size: var(--font-size);
}

.sk_theme .separator {
  color: var(--accent-fg);
}

/* ---------- Popup Notification Banner ---------- */
#sk_banner {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  background: var(--bg);
  border-color: var(--border);
  color: var(--fg);
  opacity: 0.9;
}

/* ---------- Popup Keys ---------- */
#sk_keystroke {
  background-color: var(--bg);
}

.sk_theme kbd .candidates {
  color: var(--info-fg);
}

.sk_theme span.annotation {
  color: var(--accent-fg);
}

/* ---------- Popup Translation Bubble ---------- */
#sk_bubble {
  background-color: var(--bg) !important;
  color: var(--fg) !important;
  border-color: var(--border) !important;
}

#sk_bubble * {
  color: var(--fg) !important;
}

#sk_bubble div.sk_arrow div:nth-of-type(1) {
  border-top-color: var(--border) !important;
  border-bottom-color: var(--border) !important;
}

#sk_bubble div.sk_arrow div:nth-of-type(2) {
  border-top-color: var(--bg) !important;
  border-bottom-color: var(--bg) !important;
}

/* ---------- Search ---------- */
#sk_status,
#sk_find {
  font-size: var(--font-size);
  border-color: var(--border);
}

.sk_theme kbd {
  background: var(--bg-dark);
  border-color: var(--border);
  box-shadow: none;
  color: var(--fg);
}

.sk_theme .feature_name span {
  color: var(--main-fg);
}

/* ---------- ACE Editor ---------- */
#sk_editor {
  background: var(--bg-dark) !important;
  height: 50% !important;
  /* Remove this to restore the default editor size */
}

.ace_dialog-bottom {
  border-top: 1px solid var(--bg) !important;
}

.ace-chrome .ace_print-margin,
.ace_gutter,
.ace_gutter-cell,
.ace_dialog {
  background: var(--bg) !important;
}

.ace-chrome {
  color: var(--fg) !important;
}

.ace_gutter,
.ace_dialog {
  color: var(--fg) !important;
}

.ace_cursor {
  color: var(--fg) !important;
}

.normal-mode .ace_cursor {
  background-color: var(--fg) !important;
  border: var(--fg) !important;
  opacity: 0.7 !important;
}

.ace_marker-layer .ace_selection {
  background: var(--select) !important;
}

.ace_editor,
.ace_dialog span,
.ace_dialog input {
  font-family: var(--font);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
}
`

/*

  body {
    font-family: "Input Mono", "DejaVu Sans Mono", DejaVu, Arial, sans-serif;
    font-size: 12pt;
  }

  #sk_keystroke kbd {
    font-family: "Sudo Nerd Font Mono", "Sudo Mono", "Sudo",
      "Input Mono Nerd Font", "Input Mono", "DejaVu Sans Mono", "DejaVu", "Arial",
      sans-serif;
    font-size: 10pt;
  }

  #sk_omnibarSearchArea {
    margin: 0 !important;
    padding: 0.5rem 1rem !important;
    border-bottom: none !important;
  }

  #sk_omnibarSearchResult {
    margin: 0 !important;
  }

  #sk_omnibar li {
    background: none !important;
    padding: 0.35rem 0.5rem !important;
  }

  #sk_omnibarSearchResult > ul:nth-child(1) {
    margin-bottom: 0px !important;
    padding: 0 !important;
    padding-bottom: 10px !important;
  }

  #sk_omnibar .separator {
    padding-left: 8px !important;
  }

  @media (prefers-color-scheme: light) {
    body {
      color: #483270;
    }

    #sk_omnibar {
      background-color: #f5f3fd !important;
      color: #59446f !important;
      box-shadow: 0px 3px 15px -6px rgba(53, 13, 81, 0.7) !important;
    }

    #sk_omnibar .prompt {
      color: #c2b2d7 !important;
    }

    #sk_omnibar .separator {
      color: #d4b1ff !important;
    }

    #sk_omnibar input {
      color: #351d53 !important;
    }

    #sk_omnibarSearchResult {
      border-top: 1px solid #e1cff5 !important;
    }

    #sk_omnibar li.focused {
      background-color: #e1ddff !important;
      color: #351d53 !important;
    }

    #sk_banner,
    #sk_keystroke {
      border: 1px solid #d7b0ff;
      background: #e9d9ee;
    }

    #sk_keystroke .annotation {
      color: #483270;
    }

    #sk_keystroke kbd {
      color: black;
      background: white;
    }

    #sk_keystroke kbd .candidates {
      color: #ff7a75;
    }
  }

  @media (prefers-color-scheme: dark) {
    body {
      color: #d7b0ff;
    }

    #sk_omnibar {
      background-color: #2a323e;
      color: #cad1d7;
    }

    #sk_omnibar .prompt {
      color: #eef5fb !important;
    }

    #sk_omnibar .separator {
      color: #8af4ff !important;
      padding-left: 8px !important;
    }

    #sk_omnibar input {
      color: white !important;
    }

    #sk_omnibarSearchResult {
      border-top: 1px solid #545f6f !important;
    }

    #sk_omnibar li.focused {
      background: #181d24 !important;
      color: #eef5fb !important;
    }

    #sk_banner,
    #sk_keystroke {
      border: 1px solid #d7b0ff;
      background: #483270;
    }

    #sk_keystroke .annotation {
      color: #d7b0ff;
    }

    #sk_keystroke kbd {
      color: #fff;
      background: #7a57a4;
      border: 1px solid #2d0080;
      box-shadow: none;
    }

    #sk_keystroke kbd .candidates {
      color: #ff8cf8;
    }
  }

  .expandRichHints {
    animation: none;
  }
  .collapseRichHints {
    animation: none;
  }
*/

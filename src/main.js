function hot_reload() {
    document.getElementById("styling").innerHTML = `
            :root{
    --lxl_text: ${document.getElementById("lxl_text").value};
    --lxl_line_number: ${document.getElementById("lxl_line_number").value};
    --lxl_warn: ${document.getElementById("lxl_warn").value};
    --lxl_selection: ${document.getElementById("lxl_selection").value};
    --lxl_dim:  ${document.getElementById("lxl_dim").value};
    --lxl_accent:  ${document.getElementById("lxl_accent").value};
    --lxl_background2: ${document.getElementById("lxl_background2").value};
    --lxl_scrollbar: ${document.getElementById("lxl_scrollbar").value};
    --lxl_line_number2: ${document.getElementById("lxl_line_number2").value};
    --lxl_drag_overlay_tab: ${document.getElementById("lxl_drag_overlay_tab").value};
    --lxl_nagbar_text: ${document.getElementById("lxl_nagbar_text").value};
    --lxl_guide_highlighting: ${document.getElementById("lxl_guide_highlighting").value};
    --lxl_scrollbar2: ${document.getElementById("lxl_scrollbar2").value};
    --lxl_line_highlight: ${document.getElementById("lxl_line_highlight").value};
    --lxl_guide: ${document.getElementById("lxl_guide").value};
    --lxl_modified: ${document.getElementById("lxl_modified").value};
    --lxl_error: ${document.getElementById("lxl_error").value};
    --lxl_good: ${document.getElementById("lxl_good").value};
    --lxl_background: ${document.getElementById("lxl_background").value};
    --lxl_background3: ${document.getElementById("lxl_background3").value};
    --lxl_divider: ${document.getElementById("lxl_divider").value};
    --lxl_caret: ${document.getElementById("lxl_caret").value};
    --lxl_scrollbar_track: ${document.getElementById("lxl_scrollbar_track").value};
    --lxl_nagbar: ${document.getElementById("lxl_nagbar").value};
    --lxl_paren5: ${document.getElementById("lxl_paren5").value};
    --lxl_paren4: ${document.getElementById("lxl_paren4").value};
    --lxl_normal: ${document.getElementById("lxl_normal").value};
    --lxl_paren_unbalanced: ${document.getElementById("lxl_paren_unbalanced").value};
    --lxl_exclude: ${document.getElementById("lxl_exclude").value};
    --lxl_keyword: ${document.getElementById("lxl_keyword").value};
    --lxl_diff_del: ${document.getElementById("lxl_diff_del").value};
    --lxl_literal: ${document.getElementById("lxl_literal").value};
    --lxl_operator: ${document.getElementById("lxl_operator").value};
    --lxl_comment: ${document.getElementById("lxl_comment").value};
    --lxl_markdown_bold_italic: ${document.getElementById("lxl_markdown_bold_italic").value};
    --lxl_markdown_bold: ${document.getElementById("lxl_markdown_bold").value};
    --lxl_paren3: ${document.getElementById("lxl_paren3").value};
    --lxl_markdown_italic: ${document.getElementById("lxl_markdown_italic").value};
    --lxl_string: ${document.getElementById("lxl_string").value};
    --lxl_symbol: ${document.getElementById("lxl_symbol").value};
    --lxl_number: ${document.getElementById("lxl_number").value};
    --lxl_paren2: ${document.getElementById("lxl_paren2").value};
    --lxl_keyword2: ${document.getElementById("lxl_keyword2").value};
    --lxl_function: ${document.getElementById("lxl_function").value};
    --lxl_diff_add: ${document.getElementById("lxl_diff_add").value};
    --lxl_ignore: ${document.getElementById("lxl_ignore").value};
    --lxl_paren1: ${document.getElementById("lxl_paren1").value};
}
`
}

document.getElementById("lxl_text").addEventListener('input', hot_reload);
document.getElementById("lxl_line_number").addEventListener('input', hot_reload);
document.getElementById("lxl_warn").addEventListener('input', hot_reload);
document.getElementById("lxl_selection").addEventListener('input', hot_reload);
document.getElementById("lxl_dim").addEventListener('input', hot_reload);
document.getElementById("lxl_accent").addEventListener('input', hot_reload);
document.getElementById("lxl_background2").addEventListener('input', hot_reload);
document.getElementById("lxl_scrollbar").addEventListener('input', hot_reload);
document.getElementById("lxl_line_number2").addEventListener('input', hot_reload);
document.getElementById("lxl_drag_overlay_tab").addEventListener('input', hot_reload);
document.getElementById("lxl_nagbar_text").addEventListener('input', hot_reload);
document.getElementById("lxl_guide_highlighting").addEventListener('input', hot_reload);
document.getElementById("lxl_scrollbar2").addEventListener('input', hot_reload);
document.getElementById("lxl_line_highlight").addEventListener('input', hot_reload);
document.getElementById("lxl_guide").addEventListener('input', hot_reload);
document.getElementById("lxl_modified").addEventListener('input', hot_reload);
document.getElementById("lxl_error").addEventListener('input', hot_reload);
document.getElementById("lxl_good").addEventListener('input', hot_reload);
document.getElementById("lxl_background").addEventListener('input', hot_reload);
document.getElementById("lxl_background3").addEventListener('input', hot_reload);
document.getElementById("lxl_divider").addEventListener('input', hot_reload);
document.getElementById("lxl_caret").addEventListener('input', hot_reload);
document.getElementById("lxl_scrollbar_track").addEventListener('input', hot_reload);
document.getElementById("lxl_nagbar").addEventListener('input', hot_reload);
document.getElementById("lxl_paren5").addEventListener('input', hot_reload);
document.getElementById("lxl_paren4").addEventListener('input', hot_reload);
document.getElementById("lxl_normal").addEventListener('input', hot_reload);
document.getElementById("lxl_paren_unbalanced").addEventListener('input', hot_reload);
document.getElementById("lxl_exclude").addEventListener('input', hot_reload);
document.getElementById("lxl_keyword").addEventListener('input', hot_reload);
document.getElementById("lxl_diff_del").addEventListener('input', hot_reload);
document.getElementById("lxl_literal").addEventListener('input', hot_reload);
document.getElementById("lxl_operator").addEventListener('input', hot_reload);
document.getElementById("lxl_comment").addEventListener('input', hot_reload);
document.getElementById("lxl_markdown_bold_italic").addEventListener('input', hot_reload);
document.getElementById("lxl_markdown_bold").addEventListener('input', hot_reload);
document.getElementById("lxl_paren3").addEventListener('input', hot_reload);
document.getElementById("lxl_markdown_italic").addEventListener('input', hot_reload);
document.getElementById("lxl_string").addEventListener('input', hot_reload);
document.getElementById("lxl_symbol").addEventListener('input', hot_reload);
document.getElementById("lxl_number").addEventListener('input', hot_reload);
document.getElementById("lxl_paren2").addEventListener('input', hot_reload);
document.getElementById("lxl_keyword2").addEventListener('input', hot_reload);
document.getElementById("lxl_function").addEventListener('input', hot_reload);
document.getElementById("lxl_diff_add").addEventListener('input', hot_reload);
document.getElementById("lxl_ignore").addEventListener('input', hot_reload);
document.getElementById("lxl_paren1").addEventListener('input', hot_reload);

function generate_lua() {
    generated_code = ` -- generated using lite-xl designer
local style = require "core.style"
local common = require "core.common"

style.background = { common.color "${document.getElementById("lxl_background").value}" }  -- Docview
style.background2 = { common.color "${document.getElementById("lxl_background2").value}" } -- Treeview
style.background3 = { common.color "${document.getElementById("lxl_background3").value}" } -- Command view
style.text = { common.color "${document.getElementById("lxl_text").value}" }
style.caret = { common.color "${document.getElementById("lxl_caret").value}" }
style.accent = { common.color "${document.getElementById("lxl_accent").value}" }
style.dim = { common.color "${document.getElementById("lxl_dim").value}" }
style.divider = { common.color "${document.getElementById("lxl_divider").value}" } -- Line between nodes
style.selection = { common.color "${document.getElementById("lxl_selection").value}" }
style.line_number = { common.color "${document.getElementById("lxl_number").value}" }
style.line_number2 = { common.color "#83838f" } -- With cursor
style.line_highlight = { common.color "${document.getElementById("lxl_line_highlight").value}" }
style.scrollbar = { common.color "${document.getElementById("lxl_scrollbar").value}" }
style.scrollbar2 = { common.color "${document.getElementById("lxl_scrollbar2").value}" } -- Hovered
style.scrollbar_track = { common.color "${document.getElementById("lxl_scrollbar_track").value}" }
style.nagbar = { common.color "${document.getElementById("lxl_nagbar").value}" }
style.nagbar_text = { common.color "${document.getElementById("lxl_nagbar_text").value}" }
style.nagbar_dim = { common.color "rgba(0, 0, 0, 0.45)" }
style.drag_overlay = { common.color "rgba(255,255,255,0.1)" }
style.drag_overlay_tab = { common.color "${document.getElementById("lxl_drag_overlay_tab").value}" }
style.good = { common.color "${document.getElementById("lxl_good").value}" }
style.warn = { common.color "${document.getElementById("lxl_warn").value}" }
style.error = { common.color "${document.getElementById("lxl_error").value}" }
style.modified = { common.color "${document.getElementById("lxl_modified").value}" }

style.syntax["normal"] = { common.color "${document.getElementById("lxl_normal").value}" }
style.syntax["symbol"] = { common.color "${document.getElementById("lxl_symbol").value}" }
style.syntax["comment"] = { common.color "${document.getElementById("lxl_comment").value}" }
style.syntax["keyword"] = { common.color "${document.getElementById("lxl_keyword").value}" }  -- local function end if case
style.syntax["keyword2"] = { common.color "${document.getElementById("lxl_keyword2").value}" } -- self int float
style.syntax["number"] = { common.color "${document.getElementById("lxl_number").value}" }
style.syntax["literal"] = { common.color "${document.getElementById("lxl_literal").value}" }  -- true false nil
style.syntax["string"] = { common.color "${document.getElementById("lxl_string").value}" }
style.syntax["operator"] = { common.color "${document.getElementById("lxl_operator").value}" } -- = + - / < >
style.syntax["function"] = { common.color "${document.getElementById("lxl_function").value}" }

style.log["INFO"]  = { icon = "i", color = style.text }
style.log["WARN"]  = { icon = "!", color = style.warn }
style.log["ERROR"] = { icon = "!", color = style.error }
    `
    // thanks to https://stackoverflow.com/a/18197341/23246686
    download('theme.lua', generated_code);
}

function asdf() {
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

// Load the image:
fetch('/main.svg')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(svgContent => {
        document.getElementById("PLACE_IMAGE_HERE").innerHTML = svgContent;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

document.getElementById("lxl_text").addEventListener('input', asdf);
document.getElementById("lxl_line_number").addEventListener('input', asdf);
document.getElementById("lxl_warn").addEventListener('input', asdf);
document.getElementById("lxl_selection").addEventListener('input', asdf);
document.getElementById("lxl_dim").addEventListener('input', asdf);
document.getElementById("lxl_accent").addEventListener('input', asdf);
document.getElementById("lxl_background2").addEventListener('input', asdf);
document.getElementById("lxl_scrollbar").addEventListener('input', asdf);
document.getElementById("lxl_line_number2").addEventListener('input', asdf);
document.getElementById("lxl_drag_overlay_tab").addEventListener('input', asdf);
document.getElementById("lxl_nagbar_text").addEventListener('input', asdf);
document.getElementById("lxl_guide_highlighting").addEventListener('input', asdf);
document.getElementById("lxl_scrollbar2").addEventListener('input', asdf);
document.getElementById("lxl_line_highlight").addEventListener('input', asdf);
document.getElementById("lxl_guide").addEventListener('input', asdf);
document.getElementById("lxl_modified").addEventListener('input', asdf);
document.getElementById("lxl_error").addEventListener('input', asdf);
document.getElementById("lxl_good").addEventListener('input', asdf);
document.getElementById("lxl_background").addEventListener('input', asdf);
document.getElementById("lxl_background3").addEventListener('input', asdf);
document.getElementById("lxl_divider").addEventListener('input', asdf);
document.getElementById("lxl_caret").addEventListener('input', asdf);
document.getElementById("lxl_scrollbar_track").addEventListener('input', asdf);
document.getElementById("lxl_nagbar").addEventListener('input', asdf);
document.getElementById("lxl_paren5").addEventListener('input', asdf);
document.getElementById("lxl_paren4").addEventListener('input', asdf);
document.getElementById("lxl_normal").addEventListener('input', asdf);
document.getElementById("lxl_paren_unbalanced").addEventListener('input', asdf);
document.getElementById("lxl_exclude").addEventListener('input', asdf);
document.getElementById("lxl_keyword").addEventListener('input', asdf);
document.getElementById("lxl_diff_del").addEventListener('input', asdf);
document.getElementById("lxl_literal").addEventListener('input', asdf);
document.getElementById("lxl_operator").addEventListener('input', asdf);
document.getElementById("lxl_comment").addEventListener('input', asdf);
document.getElementById("lxl_markdown_bold_italic").addEventListener('input', asdf);
document.getElementById("lxl_markdown_bold").addEventListener('input', asdf);
document.getElementById("lxl_paren3").addEventListener('input', asdf);
document.getElementById("lxl_markdown_italic").addEventListener('input', asdf);
document.getElementById("lxl_string").addEventListener('input', asdf);
document.getElementById("lxl_symbol").addEventListener('input', asdf);
document.getElementById("lxl_number").addEventListener('input', asdf);
document.getElementById("lxl_paren2").addEventListener('input', asdf);
document.getElementById("lxl_keyword2").addEventListener('input', asdf);
document.getElementById("lxl_function").addEventListener('input', asdf);
document.getElementById("lxl_diff_add").addEventListener('input', asdf);
document.getElementById("lxl_ignore").addEventListener('input', asdf);
document.getElementById("lxl_paren1").addEventListener('input', asdf);

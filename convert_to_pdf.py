#!/usr/bin/env python3
"""
Convert CLIENT_WALKTHROUGH.md to HTML for PDF printing
"""

import markdown

# Read markdown file
with open('CLIENT_WALKTHROUGH.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# Convert markdown to HTML
html_body = markdown.markdown(md_content, extensions=['tables', 'fenced_code', 'nl2br'])

# Create styled HTML
html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dosti Restaurant - Website Walkthrough</title>
    <style>
        @media print {{
            @page {{
                size: A4;
                margin: 2cm;
            }}
            body {{
                font-size: 11pt;
            }}
            h1, h2, h3 {{
                page-break-after: avoid;
            }}
            table, figure, img {{
                page-break-inside: avoid;
            }}
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #fff;
        }}
        
        h1 {{
            color: #C85A3E;
            border-bottom: 4px solid #C85A3E;
            padding-bottom: 15px;
            margin-top: 40px;
            font-size: 2.5em;
            font-weight: 700;
        }}
        
        h1:first-of-type {{
            margin-top: 0;
        }}
        
        h2 {{
            color: #5D4E37;
            margin-top: 35px;
            margin-bottom: 15px;
            font-size: 1.8em;
            font-weight: 600;
            border-left: 5px solid #C85A3E;
            padding-left: 15px;
        }}
        
        h3 {{
            color: #2C1810;
            margin-top: 25px;
            margin-bottom: 12px;
            font-size: 1.3em;
            font-weight: 600;
        }}
        
        hr {{
            border: none;
            border-top: 2px solid #C85A3E;
            margin: 40px 0;
        }}
        
        p {{
            margin: 12px 0;
            text-align: justify;
        }}
        
        strong {{
            color: #C85A3E;
            font-weight: 600;
        }}
        
        em {{
            color: #5D4E37;
        }}
        
        code {{
            background-color: #f5f5f5;
            padding: 3px 8px;
            border-radius: 4px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.9em;
            color: #d63384;
        }}
        
        pre {{
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 6px;
            overflow-x: auto;
            border-left: 4px solid #C85A3E;
        }}
        
        pre code {{
            background: none;
            padding: 0;
            color: #333;
        }}
        
        ul, ol {{
            margin: 15px 0;
            padding-left: 30px;
        }}
        
        li {{
            margin-bottom: 10px;
            line-height: 1.7;
        }}
        
        ul ul, ol ol {{
            margin-top: 8px;
            margin-bottom: 8px;
        }}
        
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }}
        
        th, td {{
            border: 1px solid #ddd;
            padding: 14px;
            text-align: left;
        }}
        
        th {{
            background-color: #C85A3E;
            color: white;
            font-weight: 600;
        }}
        
        tr:nth-child(even) {{
            background-color: #fafafa;
        }}
        
        tr:hover {{
            background-color: #f5f5f5;
        }}
        
        blockquote {{
            border-left: 5px solid #C85A3E;
            padding-left: 25px;
            margin-left: 0;
            margin-right: 0;
            font-style: italic;
            color: #666;
            background-color: #fafafa;
            padding: 15px 15px 15px 25px;
            border-radius: 4px;
        }}
        
        a {{
            color: #C85A3E;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s;
        }}
        
        a:hover {{
            border-bottom-color: #C85A3E;
        }}
        
        .header-subtitle {{
            color: #666;
            font-size: 1.2em;
            font-weight: 400;
            margin-top: -10px;
            margin-bottom: 30px;
        }}
        
        /* Print button */
        .print-button {{
            position: fixed;
            top: 20px;
            right: 20px;
            background: #C85A3E;
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(200, 90, 62, 0.3);
            transition: all 0.3s;
            z-index: 1000;
        }}
        
        .print-button:hover {{
            background: #a84a30;
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(200, 90, 62, 0.4);
        }}
        
        @media print {{
            .print-button {{
                display: none;
            }}
        }}
        
        /* Emoji styling */
        .emoji {{
            font-style: normal;
        }}
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">🖨️ Print to PDF</button>
    
    {html_body}
    
    <script>
        // Add print keyboard shortcut
        document.addEventListener('keydown', function(e) {{
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {{
                e.preventDefault();
                window.print();
            }}
        }});
    </script>
</body>
</html>"""

# Write HTML file
with open('walkthrough.html', 'w', encoding='utf-8') as f:
    f.write(html_content)

print("✅ HTML file created successfully: walkthrough.html")
print("📄 Open walkthrough.html in your browser and use File > Print > Save as PDF")

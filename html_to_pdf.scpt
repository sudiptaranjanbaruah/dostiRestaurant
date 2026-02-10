#!/usr/bin/osascript
# AppleScript to convert HTML to PDF using Safari

set htmlFile to POSIX file "/Users/sudiptaranjanbaruah/Public/dosti/walkthrough.html"
set pdfFile to POSIX file "/Users/sudiptaranjanbaruah/Public/dosti/walkthrough.pdf"

tell application "Safari"
    activate
    open htmlFile
    delay 3
    
    tell application "System Events"
        keystroke "p" using command down
        delay 2
        keystroke "p" using {command down, shift down}
        delay 1
        keystroke "walkthrough"
        delay 1
        keystroke return
    end tell
    
    delay 2
    quit
end tell

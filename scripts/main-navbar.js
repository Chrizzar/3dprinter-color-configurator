document.write('\
\
<header>\
    <nav class="new-navbar">\
        <div class="branding"><a href="index.html" class="home">Home</a>\
        </div>\
\
        <div class="hamburger-spacer">\
            <label for="input-hamburger" class="hamburger"></label>\
        </div>\
        <input type="checkbox" id="input-hamburger" hidden>\
\
        <ul class="menu">\
            <li class="has-dropdown">\
                <a href="#" class="menu-link">About us\
                    <span class="arrow"></span>\
                </a>\
                <ul class="submenu">\
                    <li><a href="contact.html" class="menu-link">Contact</a></li>\
                    <li><a href="terms-of-use.html" class="menu-link">Terms of use</a></li>\
                    <li><a href="feedback.html" class="menu-link">Feedback</a></li>\
                </ul>\
            </li>\
            <li><a href="roadmap.html">Roadmap</a></li>\
            <li><a href="support-me.html" style="font-weight: bold;">Support Me</a></li>\
        </ul>\
    </nav>\
</header>\
\
');
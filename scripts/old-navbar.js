document.write('\
\
<header>\
    <a href="index.html" class="logo">Home</a>\
\
    <input type="checkbox" id="menu-bar">\
    <label for="menu-bar" class="icon">\
        <div class="hamburger" onclick="changeHamburger(this)">\
            <div class="bar1"></div>\
            <div class="bar2"></div>\
            <div class="bar3"></div>\
        </div>\
    </label>\
\
    <nav class="new-navbar">\
        <ul>\
            <li><a href="#">About us <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="contact.html">Contact</a></li>\
                    <li><a href="terms-of-use.html">Terms of use</a></li>\
                    <li><a href="feedback.html">Feedback</a></li>\
                </ul>\
            </li>\
            <li><a href="roadmap.html">Roadmap</a></li>\
            <li><a href="support-me.html" style="font-weight: bold;">Support Me</a></li>\
        </ul>\
    </nav>\
</header>\
\
');
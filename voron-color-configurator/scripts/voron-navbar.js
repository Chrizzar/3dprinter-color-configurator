document.write('\
\
<!-- Navbar -->\
<header>\
    <a href="../voron-color-configurator.html" class="logo">Home</a>\
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
            <!-- Voron V0.1 -->\
            <li><a href="#">Voron V0.1 <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="voron-v0.1-default.html">Default</a></li>\
                    <li><a href="voron-v0.1-8accents.html">8 Accents</a></li>\
                </ul>\
            </li>\
            <!-- Voron Trident -->\
            <li><a href="#">Voron Trident <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="voron-trident-default.html">Default</a></li>\
                    <li><a href="voron-trident-8accents.html">8 Accents</a></li>\
                </ul>\
            </li>\
            <!-- Voron V2.4 -->\
            <li><a href="#">Voron V2.4 <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="voron-v2.4-default.html">Default</a></li>\
                    <li><a href="voron-v2.4-7accents.html">7 Accents</a></li>\
                    <li><a href="voron-v2.4-8accents.html">8 Accents</a></li>\
                </ul>\
            </li>\
            <!-- Voron Switchwire -->\
            <li><a href="#">Voron Switchwire <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="voron-switchwire-default.html">Default</a></li>\
                    <li><a href="voron-switchwire-8accents.html">8 Accents</a></li>\
                </ul>\
            </li>\
            <!-- Voron Legacy -->\
            <li><a href="#">Voron Legacy <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="voron-legacy-default.html">Default</a></li>\
                    <li><a href="voron-legacy-8accents.html">8 Accents</a></li>\
                </ul>\
            </li>\
            <!-- Download Center -->\
            <li><a href="voron-download-center.html">Download Center</a></li>\
            <!-- About us -->\
            <li><a href="#">About us <i class="fa fa-caret-down"></i></a>\
                <ul>\
                    <li><a href="contact.html">Contact</a></li>\
                    <li><a href="terms-of-use.html">Terms of use</a></li>\
                </ul>\
            </li>\
            <!-- Roadmap -->\
            <li><a href="roadmap.html">Roadmap</a></li>\
            <!-- Support Me -->\
            <li><a href="support-me.html" style="font-weight: bold;">Support Me</a></li>\
        </ul>\
    </nav>\
</header>\
\
');
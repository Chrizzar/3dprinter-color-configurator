document.write('\
\
    <div class="controlsModel">\
        <div class="controls">\
            <div class="info  textCenter unselectable">\
                <div class="info__message desktop">\
                    <p><strong>&nbsp;Grab&nbsp;</strong>to rotate the printer. <strong>&nbsp;Scroll&nbsp;</strong>to zoom. <strong>&nbsp;Drag&nbsp;</strong>colors to view more.</p>\
                </div>\
\
                <div class="info__message mobile">\
                    <p><strong>&nbsp;Touch&nbsp;</strong>to rotate the printer.<br> <strong>&nbsp;Pinch&nbsp;</strong>to zoom. <strong>&nbsp;Drag&nbsp;</strong>colors to view more.</p>\
                </div>\
            </div>\
            <!-- This tray will be filled with colors via JS, and the ability to slide this panel will be added in with a lightweight slider script (no dependency used for this) -->\
            <div id="js-tray" class="tray">\
                <div id="js-tray-slide" class="tray__slide"></div>\
            </div>\
\
            <div style="position: relative;" class="drag-here center-content unselectable">\
                <div class="center-content drag-here-position" style="">\
                    <div style="float: left" class="arrow-left"></div>\
                    <span><b>Drag Here</b></span>\
                    <div style="float: right" class="arrow-right"></div>\
                </div>\
            </div>\
\
            <div class="info-mobile textCenter unselectable">\
                <div class="info__message">\
                    <p><strong>&nbsp;Touch&nbsp;</strong>to rotate the printer.<br> <strong>&nbsp;Pinch&nbsp;</strong>to zoom. <strong>&nbsp;Drag&nbsp;</strong>colors to view more.</p>\
                </div>\
            </div>\
        </div>\
    </div>\
\
');
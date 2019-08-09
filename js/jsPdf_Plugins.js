(function(API) {
    API.textAlign = function(txt, options, x, y) {
            options = options || {};

            var fontSize = this.internal.getFontSize();

            var pageWidth = this.internal.pageSize.width;

            var txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;

            if (options.align === "center") {

                    x = (pageWidth - txtWidth) / 2;

            } else if (options.align === "centerAtX") { // center on X value

                    x = x - (txtWidth / 2);

            } else if (options.align === "right") {

                    x = x - txtWidth;
            }

            this.text(txt, x, y);
    };

    API.getLineHeight = function(txt) {
            return this.internal.getLineHeight();
    };

})(jsPDF.API);

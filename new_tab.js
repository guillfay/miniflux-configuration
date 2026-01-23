(function () {
    'use strict';

    function openArticle(article, openInMinifluxReader) {
        let articleURL = openInMinifluxReader
            ? article.querySelector(".item-header h2 a").href
            : article.querySelector(".item-meta-icons-external-url a").href;
        if (window.open(articleURL, "miniflux-viewer")) {
            article
                .querySelector(".item-meta-icons-read button[data-value=unread]")
                .click();
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".entry-item .item-title a").forEach(a => {
            a.addEventListener("click", function (ev) {
                ev.preventDefault();
                let article = a.parentElement.parentElement.parentElement;
                openArticle(article, ev.metaKey);
            });
        });
    });

})();
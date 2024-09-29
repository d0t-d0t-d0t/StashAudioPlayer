// Stash Audio Player
(function() {
    'use strict';

    const {
        waitForElement,
        PathElementListener
    } = window.csLib;

    function setAudioElement(bool) {
        const pl = document.querySelector(".VideoPlayer");
        var elm = document.getElementById('VideoJsPlayer_html5_api');
        const sourceElements = Array.from(document.querySelectorAll("#VideoJsPlayer > div.vjs-control-bar > div.vjs-source-selector.vjs-menu-button.vjs-menu-button-popup.vjs-control.vjs-button > div > ul > li > span.vjs-menu-item-text"));
        const hlsButton = sourceElements.find(el => el.textContent.trim().toLowerCase() === "hls");
        if (bool) {
            const videoElement = elm;
            pl.classList.add("audio");
            document.querySelector(".VideoPlayer .video-wrapper").before(document.querySelector(".vjs-poster"));
            if (hlsButton){
                hlsButton.click()
            }
        } else {
            const audioElement = elm;
            document.getElementById('VideoJsPlayer_html5_api').after(document.querySelector(".vjs-poster"));
            pl.classList.remove("audio")
            sourceElements[0].click()
        }
    }

    function audioswitch() {
        const elm = document.querySelector(".scene-toolbar-group");
        const btng = document.createElement("div");
        const btn = document.createElement("button");
        const pl = document.querySelector(".VideoPlayer");
        if (pl.classList.contains("audio")) {
            btn.style.background = "rgba(138,155,168,.15)";
        }
        btn.id = "audioSwitch";
        btn.classList.add("minimal", "btn", "btn-secondary");
        btn.innerHTML = "Audio Only";
        btn.onclick = function() {
            const pl = document.querySelector(".VideoPlayer");
            const bt = document.getElementById("audioSwitch");
            if (pl.classList.contains("audio")) {
                setAudioElement(false);
                bt.style.background = "transparent";
            } else {
                setAudioElement(true);
                bt.style.background = "rgba(138,155,168,.15)";
            }
        };
        btng.classList.add("btn-group");
        btng.appendChild(btn);
        elm.appendChild(btng);
    }

    function findAudioTag() {
        const links = document.querySelectorAll('.tag-item a');
        if (links) {
            links.forEach(link => {
                const divText = link.querySelector('div').textContent.trim();
                if (divText === "Audio") {
                    setAudioElement(true);
                }
            });
        }
    }

    PathElementListener('/scenes/', "#VideoJsPlayer > div.vjs-control-bar > div.vjs-source-selector.vjs-menu-button.vjs-menu-button-popup.vjs-control.vjs-button > div > ul > li > span.vjs-menu-item-text",
    function () {
        waitForElement(".tag-item", findAudioTag);
        waitForElement(".scene-toolbar-group", audioswitch);
    })

})();

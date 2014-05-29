---
layout: post
title: Sencha Touch Delta Update Troubleshooting
published: false
---


I had to do an extensive investigation of a project today to work out why delta updates weren't working. Here was my process:

- Update sencha command to v4.0.4.84
- Create a new project with sencha command from touch v2.3.1.
- Check if delta updates work in that

They didn't. After investigation, I needed to edit ./sencha/microloader/production.js

{% highlight diff %}
--- a/.sencha/app/microloader/production.js
+++ b/.sencha/app/microloader/production.js
@@ -305,7 +305,7 @@
                     }
                 }
                 else if (checksumType == 'f') {
-                    if (content.substring(9, versionLn + 9) !== version) {
+                    if (content.substring(10, versionLn + 10) !== version) {
                         checksumFail = true;
                     }
                 }

{% endhighlight %}

This could be due to a mismatch in the way CMD produces deltas and the way microloader/production handles checksums - perhaps there's a combination of versions that works together flawlessly.

Then, a checklist of things in my existing project:

- Ensure the html tag has a manifest attribute
- Make sure delta updates are set for the right files in app.json
- Make sure there's an appcache section in app.json

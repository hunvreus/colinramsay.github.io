---
layout: post
title: React Native - Super Simple Native Module Example
published: true
---

UPDATE: The API for this [changed slightly](https://github.com/facebook/react-native/commit/0686b0147c8c8084e4a226b7ea04585362eccea8#diff-6dc01074330d7af8d99288cad5a021b7) on 9th April. Rather than using just RCT\_EXPORT you must use RCT\_EXPORT\_MODULE for the class and RCT\_EXPORT\_METHOD on the methods you want to export. The article has been amended to reflect this.

For whatever reason, you want to send a string from the Obj-C side down to React Native. One example might be to do something with the device's file system, like retrieve the path of a resource or document. In Xcode, use File > New > File... to create a new Cocoa Touch class that extends NSObject. I've called the class SomeString:

{% highlight objective-c %}
//  SomeString.h

#import "RCTBridgeModule.h"

@interface SomeString : NSObject<RCTBridgeModule>

@end

//  SomeString.m
#import "SomeString.h"

@implementation SomeString

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(get:(RCTResponseSenderBlock)callback)
{ 
  // Change this depending on what you want to retrieve:
  NSString* someString = @"something";
  
  callback(@[someString]);
}

@end
{% endhighlight %}

RCT_EXPORT makes the method available to React Native. Notice that we need to use a callback in order to send a value back to JS, we can't just return it from the method. That means that the calling JavaScript looks like this:

{% highlight javascript %}
var ss = require('NativeModules').SomeString;

ss.get(someString => {
    console.log(someString);
});
{% endhighlight %}

If you've got the Chrome Debugger open (press CMD+D in the Simulator to pop it open) then you'll see your string logged in the console. Easy peasy!

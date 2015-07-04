---
layout: post
title: React Native - Event Emitters
published: true
---

Events are a great way of communicating between components, but they should be used carefully to avoid creating an unfathomable mess of interconnections. In this example, we'll show how to use an event emitter to allow a React Native NavigatorIOS to talk to its child components.

{% highlight javascript %}
{% raw %}
'use strict';

var React = require('react-native');
var EventEmitter = require('EventEmitter');
var Subscribable = require('Subscribable');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} = React;
{% endraw %}
{% endhighlight %}

First we pull in all of our requirements including the EventEmitter and Subscribable.

{% highlight javascript %}
{% raw %}
var App = React.createClass({
    componentWillMount: function() {
        this.eventEmitter = new EventEmitter();
    },

    onRightButtonPress: function() {
        this.eventEmitter.emit('myRightBtnEvent', { someArg: 'argValue' });
    },

    render: function() {
        return <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Test',
                    component: Test,
                    rightButtonTitle: 'Change String',
                    onRightButtonPress: this.onRightButtonPress,
                    passProps: {
                        events: this.eventEmitter
                    }
                }}/>
    }
});
{% endraw %}
{% endhighlight %}

In our main top-level component, we create a new EventEmitter (in `componentWillMount`) to be available across the component, and then use `passProps` to pass it down to the `Test` component we specify for the navigator.

We also define a handler for the right button press, which emits a `myRightBtnEvent` with some dummy arguments when that button is pressed. Now, in the `Test` child component:

{% highlight javascript %}
{% raw %}
var Test = React.createClass({
    mixins: [Subscribable.Mixin],

    getInitialState: function() {
        return {
            variable: 'original string'
        };
    },

    componentDidMount: function() {
        this.addListenerOn(this.props.events, 'myRightBtnEvent', this.miscFunction);
    },

    miscFunction: function(args){
        this.setState({
            variable: args.someArg
        });
    },
    render: function(){
        return(
            <View style={styles.scene}><Text>{this.state.variable}</Text></View>
        )
    }
});
{% endraw %}
{% endhighlight %}

We add the `Subscribable` mixin, and the only other thing we need to do is listen out for the `myRightBtnEvent` being fired from the `App` component and hook `miscFunction` up to it. The `miscFunction` will be passed the dummy arguments from the `App` press handler so we can use those to set state or perform other actions.

[You can see a working version of this on RNPlay](https://rnplay.org/apps/H5mMNQ) and the [source code can be found on Github](https://github.com/colinramsay/react-native-event-emitters).
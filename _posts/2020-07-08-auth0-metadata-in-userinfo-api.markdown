Auth0's [Get User Info](https://auth0.com/docs/api/authentication#get-user-info) endpoint does not include any user or app metadata. In order to do this, you can create a rule in their dashboard:

```
function (user, context, callback) {
  const namespace = 'https://changeme/';
  
  context.idToken[namespace + 'user_metadata'] = user.user_metadata;
  context.idToken[namespace + 'app_metadata'] = user.app_metadata;
  
  callback(null, user, context);
}
```

The namespace is arbitrary. One very important detail: rules only run when the user authenticates so if you try this you'll need to log the user out then back in again after saving the rule.

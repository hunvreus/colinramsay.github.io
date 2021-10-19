I've got a [working NixOS setup](https://github.com/colinramsay/nix-config/) which I'd like to convert to use Flakes in order to improve reproduceablility. I had a scenario recently whereby I updated the channels I was subscribed to and then rebuilt, and had a build error. There's no way to roll back the channel update in that case. Flakes should fix this, because my current build will pin the commit hashes of versions it was built with.

The information in this post can be found in various wikis, gists and blog posts. I'm just going to explain how I got it to work on my setup with the aid of some diffs.

# Adding Nix Flakes

Since Flakes are still experimental, we need to add them to our configuration:

```
--- a/configuration.nix
+++ b/configuration.nix
@@ -5,6 +5,14 @@
 { config, pkgs, ... }:
 
 {
+  nix = {
+    package = pkgs.nixUnstable;
+    extraOptions = ''
+      experimental-features = nix-command flakes
+    '';
+   };
+

```

https://github.com/colinramsay/nix-config/commit/44c5e96ab3e6f78d5861dc04a98dba458e9a0a00

And then rebuild and switch to this new configuration with `sudo nixos-rebuild switch`. I can then run `nix flake init` to get a new flake.nix file, but we're going to ignore the contents of that and use the following:

```
{
  outputs = { self, nixpkgs }: {
    nixosConfigurations.localhost = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      modules = [ ./configuration.nix ];
    };
  };
}
```

Now if you rebuild, nix will detect the flake.nix file and start downloading a bunch of stuff

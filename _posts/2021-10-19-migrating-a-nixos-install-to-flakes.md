---
layout: post
title: Migrating a NixOS Install to Flakes
published: true
---

I've got a [working NixOS setup](https://github.com/colinramsay/nix-config/) which I'd like to convert to use Flakes in order to improve reproduceablility. I had a scenario recently whereby I updated the channels I was subscribed to and then rebuilt, and had a build error. There's no way to roll back the channel update in that case. Flakes should fix this, because my current build will pin the commit hashes of versions it was built with.

The information in this post can be found in various wikis, gists and blog posts. I'm just going to explain how I got it to work on my setup with the aid of some diffs.

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

And then rebuild and switch to this new configuration with `sudo nixos-rebuild switch`. I can then run `nix flake init` to get a new flake.nix file, but we're going to ignore the contents of that and use the following:

```
{
  # the source of your packages
  inputs = {
    # normal nix stuff
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-21.05";
    # home-manager stuff
    home-manager.url = "github:nix-community/home-manager/release-21.05";

    # use the version of nixpkgs we specified above rather than the one HM would ordinarily use
    home-manager.inputs.nixpkgs.follows = "nixpkgs";
  };

  # what will be produced (i.e. the build)
  outputs = inputs: {
    # define a "nixos" build
    nixosConfigurations.nixos = inputs.nixpkgs.lib.nixosSystem {
      # system to build for
      system = "x86_64-linux";
      # modules to use
      modules = [
        ./configuration.nix # our previous config file
        inputs.home-manager.nixosModules.home-manager # make home manager available to configuration.nix
        {
          # use system-level nixpkgs rather than the HM private ones
          # "This saves an extra Nixpkgs evaluation, adds consistency, and removes the dependency on NIX_PATH, which is otherwise used for importing Nixpkgs."
          home-manager.useGlobalPkgs = true;
        }
      ];
    };
  };
}
```

Then remove the existing reference to home-manager from configuration.nix which Flakes considers to be impure:

```
--- a/configuration.nix
+++ b/configuration.nix
@@ -117,7 +117,7 @@
 
   imports = [ # Include the results of the hardware scan.
     ./hardware-configuration.nix
-    <home-manager/nixos>
+    #<home-manager/nixos>
   ];
```

https://github.com/colinramsay/nix-config/commit/116f06c2bf30e9ce65f27323c77d2bee351aa755

Now if you rebuild, nix will detect the flake.nix file and start downloading a bunch of stuff and build your system, depositing a flake.lock file in your working directory which you can commit to source control. This contains the revisions of nixpkgs and home-manager that the system was built from so it can be rebuilt if necessary.

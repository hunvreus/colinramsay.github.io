
---
layout: post
title: Source Controlled Linux
published: false
---

# The problem

I have a passionate desire to _fix_ the current state of my Linux installation, and to be able to know when files have changed and either revert the changes or store them in source control. Why do I want to do this? Several reasons:

- I like the idea that my system is _disposable_. It should be easy to blow away a Linux install because I know I can restore it easily.
- Rather than being an assemblage of cruft built up over the years, I want it to be surgically pruned as each change is made, with comments where necessary to help me remember why a change was made.
- I don't want the installation of a package to do unknown things to my system - I like transparency.
- I just like the idea of it. Stop messing with my stuff, stuff.

# The options

## Nix/NixOS

I've posted several times about NixOS and I'm still fascinated by the idea. My last attempt with it followed the "[Erase Your Darlings](https://grahamc.com/blog/erase-your-darlings/)" concept, which uses a temporary filesystem that wipes out any changes you haven't explicitly configured. As has been written about at length, Nix is a wonderful _idea_, with a brilliant technical implementation, but terrible user-friendliness. Inevitably you'll come across something that takes hours of debugging and fiddling, and ultimately life's too short.

I also investigated using Nix with Home Manager on a normal Linux distro. This is a worst-of-both-worlds situation, in which Nix's shebang doesn't play nicely with everything else. As a side note, Home Manager should be integrated into Nix itself.

## Fedora Silverblue, Universal Blue, and the like

Here's what I understand: Silverblue is an immutable Linux distribution that allows you to update in an atomic fashion, and roll back in the event of problems. It allows the user to install applications with Flatpak, isolating those applications from the system at large. Universal Blue takes this concept and produces several derived images such as Bluefin or Bazite, which offer variations of Silverblue for things like gaming. In addition to that, it purports to allow the production of custom images which include changes that you opt to include.

I'm going to caveat this section by saying that I'd like to do more investigation into this genre of work. That said, I feel a bit hampered by the documentation around Universal Blue, which I feel is in its infancy, and that does put me off.

The idea of *Blue is really interesting. By embracing container technologies, there's scope to have an extremely flexible system, and bringing immutability into the mainstream is a valuable effort. My limited experience wasn't very positive: I tried to create a customised Bluefin image, which saw me jump through a series of rube-goldberg hoops within GitHub Actions to try and get a new image to rebase to. At the end of this process, the resulting image had issues and I had no idea how to debug this. Yes, I could revert to the previous image, but I was still stumped as to how to progress. Changing my image customisations means waiting for the GitHub Actions to run again, and rebuild my image, which is a 30-minute+ process. That's a huge iteration loop. 

The infrastructure that has been built for this project is incredible, but even with comprehensive documentation I'm unconvinced that anyone outside of the core group will be able to run with this in a practical fashion.

## Arch (via EndeavourOS) with aconfmgr

[This works](https://github.com/CyberShadow/aconfmgr) by examining your entire system and creating a giant file which describes the files it found. You then need to sort that file as you see fit, and then run it periodically to check what's changed and sort everything again. I tried this briefly a while back, and the overhead of the sorting process and the fact I had to remember to run `aconfmgr save` every so often made it a bit of a non-starter.

## Simple configuration file management

This heading covers a class of utilities that will help you back up key configuration files from your system. This approach is typically used for [dotfiles](https://wiki.archlinux.org/title/Dotfiles) using tools such as [Mackup](https://github.com/lra/mackup), [Chezmoi](https://www.chezmoi.io/) or just plain Git.
[EtcKeeper](https://wiki.archlinux.org/title/etckeeper) is a tool which does a similar thing but for the contents of your /etc directory; I'm currently evaluating both Mackup and EtcKeeper as a simple solution to all of this.

# Sidebar 1 - Declare vs discover

To my mind, there are two ways of looking at this problem:

1. Declare what you want, execute a command, and have it implemented (Nix/Silverblue)
2. Run some stuff, then later, run something else that checks what you did and scripts it out (the others)

Looking at it this way, I suppose I should also be looking at things like Ansible or Puppet for the first option. I've briefly used Ansible and it was fine for _initial setup_. Where I think it might be lacking is for maintenance, since when you make changes to the system there's scope for that to drift from what Ansible/Puppet thinks is the current state. They also both _seem_ to be geared towards server/fleet management. I have limited experience here, so this can go on the todo list.

# Sidebar 2 - Secrets management

I've deliberately skipped over secrets management as that's a whole can of worms I've yet to really think about.

# Conclusion

There's nothing here that satisfies my needs. NixOS and UBlue are impressive technical achievements, but are currently impenetrable for "normal" Linux users. The other options operate on the "discover" rather than "describe" methodology and appeal to me a lot less.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTExNTc1Njk4ODZdfQ==
-->
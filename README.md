Directory Structure 2.0.0 ( DIRS 2 )
-------------------

This folder contains the ideal directory structure for each kind of system, app or project.
It has been freely inspired by Filesystem Hierarchy Standard (FHS) and various other projects but mixing, simplifying and improving concepts.
It can be used for all kind of projects and languages (PHP, Java, C++, Nodejs etc.) but even for Operating Systems.
Of course, depending on the purposes, some directories can be avoided/changed
(e.g. some frameworks can force you to use some directories not expected by this standard).

Feel free to use our issue tracker to send suggestions and opinions.

## Differences with version 1.x

First version of this standard was limited to offer directories where store files and components for each kind of needed situations.
2.x version adds layer specifications improving modular software design. Introducing concepts such as:

 * Components awareness
 * Files allocation type
 * Directory sub-structure
 * Context layers (scope)

[Read how to upgrade from 1.x](data/docs/2x/upgrade1x.md)

## Architecture

<a href="https://docs.google.com/drawings/d/e/2PACX-1vTg_4zJzH_ZyHcFA2ovy70qRd3c3dw4gPptKFlgsTAvENWfX19YY8g-Rko57HJsWYvUPXR-NOr9csuB/pub?w=1932&h=1080">
    <img src="https://docs.google.com/drawings/d/e/2PACX-1vTg_4zJzH_ZyHcFA2ovy70qRd3c3dw4gPptKFlgsTAvENWfX19YY8g-Rko57HJsWYvUPXR-NOr9csuB/pub?w=1932&amp;h=1080">
</a>

 - Awareness level: it defines which components can access to others. 
   Components with equal or higher level (top) can access to components with equal or lower level (bottom).
   If you don’t follow this rule you will probably have a bad and no modular software architecture.

 - Allocation: there are 3 kinds of directory/file allocation
    - Static: contains files that should change only after a system update. In some case can have read-only permissions.
    - Variable: subdirectories and files that are writeable and created by the system at runtime.
    - Mixed: used by directories that contains static and variable sub-directories and files. 
             For example default read-only configuration file (static) and the writeable version (variable)

 - Structure: Childs directories of components with a quadrangle form in our architecture module can eventually re-use this structure standards.
   Disk components instead have a more specific structure.


## Directories 

 - / : Root context. This is the first layer of your system/application.

### Core

 - bin: contains compiled executable
 - lib: search path for compiled libraries
 - conf: configuration files

 - src: sources files to be compiled/interpreted
     - includes
     - tests
     - app
     - [...]

 - data: static data
     - database
     - docs
     - languages
     - media
     - [...]

 - var: volatile data
     - build: used by projects that must be built
     - cache
     - logs
     - temp
     - uploads
     - proc
     - [...]

 - srv: data and scripts served by the system (e.g., over network)

### Components:

 - apps: Utilities and applications with an higher level of awareness compared to modules.

 - modules: A module can be everything you need to compose a "system". Such as an addon,plugin,framework etc.
            Normally this folder should be handled by a package manager or __git submodule__.

 - dep: Static dependencies, instead of modules they are pre-installed (eventually can be handled by __git subtree__).
        If you don't need this kind of separation you can use modules folder for both essential dependencies and addons.


### Sub Contexts:

 - sct: subcontext folder.
     - <name of your system/app> ( this folder must be created when you need a second level of compilation, bin folder could be used too )
     - sys: could be used and standardized by an operating system to handle directories related to hardware devices and
        - boot
        - mnt
        - [...]
     - users: folder that can be used by user for its workspace files or second level context
     - [...]
     
    
## Subset examples

Since DIRS 2.0 can be used for a simple application package, or developing workspace or even an operating system, 
you can use varius subsets of this standard that follow your needs. Read some example [HERE](data/docs/2x/subsets.md)


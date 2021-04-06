Directory Structure 2.0.1 ( DIRS 2 )
-------------------

This folder contains the ideal directory structure for each kind of system, app or project.
It has been freely inspired by Filesystem Hierarchy Standard (FHS) and various other projects.
It can be used for all kind of projects and languages (PHP, Java, C++, Nodejs etc.) but even for Operating Systems.
Of course, depending on the purposes, some directories can be avoided/changed
(e.g. some frameworks can force you to use some directories not expected by this standard).

Feel free to use our issue tracker to send suggestions and opinions.

## Architecture

<a href="https://docs.google.com/drawings/d/e/2PACX-1vTg_4zJzH_ZyHcFA2ovy70qRd3c3dw4gPptKFlgsTAvENWfX19YY8g-Rko57HJsWYvUPXR-NOr9csuB/pub?w=1932&h=1080">
    <img src="https://docs.google.com/drawings/d/e/2PACX-1vTg_4zJzH_ZyHcFA2ovy70qRd3c3dw4gPptKFlgsTAvENWfX19YY8g-Rko57HJsWYvUPXR-NOr9csuB/pub?w=1932&amp;h=1080">
</a>

 - Awareness level: it defines which components can access to others. 
   Components with equal or higher level (top) can access to components with equal or lower level (bottom).
   Not following this rules can probably cause a bad and no modular software architecture.

 - Allocation: there are 3 kinds of directory/file allocation
     
    1. Static: contains files that should change only after a system update. In some case it's set with read-only permissions.
    2. Variable: subdirectories and files that are writeable and created by the system at runtime.
    3. Mixed: used by directories with both static and variable content. For example in conf folder you can have the default read-only configuration file (static) and the writeable version (variable)

 - Structure: Childs directories of components with a quadrangle shape (pictrue above) can eventually re-use this structure standards.
   Components with Disk shape instead have a more specific structure.


## Directories 

 - / : root context. This is the first layer of your system/application.

### Core

 - bin: contains compiled executable
 - lib: search path for compiled libraries
 - conf: configuration files

 - src: sources files to be compiled/interpreted
     - includes
     - tests
     - app
     - [...]
 NOTE: src folder should not re-use the directory-structure standards, but in some cases you must put conf/ and data/
 folders under src because of compiling tools limitations.

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

 - deps: Static dependencies, instead of modules they are pre-installed (eventually can be handled by __git subtree__).
        If you don't need this kind of separation you can use modules folder for both essential dependencies and addons.
        
Note: plural form of folder above is used to emphasize the modular purpose.


### Sub Environments:

 - env: container of sub environments

   - <name of your system/app> : you could create an extra environment for your app creating extra levels of awareness.

   - users: folder that can be used by user for its workspace files or second level context

   - sys: could be used and standardized by an operating system to handle directories related to hardware devices etc.
   
   - [...]

     
    
## Subset examples

Since DIRS 2.0 can be used for a simple application package, a developing workspace or even an operating system, 
You can use varius subsets of this standard that follow your needs. Read some example [HERE](data/docs/2x/subsets.md)

## Differences with version 1.x

First version of this standard was limited to offer directories where store files and components for each kind of needed situations.

Version 2 instead adds multiple specifications to improve modular software design. Introducing concepts such as:

 * Awareness level
 * Files allocation type
 * Directory sub-structure
 * Context layers (scope)

[Read how to upgrade from 1.x](data/docs/2x/upgrade1x.md)


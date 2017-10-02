Note: if your project is a child component, then bin/lib folder could be linked to the parent directories
      and you can use variable directory of parent layer instead. In some cases you're forced to do it.

## Local pre-compiled project (simple)
e.g., application or game without sources

- bin
- lib
- data
- conf
- var


## Local interpreted project (simple)
e.g., python apps, nodejs/php console apps etc.

- bin
- lib
- src
- data
- conf
- var


## Local interpreted modular project (complex)
e.g., python apps, nodejs/php console apps etc.

- apps
- bin
- lib
- src
- modules
- dep
- data
- conf
- var

## Network modular project (complex)
e.g., websites, web services, server applications, LAN utilities

- srv (often called public/ under web projects)
- apps
- bin
- lib
- src
- modules
- dep
- data
- conf
- var

## Operating system or container

 - bin
 - lib
 - conf
 - data
 - var
 - srv
 - apps
 - modules
 - dep
 - env
     - sys
        - boot
        - mnt
        - [...]
     - users

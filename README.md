Directory Structure
-------------------

This folder contains the ideal directory structure for each kind of system / project.
It has been freely inspired by linux directory structure.
Of course, depending on the purposes, some directories can be avoided.

 - bin ( contains binaries/scripts for this context/system )
 - configs ( sytem/application configuration files )
 - data
     - var ( all volatile data )
         - cache
         - logs
         - temp
         - uploads
     - database
     - resources
         - docs
         - languages
     - media
 - lib ( search path for all compiled libraries )
 - modules ( modules for a local/sandbox environment, each module can reuse this same kind of directory structure if required.
                A module can be everything you need to compose a "system" )
 - opt ( optional modules/packages )
 - src ( contains the sources files strictly related to this context/project )
     - includes
     - tests
 - usr ( folder that can be used by user for its workspace files or second level modules ) 

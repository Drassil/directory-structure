Directory Structure
-------------------

This folder contains the ideal directory structure for almost **all kind** application / project.

 - bin ( contains binaries/scripts for the application )
 - configs ( application configuration files )
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
 - modules ( modules for a local/sandbox environment,  each module can reuse this same kind of directory structure if required )
	 -  lib ( search path for all compiled libraries )
 - src ( contains the sources files strictly related to this project )
	 - includes
	 - tests

There are few changes to directories of 1.x specifications

 - build ( if you're working on a project that must be built, then this is the directory )

 - configs -> renamed to conf
 
 - data
     - var -> moved outside data, in root directory of your project.

 - opt -> you should use apps or modules folder instead. Depending on awareness (read 2.x documentation)
 
 - usr -> if you need this you must move this directory under env/ and would be better to rename in "users" to avoid collision with 
          FHS usr/ (Unix System Resources).

define(['durandal/system',
      'mockData/inputWorkFlow'
   ], function(system, inputWorkflow) {

      var data = {
          "Input WorkFlow": inputWorkflow.cards
      };

      var names = [];

      for (var prop in data) {
         if (data.hasOwnProperty(prop)) {
            names.push(prop);
         }
      }

      var service = {};

      service.catalogNames = function() {
         system.log("******** Getting catalog names");
         return system.defer(function(dfd) {
            dfd.resolve(names);
         });
      };

      service.getCards = function(name) {
         system.log("******** Getting cards");
         return system.defer(function(dfd) {
            if (data[name]) {
               dfd.resolve(data[name]);
            } else {
               dfd.reject();
            }
         });
      };

      return service;
   });
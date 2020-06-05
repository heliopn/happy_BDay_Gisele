'use strict';
module.exports = function(app) {
  var bdayList = require('../controllers/BDayController');

  // todoList Routes
  app.route('/')
    .get(bdayList.show_All_names)
    .post(bdayList.create_a_name);


  app.route('/:url')
    .get(bdayList.read_a_url)
    .put(bdayList.update_a_url)
    .delete(bdayList.delete_a_url);
};
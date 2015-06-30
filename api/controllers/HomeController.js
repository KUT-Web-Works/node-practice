/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
   res.view({
     name: 'kawamura',
     age: '20',
   });
   // return res.json({
   //   todo: 'index() is not implemented yet!'
   // });
  }
};


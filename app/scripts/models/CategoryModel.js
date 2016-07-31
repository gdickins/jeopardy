import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: 'http://jservice.io/api/category?id=1',
})

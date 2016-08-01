import Backbone from 'backbone';
import _ from 'underscore';


import CategoryModel from '../models/CategoryModel';

const CategoriesCollection = Backbone.Collection.extend({
  model: CategoryModel,
  url: `http://jservice.io/api/category?id=1`,
  makeNewGame: function(){
    this.reset();

    _(6).times(() => {
      this.add({});
    });

    this.each((categoryModel) => {
      categoryModel.getCategory(Math.floor(Math.random() * 1000));
    });
  }
});

export default CategoriesCollection;

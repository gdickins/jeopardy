import Backbone from 'backbone';
import $ from 'jquery';

const CategoryModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    clues: [],
  },
  getCategory: function(id){
    $.ajax({
      type: 'GET',
      url: `http://jservice.io/api/category?id=${id}`,
      success: (category) =>{
        let increment = 200;
        let cluesList = category.clues.filter((clue, i, arr) => {
          if (clue.value === increment) {
            increment += 200;
            return clue;
          }
        });
        if (cluesList.length === 5) {
          category.clues = cluesList;
          this.set('category', category);
        } else {
          this.getCategory(Math.floor(Math.random() * 1000));
        }
      }
    });
  },
  wasViewed: function(item){
    item.trigger('change');
  },
});

export default CategoryModel;

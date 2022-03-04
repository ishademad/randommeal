let menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
      get appetizers () {
          return this._appetizers;
      },
      set appetizers (app) {
            (this._appetizers).push(app)
      },
      get mains () {
        return this._mains;
      },
      set mains (main) {
            (this._mains).push(main)
      },
      get desserts () {
        return this._desserts;
      },
      set desserts (desrt) {
            (this._desserts).push(desrt);
    }
    },
    get courses () {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    },
    addDishToCourse(courseName,dishName,dishPrice) {
      let dish = {
        name: dishName,
        price: dishPrice,
      }
       courseName.toLowerCase();
          if (courseName === 'appetizers') {
              this._courses.appetizers = dish;
          } else if (courseName === 'mains') {
              this._courses.mains = dish;
          } else if ( courseName === 'desserts'){
              this._courses.desserts = dish;
          } else {
            return 'Enter appetizers, mains or desserts'
          }
    },
    getRandomDishFromCourse(courseName) {
      let dishes;
       if (courseName === 'appetizers') {
              dishes = this._courses.appetizers;
          } else if (courseName === 'mains') {
              dishes = this._courses.mains;
          } else if ( courseName === 'desserts'){
              dishes = this._courses.desserts;
          } else {
            return 'Enter appetizers, mains or desserts'
          }
          rand = Math.floor(Math.random() * dishes.length);
          return dishes[rand];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
      let total = appetizer.price + main.price + dessert.price;
      return `Your randomly generated meal is ${appetizer.name}, ${main.name} and ${dessert.name} with a total price of $${total}`;
    }
  }
  
  menu.addDishToCourse('appetizers','Momos',2);
  menu.addDishToCourse('appetizers','Spring Rolls',3);
  menu.addDishToCourse('appetizers','soup',1);
  menu.addDishToCourse('mains','Noodles',7);
  menu.addDishToCourse('mains','Fried rice',5);
  menu.addDishToCourse('mains','Platter',15);
  menu.addDishToCourse('desserts','Cake',3);
  menu.addDishToCourse('desserts','Cookie',1);
  menu.addDishToCourse('desserts','Sundae',7);
  
  meal = menu.generateRandomMeal();
  
  console.log(meal);

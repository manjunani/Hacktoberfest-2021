const _ = require("lodash");

module.exports.ArraySearch = class {
  constructor(data) {
    this.indexes = [];
    this.data = data; 
  }

  addIndex(index) {
    if(_.isArray(index)) return this.indexes = _.concat(this.indexes, index)
     this.indexes.push(index);
  }

  
  getIndexValue(index, object){
    let temp = object;
    const indexes = `${index}`.split(".");
    _.forEach(indexes, function(child){
      if(temp[child]) temp = temp[child];
    })
    return temp;
  }


  find(keyword) {
    return new Promise((resolve, reject) => {
      try {
        const filtered = _.filter(
          this.data,
          function (data) {
            return !_.isEmpty(
              _.find(
                // dynamically generate searchable indexes
                _.concat(
                  _.map(this.indexes, function (index) {
                    // get index value to depth n
                    const value = this.getIndexValue(index, data);
                    return `${value}`
                      .toLowerCase()
                      .split(/[^a-zA-Z0-9]/g);
                  }.bind(this))
                ),
                function (word) {
                  return _.find(
                    `${keyword}`.toLowerCase().split(/[^a-zA-Z0-9]/g),
                    function (keyPhrase) {
                      return `${word}`.toLowerCase().includes(keyPhrase);
                    }
                  );
                }
              )
            );
          }.bind(this)
        );
        resolve(filtered)
      } catch (error) {
        reject(error);
      }
    });
  }
};

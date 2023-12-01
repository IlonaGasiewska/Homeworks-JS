// Create an IIFE that returns an object with fields: method setValue(), method showValue() and method reverseValue(). Calling showValue should log the value, or if there is no value - tell us about that. Calling setValue will set given number or string in closure, if the argument is other type - throw an error. Value can be type string or number. reverseValue(): If number do (*(-1)), if string reverse it.  Closure pattern.


const myObject = (function() {
    let value;
  
    return {
      setValue: function(newValue) {
        if (typeof newValue === 'number' || typeof newValue === 'string') {
          value = newValue;
        } else {
          console.log('Invalid type. Value must be a string or number.');
        }
      },
      showValue: function() {
        if (value !== undefined) {
          console.log(value);
        } else {
          console.log('No value set.');
        }
      },
      reverseValue: function() {
        if (typeof value === 'number') {
          value *= -1;
        } else if (typeof value === 'string') {
          value = value.split('').reverse().join('');
        }
        console.log(value)
      }
    };
  })();


  myObject.setValue()
  myObject.showValue()
  myObject.reverseValue()
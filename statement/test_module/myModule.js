module.exports = {  
    func: function(arg) {  
      console.log('Mod')  
      console.log(`${arg} -- ${arguments[0]}`);  
      arguments[0] = 20;  
      console.log(`${arg} -- ${arguments[0]}`);  
    }  
  }
exports.objectSearch = function(data, query, searchBy='pair', resultType='pair') {
    let count = 0;
    let result = false;
    Object.entries(data).forEach((entry) => {
        let [key, value] = entry;
        count++;
        if(searchBy === 'key'){
            if(key == query) {
                if(resultType === 'value')
                   result = value;
                else if(resultType === 'index')
                  result = count-1;
                else
                  result = [key, value];
            }   
        }

        if(searchBy === 'value'){
            if(value == query){
                if(resultType === 'key')
                    result = key;
                else if(resultType === 'index')
                    result = count-1;
                else
                    result = [key, value];
                
            } 
        }

        if(searchBy === 'pair'){
            if(value == query[key]) {
                if(resultType === 'key')
                   result = key; 
                else if(resultType === 'value')
                   result = value;
                else if(resultType === 'index')
                   result = count-1;
                else
                   result = [key, value];
            }
        }
     });


   
   return result;
}
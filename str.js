module.exports = [
    
    `(function(w){
        'use strict';
        const storage = {`,
    
    `};
        function TemplateCache(){
            this.get = (cmp) => {
                if( typeof cmp === 'string' && storage[cmp] ){
                    return storage[cmp];
                }else{
                    console.warn( 'Error: template not found for '+cmp )
                }
            }
        }
        w.TemplateCache = new TemplateCache();
    })(this);`
    
];
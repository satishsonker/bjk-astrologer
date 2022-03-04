const common = {
    defaultIfEmpty: (input, defaultValue) => {
        if (input===undefined || input===null || input === "")
            return defaultValue;
        return input;
    },
    getElementKey:()=>{
       var data= (Math.random()*10000000).toFixed(0).toString()+(Math.random()*10000000).toFixed(0).toString();
       return data;
    }
}

export {common};
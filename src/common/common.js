const common = {
    monthsArray: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    defaultIfEmpty: (input, defaultValue) => {
        if (input === undefined || input === null || input === "")
            return defaultValue;
        return input;
    },
    getElementKey: () => {
        var data = (Math.random() * 10000000).toFixed(0).toString() + (Math.random() * 10000000).toFixed(0).toString();
        return data;
    },
    getNumberArray: (start, end) => {
        var temp = [];
        for (let index = start; index <= end; index++) {
            temp.push(index);
        }
        return temp;
    },
    getFullDate: (option) => {
        option = common.defaultIfEmpty(option, {});
        option.seperator = common.defaultIfEmpty(option.seperator, "-");
        option.returnType = common.defaultIfEmpty(option.returnType, "");
        option.fullMonth = common.defaultIfEmpty(option.fullMonth, false);
        option.dateObj = common.defaultIfEmpty(option.dateObj, new Date());
        var today = option.dateObj;
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = today.getMonth() //January is 0!
        var yyyy = today.getFullYear();
        mm = option.fullMonth ? common.monthsArray[mm] : common.monthsArray[mm].substring(0, 3);
        today = dd + option.seperator + mm + option.seperator + yyyy;
        switch (option.returnType) {
            case "m":
                return mm;
            case "y":
                return yyyy;
            case "d":
                return dd;
            case "dm":
                return dd + option.seperator + mm;
            case "my":
                return mm + option.seperator + yyyy;
            default:
                return today;
        }
    },
    getWeekDateRange: () => {
        var curr = new Date; // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
        var last = first + 6; // last day is the first day + 6

        var obj = {
            firstday: new Date(curr.setDate(first)),
            lastday: new Date(curr.setDate(last))
        }
        return obj;
    },
    formatDayMonth: (inputString) => {
        var arr = inputString.replace(/-/g, "/").split("/");
        return [arr[0],common.monthsArray[parseInt(arr[1] - 1)].toLowerCase(),arr[2],common.monthsArray[parseInt(arr[3] - 1)].toLowerCase()];
    }
}

export { common };
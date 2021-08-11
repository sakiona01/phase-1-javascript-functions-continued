function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(objective = '*'){
    return function(special = 'hard worker'){ 
        return `You are ${objective}${special}${objective}!`
    }
}

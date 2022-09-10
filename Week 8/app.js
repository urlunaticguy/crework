const consoleCSS = {
    welcomeMsg : "background: white; color: blue; font-weight: bold; font-size: 35px",
    optionsMsg : "background: white; color: teal; font-size: 25px",
    answerMsg : "background: white; color: red; font-size: 25px",
    helperMsg : "background: white; color: green; font-size: 20px"
}

console.log("%c Welcome to CONSOLE CALCULATOR ", consoleCSS.welcomeMsg)
console.log("%c  Call methods to do operations \n  calc.add(value) to ADD  \n  calc.minus(value) to MINUS  \n  calc.multiply(value) to MULTIPLY  \n  calc.divide(value) to DIVIDE \n  calc.equals() to EQUAL TO \n  calc.showAnswer() to SHOW YOUR CURRENT ANSWER ", consoleCSS.optionsMsg)
console.log("%c  Current Answer = 0 ", consoleCSS.answerMsg)

let calc = { //main object
    value : 0,  
    add : function(x) { 
        console.clear()
        this.showHeader()
        this.value += x
        this.update()
        return "ADDITION SUCCESSFUL"
    },
    minus : function(x) {
        console.clear()
        this.showHeader()
        this.value -= x
        this.update()
        return "MINUS SUCCESSFUL"
    },
    multiply : function(x) {
        console.clear()
        this.showHeader()
        this.value *= x
        this.update()
        return "MULTIPLY SUCCESSFUL"
    },
    divide : function(x) {
        console.clear()
        this.showHeader()
        this.value /= x
        this.update()
        return "DIVISION SUCCESSFUL"
    },
    equals : function() {
        console.clear()
        this.showHeader()
        console.log(`%c  Final Result = ${this.value} `, consoleCSS.answerMsg)
        console.log("%c   Call calc.helper() to see all methods", consoleCSS.helperMsg)
        this.value = 0
        return "ANSWER RESET"
    },
    update : function() { //don't console clear this
        console.log(`%c  Updated Result = ${this.value} `, consoleCSS.answerMsg)
        console.log("%c   Call calc.helper() to see all methods", consoleCSS.helperMsg)
    },
    showHeader : function() { //don't console clear this
        console.log("%c CONSOLE CALCULATOR ", consoleCSS.welcomeMsg)
    },
    helper : function() {
        console.clear()
        this.showHeader()
        console.log("%c  Call methods to do operations \n  calc.add(value) to ADD  \n  calc.minus(value) to MINUS  \n  calc.multiply(value) to MULTIPLY  \n  calc.divide(value) to DIVIDE \n  calc.equals() to EQUAL TO \n  calc.showAnswer() to SHOW YOUR CURRENT ANSWER ", consoleCSS.optionsMsg)
        return "HELPER SUCCESSFUL"
    },
    showAnswer : function() {
        console.clear()
        this.showHeader()
        console.log(`%c YOUR CURRENT ANSWER = ${this.value} `, consoleCSS.answerMsg)
        return "SUCCESS"
    }
}
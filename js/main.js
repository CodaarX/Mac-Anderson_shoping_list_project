// create and populate list
var myList = [
    ['Piano', 1],
    ['Bianculars', 3],
    ['crypto rig', 2],
    ['Mobile phone', 2],
    ['clothes', 6],
    ['books', 11],
    ['Mangoes', 5],
    ['bread', 4],
    ['Chicken', 6],
    ['shoes', 3],
]



// 1. remove all elements in mylist array and save them in another array in the same order
// create new list
var myList2 = [];
// create a function to dynamically initiate the operaiion
function add(){
    // loop through the first list
    for(var i = 0; i < myList.length; i++){
            // create a third list to first populate the sub array
            var myInnerList = []

            // seperately get the items and quantity in sopping list
            // through each loop and push to third list above
            myInnerList.push(myList[i][0])
            myInnerList.push(myList[i][1])

            // push content of third list above to second list
            // outside the function
            myList2.push(myInnerList)
        }  
}   
add()
console.log(myList2)

// 2. replace the third item with Orange juice, 17

function replace(){
    myList.splice(2, 1, ["Orange juice", 17]) 
}

replace()
console.log(myList)

// 3. loop through the myList Array and print an object to the console using the first element of each sub array as key and the second element as value
// create object

const listObject = {}
    // loop through the given list
    for(var i = 0; i < myList.length; i++){
        // create a key: value pair from the list in each iteration
            listObject[myList[i][0]] = myList[i][1]
           
        }  

         console.log(listObject)
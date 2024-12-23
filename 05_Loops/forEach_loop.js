//******************for each loop *****************//

const coding= ["js", "rb","cpp" ,"py", "java"]
coding.forEach(function (val){
    console.log(val);/*
    js
rb
cpp
py
java
*/
})

coding.forEach( (item) => {
    console.log(item);
})

function printme(items){
    console.log(items);
}

coding.forEach(printme);

coding.forEach( (item , index , arr) => {
    console.log(item , index , arr);
    /*
    js 0 [ 'js', 'rb', 'cpp', 'py', 'java' ]
   rb 1 [ 'js', 'rb', 'cpp', 'py', 'java' ]
   cpp 2 [ 'js', 'rb', 'cpp', 'py', 'java' ]
   py 3 [ 'js', 'rb', 'cpp', 'py', 'java' ]
   java 4 [ 'js', 'rb', 'cpp', 'py', 'java' ]
   */
})

const mycoding =[
    {
       languagename : 'Javascript',
       languageFileName : 'js'
    },
    {
       languagename : 'Java',
       languageFileName : 'java'
    },
    {
       languagename : 'python',
       languageFileName : 'py'
    },
]

mycoding.forEach( (item) => {
    console.log(item.languagename);
    /*
    Javascript
    Java
    python
   */
})


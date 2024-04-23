let cont = document.getElementById("cont")
        function fetchTodos(){
            console.log("click")
            fetchData()
        }


         function displayTodo(arr){
         arr.map((el,i)=> {
         let card = document.createElement("div")

         let h3 = document.createElement("h3")
         h3.textContent = ` ${el.title} checkbox`

         let p = document.createElement("p")
        //  p.textContent = ` ${el.completed}`

         let check = document.createElement("input")
         check.type = "checkbox"    

         card.append(h3,p,check)

         cont.append(card)
})
}
        function fetchData(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            displayTodo(data) 
        })
        // error checking-->
        // .catch((err)=>{
        //     console.log("err",err)
        //  })
                 
 }



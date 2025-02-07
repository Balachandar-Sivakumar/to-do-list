let btn = document.getElementById('btn');
let inp= document.getElementById('display');
let paret1=document.querySelector('.parent');
let parent2=document.createElement('ul');
let mother = document.querySelector('.inp');

let localitems = [...JSON.parse(localStorage.getItem('task'))];



addEventListener('DOMContentLoaded',()=>{
   localitems.forEach(n=>{
    let p = document.createElement('li')
    let check=document.createElement('input')
        check.type='checkbox';
        check.className='check';

    let span = document.createElement('span')
        span.textContent=n.Task    
    let butt = document.createElement('button')
        butt.textContent='Delete';
        butt.className='del';
       
    p.append(check,span,butt) ;
    paret1.appendChild(p);

    
    span.textContent=n.Task
  
    butt.addEventListener('click', ()=>{
        let del = butt.parentNode,
            parent = del.parentNode
            localitems.forEach(items=>{
                if(span.textContent==items.Task){localitems.splice(localitems.indexOf(items),1)};
            })
            localStorage.setItem('task',JSON.stringify(localitems))
            return parent===paret1 ? paret1.removeChild(del): parent2.removeChild(del);
    
       })
    
   
    check.addEventListener('click', complete)

       function complete(){

        paret1.append(parent2)
        let child = check.parentNode;
        let parent=child.parentNode;
        if(parent==paret1){
            
            parent2.appendChild(child);
            span.style.textDecoration='line-through';
            butt.style.textDecoration='line-through'; 
           
        }else{
            paret1.appendChild(child);
            span.style.textDecoration='';
            butt.style.textDecoration='';
        }
       
        let buttn = document.getElementById('butt')
             buttn.addEventListener('click', deleter)
              function deleter(){
                
              parent2.remove('li');
                }
}
   })
})


// Adding

btn.addEventListener('click', add)

    function add(){
        if(inp.value===''){return  inp.style.border='2.5px solid red';}


       inp.style.border='2.5px solid green';
       
        let p = document.createElement('li')
        let check=document.createElement('input')
            check.type='checkbox';
            check.className='check';

        let span = document.createElement('span')
            span.textContent=inp.value    
        let butt = document.createElement('button')
            butt.textContent='Delete';
            butt.className='del';
           
        p.append(check,span,butt) ;
        paret1.appendChild(p);

        localStorage.setItem('task',JSON.stringify([...JSON.parse(localStorage.getItem('task') || '[]'),{Task : inp.value}]))

       inp.value='';

        
    
} ;
    

inp.addEventListener('keypress',(n)=>{ return n.key=='Enter' ? add():0})


   




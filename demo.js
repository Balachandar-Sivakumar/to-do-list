let btn = document.getElementById('btn');
let inp= document.getElementById('display');
let paret1=document.querySelector('.parent')

let mother = document.querySelector('.inp');

btn.addEventListener('click', add)


    function add(){
        if(inp.value===''){
            inp.style.border='2.5px solid red';

       }else{
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
           
        p.appendChild(check) ;
        p.appendChild(span) ; 
        p.appendChild(butt);
        paret1.appendChild(p);
       inp.value='';

       butt.addEventListener('click', deleter)
       function deleter(){
           let del=butt.parentNode;
           let parent=del.parentNode;
          if(parent==paret1){
            paret1.removeChild(del)
          }else{
            parent2.removeChild(del)
          }
       };
   
       check.addEventListener('click', complete)

       function complete(){

        let parent2=document.createElement('ul');
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
        let buttn = document.getElementById('button')
        buttn.addEventListener('click', deleter)
            function deleter(){
    
            parent2.remove('li')
        }
        
       }

      
        
    }
} ;
    



   




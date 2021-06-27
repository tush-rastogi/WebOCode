
    
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          else
          alert('Form Submitted.We will contact you Soon.');
  
          form.classList.add('was-validated')
        }, false)
      });

      
      let x=document.querySelector("#location");
       let y=document.querySelector('#loc-btn');
      
      y.addEventListener("click",()=>{
    
      
         x.style.display="flex";
       

         setTimeout(()=>{
          
          x.style.display="none";
         


         },4000);
         
    
      });
    
   

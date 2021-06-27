
(function () {
    'use strict'
  
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
  
          form.classList.add('was-validated')
        }, false)
      });

      console.log("hello");
      let x=document.querySelector(".location");

      x.addEventListener('onclick',(e)=>{
       e.preventDefault();
        console.log("hello");
         x.style.display="block";
         
    
      });
      console.log("hello");
  })();


const toggle = document.querySelector('input[name=theme]');

toggle.addEventListener('change', function() {
     if(this.checked) {
          transition();
          document.documentElement.setAttribute('data-theme', 'dark');
     } else {
          transition();
          document.documentElement.setAttribute('data-theme', 'light');
     }
})

// Little helper function just to not write everything in the above if else condition.
let transition = () => {
     document.documentElement.classList.add('transition');
     window.setTimeout(() => {
          document.documentElement.classList.remove('transition');
     }, 1000);
}; 

   
       


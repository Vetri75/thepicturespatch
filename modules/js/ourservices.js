document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector('.arrow');
      const isActive = answer.classList.contains('active');
      
      if (isActive) {
        arrow.style.transform = 'rotate(0deg)';
        answer.style.maxHeight = null;
        answer.classList.remove('active');
  
        
        setTimeout(() => {
          question.classList.remove('active');
        }, 500); 
      } else {
        arrow.style.transform = 'rotate(180deg)';
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.classList.add('active');
        question.classList.add('active');
      }
    });
  });


  $(document).ready(function () {
    $('#example').anyImageComparisonSlider({
        orientation: 'horizontal',           
        initialPosition: 0.5,                 
        width: '100%',                     
        backgroundColor: 'none',              
        interactive: true,                   
        autoAnimation: true,                 
        autoAnimationSpeed: 8,               
        autoAnimationPause: 1,                
        autoAnimationEasing: 'inOutCubic',    
        dividingLine: 'solid 2px #000',       
        cursor: 'ew-resize',                  
    });
});
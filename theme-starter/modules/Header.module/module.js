
    console.log('working')
    let doc = document.documentElement;
    let w = window;
  
    let prevScroll = w.scrollY || doc.scrollTop;
    let curScroll;
    let direction = 0;
    let prevDirection = 0;
  
    let header = document.getElementById('site-header');

  
    let checkScroll = function() { 
      /*
       Find the direction of scroll
       0 - initial, 1 - up, 2 - down
      */
  
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
      }
      else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
      }
  
      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
      }
  
      prevScroll = curScroll;
    };
  
    //height of the header is 85px
    let toggleHeader = function(direction, curScroll) {
      if (direction === 2 && curScroll > 200) { 
  
  
        header.classList.add('hide');
        prevDirection = direction;
      }
      else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };
  
    window.addEventListener('scroll', checkScroll);
  



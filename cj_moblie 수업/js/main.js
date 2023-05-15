const mainInit=()=>{
    common()
    nav_menu();	
  }
  const get = (target) => {
    return document.querySelector(target);
  }
  const getAll = (target) => {
    return document.querySelectorAll(target);
  }

  const common = () => {
    let $link = getAll('a[href="#"]');
    $link.forEach( item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        })
    })
  }

  const nav_menu = () => {
    let $nav = get('#nav');
    let $menua = getAll('#nav .gnb > li > a');
    let $menuul = getAll('#nav .gnb > li > ul');
    let $close = get('#nav .close');
    let $bg = get('.bg');
    let $body = get('body');
    let $allmenu = get('.all-menu');

    $allmenu.addEventListener('click', e => {
        $nav.classList.add('on');
        $bg.classList.add('on');
        $body.style.overflow='hidden';
    })
    $bg.addEventListener('click', e => {     
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow='visible';
        setTimeout( () => {
            $menuul.forEach( menu => {
                menu.classList.remove('on');
            })
        },300)
    })
    $close.addEventListener('click', e => {
        $nav.classList.remove('on');
        $bg.classList.remove('on');
        $body.style.overflow='visible';
        setTimeout( () => {
            $menuul.forEach( menu => {
                menu.classList.remove('on');
            })
        },300)
    })

    $menua.forEach( item => {
        item.addEventListener('click', e => {
            let el  = e.currentTarget ;
            $menuul.forEach( menu => {
                menu.classList.remove('on');
            })
            el.nextElementSibling.classList.add('on');
        })

    })

  } 

  
  ( () => {
    mainInit();	
  })()
 // 상단 진료 안내 

   function $(selector) {
    return document.querySelector(selector);
  }
  
  function $$(selector) {
    return document.querySelectorAll(selector);
  }
  
  let title = $('.navi_n2 .menu1');
  let list = $('.navi_n2 .th1');
  
  title.addEventListener('mouseover', e => {
    list.classList.add('on');
    list.addEventListener('mouseover', e => {
      list.classList.add('on');
    })
  });
  
  title.addEventListener('mouseleave', e => {
    list.classList.remove('on');
    list.addEventListener('mouseleave', e => {
      list.classList.remove('on');
    })
  });
  
  let title1 = $('.navi_n3 .menu2');
  let list1 = $('.navi_n3 .th2');
  
  title1.addEventListener('mouseover', e => {
    list1.classList.add('on');
    list1.addEventListener('mouseover', e => {
      list1.classList.add('on');
    })
  });
  
  title1.addEventListener('mouseleave', e => {
    list1.classList.remove('on');
    list1.addEventListener('mouseleave', e => {
      list1.classList.remove('on');
    })
  });
  
  //li진료 리스트
  const medicalList = $$('.medical_list_clinic > li');
  
  medicalList.forEach(item => {
    item.addEventListener('mouseenter', e => {
      let id = e.currentTarget.dataset.id;
      const clinicBox1 = $$('.clinic-box1 > li');
      clinicBox1.forEach((box, index) => {
        box.style.display = index == id ? 'block' : 'none';
      });
    });
  });





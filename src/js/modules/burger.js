const burger = ()=>{
   
    const btn = document.querySelector('.header__btn_menu'),
          items = document.querySelectorAll('.menu__item'),
          menu = document.querySelector('.menu__body');

    function closeMenu(e){
        if(!e.target.closest('.menu__body') && !e.target.closest('.header__btn_menu')){
            menu.classList.remove('menu__body_active');
            document.body.classList.remove('_lock')
            btn.textContent = 'Menu'
        }
    }


    btn.addEventListener('click',function(e){

        menu.classList.toggle('menu__body_active');
        btn.textContent = 'Close'
        document.body.classList.toggle('_lock')

        if(menu.classList.contains('menu__body_active')){
            btn.textContent = 'Close'
        }else{
            btn.textContent = 'Menu'
        }
    })
    
    document.addEventListener('click', closeMenu);
    
}
export default burger;
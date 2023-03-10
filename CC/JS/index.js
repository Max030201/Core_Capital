window.addEventListener('DOMContentLoaded', function() {
// /* header */
// const params = {
//   btnClassName: "js-header-dropdown-btn",
//   dropClassName: "js-header-drop",
//   activeClassName: "is-active",
//   disabledClassName: "is-disabled"
// }

// function onDisable(evt) {
//   if (evt.target.classList.contains(params.disabledClassName)) {
//     evt.target.classList.remove(params.disabledClassName, params.activeClassName);
//     evt.target.removeEventListener("animationend", onDisable);
//   }
// }

// (() => {
//   function setMenuListener() {
//     document.body.addEventListener("click", (evt) => {
//       const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

//       if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
//         activeElements.forEach((current) => {
//           if (current.classList.contains(params.btnClassName)) {
//             current.classList.remove(params.activeClassName);
//           } else {
//             current.classList.add(params.disabledClassName);
//           }
//         });
//       }

//       if (evt.target.closest(`.${params.btnClassName}`)) {
//         const btn = evt.target.closest(`.${params.btnClassName}`);
//         const path = btn.dataset.path;
//         const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

//         btn.classList.toggle(params.activeClassName);

//         if (!drop.classList.contains(params.activeClassName)) {
//           drop.classList.add(params.activeClassName);
//           drop.addEventListener("animationend", onDisable);
//         } else {
//           drop.classList.add(params.disabledClassName);
//         }
//       }
//     });
//   }
//   setMenuListener();
// })();

// function setBurger(params) {
//   const btn = document.querySelector(`.${params.btnClass}`);
//   const menu = document.querySelector(`.${params.menuClass}`);
//   const links = menu.querySelectorAll(`.${params.linksClass}`);

//   btn.setAttribute('aria-expanded', false);

//   function onBtnClick() {
//     if (window.getWindowWidth() <= window.TABLET_WIDTH) {
//       btn.classList.toggle(params.activeClass);

//       if (
//         !menu.classList.contains(params.activeClass) &&
//         !menu.classList.contains(params.hiddenClass)
//       ) {
//         menu.classList.add(params.activeClass);
//         document.body.style.overflow = 'hidden';
//         btn.setAttribute('aria-expanded', true);
//       } else {
//         menu.classList.add(params.hiddenClass);
//         document.body.removeAttribute('style');
//         btn.classList.toggle(params.hiddenClass);
//         btn.setAttribute('aria-expanded', false);
//       }
//     }
//   };

//   menu.addEventListener("animationend", function () {
//     if (this.classList.contains(params.hiddenClass)) {
//       this.classList.remove(params.activeClass);
//       this.classList.remove(params.hiddenClass);
//       btn.classList.remove(params.hiddenClass);
//     }
//   });

//   btn.addEventListener("click", window.debounce(onBtnClick, 600));
//   links.forEach((link) => {
//     link.addEventListener("click", window.debounce(onBtnClick, 600));
//   });
// }

// // ?????????? ???? ???????????????? ?????????????? ?? ???????????????? ?? ?????? ???????????? ?????????? ??????????????????
// setBurger({
//   btnClass: "js-burger", // ?????????? ??????????????
//   menuClass: "js-menu-wrap", // ?????????? ????????
//   activeClass: "is-opened", // ?????????? ?????????????????? ??????????????????
//   hiddenClass: "is-closed", // ?????????? ???????????????????????????? ?????????????????? (?????????????????? ?????????? ?????????? ????????????????)
//   linksClass: "js-menu-link"
// });

// function scrollToContent (link, isMobile) {
//   if (isMobile && window.getWindowWidth() <= window.TABLET_WIDTH) {
//     return;
//   }

//   const href = link.getAttribute('href').substring(1);
//   const scrollTarget = document.getElementById(href);
//   const elementPosition = scrollTarget.getBoundingClientRect().top;

//   window.scrollBy({
//       top: elementPosition,
//       behavior: 'smooth'
//   });
// }

// document.querySelectorAll('.js-scroll-link').forEach(link => {
//   link.addEventListener('click', function(e) {
//       e.preventDefault();

//       scrollToContent(this, false);
//   });
// });

  // hero
  const swiper = new Swiper('.js-slider-back', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 7000,
    autoplay: {
      delay: 7000
    }
  });

  // about_us
  new WOW().init();

  const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
  });

  // services
  $('.services-bottom__item-button').click(function() {
    $('.services-bottom__item-button').removeClass('sb-active');
    $(this).addClass('sb-active');
  });

  document.querySelectorAll('.services-tabs-nav__btn').forEach(function(servicesTabsNavBtn) {
    servicesTabsNavBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.services-tab-content').forEach(function(servicesTabContent) {
        servicesTabContent.classList.remove('services-tab-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('services-tab-content-active')
    });

    new WOW().init();
  });

  // contacts
  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.754527, 37.606640],
        zoom: 16,
        controls: ['zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        zoomControlSize: { width: "30px", height: "30px"},
        zoomControlFloat: "none",
        zoomControlPosition: { top: "250px", right: "30px" }
      },
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.754527, 37.606640],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/contacts-arrow.svg",
        iconImageSize: [40, 60],
        iconImageOffset: [-20, -70],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  };
});


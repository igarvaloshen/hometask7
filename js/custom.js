
    $(document).ready(function() {
        $('#iview').iView({
            fx: 'fade', // установите эффект, например: 'left-curtain,fade,zigzag-top,strip-left-fade' (достпуные эффекты читайте ниже)
            easing: 'easeOutQuad', // полный список эффектов тут: http://jqueryui.com/demos/effect/easing.html
            strips: 20, // количество полос для их же анимации
            blockCols: 10, // количество колонок для блочной анимации
            blockRows: 5, // количество строк для блочной анимации
            captionSpeed: 500, // скорость эффекта перехода для Заголовка
            captionEasing: 'easeInOutSine', // easing эффект для заголовка
            captionOpacity: 1, // прозрачность заголовка
            animationSpeed: 200, // скорость анимациии слайдов
            pauseTime: 5000, // как доолго будет показываться каждый слайд
            startSlide: 1, // установвка начального слайда (0 index)
            directionNav: true, // навигация Вперед/Назад
            directionNavHoverOpacity: 0.6, // Fade при наведении курсора
            controlNav: false, // 1,2,3,4... цифровая навигация
            controlNavNextPrev: true, // навигация Вперед/Назад
            controlNavHoverOpacity: 0.6, // fade эффект при наведении на наввигацию
            controlNavThumbs: false, // Показывать миниатюры на навигации
            controlNavTooltip: true, // Показывать превьюшки изображений ввиде тултипов
            autoAdvance: false, // Force auto transitions
            keyboardNav: true, // использование стрелок влево / вправо
            touchNav: true, // использование Touch swipe для смены слайдов
            pauseOnHover: false, // остановка слайдшоу при наведении
            nextLabel: "", // текст для кнопки "Вперед"
            previousLabel: "", // текст для кнопки "Назад"
            playLabel: "Play", // текст для кнопки "Плей"
            pauseLabel: "Pause", // текст для кнопки "Пауза"
            closeLabel: "Close", // текст для кнопки "Закрыть"
            randomStart: false, //начинать со случайного слайдера
            timer: 'Pie', // Стиль таймера: "Pie", "360Bar" или "Bar"
            timerBg: '#000', // Фон таймера
            timerColor: '#EEE', // цвет таймера
            timerOpacity: 0.5, // прозрачность таймера
            timerDiameter: 30, // диаметр таймера
            timerPadding: 4, // отступ для таймера
            timerStroke: 3, // ширина границы таймера
            timerBarStroke: 1, // ширина границы Bar тамера
            timerBarStrokeColor: '#EEE', // Цвет границы таймера Bar
            timerBarStrokeStyle: 'solid', // Стиль границы таймера Bar
            timerX: 10, // Timer X position threshold
            timerY: 10, // Timer Y position threshold
            tooltipX: 5, // Tooltip X position threshold
            tooltipY: -5, // Tooltip Y position threshold
            onBeforeChange: function(){}, // триггеры до перехода слайдера
            onAfterChange: function(){}, // триггеры после перехода слайдера
            onSlideshowEnd: function(){}, // триггеры после показа всех слайдов
            onLastSlide: function(){}, // триггеры, когда показан последний слайдер
            onAfterLoad: function(){}, // триггер, когда слайдер загружен
            onPause: function(){}, // триггер, когда слайдер на паузе
            onPlay: function(){} // триггер, когда слайдер проигрывается
        });
    });
    $(document).ready(function(){
        $('.bxslider').bxSlider();
    });
    $( function() {
        $( "#datepicker" ).datepicker({
            minDate: "+1d 0m 0y",
            dateFormat: "dd.mm.yy",
            changeMonth: true,
            changeYear: true

        });
    } );

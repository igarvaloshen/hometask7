
    $(document).ready(function() {
        $('#iview').iView({
            fx: 'fade', // ���������� ������, ��������: 'left-curtain,fade,zigzag-top,strip-left-fade' (��������� ������� ������� ����)
            easing: 'easeOutQuad', // ������ ������ �������� ���: http://jqueryui.com/demos/effect/easing.html
            strips: 20, // ���������� ����� ��� �� �� ��������
            blockCols: 10, // ���������� ������� ��� ������� ��������
            blockRows: 5, // ���������� ����� ��� ������� ��������
            captionSpeed: 500, // �������� ������� �������� ��� ���������
            captionEasing: 'easeInOutSine', // easing ������ ��� ���������
            captionOpacity: 1, // ������������ ���������
            animationSpeed: 200, // �������� ��������� �������
            pauseTime: 5000, // ��� ������ ����� ������������ ������ �����
            startSlide: 1, // ���������� ���������� ������ (0 index)
            directionNav: true, // ��������� ������/�����
            directionNavHoverOpacity: 0.6, // Fade ��� ��������� �������
            controlNav: false, // 1,2,3,4... �������� ���������
            controlNavNextPrev: true, // ��������� ������/�����
            controlNavHoverOpacity: 0.6, // fade ������ ��� ��������� �� ����������
            controlNavThumbs: false, // ���������� ��������� �� ���������
            controlNavTooltip: true, // ���������� ��������� ����������� ����� ��������
            autoAdvance: false, // Force auto transitions
            keyboardNav: true, // ������������� ������� ����� / ������
            touchNav: true, // ������������� Touch swipe ��� ����� �������
            pauseOnHover: false, // ��������� �������� ��� ���������
            nextLabel: "", // ����� ��� ������ "������"
            previousLabel: "", // ����� ��� ������ "�����"
            playLabel: "Play", // ����� ��� ������ "����"
            pauseLabel: "Pause", // ����� ��� ������ "�����"
            closeLabel: "Close", // ����� ��� ������ "�������"
            randomStart: false, //�������� �� ���������� ��������
            timer: 'Pie', // ����� �������: "Pie", "360Bar" ��� "Bar"
            timerBg: '#000', // ��� �������
            timerColor: '#EEE', // ���� �������
            timerOpacity: 0.5, // ������������ �������
            timerDiameter: 30, // ������� �������
            timerPadding: 4, // ������ ��� �������
            timerStroke: 3, // ������ ������� �������
            timerBarStroke: 1, // ������ ������� Bar ������
            timerBarStrokeColor: '#EEE', // ���� ������� ������� Bar
            timerBarStrokeStyle: 'solid', // ����� ������� ������� Bar
            timerX: 10, // Timer X position threshold
            timerY: 10, // Timer Y position threshold
            tooltipX: 5, // Tooltip X position threshold
            tooltipY: -5, // Tooltip Y position threshold
            onBeforeChange: function(){}, // �������� �� �������� ��������
            onAfterChange: function(){}, // �������� ����� �������� ��������
            onSlideshowEnd: function(){}, // �������� ����� ������ ���� �������
            onLastSlide: function(){}, // ��������, ����� ������� ��������� �������
            onAfterLoad: function(){}, // �������, ����� ������� ��������
            onPause: function(){}, // �������, ����� ������� �� �����
            onPlay: function(){} // �������, ����� ������� �������������
        });
    });

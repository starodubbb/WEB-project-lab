(function($){
    $.fn.Carousel = function(options) {
        var settings = {
            visible: 3,  
            rotateBy: 1,
            speed: 1000, 
            btnNext: null, 
            btnPrev: null, 
            auto: true, 
            margin: 10,	
            marginTopBottom: 50,
            position: "h",
            dirAutoSlide: false 
        };

        return this.each(function() {
            if (options) {
                    $.extend(settings, options); 
            }
            
            var $this = $(this);					
            var $carousel = $this.children(':first');
            var itemWidth = $carousel.children().outerWidth()+settings.margin; 
            var itemHeight = $carousel.children().outerHeight();			  
            var itemsTotal = $carousel.children().length; 
            var running = false; 
            var intID = null; 
            var size = itemWidth; 
            
            $this.css({
                'position': 'relative', 
                'overflow': 'hidden', 
                'width': settings.visible * size + 'px' ,
                'height': itemHeight + 'px'
            });

            $carousel.children('li').css({
            'margin-left': settings.margin/2+ 'px',
            'margin-right': settings.margin/2+ 'px', 
            'width': '562px',
            'height': '328px', 
            });		

            $carousel.css({
                'position': 'relative', 
                'width': 9999 + 'px', 
                'top': 0,
                'left': 0
            });
 
            function slide(dir) {
                var direction = !dir ? -1 : 1; 
                var Indent = 0; 
                
                if (!running) {							
                
                    running = true; 
                    
                    if (intID) { 
                            window.clearInterval(intID);                                         	
                    }
                    
                    if (!dir) {        
                        $carousel.children(':last').after($carousel.children().slice(0,settings.rotateBy).clone(true));
                    } else { 
                        $carousel.children(':first').before($carousel.children().slice(itemsTotal - settings.rotateBy, itemsTotal).clone(true));

                        $carousel.css('left', -size * settings.rotateBy + 'px');
                    }
                             
                    Indent = parseInt($carousel.css('left')) + (size * settings.rotateBy * direction);
                                  
                    var animate_data={'left': Indent};
                    
                    $carousel.animate(animate_data, {queue: false, duration: settings.speed, complete: function() {                                       
                        if (!dir) { 
                            $carousel.children().slice(0, settings.rotateBy).remove();
                            $carousel.css('left', 0);
                        } else { 
                            $carousel.children().slice(itemsTotal, itemsTotal + settings.rotateBy).remove();
                        }
                        if (settings.auto) { 
                            intID = window.setInterval(function() { slide(settings.dirAutoSlide); }, settings.auto);
                        }
                        running = false; 
                    }});
                    }
                    return false; 
                }

                $(settings.btnNext).click(function() {                            
                    return slide(false);								
                });
                    
                $(settings.btnPrev).click(function() {
                    return slide(true);
                });
                
                if (settings.auto) { 
                    intID = window.setInterval(function() { slide(settings.dirAutoSlide); }, settings.auto);
                }
        });
    };
})(jQuery);
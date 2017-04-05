function stopTouchendPropagationAfterScroll(){
    var flag = false;
    window.addEventListener('touchmove', function(ev){
        flag || (flag = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    }, false);
    function stopTouchendPropagation(ev){
        ev.stopPropagation();
        setTimeout(function(){
            window.removeEventListener('touchend', stopTouchendPropagation, true);
            flag = false;
        }, 50);
    }
};
$(function(){
	stopTouchendPropagationAfterScroll();
});
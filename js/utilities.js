class Utilities {
    static fadeOutAndRemove(element, transitionTime = 1000, deleteTime = 500) {

        if (!isNaN(transitionTime) && transitionTime < 0) {
            transitionTime = 1000;
        }
    
        if (!isNaN(deleteTime) && deleteTime < 0) {
            deleteTime = 500;
        }

        if (element) {
            element.style.transition = `opacity ${transitionTime}ms`;
            element.style.opacity = "0";
        
            setTimeout(function() {
                element.remove();
            }, deleteTime)
        }
    }
}

export default Utilities;
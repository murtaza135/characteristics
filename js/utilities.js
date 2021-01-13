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

    static scrollToNode(node) {
        const y = node.getBoundingClientRect().top + window.scrollY;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    static scrollToBottom() {
        window.scroll({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    static scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    static clamp(number, min, max) {
        return Math.max(min, Math.min(number, max));
    }
}


export default Utilities;
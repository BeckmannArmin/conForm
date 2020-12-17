
const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enter');
                animatedScrollObserver.unobserve(entry.target);
            }
        });
    }
);

/** 
* checks if the element is in the viewport and
* and adds a css class
* Observer: objects that spot something in real time
 */

export default {
    bind(ele) {
        ele.classList.add('before-enter');
        animatedScrollObserver.observe(ele);
    }
}
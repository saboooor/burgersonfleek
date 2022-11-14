const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList[e.isIntersecting ? 'remove' : 'add']('opacity-0', '-translate-x-80', 'blur-md'))
});
const hiddenElements = document.querySelectorAll('.opacity-0');
hiddenElements.forEach(e => observer.observe(e));
const observerFloat = new IntersectionObserver(entries => {
    entries.forEach(entry =>){
        if (entry.forEach.isIntersecting) {
            entry.target.classList.add("float-box");
        }
        classList.remove("float-box");
    });

observerFloat.observe(document.querySelector(".float"));
document.addEventListener('DOMContentLoaded', function() {   

    document.getElementById('scroll-btn').addEventListener('click', function() {
    
        const scrollPosition = window.scrollY + window.innerHeight; // Aktuelle Scroll-Position + Fensterhöhe
    
        
        window.scrollTo({
            top: scrollPosition, 
            behavior: 'smooth' 
        });
    });

  
});

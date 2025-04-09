  // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Create additional floating background elements
        function createBgElements() {
            const bgElements = document.querySelector('.bg-elements');
            const colors = ['rgba(212, 175, 55, 0.03)', 'rgba(212, 175, 55, 0.05)', 'rgba(212, 175, 55, 0.07)'];
            
            for (let i = 0; i < 8; i++) {
                const element = document.createElement('div');
                const size = Math.random() * 100 + 50;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * -20;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                element.style.width = `${size}px`;
                element.style.height = `${size}px`;
                element.style.left = `${posX}%`;
                element.style.top = `${posY}%`;
                element.style.animationDuration = `${duration}s`;
                element.style.animationDelay = `${delay}s`;
                element.style.backgroundColor = color;
                
                element.classList.add('bg-element');
                bgElements.appendChild(element);
            }
        }
        
        // Intersection Observer for scroll animations
        function setupIntersectionObserver() {
            const observerOptions = {
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            
            // Observe all elements with animation classes
            document.querySelectorAll('.section-title, .about-text, .about-image, .skill-category, .project-card, .education-item, .certification-card, .contact-info, .contact-form').forEach(el => {
                observer.observe(el);
            });
        }
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            createBgElements();
            setupIntersectionObserver();
        });
        
        function downloadResume() {
            const link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'Karthik-N-Resume.pdf'; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
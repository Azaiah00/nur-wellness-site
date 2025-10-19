/* ==========================================
   NUR WELLNESS CO. - JAVASCRIPT
   All interactive functionality using Vanilla JS
   ========================================== */

// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    /* ==========================================
       MOBILE NAVIGATION TOGGLE
       ========================================== */
    
    // Get mobile menu elements
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle mobile menu visibility when hamburger icon is clicked
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when a link is clicked
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
    
    /* ==========================================
       SMOOTH SCROLLING FOR NAVIGATION LINKS
       ========================================== */
    
    // Get all anchor links that start with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scroll behavior to each link
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (not just #)
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Scroll to target with offset for sticky header
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    /* ==========================================
       TAB SWITCHING (MIND, BODY, SPIRIT)
       ========================================== */
    
    // Get all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Add click event to each tab button
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the tab identifier from data attribute
            const tabName = this.getAttribute('data-tab');
            
            // Remove 'active' class from all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to clicked button
            this.classList.add('active');
            
            // Hide all tab content
            const allTabContent = document.querySelectorAll('.tab-content');
            allTabContent.forEach(content => content.classList.remove('active'));
            
            // Show the selected tab content
            const selectedTab = document.getElementById(tabName + '-tab');
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        });
    });
    
    /* ==========================================
       TESTIMONIAL SLIDER
       ========================================== */
    
    // Get slider elements
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Track current slide index
    let currentSlide = 0;
    
    // Function to show a specific slide
    function showSlide(index) {
        // Ensure index wraps around (0 to max slides)
        if (index >= testimonialSlides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = testimonialSlides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Hide all slides
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        
        // Remove active class from all dots
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        if (testimonialSlides[currentSlide]) {
            testimonialSlides[currentSlide].classList.add('active');
        }
        
        // Highlight current dot
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add('active');
        }
    }
    
    // Previous button click handler
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            showSlide(currentSlide - 1);
        });
    }
    
    // Next button click handler
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            showSlide(currentSlide + 1);
        });
    }
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });
    
    // Auto-advance slider every 5 seconds
    let sliderInterval = setInterval(function() {
        showSlide(currentSlide + 1);
    }, 5000);
    
    // Pause auto-advance when user interacts with slider
    const sliderControls = [prevButton, nextButton, ...dots];
    sliderControls.forEach(control => {
        if (control) {
            control.addEventListener('click', function() {
                // Clear existing interval
                clearInterval(sliderInterval);
                
                // Restart interval after user interaction
                sliderInterval = setInterval(function() {
                    showSlide(currentSlide + 1);
                }, 5000);
            });
        }
    });
    
    /* ==========================================
       CHATBOT FUNCTIONALITY
       ========================================== */
    
    // Get chatbot elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    // Toggle chatbot window open/close
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotWindow.classList.toggle('hidden');
            
            // Focus input when opening
            if (!chatbotWindow.classList.contains('hidden')) {
                chatInput.focus();
            }
        });
    }
    
    // Close chatbot when X button is clicked
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotWindow.classList.add('hidden');
        });
    }
    
    // Function to add a message to the chat
    function addChatMessage(message, isUser = false) {
        // Create message container
        const messageDiv = document.createElement('div');
        messageDiv.className = isUser ? 'chat-message-user' : 'chat-message-bot';
        
        if (isUser) {
            // User message (right side)
            messageDiv.innerHTML = `
                <div class="chat-bubble-user">
                    <p class="text-sm">${escapeHtml(message)}</p>
                </div>
                <div class="chat-avatar chat-avatar-user">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </div>
            `;
        } else {
            // Bot message (left side)
            messageDiv.innerHTML = `
                <div class="chat-avatar chat-avatar-bot">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                </div>
                <div class="chat-bubble-bot">
                    <p class="text-sm">${escapeHtml(message)}</p>
                </div>
            `;
        }
        
        // Add message to chat
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom of chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message-bot typing-indicator-container';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <div class="chat-avatar chat-avatar-bot">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
            </div>
            <div class="chat-bubble-bot">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Function to escape HTML to prevent XSS attacks
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // Function to generate bot response (front-end only for now)
    // NOTE: In production, this will connect to OpenAI API with RAG
    function generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        // Simple keyword-based responses for demo
        // TODO: Replace with OpenAI API call to RAG database
        if (lowerMessage.includes('sea moss') || lowerMessage.includes('seamoss')) {
            return "Sea moss is one of our most popular products! It's packed with minerals that help your stomach feel good and give you natural energy. Would you like to know more about how to use it or see our sea moss products?";
        } else if (lowerMessage.includes('wellness shot') || lowerMessage.includes('turmeric')) {
            return "Our wellness shots are amazing! They contain turmeric, ginger, lemon, and black pepper. These ingredients work together to fight inflammation and boost your immune system. Many customers take one every morning!";
        } else if (lowerMessage.includes('aromatherapy') || lowerMessage.includes('oil')) {
            return "Our aromatherapy oils are designed to help you relax and find peace. We have blends for better sleep, improved focus, and stress relief. Each oil is pure and natural. What would you like help with?";
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
            return "Great question! You can see all our products and prices in our online shop. Click the 'Shop Now' button at the top of the page, and you'll find everything there. We also offer bundle deals to help you save!";
        } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
            return "We offer fast, reliable shipping on all orders! You can find detailed shipping information and delivery times in our shop. Most orders arrive within 3-5 business days.";
        } else if (lowerMessage.includes('help') || lowerMessage.includes('start') || lowerMessage.includes('begin')) {
            return "I'd love to help you start your wellness journey! We focus on three areas: Mind (aromatherapy, journaling), Body (sea moss, wellness shots), and Spirit (movement, mindfulness). What area interests you most?";
        } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
            return "You're very welcome! I'm here anytime you need help. Remember: wellness is your birthright.";
        } else {
            return "That's a great question! I'm here to help you learn about our natural wellness products and philosophy. You can ask me about sea moss, wellness shots, aromatherapy, or how to start your wellness journey. What would you like to know?";
        }
    }
    
    // Handle chat form submission
    if (chatForm) {
        chatForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get user message
            const userMessage = chatInput.value.trim();
            
            // Don't send empty messages
            if (!userMessage) {
                return;
            }
            
            // Add user message to chat
            addChatMessage(userMessage, true);
            
            // Clear input
            chatInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Simulate bot "thinking" time (replace with actual API call)
            setTimeout(function() {
                // Hide typing indicator
                hideTypingIndicator();
                
                // Generate and add bot response
                const botResponse = generateBotResponse(userMessage);
                addChatMessage(botResponse, false);
                
                // TODO: Replace above with actual OpenAI API call:
                /*
                fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userMessage })
                })
                .then(response => response.json())
                .then(data => {
                    hideTypingIndicator();
                    addChatMessage(data.response, false);
                })
                .catch(error => {
                    hideTypingIndicator();
                    addChatMessage('Sorry, I had trouble connecting. Please try again!', false);
                });
                */
            }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
        });
    }
    
    /* ==========================================
       SCROLL ANIMATIONS (OPTIONAL ENHANCEMENT)
       ========================================== */
    
    // Observe elements and add animation classes when they enter viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards and lifestyle cards for fade-in effect
    const animatedElements = document.querySelectorAll('.product-card, .lifestyle-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    /* ==========================================
       HEADER SCROLL EFFECT
       ========================================== */
    
    // Add shadow to header when scrolling
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('shadow-lg');
        } else {
            header.classList.remove('shadow-lg');
        }
    });
    
    /* ==========================================
       ACCESSIBILITY ENHANCEMENTS
       ========================================== */
    
    // Allow ESC key to close mobile menu and chatbot
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Close chatbot
            if (chatbotWindow && !chatbotWindow.classList.contains('hidden')) {
                chatbotWindow.classList.add('hidden');
            }
        }
    });
    
    // Trap focus within chatbot when open
    if (chatbotWindow) {
        chatbotWindow.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const focusableElements = chatbotWindow.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }
    
    /* ==========================================
       CONSOLE MESSAGE (BRANDING)
       ========================================== */
    
    console.log('%c🌿 Nur Wellness Co. 🌿', 'font-size: 20px; font-weight: bold; color: #044343;');
    console.log('%cWellness is your birthright.', 'font-size: 14px; color: #B48A3A;');
    console.log('%cBuilt with ❤️ using HTML, CSS (Tailwind), and Vanilla JavaScript', 'font-size: 12px; color: #044343;');
    
}); // End of DOMContentLoaded

/* ==========================================
   END OF SCRIPT
   ========================================== */

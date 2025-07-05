// Language data
const translations = {
    ar: {
        'navbar-home': 'الرئيسية',
        'navbar-about': 'من نحن',
        'navbar-services': 'خدماتنا',
        'navbar-workflow': 'سير العمل',
        'navbar-contact': 'اتصل بنا',
        'navbar-login': 'تسجيل الدخول',
        // Add more translations as needed
    },
    en: {
        'navbar-home': 'Home',
        'navbar-about': 'About Us',
        'navbar-services': 'Our Services',
        'navbar-workflow': 'Workflow',
        'navbar-contact': 'Contact Us',
        'navbar-login': 'Login',
        // Add more translations as needed
    },
    zh: {
        'navbar-home': '首页',
        'navbar-about': '关于我们',
        'navbar-services': '我们的服务',
        'navbar-workflow': '工作流程',
        'navbar-contact': '联系我们',
        'navbar-login': '登录',
        // Add more translations as needed
    }
};

// Current language
let currentLanguage = 'ar';

// DOM elements
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollToTop = document.getElementById('scrollToTop');
const serviceModal = document.getElementById('serviceModal');
const closeModal = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

// Service data
const serviceData = {
    import: {
        ar: {
            title: 'خدمة الاستيراد',
            description: 'نبسط عملية الاستيراد للأفراد والشركات لضمان حصولك على منتجاتك بسرعة وكفاءة، مع تأكيد التزامنا بتنفيذ كل خطوة بدقة.',
            features: [
                'البحث عن أفضل الموردين في الصين',
                'التفاوض على الأسعار والشروط',
                'إدارة الطلبات والمتابعة',
                'تتبع الشحنات لحظة بلحظة',
                'التخليص الجمركي السريع',
                'ضمان الجودة والمطابقة',
                'خدمة عملاء متاحة 24/7'
            ],
            image: 'استيراد.jpg'
        },
        en: {
            title: 'Import Service',
            description: 'We simplify the import process for individuals and companies to ensure you get your products quickly and efficiently, while confirming our commitment to executing every step with precision.',
            features: [
                'Search for the best suppliers in China',
                'Negotiate prices and terms',
                'Order management and follow-up',
                'Real-time shipment tracking',
                'Fast customs clearance',
                'Quality and compliance assurance',
                '24/7 customer service'
            ],
            image: 'https://images.pexels.com/photos/8106120/pexels-photo-8106120.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        zh: {
            title: '进口服务',
            description: '我们为个人和公司简化进口流程，确保您快速高效地获得产品，同时确认我们承诺精确执行每个步骤。',
            features: [
                '寻找中国最好的供应商',
                '协商价格和条件',
                '订单管理和跟进',
                '实时货运跟踪',
                '快速清关',
                '质量和合规保证',
                '24/7客户服务'
            ],
            image: 'https://images.pexels.com/photos/8106120/pexels-photo-8106120.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    },
    inspection: {
        ar: {
            title: 'خدمة الفحص',
            description: 'نتعاقد مع مفتشين محليين لفحص منتجك بنسبة 100%، مرفقًا بصور وتقرير مفصل. نضمن الجودة، السلامة، ومطابقة المواصفات.',
            features: [
                'فحص شامل للمنتجات قبل الشحن',
                'تقارير مصورة مفصلة',
                'فحص الجودة والسلامة',
                'التأكد من مطابقة المواصفات',
                'شهادات الفحص المعتمدة',
                'فحص التعبئة والتغليف',
                'تقييم المخاطر والعيوب'
            ],
            image: 'فحص.png'
        },
        en: {
            title: 'Inspection Service',
            description: 'We contract with local inspectors to inspect your product 100%, accompanied by photos and detailed reports. We guarantee quality, safety, and specification compliance.',
            features: [
                'Comprehensive product inspection before shipping',
                'Detailed photographic reports',
                'Quality and safety inspection',
                'Specification compliance verification',
                'Certified inspection certificates',
                'Packaging and packaging inspection',
                'Risk and defect assessment'
            ],
            image: 'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        zh: {
            title: '检验服务',
            description: '我们与当地检验员签约，对您的产品进行100%检验，附带照片和详细报告。我们保证质量、安全和规格合规。',
            features: [
                '发货前全面产品检验',
                '详细的摄影报告',
                '质量和安全检验',
                '规格合规验证',
                '认证检验证书',
                '包装和包装检验',
                '风险和缺陷评估'
            ],
            image: 'https://images.pexels.com/photos/5473299/pexels-photo-5473299.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    },
    representation: {
        ar: {
            title: 'خدمة التمثيل',
            description: 'نعمل كوكلاء معتمدين مع المصانع الصينية لإتمام العقود التجارية نيابة عنك، مما يضمن الشفافية والموثوقية في جميع عملياتك التجارية.',
            features: [
                'التمثيل القانوني المعتمد',
                'إتمام العقود التجارية',
                'التفاوض مع المصانع',
                'ضمان الشفافية الكاملة',
                'المتابعة المستمرة',
                'حماية حقوقك التجارية',
                'إدارة العلاقات طويلة الأمد'
            ],
            image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        en: {
            title: 'Representation Service',
            description: 'We work as certified agents with Chinese factories to complete trade contracts on your behalf, ensuring transparency and reliability in all your business operations.',
            features: [
                'Certified legal representation',
                'Completion of trade contracts',
                'Negotiation with factories',
                'Full transparency guarantee',
                'Continuous follow-up',
                'Protection of your business rights',
                'Long-term relationship management'
            ],
            image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        zh: {
            title: '代表服务',
            description: '我们作为认证代理商与中国工厂合作，代表您完成贸易合同，确保您所有业务运营的透明度和可靠性。',
            features: [
                '认证法律代表',
                '完成贸易合同',
                '与工厂谈判',
                '完全透明度保证',
                '持续跟进',
                '保护您的商业权利',
                '长期关系管理'
            ],
            image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    },
    shipping: {
        ar: {
            title: 'خدمة الشحن',
            description: 'ندير جميع خدمات الشحن اللوجستية، مع ضمان التخليص الجمركي السلس والتسليم في الوقت المحدد، مما يجعل عملية الاستيراد أكثر سلاسة.',
            features: [
                'إدارة الشحن الدولي',
                'التخليص الجمركي السريع',
                'التسليم في الوقت المحدد',
                'تتبع الشحنات المباشر',
                'التأمين على البضائع',
                'خيارات شحن متعددة',
                'دعم لوجستي متكامل'
            ],
            image: 'شحن.webp'
        },
        en: {
            title: 'Shipping Service',
            description: 'We manage all logistics shipping services, with smooth customs clearance and on-time delivery guarantee, making the import process smoother.',
            features: [
                'International shipping management',
                'Fast customs clearance',
                'On-time delivery',
                'Direct shipment tracking',
                'Goods insurance',
                'Multiple shipping options',
                'Comprehensive logistics support'
            ],
            image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        zh: {
            title: '运输服务',
            description: '我们管理所有物流运输服务，保证顺利清关和准时交付，使进口过程更加顺畅。',
            features: [
                '国际运输管理',
                '快速清关',
                '准时交付',
                '直接货运跟踪',
                '货物保险',
                '多种运输选择',
                '全面的物流支持'
            ],
            image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeEventListeners();
    initializeAnimations();
    initializeScrollEffects();
});

// Language functions
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'ar';
    setLanguage(savedLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-ar], [data-en], [data-zh]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update language button text
    const langTexts = {
        ar: 'العربية',
        en: 'English',
        zh: '中文'
    };
    
    const langBtnSpan = langBtn.querySelector('span');
    if (langBtnSpan) {
        langBtnSpan.textContent = langTexts[lang];
    }
}

// Event listeners
function initializeEventListeners() {
    // Language selector
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });
    
    // Language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('show');
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        langDropdown.classList.remove('show');
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', function() {
            const serviceType = this.getAttribute('data-service');
            openServiceModal(serviceType);
        });
    });
    
    // Modal close
    closeModal.addEventListener('click', function() {
        serviceModal.classList.remove('show');
    });
    
    serviceModal.addEventListener('click', function(e) {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('show');
        }
    });
    
    // Scroll to top
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Hero buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.services-preview').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    document.querySelectorAll('.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            window.open('https://wa.me/966566072502', '_blank');
        });
    });
}

// Service modal
function openServiceModal(serviceType) {
    const service = serviceData[serviceType];
    if (!service) return;
    
    const serviceContent = service[currentLanguage];
    if (!serviceContent) return;
    
    const featuresHTML = serviceContent.features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');
    
    const buttonText = currentLanguage === 'ar' ? 'طلب الخدمة الآن' : 
                      currentLanguage === 'en' ? 'Request Service Now' : 
                      '立即请求服务';
    
    modalBody.innerHTML = `
        <div class="service-detail">
            <div class="service-detail-image">
                <img src="${serviceContent.image}" alt="${serviceContent.title}">
            </div>
            <div class="service-detail-content">
                <h2>${serviceContent.title}</h2>
                <p class="service-description">${serviceContent.description}</p>
                <h3>${currentLanguage === 'ar' ? 'المميزات والخدمات' : 
                      currentLanguage === 'en' ? 'Features and Services' : 
                      '功能和服务'}</h3>
                <ul class="service-features">
                    ${featuresHTML}
                </ul>
                <button class="btn-primary service-request-btn">${buttonText}</button>
            </div>
        </div>
    `;
    
    // Add styles for modal content
    const style = document.createElement('style');
    style.textContent = `
        .service-detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
        }
        
        .service-detail-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 10px;
        }
        
        .service-detail-content h2 {
            color: var(--primary-blue);
            margin-bottom: 1rem;
            font-size: 2rem;
        }
        
        .service-description {
            color: var(--gray);
            margin-bottom: 2rem;
            line-height: 1.8;
        }
        
        .service-detail-content h3 {
            color: var(--dark-gray);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .service-features {
            list-style: none;
            margin-bottom: 2rem;
        }
        
        .service-features li {
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .service-features i {
            color: var(--primary-blue);
            font-size: 0.9rem;
        }
        
        .service-request-btn {
            padding: 12px 30px;
            font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
            .service-detail {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .service-detail-content h2 {
                font-size: 1.5rem;
            }
        }
    `;
    
    if (!document.querySelector('#modal-styles')) {
        style.id = 'modal-styles';
        document.head.appendChild(style);
    }
    
    // Add event listener to request button
    setTimeout(() => {
        const requestBtn = modalBody.querySelector('.service-request-btn');
        if (requestBtn) {
            requestBtn.addEventListener('click', function() {
                window.location.href = 'product-request.html';
            });
        }
    }, 100);
    
    serviceModal.classList.add('show');
}

// Animations
function initializeAnimations() {
    // Animate stats numbers
    const animateStats = () => {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const current = parseInt(stat.textContent);
            const increment = target / 100;
            
            if (current < target) {
                stat.textContent = Math.ceil(current + increment);
                setTimeout(animateStats, 30);
            } else {
                stat.textContent = target;
            }
        });
    };
    
    // Trigger stats animation when in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
    
    // Animate elements on scroll
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });
    
    document.querySelectorAll('.service-card, .feature-item, .stat-item').forEach(el => {
        animateOnScroll.observe(el);
    });
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Show/hide scroll to top button
        if (scrolled > 300) {
            scrollToTop.classList.add('show');
        } else {
            scrollToTop.classList.remove('show');
        }
        
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        
        // Parallax effect for hero image
        const heroImage = document.querySelector('.hero-img-container img');
        if (heroImage) {
            const speed = scrolled * 0.5;
            heroImage.style.transform = `translateY(${speed}px)`;
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Performance optimization
window.addEventListener('load', function() {
    // Remove loading class if exists
    document.body.classList.remove('loading');
    
    // Preload critical images
    const criticalImages = [
        'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
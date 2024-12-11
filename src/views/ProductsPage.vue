<template>
    <div class="products-container">
      <div class="hero">
        <h1>Our Products</h1>
        <p>Transforming businesses with cutting-edge software solutions</p>
      </div>
  
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['filter-btn', { active: selectedCategory === category }]"
          @click="filterProducts(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="products-grid">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="product-card"
          :id = "product.slug"
          :class="{ 'show': product.visible }"
        >
          <div class="product-icon">
            <!-- <img :src="product.icon" :alt="product.name" loading="lazy"> -->
          </div>
          <h3>{{ product.name }}</h3>
          <p class="description">{{ product.description }}</p>
          <div class="features">
            <span v-for="feature in product.features" :key="feature" class="feature-tag">
              {{ feature }}
            </span>
          </div>
          <div class="card-footer">
            <button class="learn-more" @click="showDetails(product)">Learn More</button>
            <h3 style="text-align: center;">Request Demo on:</h3>
            <div class="contact-buttons">
              <button class="gmail-btn" @click="requestDemo(product)">
                <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/mail.svg" alt="Gmail" />
                Mail
              </button>
              <button class="whatsapp-btn" @click="contactWhatsapp(product)">
                <img src="https://ivislabsdocs.s3.ap-south-1.amazonaws.com/whatsapp.svg" alt="WhatsApp" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="modal" v-if="selectedProduct" @click.self="closeModal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <div class="modal-header">
            <!-- <img :src="selectedProduct.icon" :alt="selectedProduct.name"> -->
            <h2>{{ selectedProduct.name }}</h2>
          </div>
          <div class="modal-body">
            <p>{{ selectedProduct.fullDescription }}</p>
            <h3>Key Features</h3>
            <ul>
              <li v-for="feature in selectedProduct.detailedFeatures" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsPage',
    metaInfo: {
    title: 'IVIS LABS - AI & Computer Vision Solutions',
    meta: [
      { 
        name: 'description', 
        content: 'Leading AI solutions provider specializing in Computer Vision, AR/VR, Healthcare AI, and Enterprise Software Development. Transform your business with intelligent solutions.' 
      },
      { 
        name: 'keywords', 
        content: 'AI solutions, Computer Vision, Artificial Intelligence, AR/VR, Healthcare AI, Enterprise Software, Machine Learning' 
      },
      // Open Graph / Social Media
      { 
        property: 'og:title', 
        content: 'IVIS LABS - Intelligent Vision Solutions' 
      },
      { 
        property: 'og:description', 
        content: 'Transform your business with cutting-edge AI and Computer Vision solutions' 
      },
      { 
        property: 'og:image', 
        content: '' // Replace with your actual logo URL
      }
    ]
  },
    data() {
      return {
        selectedCategory: 'All',
        selectedProduct: null,
        categories: ['All', 'AI Solutions', 'Mobile'],
        products: [
          {
            id: 1,
            name: 'AI Based Attendance Management System',
            slug: 'attendance-management-system',
            description: 'Enterprise-grade facial recognition system using Computer Vision for automated attendance tracking. Ideal for educational institutions and corporate environments.',
            fullDescription: 'State-of-the-art attendance management solution powered by advanced facial recognition AI. Features real-time processing, multi-face detection, and seamless integration with existing systems. Perfect for schools, colleges, and corporate offices seeking automated attendance solutions.',
            category: 'AI Solutions',
            icon: require('@/assets/AMS.png'),
            features: ['Real-time Processing'],
            detailedFeatures: [
              'Real-time detection and tracking',
              'Integration with existing security systems',
              'Advanced analytics dashboard'
            ],
            visible: true
          },
          {
            id: 2,
            name: 'Annotation Assessment System',
            slug:'annotation-assessment-system',
            description: 'AI-powered platform for evaluating data annotation quality, talent assessment, optimizing workflows, ensuring dataset integrity, and enhancing efficiency in machine learning projects.',
            fullDescription: "Advanced annotation quality assessment platform designed for AI/ML teams. Our system evaluates annotation accuracy, consistency, and efficiency through intelligent metrics and real-world tasks. Perfect for companies building machine learning datasets and hiring annotation specialists.",
            category: 'AI Solutions',
            // icon: require('../assets/AMS.png'),
            features: ['Scalabe', 'Effiecient', 'Intuitive'],
            detailedFeatures: [
              'Precise annotation Assessment',
              'Typing Speed Test',
            ],
            visible: true
          },
          {
            id: 3,
            name: 'Prati',
            slug:'prati',
            description: "A scalable framework combining AI-powered document processing Structured data verification protocols Phased migration approach Custom integration pipelines",
            fullDescription: "A hybrid approach making ERP adoption feasible for traditional businesses by removing the primary barrier - historical data migration. This opens up a vast hashtag#market segment that has traditionally been resistant to digital transformation.",
            category: 'AI Solutions',
            // icon: require('@/assets/AMS.png'),
            features: [],
            detailedFeatures: [
              
            ],
            visible: true
          },
          {
            id: 4,
            name: 'VIA - Intelligent Medicine Reminder',
            description: 'Smart healthcare companion app with AI-powered medicine reminders',
            slug:'via-medicene-reminder',
            fullDescription: 'An intelligent medicene reminder application ',
            category: 'Mobile',
            // icon: require('@/assets/AMS.png'),
            features: ['Lightweight', 'User-Friendly', 'Minimalistic', 'Real-time Alerts'],
            detailedFeatures: [
              'Seamless, Precise and Timely Medicene Reminders',
            ],
            visible: true
          },
          // Add more products here
        ]
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => 
          this.selectedCategory === 'All' || product.category === this.selectedCategory
        )
      }
    },
    methods: {
      filterProducts(category) {
        this.selectedCategory = category
      },
      showDetails(product) {
        this.selectedProduct = product
      },
      closeModal() {
        this.selectedProduct = null
      },
      requestDemo(product) {
        const email = 'contact@ivislabs.com';
        const subject = `Demo Request: ${product.name}`;
        const body = `
            Hi IVIS Labs team,

            I am interested in getting a demo of ${product.name}.

            Product Details:
            - Product: ${product.name}
            - Category: ${product.category}

            Thank you.`;

        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
      },
      contactWhatsapp(product) {
        const phoneNumber = '+916364411444';
        const message = `Hi IVIS Labs, \nI'm interested in getting a demo of ${product.name}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }
    }
  }
  </script>
  
  <style scoped>
  .products-container {
    padding: 2rem;
    background: var(--primary-color);
    min-height: 100vh;
  }

  h3{
    text-align: center
  }
  
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: var(--bg1);
    color: white;
    border-radius: 15px;
    margin-bottom: 2rem;
  }
  
  .hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: fadeInUp 0.8s ease-out;
  }
  
  .hero p {
    font-size: 1.2rem;
    opacity: 0.9;
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }
  
  .filters {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  
  .filter-btn {
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 25px;
    background: var(--secondary-color);
    color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .filter-btn.active {
    background: var(--bg1);
    color: white;
    transform: scale(1.05);
  }
  
  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
  
  .product-card {
    background-color: var(--card-bg);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-out forwards;
  }
  
  .product-card:hover {
    transform: translateY(-50px);
    box-shadow: 0 10px 20px var(--shadow);
  }
  
  .product-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
  }
  
  .product-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .features {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
  }
  
  .feature-tag {
    background: #5f7991;
    color: #1565c0;
    padding: 0.4rem 0.8rem;
    border-radius: 15px;
    font-size: 0.9rem;
    color: white;
  }
  
  .card-footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .contact-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .learn-more, .gmail-btn, .whatsapp-btn {
    flex: 1;
    padding: 0.8rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .learn-more {
    background: #5f7991;
    color: #ffffff;
  }
  
  .gmail-btn, .whatsapp-btn {
    font-size: 1rem;
  }
  
  .gmail-btn img, .whatsapp-btn img {
    width: 20px;
    height: 20px;
  }
  
  .gmail-btn:hover, .whatsapp-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-header img{
    width: 100%;
    height: 300px;
  }

  .close{
    cursor: pointer;
    font-size: 3rem;
    float: right;
  }
  
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .tech-stack {
    margin-top: 2rem;
  }
  
  .tech-icons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  
  .tech-icons img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .hero h1 {
      font-size: 2.5rem;
    }
  
    .products-grid {
      grid-template-columns: 1fr;
    }
  
    .modal-content {
      width: 95%;
      padding: 1rem;
    }
  
    .contact-buttons {
      flex-direction: column;
    }
  }
  </style>
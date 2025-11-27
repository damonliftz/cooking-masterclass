<template>
  <header class="app-header">
    <div class="container">
      <div class="logo-section">
        <h1 class="logo" @click="goHome">Cooking Masterclass</h1>
      </div>
      
      <nav class="navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/catalogue" class="nav-link">Courses</router-link>
      </nav>
      
      <div class="wishlist-indicator">
        <span class="heart">❤️</span>
        <span class="count">{{ wishlistCount }}</span>
        <span class="label">Saved Classes</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    wishlistCount: {
      type: Number,
      required: true,
      default: 0
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.navigation {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255,255,255,0.2);
}

.wishlist-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.2);
  padding: 10px 20px;
  border-radius: 25px;
  transition: transform 0.3s ease;
}

.wishlist-indicator:hover {
  transform: scale(1.05);
}

.heart {
  font-size: 1.2rem;
}

.count {
  background: white;
  color: #e74c3c;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.label {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 15px;
  }
  
  .logo {
    font-size: 1.5rem;
  }
  
  .navigation {
    gap: 15px;
  }
  
  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
  
  .wishlist-indicator {
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .navigation {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>
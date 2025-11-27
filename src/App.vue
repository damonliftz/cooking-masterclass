<template>
  <div id="app">
    <Header :wishlistCount="wishlistCount" />
    <router-view 
      :courses="courses"
      @wishlist-update="toggleWishlist"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      wishlistCount: 0,
      courses: [
        {
          id: 1,
          title: 'Italian Pasta Masterclass',
          chef: 'Chef Marco',
          price: 89.99,
          level: 'Intermediate',
          available: true,
          image: '/images/pasta.jpg',
          saved: false
        },
        {
          id: 2,
          title: 'French Pastry Fundamentals',
          chef: 'Chef Sophie',
          price: 120.50,
          level: 'Beginner',
          available: false,
          image: '/images/pastry.jpg',
          saved: false
        },
        {
          id: 3,
          title: 'Japanese Sushi Art',
          chef: 'Chef Kenji',
          price: 150.00,
          level: 'Advanced',
          available: true,
          image: '/images/sushi.jpg',
          saved: false
        },
        {
          id: 4,
          title: 'Modern Vegan Cooking',
          chef: 'Chef Lisa',
          price: 75.00,
          level: 'Beginner',
          available: true,
          image: '/images/vegan.jpg',
          saved: false
        }
      ]
    }
  },
  methods: {
    toggleWishlist(courseId) {
      const course = this.courses.find(c => c.id === courseId)
      if (course) {
        course.saved = !course.saved
        this.wishlistCount += course.saved ? 1 : -1
      }
    }
  },
  mounted() {
    // Initialize wishlist count from saved courses
    this.wishlistCount = this.courses.filter(course => course.saved).length
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #f8f9fa;
  color: #333;
}

#app {
  min-height: 100vh;
}
</style>
<template>
  <div class="catalogue">
    <div class="filters">
      <button 
        @click="filter = 'all'"
        :class="{ active: filter === 'all' }"
      >
        All Courses
      </button>
      <button 
        @click="filter = 'available'"
        :class="{ active: filter === 'available' }"
      >
        Available Only
      </button>
    </div>
    
    <div class="courses-grid">
      <CourseCard
        v-for="course in filteredCourses"
        :key="course.id"
        :course="course"
        @save-course="toggleWishlist"
      />
    </div>
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard.vue'

export default {
  name: 'CatalogueView',
  components: {
    CourseCard
  },
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    filteredCourses() {
      if (this.filter === 'available') {
        return this.courses.filter(course => course.available)
      }
      return this.courses
    }
  },
  methods: {
    toggleWishlist(courseId) {
      this.$emit('wishlist-update', courseId)
    }
  }
}
</script>

<style scoped>
.catalogue {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.filters {
  margin-bottom: 30px;
  text-align: center;
}

.filters button {
  padding: 10px 20px;
  margin: 0 10px;
  border: 2px solid #e74c3c;
  background: white;
  color: #e74c3c;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filters button.active,
.filters button:hover {
  background: #e74c3c;
  color: white;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px 0;
}

@media (max-width: 768px) {
  .courses-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .filters button {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
}
</style>
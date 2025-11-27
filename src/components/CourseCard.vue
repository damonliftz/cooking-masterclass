<template>
  <div class="course-card" :class="{ 'sold-out': !course.available }">
    <div class="card-image">
      <img :src="course.image" :alt="course.title" />
      <div v-if="!course.available" class="sold-out-badge">Sold Out</div>
      <button 
        class="save-btn" 
        @click="toggleSave"
        :class="{ saved: course.saved }"
        :disabled="!course.available"
      >
        {{ course.saved ? '❤️ Saved' : '🤍 Save' }}
      </button>
    </div>
    
    <div class="card-content">
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="chef-name">By {{ course.chef }}</p>
      
      <div class="course-details">
        <span class="level" :class="course.level.toLowerCase()">
          {{ course.level }}
        </span>
        <span class="price">{{ formatPrice(course.price) }}</span>
      </div>
      
      <div class="availability" :class="{ available: course.available }">
        {{ course.available ? 'Available' : 'Fully Booked' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleSave() {
      if (this.course.available) {
        this.$emit('save-course', this.course.id)
      }
    },
    formatPrice(price) {
      // Stretch goal: Currency formatting
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    }
  }
}
</script>

<style scoped>
.course-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.course-card.sold-out {
  opacity: 0.7;
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.course-card:hover .card-image img {
  transform: scale(1.1);
}

.sold-out-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #e74c3c;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.save-btn {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(255,255,255,0.9);
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.save-btn:hover:not(:disabled) {
  background: white;
  transform: scale(1.1);
}

.save-btn.saved {
  background: #e74c3c;
  color: white;
}

.save-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.card-content {
  padding: 20px;
}

.course-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.chef-name {
  color: #7f8c8d;
  margin-bottom: 15px;
  font-style: italic;
}

.course-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.level {
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.level.beginner {
  background: #d4edda;
  color: #155724;
}

.level.intermediate {
  background: #fff3cd;
  color: #856404;
}

.level.advanced {
  background: #f8d7da;
  color: #721c24;
}

.price {
  font-size: 1.4rem;
  font-weight: bold;
  color: #e74c3c;
}

.availability {
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  background: #f8d7da;
  color: #721c24;
}

.availability.available {
  background: #d4edda;
  color: #155724;
}
</style>

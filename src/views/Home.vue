<script setup>
import { useQuery } from "@vue/apollo-composable";
import { computed, watch } from "vue";
import { GET_WEATHER } from "../graphql/queries";
import "./home.css";

const { result, loading, error } = useQuery(GET_WEATHER, {});

watch(result, (newResult) => {
  if (newResult) {
    console.log("✅ Weather data:", newResult.getWeather);
  }
});

watch(error, (err) => {
  if (err) {
    console.error("❌ GraphQL Error:", err);
  }
});

// Dynamically map hourly data
const fullForecast = computed(() => {
  return result.value?.getWeather?.[0]?.hourly || [];
});

const firstHalf = computed(() =>
  fullForecast.value.slice(0, Math.ceil(fullForecast.value.length / 2))
);
const secondHalf = computed(() =>
  fullForecast.value.slice(Math.ceil(fullForecast.value.length / 2))
);
</script>

<template>
  <div class="app-container">
    <div class="background-img"></div>

    <div class="main-content">
      <div class="weather-card" v-if="result && result.getWeather[0]">
        <div class="weather-main">
          <div class="weather-top-row">
            <p class="today-label">
              Today <span class="dropdown-icon">▾</span>
            </p>
          </div>
          <div class="temp-row">
            <div class="weather-icon">
              <span :role="`img`" class="weather-icon">
                <img
                  :src="`https://openweathermap.org/img/wn/${result.getWeather[0].icon}@2x.png`"
                  alt="Weather Icon"
                />
              </span>
            </div>
            <div class="temperature">
              {{ result.getWeather[0].temperature }}°
            </div>
          </div>
          <div class="description">
            {{ result.getWeather[0].description }}
          </div>
          <div class="location">
            {{ result.getWeather[0].city }}
          </div>
          <div class="date">Date: {{ result.getWeather[0].date || "N/A" }}</div>
          <div class="extra-info">
            Feels like: {{ result.getWeather[0].feels_like || "N/A" }}° |
            Sunset: {{ result.getWeather[0].sunset || "N/A" }}
          </div>
        </div>
      </div>

      <div class="right-side">
        <!-- Forecast Section -->
        <div v-if="fullForecast.length" class="forecast-bar glass two-rows">
          <div class="forecast-row">
            <div
              v-for="(hour, index) in firstHalf"
              :key="'row1-' + index"
              class="forecast-item"
            >
              <p class="forecast-time">{{ hour.time }}</p>
              <div class="forecast-temp-icon">
                <img
                  :src="`https://openweathermap.org/img/wn/${hour.icon}@2x.png`"
                  alt="Icon"
                  class="forecast-icon-img"
                />
                <span class="forecast-temp">{{ hour.temp }}°</span>
              </div>
            </div>
          </div>
          <div class="forecast-row">
            <div
              v-for="(hour, index) in secondHalf"
              :key="'row2-' + index"
              class="forecast-item"
            >
              <p class="forecast-time">{{ hour.time }}</p>
              <div class="forecast-temp-icon">
                <img
                  :src="`https://openweathermap.org/img/wn/${hour.icon}@2x.png`"
                  alt="Icon"
                  class="forecast-icon-img"
                />
                <span class="forecast-temp">{{ hour.temp }}°</span>
              </div>
            </div>
          </div>
        </div>

        <!-- No Forecast Data -->
        <div v-else class="no-data">
          <p>No forecast data found.</p>
        </div>

        <!-- Placeholder Text Block -->
        <div class="side-text">
          <h3>Random Text</h3>
          <p>
            Improve him believe opinion offered met and end cheered forbade.
            Friendly as stronger speedily by recurred. Son interest wandered sir
            addition end say. Manners beloved affixed picture men ask.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
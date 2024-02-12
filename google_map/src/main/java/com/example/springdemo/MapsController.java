package com.example.springdemo;

import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.model.GeocodingResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MapsController {

    @Value("${google.maps.apikey}")
    private String googleMapsApiKey;

    @GetMapping("/geocode")
    public String getGeocode(@RequestParam String address) {
        GeoApiContext context = new GeoApiContext.Builder()
                .apiKey(googleMapsApiKey)
                .build();

        try {
            GeocodingResult[] results = GeocodingApi.geocode(context, address).await();

            if (results != null && results.length > 0) {
                // 여기에서 결과를 원하는 형태로 가공하여 반환
                return "Latitude: " + results[0].geometry.location.lat + ", Longitude: " + results[0].geometry.location.lng;
            } else {
                return "No results found";
            }
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }
}

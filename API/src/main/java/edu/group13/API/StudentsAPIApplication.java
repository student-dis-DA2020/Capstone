package edu.group13.API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class StudentsAPIApplication {

    public static void main(String[] args) {
        SpringApplication.run(StudentsAPIApplication.class, args);
    }

    //TODO: Update allowedOrigins with the url of our clients to secure from CORS related attacks
    //The addresses of the host we are allowing to access the API should be added to "allowedOrigins".
    //The wildcard means that any client on the web can access our API.
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/all").allowedOrigins("*");
                registry.addMapping("/line").allowedOrigins("*");
            }
        };
    }

}

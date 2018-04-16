package com.foodjournal.api;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class FoodGroupController implements ErrorController {
	private static final String PATH = "/error";
	@Value("${apiKey}")
	private String apikey; 
	RestTemplate restTemplate = new RestTemplate(); 
	
	@CrossOrigin
	@RequestMapping(value="/foodgroup", method=RequestMethod.GET, 
			produces="application/json")
	public String getFoodGroups() throws Exception {
		String url = "https://api.nal.usda.gov/ndb/list?format=json&lt=g&sort=n&api_key=" + apikey; 
		URI uri = new URI(url); 
		
		ResponseEntity<String> response = 
				restTemplate.getForEntity(uri, String.class);
		System.out.println("FOOD GROUP WHAT IT DO");
		return response.getBody();
		
	}
	
	@RequestMapping(value = PATH)
	public String error() { 
		return getErrorPath();
	}
	
	@Override
	public String getErrorPath() {
		return PATH; 
	}

}

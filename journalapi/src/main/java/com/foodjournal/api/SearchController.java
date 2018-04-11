package com.foodjournal.api;

import java.net.URI;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate; 

@RestController
public class SearchController implements ErrorController {

	private static final String PATH = "/error";  
	RestTemplate restTemplate = new RestTemplate();
	
	
	@RequestMapping(value="/search", method=RequestMethod.GET, 
			produces="application/json")
	public String greeting(@RequestParam(value="key", 
			defaultValue="World") String key) throws Exception {
		
		String url = "https://api.nal.usda.gov/ndb/search/?format=json&"
				+ "q=apple&sort=n&max=25&offset=0&api_key=" + key; 
		URI uri = new URI(url); 
		
		
		ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
		
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

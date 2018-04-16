package com.foodjournal.api;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate; 

@RestController
public class SearchController  {

	RestTemplate restTemplate = new RestTemplate();
	@Value("${apiKey}")
	private String apikey;
	
	@CrossOrigin
	@RequestMapping(value="/search", method=RequestMethod.GET, produces="application/json")
	public String greeting(@RequestParam(value="item", 
			defaultValue="World") String item) throws Exception {
		
		String url = "https://api.nal.usda.gov/ndb/search/?format=json&"
				+ "q="+ item + "&sort=n&max=25&offset=0&api_key=" + apikey;  
		URI uri = new URI(url); 
		
		
		ResponseEntity<String> response = 
				restTemplate.getForEntity(uri, String.class);
	
		return response.getBody(); 
	}
	
}

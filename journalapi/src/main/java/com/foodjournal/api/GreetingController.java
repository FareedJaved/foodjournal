package com.foodjournal.api;

import java.net.URI;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GreetingController {

	private final AtomicLong counter = new AtomicLong(); 
	RestTemplate restTemplate = new RestTemplate();
	
	@RequestMapping(value="/greeting", method=RequestMethod.GET)
	public Greeting greeting(@RequestParam(value="name", 
			defaultValue="World") String name) throws Exception {
		
		// Not Sure Where To Put This Code 
		URI uri = new URI("https://api.nal.usda.gov/ndb/search/?format=json&q=butter&sort=n&max=25&offset=0&api_key=DEMO_KEY"); 
		
		ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);
		
		return new Greeting(counter.incrementAndGet(), 
				response.getBody()); 
	}
}

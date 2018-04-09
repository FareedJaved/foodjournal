package com.foodjournal.api;

// This class is a domain object model 

public class Greeting {

	private final long id; 
	private final String content; 
	
	public Greeting(Long id, String content) {
		this.id = id; 
		this.content = content; 
	}
	
	public long getId() {
		return id; 
	}
	
	public String getContent() {
		return content; 
	}
}

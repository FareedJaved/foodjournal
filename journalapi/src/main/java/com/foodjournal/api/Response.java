package com.foodjournal.api;

// This class is a domain object model 
// Currently not useful :) 

public class Response {

	private final long id; 
	private final String content; 
	
	public Response(Long id, String content) {
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

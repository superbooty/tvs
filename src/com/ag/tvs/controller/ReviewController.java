package com.ag.tvs.controller;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.type.TypeFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ag.tvs.data.ProductDataManager;
import com.ag.tvs.data.Review;
import com.ag.tvs.data.SimpleProduct;

@Controller
@RequestMapping("/")
public class ReviewController {

	private static List<Review> reviews = new ArrayList<Review>();
	private static final Logger LOGGER = Logger
			.getLogger(ReviewController.class);

	static {

		URL url = ReviewController.class.getResource("../reviews.json");
		ObjectMapper mapper = ProductDataManager.getObjectMapper();

		File jsonFile = new File(url.getPath());
		try {
			reviews = mapper.readValue(jsonFile, TypeFactory.defaultInstance()
					.constructCollectionType(List.class, Review.class));
			LOGGER.info("Reviews:" + reviews);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@RequestMapping(value = "/reviews", method = RequestMethod.GET)
	public String getReviews(Model theModel) {
		 Review retVal = null;

		LOGGER.info("Loading all Reviews");
		ObjectMapper mapper = ProductDataManager.getObjectMapper();
		String reviews = null;
		try {
			theModel.addAttribute("data", mapper.writeValueAsString(reviews));
			theModel.addAttribute("reviews", reviews);
		} catch (JsonGenerationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "reviews-test";
	}
	
	@RequestMapping(value = "/api/reviews", method = RequestMethod.GET)
	public @ResponseBody List<Review> getProducts() {
		return ReviewController.reviews;
	}
	
	@RequestMapping(value = "/reviews-container/{rating}", method = RequestMethod.GET)
	public String getReviewsContainer(@PathVariable("rating") int rating, Model theModel) {
		List<Review> filtered = new ArrayList<Review>();
		for (Review review: reviews) {
			if (review.getRating() >= rating) {
				filtered.add(review);
			}
		}
		theModel.addAttribute("reviews", filtered);
		return "reviews-container";
	}

}
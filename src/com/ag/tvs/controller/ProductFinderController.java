package com.ag.tvs.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ag.tvs.data.ProductDataManager;
import com.ag.tvs.data.SimpleProduct;

@Controller
@RequestMapping("/")
public class ProductFinderController {
	

	private static List<SimpleProduct> products = new ArrayList<SimpleProduct>();
	private static final Logger LOGGER = Logger
			.getLogger(ProductFinderController.class);

	static {

		products = ProductDataManager.getAllProducts();

		// URL url =
		// ProductFinderController.class.getResource("../products.json");
		// ObjectMapper mapper = ProductFinderController.getObjectMapper();
		//
		//
		// File jsonFile = new File(url.getPath());
		// try {
		// products = mapper.readValue(
		// jsonFile,
		// TypeFactory.defaultInstance().constructCollectionType(
		// List.class, SimpleProduct.class));
		// LOGGER.info("Products:" + products);
		// } catch (JsonParseException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// } catch (JsonMappingException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// } catch (IOException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// }

	}

	@RequestMapping(value = "/api/product/{id}", method = RequestMethod.GET)
	public @ResponseBody SimpleProduct getProductById(
			@PathVariable("id") int id) {
		SimpleProduct retVal = null;
		retVal = ProductDataManager.getProductById(id);
		LOGGER.info("Returning: " + retVal);
		return retVal;
	}

	@RequestMapping(value = "/api/products", method = RequestMethod.GET)
	public @ResponseBody List<SimpleProduct> getProducts() {
		return ProductFinderController.products;
	}

	@RequestMapping(value = "/maintest/{id}", method = RequestMethod.GET)
	public String getProductByIdV2(@PathVariable("id") long id, Model theModel) {
		SimpleProduct retVal = null;
		for (SimpleProduct product : products) {
			if (product.getId() == id) {
				retVal = product;
				System.out.println("V2 Product: " + retVal);
				break;
			}
		}
		LOGGER.info("Loading all products");
		ObjectMapper mapper = ProductDataManager.getObjectMapper();

		try {
			theModel.addAttribute("data", mapper.writeValueAsString(products));
			theModel.addAttribute("products", products);
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
		return "maintest";
	}
	

}